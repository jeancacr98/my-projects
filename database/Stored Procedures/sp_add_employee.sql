use employee_crud;

CREATE PROCEDURE dbo.insert_employee
    @dni_param VARCHAR(20),
    @name_param VARCHAR(150),
    @email_param VARCHAR(100),
    @birth_date_param DATE,
	@marital_status_id_param INT,
	@position_id_param INT
AS  

	INSERT INTO [dbo].[employee]
			   ([dni]
			   ,[name]
			   ,[email]
			   ,[birth_date]
			   ,[marital_status_id]
			   ,[position_id])
		 VALUES
			   (@dni_param
			   ,@name_param
			   ,@email_param
			   ,@birth_date_param
			   ,@marital_status_id_param
			   ,@position_id_param);