DROP DATABASE IF EXISTS opentable;

CREATE DATABASE opentable;

USE opentable;

CREATE TABLE reservations (
  id int NOT NULL AUTO_INCREMENT,
  restaurantId int NOT NULL,
  tableNumber int NOT NULL,
  date varchar(50) NOT NULL,
  time int NOT NULL,
  PRIMARY KEY(ID)
);

CREATE TABLE tables (
  id int NOT NULL AUTO_INCREMENT,
  restaurantId int NOT NULL,
  tableNumber int NOT NULL,
  maxOccupancy int NOT NULL,
  PRIMARY KEY(ID)
);

CREATE TABLE restaurants (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(80) NOT NULL,
  PRIMARY KEY(ID)
);



-- mysql -u root < schema.sql
