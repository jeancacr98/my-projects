const express = require("express");
const router = express.Router();
const sql = require('mssql');
var configSQL = require("../connection/config");

router.get("/", (req, res) => {
  res.send("Employee Management")
});

router.get('/all-employees', async (req, res) => {
  try {
    const pool = await sql.connect(configSQL);
    const result = await sql.query('EXEC dbo.all_employees');
    res.json(result.recordset);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Employees could not be loaded' });
  }
});

module.exports = router;