var express = require('express');
var bodyParser = require('body-parser');

// routes
var employeeRoutes = require("./routes/employees");

var app = express();
var port = 3000;

app.use(bodyParser.json());

app.use("/employees", employeeRoutes);

app.listen(port, function(){
	console.log(`Server running in http://localhost:${port}`);
});