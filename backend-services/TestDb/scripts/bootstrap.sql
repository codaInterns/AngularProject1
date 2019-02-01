-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema coda
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema coda
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `coda` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
USE `coda` ;

-- -----------------------------------------------------
-- Table `coda`.`accounts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`accounts` (
  `acc_id` INT(11) NOT NULL,
  `acc_bank` VARCHAR(255) NULL DEFAULT NULL,
  `acc_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`acc_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `coda`.`employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`employee` (
  `emp_id` INT(11) NOT NULL,
  `emp_name` VARCHAR(255) NULL DEFAULT NULL,
  `emp_salary` FLOAT NULL DEFAULT NULL,
  PRIMARY KEY (`emp_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `coda`.`address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`address` (
  `Add_id` INT(11) NOT NULL,
  `add_city` VARCHAR(255) NULL DEFAULT NULL,
  `EMPLOYEE_EID` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Add_id`),
  INDEX `FKE66327D4E0EBDF80` (`EMPLOYEE_EID` ASC) VISIBLE,
  CONSTRAINT `FKE66327D4E0EBDF80`
    FOREIGN KEY (`EMPLOYEE_EID`)
    REFERENCES `coda`.`employee` (`emp_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `coda`.`book`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`book` (
  `b_id` INT(11) NOT NULL,
  `b_name` VARCHAR(255) NULL DEFAULT NULL,
  `b_pass` VARCHAR(255) NULL DEFAULT NULL,
  `b_price` FLOAT NULL DEFAULT NULL,
  PRIMARY KEY (`b_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `coda`.`booking`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`booking` (
  `book_id` BIGINT(20) NOT NULL,
  `departure` VARCHAR(255) NULL DEFAULT NULL,
  `destination` VARCHAR(255) NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `source` VARCHAR(255) NULL DEFAULT NULL,
  `user_id` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`book_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `coda`.`booking_table`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`booking_table` (
  `booking_id` BIGINT(20) NOT NULL,
  `departure` VARCHAR(255) NULL DEFAULT NULL,
  `destination` VARCHAR(255) NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `source` VARCHAR(255) NULL DEFAULT NULL,
  `user_id` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`booking_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `coda`.`sf`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`sf` (
  `sid` INT(11) NOT NULL,
  `shoename` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`sid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `coda`.`bsf`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`bsf` (
  `sid` INT(11) NOT NULL,
  `batashoe` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`sid`),
  INDEX `FK10215CBBE97C8` (`sid` ASC) VISIBLE,
  CONSTRAINT `FK10215CBBE97C8`
    FOREIGN KEY (`sid`)
    REFERENCES `coda`.`sf` (`sid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `coda`.`training`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`training` (
  `train_id` INT(11) NOT NULL,
  `train_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`train_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `coda`.`employee_has_training`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`employee_has_training` (
  `EMPLOYEE_EID` INT(11) NOT NULL,
  `TRAINING_TID` INT(11) NOT NULL,
  PRIMARY KEY (`TRAINING_TID`, `EMPLOYEE_EID`),
  INDEX `FK49141AF08DD16627` (`TRAINING_TID` ASC) VISIBLE,
  INDEX `FK49141AF0E0EBDF80` (`EMPLOYEE_EID` ASC) VISIBLE,
  CONSTRAINT `FK49141AF08DD16627`
    FOREIGN KEY (`TRAINING_TID`)
    REFERENCES `coda`.`training` (`train_id`),
  CONSTRAINT `FK49141AF0E0EBDF80`
    FOREIGN KEY (`EMPLOYEE_EID`)
    REFERENCES `coda`.`employee` (`emp_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `coda`.`flight`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`flight` (
  `f_id` INT(11) NULL DEFAULT NULL,
  `f_name` VARCHAR(30) NULL DEFAULT NULL,
  `Source` VARCHAR(30) NULL DEFAULT NULL,
  `Destination` VARCHAR(30) NULL DEFAULT NULL,
  `cost` INT(11) NULL DEFAULT NULL,
  `time` VARCHAR(10) NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `coda`.`flights`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`flights` (
  `flights_id` INT(20) NULL DEFAULT NULL,
  `name` VARCHAR(50) NULL DEFAULT NULL,
  `source` VARCHAR(50) NULL DEFAULT NULL,
  `destination` VARCHAR(50) NULL DEFAULT NULL,
  `departure` VARCHAR(50) NULL DEFAULT NULL,
  `price` INT(11) NULL DEFAULT NULL,
  `flight_id` BIGINT(20) NOT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `coda`.`hibernate_sequence`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`hibernate_sequence` (
  `next_val` BIGINT(20) NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `coda`.`hibernate_unique_key`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`hibernate_unique_key` (
  `next_hi` INT(11) NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `coda`.`hotels`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`hotels` (
  `hotelId` INT(11) NOT NULL AUTO_INCREMENT,
  `hotelDescription` VARCHAR(100) NULL DEFAULT NULL,
  `hotelImage` VARCHAR(100) NULL DEFAULT NULL,
  `hotelName` VARCHAR(50) NULL DEFAULT NULL,
  `hotelPlace` VARCHAR(50) NULL DEFAULT NULL,
  `hotelPrice` INT(20) NULL DEFAULT NULL,
  PRIMARY KEY (`hotelId`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `coda`.`items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`items` (
  `itemid` INT(11) NULL DEFAULT NULL,
  `name` VARCHAR(20) NULL DEFAULT NULL,
  `price` INT(11) NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `coda`.`lsf`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`lsf` (
  `sid` INT(11) NOT NULL,
  `lakhanishoe` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`sid`),
  INDEX `FK1279FCBBE97C8` (`sid` ASC) VISIBLE,
  CONSTRAINT `FK1279FCBBE97C8`
    FOREIGN KEY (`sid`)
    REFERENCES `coda`.`sf` (`sid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `coda`.`sftable`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`sftable` (
  `sid` INT(11) NOT NULL,
  `factorytype` VARCHAR(255) NOT NULL,
  `shoename` VARCHAR(255) NULL DEFAULT NULL,
  `batashoe` VARCHAR(255) NULL DEFAULT NULL,
  `lakhanishoe` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`sid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `coda`.`tab`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`tab` (
  `tname` VARCHAR(20) NULL DEFAULT NULL,
  `tabtype` VARCHAR(20) NULL DEFAULT NULL,
  `clusterid` VARCHAR(20) NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `coda`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`user` (
  `userId` INT(20) NOT NULL AUTO_INCREMENT,
  `userEmail` VARCHAR(100) NULL DEFAULT NULL,
  `userPassword` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`userId`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `coda`.`userinfo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`userinfo` (
  `uid` INT(40) NULL DEFAULT NULL,
  `city` VARCHAR(20) NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `coda`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`users` (
  `user_id` INT(11) NOT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
