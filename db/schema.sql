Drop Database if exists burgers_db;
Create Database burgers_db;

Use burgers_db;

create table burgers(
    id integer(11) auto_increment,
    burger_name varchar(55),
    devoured boolean,
    primary key(id)
);