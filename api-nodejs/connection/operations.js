const sql = require('mssql');
var config = require("./config");

async  function getEmployees() {
    try {
        const pool = await sql.connect(config);
        const employees = await pool.request().execute('dbo.all_employees');
        return employees.recordset;
      } catch (error) {
        console.error('Error:', error);
      }
  }

  async  function getEmployeeById(employeeId) {
    try {
      let  pool = await  sql.connect(config);
      let  employee = await  pool.request()
      .input('employee_id_param', sql.Int, employeeId)
      .execute("dbo.get_employee");
      return  employee.recordsets;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async  function addEmployee(employee) {
    try {
      let  pool = await  sql.connect(config);
      await  pool.request()
      .input('dni_param', sql.VarChar, employee.dni)
      .input('name_param', sql.VarChar, employee.name)
      .input('email_param', sql.VarChar, employee.email)
      .input('birth_date_param', sql.Date, employee.birth_date)
      .input('marital_status_id_param', sql.Int, employee.marital_status_id)
      .input('position_id_param', sql.Int, employee.position_id)
      .execute('dbo.insert_employee');
      return {message: "Employee was created."};
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async  function updateEmployee(employee) {
    try {
      let  pool = await  sql.connect(config);
      await  pool.request()
      .input('employee_id_param', sql.Int, employee.employee_id)
      .input('dni_param', sql.VarChar, employee.dni)
      .input('name_param', sql.VarChar, employee.name)
      .input('email_param', sql.VarChar, employee.email)
      .input('birth_date_param', sql.Date, employee.birth_date)
      .input('marital_status_id_param', sql.Int, employee.marital_status_id)
      .input('position_id_param', sql.Int, employee.position_id)
      .execute('dbo.update_employee');
      return {message: "Employee was updated."};
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async  function deleteEmployee(employeeId) {
    try {
      let  pool = await  sql.connect(config);
      await  pool.request()
      .input('employee_id_param', sql.Int, employeeId)
      .execute("dbo.delete_employee");
      return {message: "Employee was deleted."};
    } catch (error) {
      console.error('Error:', error);
    }
  }

  module.exports = {
    getEmployees: getEmployees,
    getEmployeeById: getEmployeeById,
    addEmployee: addEmployee,
    updateEmployee: updateEmployee,
    deleteEmployee: deleteEmployee
  }