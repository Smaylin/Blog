CREATE DATABASE Blog;
USE blog;

# -------------tabla Blog--------------------
CREATE TABLE Blog
(
	Id INT AUTO_INCREMENT PRIMARY KEY,
    title varchar(100),
    content varchar(1000)
);

CREATE TABLE Users
(
	Id INT AUTO_INCREMENT PRIMARY KEY,
    email varchar(100),
    passwords varchar(300)
);

-- /* datos iniciales para la tabla Blog*/
insert into Blog(title, content) values('Example','But I must explain to you how all this mistaken idea of denouncing pleasure and praising 
pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, 
the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, 
but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. ');
insert into Users(email, passwords) values('smaylin@gmail.com','12345');

select * from Blog;
select * from Users;
