class  Employee {

    constructor(employee_id,dni,name,email,birth_date,marital_status_id,position_id){
      this.employee_id = employee_id;
      this.dni = dni;
      this.name = name;
      this.email = email;
      this.birth_date = birth_date;
      this.marital_status_id = marital_status_id;
      this.position_id = position_id;
    }
  }
  
  module.exports = Employee;