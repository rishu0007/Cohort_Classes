// creating an http server
// expres
// node default library => no

/*

const express = require("express");
const app = express();

const calculateSum = (n) => {
    let ans = 0;
    for(let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}

// we will pass localhost:3000/?n=30

app.get("/", (req, res) => {
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send(ans.toString());
})

// app.get("/", (req,res) => {
//     res.send("Hii there");
// })

app.listen(3000);

*/


const express = require("express");
const app = express();

let users = [{
    name: "John",
    kidneys : [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/", (req,res) => {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = users[0].kidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i < johnKidneys.length; i++) {
        if(johnKidneys[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})



app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "done"
    })
})

app.put("/", (req,res) => {
    for(let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
})


// removing all the unhealthy kidneys
app.delete("/", (req,res) => {
    if(isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = [];
        for(let i  = 0; i < users[0].kidneys.length; i++) {
            if(users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg: "done"
        })
    } else {
        res.status(411).json({
            msg: "You have no bad kidneys"
        });
    }
    

})

function isThereAtleastOneUnhealthyKidney() {
    // we should return a 411
    // only if atleast one unhealthy kidney is there do this, else return 411
    let atleastOneUnhealthyKidney = false;
    for(let i = 0; i < users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(3000);









/*

const express = require("express");

const app = express();

app.get("/files/:name", (req, res) => {
    const query = req.params.name;
    console.log(query);
    res.json({});
})

app.listen(3000);

*/