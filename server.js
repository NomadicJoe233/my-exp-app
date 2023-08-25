const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

const users = [
    {
        username: "Akshay",
        title: "Post 1"
    },
    {
        username: "Sriv",
        title: "Post 2"
    }
];

app.get("/users", (req,res) => {
    res.json(users);
});

app.post('/users', (req,res) => {
    //Auth user
    const user = { name: req.body.name, password: req.body.password };
    users.push(user);
    // res.status(201).send(users);
    console.log( );
    var a = 3;
    const myPromise = new Promise((resolve,reject) => {
        if(a==2){
            resolve("Success");
        } else{
            reject("Failed");
        }
    })

    myPromise.then((message) => {
        res.send(message);
    }).catch((message) => {
        res.send(message);
    })
});

app.listen(3000, () => {
    console.log("Started at 3000");
    console.log(users);
});