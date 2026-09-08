const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");
const cors = require("cors");

const app = express();

app.use(cors());


// Login / Token Generate
app.get("/", (req, res) => {

    const token = jwt.sign(
        {
            userId: "saif99",
            role: "student"
        },
        "saif0@123",
        {
            expiresIn: "1d"
        }
    );

    console.log(token);

    res.json({
        message: "Login successful",
        token: token
    });
});


// Protected Route
app.get("/dashboard", auth, (req, res) => {

    console.log(req.user);

    res.json({
        message: "Welcome to dashboard",
        userId: req.user.userId
    });
});


app.listen(3000, () => {
    console.log("Server is running at 3000");
});