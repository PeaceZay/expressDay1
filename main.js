let express = require("express");
let PORT = 8000;


let app = express();

/**
 * 
 * 
 */

app.get("/hi", function(req, res){
    // logic
    console.log("GET /hi")

    let blob = {};
    blob.message = "Hi";
    blob.time = new Date();

    res.json(blob);
});

/**
 * this endpoint reads the query params "name", and responds back with
 * "hello ${name}, how are you"
 * if no name is available on the query param
 * send back "hello there, how are you?"
 */

app.get("/hello", function (req, res) {
    console.log("GET /hello");
    // pull name from request and save as a variable.
    let q = req.query
    // store param
    let name = q.name
    // variable for greeting.
    let greeting;
    // IF statement for name. What do you want to happen?
    if (name) {
        greeting = `hello ${name}, you good homie?`;
    } else {
        greeting = "Sup pimpin', you good homie?"
    };
    res.send(greeting);
})
app.get("/sup", function (req, res) {
    console.log("GET /sup");

    res.sendStatus(204);

})

app.get("/hey", function (req, res) {
    console.log("GET /hey")
    res.status(400).send("hey is for horses.");

});

app.get("/echo", function (req, res) {
    console.log("GET /echo")
    console.log("query params =", req.query);
    res.json(req.query);
})


// app.use(function (req, res, next){

// })
app.listen(PORT, function () {
    console.log("application started listening on port", PORT);
});


// HOMEWORK!!!!
// Create an express application with a
// GET /hello endpoint
// This endpoint should respond with a customised greeting if the name 
// query param is included
// otherwise it should respond with a generic greeting.