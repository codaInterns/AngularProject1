-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema codatrip
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema codatrip
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `codatrip` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema coda
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema coda
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `coda` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
USE `codatrip` ;

-- -----------------------------------------------------
-- Table `codatrip`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `codatrip`.`Users` (
  `User_id` INT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`User_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `codatrip`.`Flights`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `codatrip`.`Flights` (
  `flight_id` INT NOT NULL AUTO_INCREMENT,
  `flight_name` VARCHAR(45) NOT NULL,
  `flight_source` VARCHAR(45) NOT NULL,
  `flight_destination` VARCHAR(45) NOT NULL,
  `flight_departure` VARCHAR(45) NOT NULL,
  `flight_price` INT NOT NULL,
  PRIMARY KEY (`flight_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `codatrip`.`Hotels`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `codatrip`.`Hotels` (
  `hotel_id` INT NOT NULL AUTO_INCREMENT,
  `hotel_name` VARCHAR(45) NOT NULL,
  `hotel_place` VARCHAR(45) NOT NULL,
  `hotel_price` INT NOT NULL,
  `hotel_description` VARCHAR(200) NOT NULL,
  `hotel_image` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`hotel_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `codatrip`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `codatrip`.`Users` (
  `User_id` INT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`User_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `codatrip`.`Flight_booking`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `codatrip`.`Flight_booking` (
  `flight_booking_id` INT NOT NULL AUTO_INCREMENT,
  `flight_id` INT NULL,
  `User_id` INT NULL,
  PRIMARY KEY (`flight_booking_id`),
  INDEX `User_id_idx` (`User_id` ASC) VISIBLE,
  INDEX `flight_id_idx` (`flight_id` ASC) VISIBLE,
  CONSTRAINT `User_id`
    FOREIGN KEY (`User_id`)
    REFERENCES `codatrip`.`Users` (`User_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `flight_id`
    FOREIGN KEY (`flight_id`)
    REFERENCES `codatrip`.`Flights` (`flight_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `coda` ;

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
-- Table `coda`.`flights`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`flights` (
  `flight_id` BIGINT(20) NOT NULL,
  `departure` VARCHAR(255) NULL DEFAULT NULL,
  `destination` VARCHAR(255) NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `price` INT(11) NULL DEFAULT NULL,
  `source` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`flight_id`))
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
-- Table `coda`.`hotels`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coda`.`hotels` (
  `hotel_id` BIGINT(20) NOT NULL,
  `hotel_description` VARCHAR(255) NULL DEFAULT NULL,
  `hotel_image` VARCHAR(255) NULL DEFAULT NULL,
  `hotel_name` VARCHAR(255) NULL DEFAULT NULL,
  `hotel_place` VARCHAR(255) NULL DEFAULT NULL,
  `price` BIGINT(20) NULL DEFAULT NULL,
  PRIMARY KEY (`hotel_id`))
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
