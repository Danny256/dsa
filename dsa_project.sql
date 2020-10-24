-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 22, 2020 at 02:12 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dsa_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_info`
--

CREATE TABLE `contact_info` (
  `cont_id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `name` varchar(200) NOT NULL,
  `message` varchar(200) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact_info`
--

INSERT INTO `contact_info` (`cont_id`, `email`, `name`, `message`, `date`) VALUES
(1, '', '', '', '0000-00-00 00:00:00'),
(3, 'njoy@win.com', 'Nambozo Joyce', 'Hellooo', '0000-00-00 00:00:00'),
(4, 'mudait@gmail.com', 'Therick Mudali', 'Waguan!!!', '0000-00-00 00:00:00'),
(5, 'apatience@hotmail.com', 'Ann Maria Patience', 'qaz', '0000-00-00 00:00:00'),
(6, 'dkigozi23@gmail.com', 'Kigozi Daniel', 'Whats up guys', '0000-00-00 00:00:00'),
(7, 'idiego@gmail.com', 'Innocent Diego', 'Who is here?', '0000-00-00 00:00:00'),
(8, 'sbaker@yahoo.com', 'Samuel Baker', 'Its like everyone is texting.....so did I', '0000-00-00 00:00:00'),
(12, 'mclinton@cis.mak.ac.ug', 'Murungi Clinton', 'You need to work on me first...am so disturbed', '0000-00-00 00:00:00'),
(13, 'gakisakye@gmail.com', 'Anna Gloria', 'You people are going to help me solve all my software problems.', '0000-00-00 00:00:00'),
(14, 'dramanjulius@funny.com', 'Draman Julius ', 'My my my...these things are lit!!!', '0000-00-00 00:00:00'),
(15, 'mudalit@gmail.com', 'Therick Mudali', 'Are things working fine right about here.', '0000-00-00 00:00:00'),
(16, 'mudait//@gmail.com', 'Therick Mudali', 'qazzzzzzzz!', '0000-00-00 00:00:00'),
(18, 'mudait?@gmail.com', 'Therick Mudali', 'Qwerty!', '0000-00-00 00:00:00'),
(19, 'mudait#@gmail.com', 'Therick Mudali', 'Poiu!!!', '0000-00-00 00:00:00'),
(22, 'pumpkin//@live.com', 'Pumkins', 'Green outside but yellow inside!', '0000-00-00 00:00:00'),
(23, 'oranges@yahoo.com', 'Oranges family', 'Orange is Orange!', '0000-00-00 00:00:00'),
(24, 'kaibanda@comedy.com', 'Kaibanda Family', 'Funny Old guy!!!', '0000-00-00 00:00:00'),
(25, 'apple@sweet.com', 'Apple', 'Apple Sweet', '0000-00-00 00:00:00'),
(26, 'passion@nice.com', 'Passion family', 'Passion power!!', '0000-00-00 00:00:00'),
(27, 'pineapple?@sweet.com', 'Pineapple Family', 'Pineapple Power!!!', '0000-00-00 00:00:00'),
(29, 'berry@sweet.com', 'Berry Family', 'Berry Power', '0000-00-00 00:00:00'),
(30, 'blackberry@sweet.com', 'blackberry family', 'Blackberry Power', '0000-00-00 00:00:00'),
(31, 'guava@nice.com', 'Guava Family', 'Guava Power', '0000-00-00 00:00:00'),
(32, 'pepper@nice.com', 'Pepper Family', 'Pepper Power', '0000-00-00 00:00:00'),
(33, 'xyz@alphabate.com', 'XYZ', 'Consonants', '2020-01-21 14:30:21'),
(34, 'qaz1@live.com', 'Qaz Family', 'Qaz Power', '2020-01-21 14:55:41'),
(35, 'poiu1@live.com', 'poiu family', 'poiu power', '2020-01-21 14:58:34'),
(37, 'poiu2@live.com', 'poiu family', 'poiu power', '2020-01-21 15:01:59'),
(38, 'qwerty1@smart.com', 'qwerty', 'qwerty now', '2020-01-21 15:03:10'),
(39, 'qwerty2@live.com', 'qwerty ', 'qwerty sure', '2020-01-21 15:05:06'),
(40, 'qaz4@live.com', 'qaz', 'qaz smart4', '2020-01-21 15:06:58'),
(41, 'jam@conjestion.com', 'jam going on', 'jamdaily', '2020-01-21 15:20:57'),
(42, 'jose@swag.com', 'jose family', 'Jose Power', '2020-01-22 14:27:58');

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `log_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_name` varchar(200) NOT NULL,
  `designation` varchar(100) NOT NULL,
  `activity` varchar(100) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`log_id`, `user_id`, `user_name`, `designation`, `activity`, `date`) VALUES
(1, 1, 'Dancan Nabaya', '', 'Log In', '2020-01-22 14:07:00'),
(2, 1, 'Dancan Nabaya', '', 'Log In', '2020-01-22 14:28:33'),
(3, 1, 'Dancan Nabaya', '', 'Log In', '2020-01-22 14:29:54'),
(4, 1, 'Dancan Nabaya', '', 'Log In', '2020-01-22 14:32:37'),
(5, 1, 'Dancan Nabaya', '', 'Log In', '2020-01-22 14:33:16'),
(6, 1, 'Dancan Nabaya', '', 'Log In', '2020-01-22 14:36:12'),
(7, 2, 'Anna Gloria Kisakye', '', 'Log In', '2020-01-22 15:12:27'),
(8, 3, 'Mutebi Felix Mukisa', '', 'Log In', '2020-01-22 15:13:15'),
(9, 1, 'Dancan Nabaya', '', 'Log In', '2020-01-22 15:21:10'),
(10, 1, 'Dancan Nabaya', '', 'Log Out', '2020-01-22 15:21:18'),
(11, 1, 'Dancan Nabaya', '', 'Log In', '2020-01-22 15:23:17'),
(12, 1, 'Dancan Nabaya', 'Administrator', 'Log Out', '2020-01-22 15:36:35'),
(13, 1, 'Dancan Nabaya', 'Administrator', 'Log In', '2020-01-22 15:36:49'),
(14, 1, 'Dancan Nabaya', 'Administrator', 'Log Out', '2020-01-22 15:37:04'),
(15, 2, 'Anna Gloria Kisakye', 'Staff', 'Log In', '2020-01-22 15:37:21'),
(16, 2, 'Anna Gloria Kisakye', 'Staff', 'Log Out', '2020-01-22 15:37:44'),
(17, 1, 'Dancan Nabaya', 'Administrator', 'Log In', '2020-01-22 15:48:11'),
(18, 1, 'Dancan Nabaya', 'Administrator', 'Log Out', '2020-01-22 15:53:41'),
(19, 2, 'Anna Gloria Kisakye', 'Staff', 'Log In', '2020-01-22 15:53:49'),
(20, 2, 'Anna Gloria Kisakye', 'Staff', 'Log Out', '2020-01-22 15:53:58'),
(21, 3, 'Mutebi Felix Mukisa', 'Staff', 'Log In', '2020-01-22 15:54:06'),
(22, 3, 'Mutebi Felix Mukisa', 'Staff', 'Log Out', '2020-01-22 15:54:14'),
(23, 1, 'Dancan Nabaya', 'Administrator', 'Log In', '2020-01-22 15:54:21'),
(24, 1, 'Dancan Nabaya', 'Administrator', 'Log Out', '2020-01-22 15:56:16'),
(25, 1, 'Dancan Nabaya', 'Administrator', 'Log In', '2020-01-22 15:59:10'),
(26, 1, 'Dancan Nabaya', 'Administrator', 'Log Out', '2020-01-22 15:59:33'),
(27, 1, 'Danny Nabaya', 'Administrator', 'Log In', '2020-01-22 16:00:21'),
(28, 1, 'Danny Nabaya', 'Administrator', 'Log Out', '2020-01-22 16:00:43');

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `admin_id` int(11) NOT NULL,
  `admin_firstName` varchar(100) NOT NULL,
  `admin_lastName` varchar(100) NOT NULL,
  `designation` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`admin_id`, `admin_firstName`, `admin_lastName`, `designation`, `email`, `password`, `date`) VALUES
(1, 'Danny', 'Nabaya', 'Administrator', 'dancan.ug@gmail.com', '098', '2020-01-22 12:22:43'),
(2, 'Anna Gloria', 'Kisakye', 'Staff', 'agkisakye@gmail.com', '321', '2020-01-22 15:05:08'),
(3, 'Mutebi Felix', 'Mukisa', 'Staff', 'mfelixmukisa1@gmail.com', '654', '2020-01-22 15:06:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_info`
--
ALTER TABLE `contact_info`
  ADD PRIMARY KEY (`cont_id`),
  ADD UNIQUE KEY `emailIndex` (`email`);

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`log_id`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`admin_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_info`
--
ALTER TABLE `contact_info`
  MODIFY `cont_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `log_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
