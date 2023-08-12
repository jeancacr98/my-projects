const  operations = require('../connection/operations');
const express = require("express");
const router = express.Router();
var  employee = require('../models/employee');

router.get("/", (req, res) => {
  res.send("Employee Management")
});

router.get('/all-employees', async (req, res) => {
  operations.getEmployees().then((data) => {
    res.json(data);
  })
});

router.get('/get-employee/:id', async (req, res) => {
  operations.getEmployeeById(req.params.id).then((data) => {
    res.json(data);
  })
});

router.post('/add-employee', async (req, res) => {
  employee = { ...req.body }
  operations.addEmployee(employee).then(data  => {
    res.status(201).json(data);
  })
});

router.put('/update-employee', async (req, res) => {
  employee = { ...req.body }
  operations.updateEmployee(employee).then(data  => {
    res.status(201).json(data);
  })
});

router.delete('/delete-employee/:id', async (req, res) => {
  operations.deleteEmployee(req.params.id).then((data) => {
    res.status(202).json(data);
  })
});

module.exports = router;