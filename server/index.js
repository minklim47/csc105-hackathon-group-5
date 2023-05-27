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
app.use(cors({ origin: ["http://localhost:5173","http://localhost:5174","http://localhost:5175"], credentials: true }));

app.get("/", (req, res) => {
    res.send("Hello World!!!");
});

const secretKey = 'NonthakornLovePhing';


const loginRoute = require('./routes/endpoint_login')(connection, secretKey);
const logoutRoute = require('./routes/endpoint_logout')(connection);
const signupRoute = require('./routes/endpoint_signup')(connection);
const alluserRoute = require('./routes/endpoint_user')(connection);
const allstarRoute = require('./routes/endpoint_star')(connection);
const createStarRoute = require('./routes/endpoint_create_star')(connection);
const edituserRoute = require('./routes/endpoint_edit_user')(connection);
// const deletestarRoute = require('./routes/endpoint_delete_star')(connection);
const protectRoute = require('./routes/protected_route')(secretKey);


app.use('/login', loginRoute);
app.use('/logout', logoutRoute);
app.use('/signup', signupRoute);
app.use('/user', alluserRoute);
app.use('/star', allstarRoute);
app.use('/createstar', createStarRoute);
app.use('/edituser', edituserRoute);
// app.use('/delete', deletestarRoute);
app.use('/protect', protectRoute);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
