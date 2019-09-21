SELECT name.name as Name, work.name as Work, category.salary as Salary
FROM ((name
INNER JOIN work ON name.id_work = work.id)
INNER JOIN category ON name.id_salary = category.id)