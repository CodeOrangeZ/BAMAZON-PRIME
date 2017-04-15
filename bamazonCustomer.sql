CREATE DATABASE `BAMAZON`;

USE `BAMAZON`;

CREATE TABLE  `products`(
	`item_id` INT UNSIGNED AUTO_INCREMENT NOT NULL,
    `product_name` VARCHAR(30) NOT NULL,
    `department_name` VARCHAR(30) NULL,
    `price` DECIMAL(10,4) NOT NULL,
    `stock_quantity` INT null,
    primary key(item_id)
);


INSERT INTO `products` (`product_name`,`department_name`,`price`,`stock_quantity`) VALUES ("Car", "Vehicle", 20000.00, 1);
INSERT INTO `products` (`product_name`,`department_name`,`price`,`stock_quantity`) VALUES ("Motorcycle", "Vehicle", 5000.00, 3);
INSERT INTO `products` (`product_name`,`department_name`,`price`,`stock_quantity`) VALUES ("Ramen",  "Food", .99, 100);
INSERT INTO `products` (`product_name`,`department_name`,`price`,`stock_quantity`) VALUES ("Shake Weight", "Workout Equipment", 19.99, 75);
INSERT INTO `products` (`product_name`,`department_name`,`price`,`stock_quantity`) VALUES ("Taco Bell", "Food", 5.00, 1000);
INSERT INTO `products` (`product_name`,`department_name`,`price`,`stock_quantity`) VALUES ("Kettlebell", "Workout Equipment", 50.00, 250);
INSERT INTO `products` (`product_name`,`department_name`,`price`,`stock_quantity`) VALUES ("Dress", "Clothing", 75.00, 500);
INSERT INTO `products` (`product_name`,`department_name`,`price`,`stock_quantity`) VALUES ("Sweater", "Clothing", 50.00, 300);
INSERT INTO `products` (`product_name`,`department_name`,`price`,`stock_quantity`) VALUES ("BAMAZON Prime Memebership", "Membership", 99.99, 125);
INSERT INTO `products` (`product_name`,`department_name`,`price`,`stock_quantity`) VALUES ("Watermelon", "Food", 5.00, 700);


SELECT * FROM `products`;
