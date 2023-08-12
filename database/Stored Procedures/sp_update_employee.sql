use employee_crud;

CREATE PROCEDURE dbo.update_employee
    @employee_id_param INT,
	@dni_param VARCHAR(20),
    @name_param VARCHAR(150),
    @email_param VARCHAR(100),
    @birth_date_param DATE,
	@marital_status_id_param INT,
	@position_id_param INT
AS  

	UPDATE [dbo].[employee]
	   SET [dni] = @dni_param
		  ,[name] = @name_param
		  ,[email] = @email_param
		  ,[birth_date] = @birth_date_param
		  ,[marital_status_id] = @marital_status_id_param
		  ,[position_id] = @position_id_param
	 WHERE employee_id = @employee_id_param;
