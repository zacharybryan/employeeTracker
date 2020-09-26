CREATE SCHEMA `tesdf_db` ;

CREATE TABLE `employee_db`.`employees` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(30) NOT NULL,
    `last_name` VARCHAR(30) NOT NULL,
    `role_id` INT NOT NULL,
    `manager_id` INT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `id_UNIQUE` (`id` ASC));

CREATE TABLE `employee_db`.`role` (
  `id` INT NOT NULL,
  `title` VARCHAR(30) NOT NULL,
  `salary` VARCHAR(30) NULL,
  `department_id` INT NULL,
  PRIMARY KEY (`id`));
