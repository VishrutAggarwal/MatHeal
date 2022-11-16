const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10; 

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
);

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "arkosios",
    database: "matheal-test"
});

app.post("/patientregister", (req, res) => {
    const name = req.body.name;
    const number = req.body.number;
    const password = req.body.password;
    const email = req.body.email;
    const dob = req.body.dob;
    const blood = req.body.blood;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const emergencyContact = req.body.emergencyContact;
    const profile = req.body.profile;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }

        db.query(
            "INSERT INTO patient (name, number, email, password, dob, blood, profile, address, city, state, emergencyContact) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
            [name, number, email, hash, dob, blood, profile, address, city, state, emergencyContact],
            (err, result) => {
                console.log(err);
            }
        );
    });
});

app.get("/patientlogin", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});

app.post("/patientlogin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM patient WHERE username = ?;",
        name,
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        req.session.user = result;
                        console.log(req.session.user);
                        res.send(result);
                    } else {
                        res.send({ message: "Wrong username/password combination!" });
                    }
                });
            } else {
                res.send({ message: "User doesn't exist" });
            }
        }
    );
});


app.listen(3001, () => {
    console.log("running server");
});