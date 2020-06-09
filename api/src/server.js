const express = require('express');
const cors = require("cors");
const path = require("path");

const app = express();

global.__basedir = __dirname;

var corsOptions = {
    origin: "http://localhost:4200"
    // origin: "https://pidy-app.herokuapp.com"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();

// drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//     initial();
// });

app.get('/', (req, res) => {
    return res.sendFile(path.join(`${__dirname}/app/views/index.html`));
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/image.routes')(app);
require("./app/routes/category.routes")(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "moderator"
    });

    Role.create({
        id: 3,
        name: "admin"
    });

    console.log('Roles created successfully');
}