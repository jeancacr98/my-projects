use employee_crud;

CREATE PROCEDURE dbo.all_employees    
AS  
    SELECT [e].[employee_id]
      ,[e].[dni]
      ,[e].[name]
      ,[e].[email]
      ,[e].[birth_date]
	  ,[ms].[description] as [marital_status]
      ,[p].[description] as [position]
  FROM employee as e
  JOIN marital_status as ms
  ON e.marital_status_id = ms.marital_status_id
  JOIN position as p
  ON e.position_id = p.position_id
  WHERE e.is_deleted = 0;