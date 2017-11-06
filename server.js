// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// global variables
var putData = "";
var setRow = "";
var setCell = "";
var getTimestamp = "";
var hapikey = process.env.HAPI_KEY_HS;




// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// Access-Control-Header-Origin middleware

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://www.does2canhavecoldbrew.com');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'API is running!' });   
});


// Basic update function
// ----------------------------------------------------

function runApi(req, res){

const http = require('http');
var fs = require('fs'); 

  
// An object of options to indicate where to put to
var putOptions = {
    hostname: "api.hubapi.com",
    path: "/hubdb/api/v1/tables/105070/rows/" + setRow + "/cells/" + setCell + "?hapikey=" + hapikey,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(putData),
      "User-Agent": "Mozilla/5.0"
    }
};

// Set up the request
var putReq = http.request(putOptions, function(res) {
    console.log("Status: " + res.statusCode);
    res.on('data', function (chunk) {
        console.log('Response: ' + chunk );
    });
});
            
            putReq.write(putData);
            putReq.end();
            
}  


// more routes for our API will happen here

// Tap1Yes
// ----------------------------------------------------
router.route('/tap1yes')
 
.post(function(req, res) {

putData = JSON.stringify({"value":"yes"});

setRow = "4483664102";

setCell = 4;

runApi();

res.json({message: res.statusCode});

getTimestamp = new Date().getTime() - 10.8e+6;

putData = JSON.stringify({"value": getTimestamp});

setCell = 9;

runApi();

res.json({message: res.statusCode});

});



// Tap1No
// ----------------------------------------------------
router.route('/tap1no')
   
.post(function(req, res) {

putData = JSON.stringify({"value":"no"});

setRow = "4483664102";

setCell = 4;

runApi();

res.json({message: res.statusCode});

getTimestamp = new Date().getTime() - 10.8e+6;

putData = JSON.stringify({"value": getTimestamp});

setCell = 9;

runApi();

res.json({message: res.statusCode});
});  
    
// Tap2Yes
// ----------------------------------------------------
router.route('/tap2yes')
   
.post(function(req, res) {

putData = JSON.stringify({"value":"yes"});

setRow = "5104788209";

setCell = 4;

runApi();

res.json({message: res.statusCode});

getTimestamp = new Date().getTime() - 10.8e+6;

putData = JSON.stringify({"value": getTimestamp});

setCell = 9;

runApi();

res.json({message: res.statusCode});
}); 

// Tap2No
// ----------------------------------------------------
router.route('/tap2no')
   
.post(function(req, res) {

putData = JSON.stringify({"value":"no"});

setRow = "5104788209";

setCell = 4;

runApi();

res.json({message: res.statusCode});

getTimestamp = new Date().getTime() - 10.8e+6;

putData = JSON.stringify({"value": getTimestamp});

setCell = 9;

runApi();

res.json({message: res.statusCode});
});  

// Tap3Yes
// ----------------------------------------------------
router.route('/tap3yes')
   
.post(function(req, res) {

putData = JSON.stringify({"value":"yes"});

setRow = "5105198498";

setCell = 4;

runApi();

res.json({message: res.statusCode});

getTimestamp = new Date().getTime() - 10.8e+6;

putData = JSON.stringify({"value": getTimestamp});

setCell = 9;

runApi();

res.json({message: res.statusCode});
});  

// Tap3no
// ----------------------------------------------------
router.route('/tap3no')
   
.post(function(req, res) {

putData = JSON.stringify({"value":"no"});

setRow = "5105198498";

setCell = 4;

runApi();

res.json({message: res.statusCode});

getTimestamp = new Date().getTime() - 10.8e+6;

putData = JSON.stringify({"value": getTimestamp});

setCell = 9;

runApi();

res.json({message: res.statusCode});
});

// Tap4yes
// ----------------------------------------------------
router.route('/tap4yes')
   
.post(function(req, res) {

putData = JSON.stringify({"value":"yes"});

setRow = "5105198728";

setCell = 4;

runApi();

res.json({message: res.statusCode});

getTimestamp = new Date().getTime() - 10.8e+6;

putData = JSON.stringify({"value": getTimestamp});

setCell = 9;

runApi();

res.json({message: res.statusCode});
});

// Tap4no
// ----------------------------------------------------
router.route('/tap4no')
   
.post(function(req, res) {

putData = JSON.stringify({"value":"no"});

setRow = "5105198728";

setCell = 4;

runApi();

res.json({message: res.statusCode});

getTimestamp = new Date().getTime() - 10.8e+6;

putData = JSON.stringify({"value": getTimestamp});

setCell = 9;

runApi();

res.json({message: res.statusCode});
}); 

// Tap1name
// ----------------------------------------------------
router.route('/tap1name')
   
.post(function(req, res) {

updateName = req.body.name;   

putData = JSON.stringify({"value":updateName});

setRow = "4483664102";

setCell = 2;

runApi();

res.json({message: res.statusCode});

getTimestamp = new Date().getTime() - 10.8e+6;

putData = JSON.stringify({"value": getTimestamp});

setCell = 9;

runApi();

res.json({message: res.statusCode});
}); 

// Tap2name
// ----------------------------------------------------
router.route('/tap2name')
   
.post(function(req, res) {

updateName = req.body.name;     

putData = JSON.stringify({"value":updateName});

setRow = "5104788209";

setCell = 2;

runApi();

res.json({message: res.statusCode});

getTimestamp = new Date().getTime() - 10.8e+6;

putData = JSON.stringify({"value": getTimestamp});

setCell = 9;

runApi();

res.json({message: res.statusCode});
}); 

// Tap3name
// ----------------------------------------------------
router.route('/tap3name')
   
.post(function(req, res) {

updateName = req.body.name;     

putData = JSON.stringify({"value":updateName});

setRow = "5105198498";

setCell = 2;

runApi();

res.json({message: res.statusCode});

getTimestamp = new Date().getTime() - 10.8e+6;

putData = JSON.stringify({"value": getTimestamp});

setCell = 9;

runApi();

res.json({message: res.statusCode});
}); 

// Tap4name
// ----------------------------------------------------
router.route('/tap4name')
   
.post(function(req, res) {

updateName = req.body.name;     

putData = JSON.stringify({"value":updateName});

setRow = "5105198728";

setCell = 2;

runApi();

res.json({message: res.statusCode});

getTimestamp = new Date().getTime() - 10.8e+6;

putData = JSON.stringify({"value": getTimestamp});

setCell = 9;

runApi();

res.json({message: res.statusCode});
}); 




// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server is running on port ' + port);


/* HEROKU CAFFEINE (keep dyno awake)
// ----------------------------------------------------

var http = require("http");
setInterval(function() {
    http.get("https://cold-brew.herokuapp.com/api");
}, 300000); // every 5 minutes (300000)
*/