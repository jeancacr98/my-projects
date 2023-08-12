const express = require('express');
const bodyParser = require('body-parser');
const  cors = require('cors');

// routes
const employeeRoutes = require("./routes/employee_routes");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/employees", employeeRoutes);

app.listen(port, function(){
	console.log(`Server running in http://localhost:${port}/employees`);
});