-- phpMyAdmin SQL Dump
-- version 4.0.4.2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 17-10-2022 a las 18:57:16
-- Versión del servidor: 5.6.13
-- Versión de PHP: 5.4.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `daw2`
--
CREATE DATABASE IF NOT EXISTS `id19746341_daw2` DEFAULT CHARACTER SET utf32 COLLATE utf32_spanish2_ci;
USE `id19746341_daw2`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE IF NOT EXISTS `carrito` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(20) COLLATE utf32_spanish2_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf32 COLLATE=utf32_spanish2_ci AUTO_INCREMENT=8 ;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id`, `usuario`) VALUES
(2, 'Yen');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf32 COLLATE utf32_spanish2_ci NOT NULL,
  `precio` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `descripcion` varchar(300) CHARACTER SET utf32 COLLATE utf32_spanish2_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=8 ;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `cantidad`, `descripcion`) VALUES
(2, 'pescado', 3424, 2423, 'fkgaishjggnka'),
(4, 'xarus', 123, 123, 'xaro'),
(6, 'Pinya', 5, 20, 'Frutas'),
(7, 'Cereza', 5, 100, 'Frutas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) CHARACTER SET utf32 COLLATE utf32_spanish2_ci NOT NULL,
  `pass` varchar(250) CHARACTER SET utf32 COLLATE utf32_spanish2_ci NOT NULL,
  `admin` int(11) NOT NULL,
  `nombre` varchar(250) CHARACTER SET utf32 COLLATE utf32_spanish2_ci NOT NULL,
  `apellidos` varchar(250) CHARACTER SET utf32 COLLATE utf32_spanish2_ci NOT NULL,
  `email` varchar(300) CHARACTER SET utf32 COLLATE utf32_spanish2_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=9 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `pass`, `admin`, `nombre`, `apellidos`, `email`) VALUES
(6, 'Toni', '72a38e065414e78a6d07410d31b5205fcd65fa28', 1, 'Toni', 'Chiquero', 'toni@mail.com'),
(7, 'User', 'a12bf2c17c422acccb707fa811f07e743a9293d8', 0, 'User', 'usuarios', 'user@mail.com'),
(8, 'Yen', '061a6a52bf333f2e2a74b71b6da4251cb754d0c9', 0, 'YEN', 'YEN', 'Yen@mail.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
