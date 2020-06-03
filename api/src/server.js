const express = require('express');
const cors = require("cors");

const path = require("path"); // BORRAR

const app = express();

global.__basedir = __dirname;

var corsOptions = {
    // origin: "http://localhost:4200"
    origin: "https://pidy-app.herokuapp.com"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

console.log('__dirname', __dirname);
console.log('__basedir', __basedir);

// const distDir = __dirname + "/../client/dist/";
// const distDir = path.join(__dirname, '../../client/dist/');
// console.log('dist', distDir);
// app.use(express.static(distDir));

// app.use(express.static('./dist/'));

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();

// drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//     initial();
// });

// app.get('/', (req, res) =>
//     res.sendFile('index.html', {root: 'dist/'}),
// );

app.get('/', (req, res) => {
    console.log('image', path.join(`${__dirname}/app/views/index.html`));
    return res.sendFile(path.join(`${__dirname}/app/views/index.html`));
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/image.routes')(app);
require("./app/routes/categoria.routes")(app);

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