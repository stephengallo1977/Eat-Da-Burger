INSERT INTO burgers (name) VALUES ('Cheesburger');
INSERT INTO burgers (name) VALUES ('Bacon Cheeseburger');
INSERT INTO burgers (name, eaten) VALUES ('Jalapeno Cheeseburger', true);
INSERT INTO burgers (name, eaten) VALUES ('Veggie burger', true);
INSERT INTO burgers (name, eaten) VALUES ('Impossible burger', true);
INSERT INTO burgers (name) VALUES ('Hamburger');

update burgers set devoured = true where id= 1;
delete from burgers where id=8;
select * from burgers;