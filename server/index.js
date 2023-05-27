const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require('cors');
const cookieParser = require('cookie-parser');

const connection = mysql.createConnection({
    host: "db.cshack.site",
    port: "3306",
    user: "group05",
    password: "205223224",
    database: "group05",

});

connection.connect((err) => {
    if (!err) {
        console.log("\nDatabase connected\n");
    } else {
        console.error("Error connecting to database", err);
    }
});

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.get("/", (req, res) => {
    res.send("Hello World!!!");
});


// const loginRoute = require('./routes/endpoint_login')(connection);
// const signupRoute = require('./routes/endpoint_signup')(connection);
const alluserRoute = require('./routes/endpoint_all_user')(connection);
const allstarRoute = require('./routes/endpoint_all_star')(connection);
const createStarRoute = require('./routes/endpoint_create_star')(connection);
// const editRoute = require('./routes/endpoint_edit')(connection);
// const deleteRoute = require('./routes/endpoint_delete')(connection);
// const createUserRoute = require('./routes/endpoint_create_user.js')(connection);


// app.use('/login', loginRoute);
// app.use('/signup', signupRoute);
app.use('/alluser', alluserRoute);
app.use('/allstar', allstarRoute);
app.use('/createstar', createStarRoute);
// app.use('/edit', editRoute);
// app.use('/delete', deleteRoute);
// app.use('/createuser', createUserRoute);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
