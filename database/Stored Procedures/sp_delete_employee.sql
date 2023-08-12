use employee_crud;

CREATE PROCEDURE dbo.delete_employee
@employee_id_param INT
AS  
    UPDATE [dbo].[employee]
	   SET [is_deleted] = 1
  WHERE employee_id = @employee_id_param;