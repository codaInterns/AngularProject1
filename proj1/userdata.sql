drop table flights;

create table flights(flights_id int(20),name varchar(50),source varchar(50),destination varchar(50),departure varchar(50),price int);


insert into flights values(1,'indigo','chennai','delhi','04:00:00' , 1200);

insert into flights values(2,'air india','chennai','Mumbai','04:30:00',2300);

insert into flights values(3,'jet airways','delhi','Toronto','03:00:00',12000);

drop table users;
create table users (

    id int(11) primary key  AUTO_INCREMENT,
    email varchar(255) not null,
    password varchar(255) not null
);

drop table hotels;
create table hotels (
    hotel_id int(25)  primary Key AUTO_INCREMENT,
    hotel_name varchar(25),
    hotel_place varchar(25),
    price int(10),
    hotel_description varchar(200),
    hotel_image varchar(200)
);