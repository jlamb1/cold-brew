// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// new variables
var put_data = "";
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

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// Access-Control-Header-Origin middleware

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to my api!' });   
});


// Basic update function
// ----------------------------------------------------

function runApi(req, res){

var http = require('https');
var fs = require('fs'); 

  
    // An object of options to indicate where to put to
var put_options = {
    hostname: "api.hubapi.com",
    path: "/hubdb/api/v1/tables/105070/rows/" + setRow + "/cells/" + setCell + "?hapikey=" + hapikey,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(put_data),
      "User-Agent": "Mozilla/5.0"
    }
};

// Set up the request
var put_req = http.request(put_options, function(res) {
    console.log("Status: " + res.statusCode);
    res.on('data', function (chunk) {
        console.log('Response: ' + chunk );
    });
});
            
            put_req.write(put_data);
            put_req.end();
            
}  


// more routes for our API will happen here

// Tap1Yes
// ----------------------------------------------------
router.route('/tap1yes')
 
.post(function(req, res) {

put_data = JSON.stringify({"value":"yes"});

setRow = "4483664102";

setCell = 4;

runApi();
res.json({message: res.statusCode});

getTimestamp = new Date().getTime() - 1.44e+7;

put_data = JSON.stringify({"value": getTimestamp});

setCell = 9;

runApi();
res.json({message: res.statusCode});

});



// Tap1No
// ----------------------------------------------------
router.route('/tap1no')
   
.post(function(req, res) {

put_data = JSON.stringify({"value":"no"});

setRow = "4483664102";

setCell = 4;

runApi();
res.json({message: res.statusCode});

getTimestamp = new Date().getTime() - 1.44e+7;

put_data = JSON.stringify({"value": getTimestamp});

setCell = 9;

runApi();
res.json({message: res.statusCode});
});  
    
// Tap2Yes
// ----------------------------------------------------
router.route('/tap2yes')
   
.post(function(req, res) {

put_data = JSON.stringify({"value":"yes"});

setRow = "5104788209";

setCell = 4;

runApi();
res.json({message: res.statusCode});

getTimestamp = new Date().getTime() - 1.44e+7;

put_data = JSON.stringify({"value": getTimestamp});

setCell = 9;

runApi();
res.json({message: res.statusCode});
}); 

// Tap2No
// ----------------------------------------------------
router.route('/tap2no')
   
.post(function(req, res) {

put_data = JSON.stringify({"value":"no"});

setRow = "5104788209";

setCell = 4;

runApi();
res.json({message: res.statusCode});

getTimestamp = new Date().getTime() - 1.44e+7;

put_data = JSON.stringify({"value": getTimestamp});

setCell = 9;

runApi();
res.json({message: res.statusCode});
});  

// Tap3Yes
// ----------------------------------------------------
router.route('/tap3yes')
   
.post(function(req, res) {

put_data = JSON.stringify({"value":"yes"});

setRow = "5105198498";

setCell = 4;

runApi();
res.json({message: res.statusCode});

getTimestamp = new Date().getTime() - 1.44e+7;

put_data = JSON.stringify({"value": getTimestamp});

setCell = 9;

runApi();
res.json({message: res.statusCode});
});  

// Tap3no
// ----------------------------------------------------
router.route('/tap3no')
   
.post(function(req, res) {

put_data = JSON.stringify({"value":"no"});

setRow = "5105198498";

setCell = 4;

runApi();
res.json({message: res.statusCode});

getTimestamp = new Date().getTime() - 1.44e+7;

put_data = JSON.stringify({"value": getTimestamp});

setCell = 9;

runApi();
res.json({message: res.statusCode});
});

// Tap4yes
// ----------------------------------------------------
router.route('/tap4yes')
   
.post(function(req, res) {

put_data = JSON.stringify({"value":"yes"});

setRow = "5105198728";

setCell = 4;

runApi();
res.json({message: res.statusCode});

getTimestamp = new Date().getTime() - 1.44e+7;

put_data = JSON.stringify({"value": getTimestamp});

setCell = 9;

runApi();
res.json({message: res.statusCode});
});

// Tap4no
// ----------------------------------------------------
router.route('/tap4no')
   
.post(function(req, res) {

put_data = JSON.stringify({"value":"no"});

setRow = "5105198728";

setCell = 4;

runApi();
res.json({message: res.statusCode});

getTimestamp = new Date().getTime() - 1.44e+7;

put_data = JSON.stringify({"value": getTimestamp});

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
