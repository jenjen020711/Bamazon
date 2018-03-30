DROP DATABASE IF EXISTS bamazon_db;

CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL (10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Samsung TV", "electronics", 900.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sony DVD", "electronics", 45.00, 29);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("NFL Panthers Clock", "home goods", 25.00, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cuisinart Toaster", "electronics", 50.00, 48);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Keurig Coffeemaker", "home goods", 75.00, 39);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wiggles DVD", "electronics", 5.00, 27);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yankee Candle", "home goods", 10.00, 19);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone Charger", "electronics", 10.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone Case", "electronics", 50.00, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Samsung Microwave", "home goods", 100.00, 21);