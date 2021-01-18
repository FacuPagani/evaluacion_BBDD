-- MySQL Script generated by MySQL Workbench
-- Sat Jan 16 22:42:02 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema notitas
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `notitas` ;

-- -----------------------------------------------------
-- Schema notitas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `notitas` DEFAULT CHARACTER SET utf8mb4 ;
USE `notitas` ;

-- -----------------------------------------------------
-- Table `notitas`.`notas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `notitas`.`notas` ;

CREATE TABLE IF NOT EXISTS `notitas`.`notas` (
  `id_notas` INT(11) NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id_notas`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
