create table user(
    id int primary key AUTO_INCREMENT,
    name varchar(250) NOT NULL,
    email varchar(50) NOT NULL,
    contactNumber varchar(20),
    password varchar(250) NOT NULL,
    status varchar(250) NOT NULL,
    role varchar(20) NOT NULL,
    UNIQUE(email)
);

insert into user(name,contactNumber,email,password,status,role) values ('admin','99154-6743','admin@gmail.com','admin','true','admin');

create table deadline(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(10) NOT NULL,
    primary key (id)
);

create table category(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    primary key (id)
);

insert into category(name) values ('Computadores');
insert into category(name) values ('Consoles');
insert into category(name) values ('Monitores');
insert into category(name) values ('Acessórios');

create table status(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(10) NOT NULL,
    primary key(id)
);
insert into status(name) values ('a contatar');
insert into status(name) values ('contatado');

create table statusProduct(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(10) NOT NULL,
    primary key(id)
);
insert into statusProduct(name) values ('vendido');
insert into statusProduct(name) values ('disponivel');
insert into statusProduct(name) values ('manutenção');

create table product(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    model varchar (100) NOT NULL,
    year varchar (4) NOT NULL,
    brand varchar (100) NOT NULL,
    description varchar(255),
    price Float NOT NULL,
    statusProductId varchar(20),
    categoryId varchar(3),
    primary key(id)
);

create table seller(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    primary key(id)
);

insert into seller(name) values ('Leonardo');
insert into seller(name) values ('Filipe');
insert into seller(name) values ('Fabricio');

create table client(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    contactNumber varchar(20) NOT NULL,
    email varchar (50) NOT NULL,
    city varchar (50) NOT NULL,
    state varchar (50) NOT NULL,
    productId integer NOT NULL,
    sellerId Integer NOT NULL,
    primary key(id)
);

create table bill(
    id int NOT NULL AUTO_INCREMENT,
    uuid varchar(200) NOT NULL,
    name varchar(100) NOT NULL,
    email varchar(100) NOT NULL,
    contactNumber varchar(20) NOT NULL,
    paymentMethod varchar(20) NOT NULL,
    total int NOT NULL,
    productDetails JSON DEFAULT NULL,
    createdBy varchar (100) NOT NULL,
    primary key(id)
);
