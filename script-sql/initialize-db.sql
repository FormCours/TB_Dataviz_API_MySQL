CREATE TABLE `ProductCategory` (
	`ProductCategory_Id` INT AUTO_INCREMENT,
    `Name` VARCHAR(50) NOT NULL,
    CONSTRAINT PK_ProductCategory PRIMARY KEY(`ProductCategory_Id`),
    CONSTRAINT UK_ProductCategory__Name UNIQUE(`Name`)
);

CREATE TABLE `Product` (
	`Product_Id` BIGINT AUTO_INCREMENT,
    `Name` VARCHAR(50) NOT NULL,
    `Description` VARCHAR(500),
    `ProductCategory_Id` INT NOT NULL,
    `Price` DECIMAL(7,2) NOT NULL,
    `url_image` VARCHAR(100),
    CONSTRAINT PK_Product PRIMARY KEY(`Product_Id`),
    CONSTRAINT CK_Product__Price CHECK(`Price` > 0),
    CONSTRAINT FK_Product_ProductCategory FOREIGN KEY(`ProductCategory_Id`) REFERENCES `ProductCategory`(`ProductCategory_Id`)
);

INSERT INTO `ProductCategory`(`Name`)
 VALUES ('Fruit/Legume'),
		('Viande'),
        ('Boisson');
