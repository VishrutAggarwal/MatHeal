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

app.post("/personnelregister", (req, res) => {
    const name = req.body.name;
    const number = req.body.number;
    const password = req.body.password;
    const email = req.body.email;
    const certificateID = req.body.certificateID;
    const certificate = req.body.certificate;
    const city = req.body.city;
    const state = req.body.state;
    const profile = req.body.profile;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }

        db.query(
            "INSERT INTO personnel (name, number, email, password, certificateID, certificate, profile, city, state) VALUES (?,?,?,?,?,?,?,?,?)",
            [name, number, email, certificateID, certificate, profile, city, state, hash],
            (err, result) => {
                console.log(err);
            }
        );
    });
});

app.get("/personnellogin", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});

app.post("/personnellogin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM personnel WHERE username = ?;",
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