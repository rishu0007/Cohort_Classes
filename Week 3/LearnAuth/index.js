// const express = require("express");
// const jwt = require("jsonwebtoken");
// const jwtPassword = "123456";

// const app = express();

// const ALL_USERS = [
//   {
//     username: "harkirat@gmail.com",
//     password: "123",
//     name: "harkirat singh",
//   },
//   {
//     username: "raman@gmail.com",
//     password: "123321",
//     name: "Raman singh",
//   },
//   {
//     username: "priya@gmail.com",
//     password: "123321",
//     name: "Priya kumari",
//   },
// ];

// function userExists(username, password) {
//   // write logic to return true or false if this user exists
//   // in ALL_USERS array
// }

// app.post("/signin", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, "shhhhh");
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     // return a list of users other than this username
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

// app.listen(3000)

const express = require('express');
const jwt = require("jsonwebtoken");

const jwtPassword = "123456";

const app = express();

app.use(express.json());

const ALL_USERS = [
    {
        username: "rishu@gmail.com",
        password: "123",
        name: "Rishu Kumar"
    },
    {
        username: "priya@gmail.com",
        password: "2345",
        name: "Priya Kumari"
    },
    {
        username: "sagar@gmail.com",
        password: "4567",
        name: "Sagar Raj"
    }
];

const userexist = (username, password) => {
    // writing the logic that returns true or false wheather user exists or not in ALL_USERS array
    let userExist = false;
    ALL_USERS.find((user) => {
        if(user.username === username && user.password === password) {
            userExist = true;
        }
    })
    return userExist;
}

app.post("/signin", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    if(!userexist(username,password)) {
        res.status(403).json({
            msg : "User doesn't exist"
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", (req,res) => {
    const token = req.headers.authorization;
    try {
        const decode = jwt.verify(token, jwtPassword);
        const username = decode.username;
        // return a list of users other than this user
        const rem_Users = ALL_USERS.filter((user) => user.username != username);
        res.json({
            users: rem_Users
        })
    } catch(err) {
        return res.status(403).json({
            msg: "invalid token",
        });
    }
});

app.listen(3000);