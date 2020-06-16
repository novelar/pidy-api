const express = require('express');
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const checkJwt = require("./app/middleware/authJwt");

const app = express();

if (process.env.NODE_ENV !== "production") require("dotenv").config();

app.get('/', (req, res) => {
    return res.sendFile(path.join(`${__dirname}/app/views/index.html`));
});

global.__basedir = __dirname;

var corsOptions = {
    origin: [
        "http://localhost:4200",
        "https://pidy-app.herokuapp.com",
        "http://pidy-app.herokuapp.com"
    ]
};

app.use(checkJwt);

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

const db = require("./app/models");

db.sequelize.sync();

// drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

const dir = './resources/uploads';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {
        recursive: true
    })
}

require('./app/routes/image.routes')(app);
require("./app/routes/category.routes")(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));