-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Dec 07, 2022 at 01:09 PM
-- Server version: 8.0.18
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `spms3`
--

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
CREATE TABLE IF NOT EXISTS `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `courseCode` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `semester` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `section` int(11) NOT NULL,
  `courseTitle` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `marks` int(11) NOT NULL,
  `courseOutlineId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `course_courseOutlineId_fkey` (`courseOutlineId`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `courseCode`, `semester`, `section`, `courseTitle`, `marks`, `courseOutlineId`) VALUES
(1, 'Cse303', 'Summer22', 1, 'Database Management', 100, 1);

-- --------------------------------------------------------

--
-- Table structure for table `courseoutline`
--

DROP TABLE IF EXISTS `courseoutline`;
CREATE TABLE IF NOT EXISTS `courseoutline` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `courseoutline`
--

INSERT INTO `courseoutline` (`id`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

DROP TABLE IF EXISTS `faculty`;
CREATE TABLE IF NOT EXISTS `faculty` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `designation` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `department` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `courseOutlineId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `faculty_courseOutlineId_fkey` (`courseOutlineId`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`id`, `name`, `designation`, `department`, `email`, `courseOutlineId`) VALUES
(1, 'Dr. Sadita Khan', 'Assistant Professor', 'Computer Science & Engineering', 'sadita@iub.edu.bd', 1);

-- --------------------------------------------------------

--
-- Table structure for table `obestudent`
--

DROP TABLE IF EXISTS `obestudent`;
CREATE TABLE IF NOT EXISTS `obestudent` (
  `student_id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `student_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `courseID` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `section` int(11) NOT NULL,
  `semester` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `total` int(11) NOT NULL,
  `CO1` int(11) NOT NULL,
  `CO2` int(11) NOT NULL,
  `CO3` int(11) NOT NULL,
  `CO4` int(11) NOT NULL,
  `grade` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `obestudent`
--

INSERT INTO `obestudent` (`student_id`, `student_name`, `courseID`, `section`, `semester`, `total`, `CO1`, `CO2`, `CO3`, `CO4`, `grade`) VALUES
('1531176', 'Md. Abdul Moin Bhuiyan', 'CSE303', 1, 'Summer22', 45, 31, 12, 20, 19, 'D'),
('1611001', 'Iftakhirul Mohaimin Alif', 'CSE303', 1, 'Summer22', 27, 41, 8, 0, 8, 'F'),
('1711409', 'Fahim Fardin', 'CSE303', 1, 'Summer22', 15, 9, 5, 0, 7, 'F'),
('1720718', 'Tashdid Zaman', 'CSE303', 1, 'Summer22', 14, 12, 0, 0, 6, 'F'),
('1722021', 'Md Talha Ibne Anwar', 'CSE303', 1, 'Summer22', 46, 41, 18, 18, 22, 'D'),
('1810471', 'Shahriar Alam Fahim', 'CSE303', 1, 'Summer22', 29, 34, 6, 0, 14, 'F'),
('1811135', 'Soumitro Roy', 'CSE303', 1, 'Summer22', 29, 31, 0, 13, 13, 'F'),
('1821772', 'Jubayer Akhand Udoy', 'CSE303', 1, 'Summer22', 7, 2, 3, 0, 0, 'F'),
('1822089', 'Shamsad Sanzid Ahmed', 'CSE303', 1, 'Summer22', 5, 0, 0, 0, 0, 'F'),
('1910876', 'Reza Al Hassan', 'CSE303', 1, 'Summer22', 75, 76, 6, 45, 40, 'B'),
('1911065', 'Samuel Muabia Planet', 'CSE303', 1, 'Summer22', 65, 37, 3, 53, 40, 'C+'),
('1920498', 'Mohammad Sufyan Rahman', 'CSE303', 1, 'Summer22', 45, 46, 6, 14, 17, 'D'),
('1920709', 'Mohammed Shahporan', 'CSE303', 1, 'Summer22', 45, 30, 9, 26, 24, 'D'),
('1921433', 'Alphy Shahrin Sadma', 'CSE303', 1, 'Summer22', 18, 14, 3, 5, 7, 'F'),
('1921498', 'Koushik Dewri', 'CSE303', 1, 'Summer22', 9, 7, 6, 0, 0, 'F'),
('1930095', 'Farhat Fatema Jameni', 'CSE303', 1, 'Summer22', 29, 28, 0, 9, 16, 'F'),
('1931160', 'Syeda Abida Sultana', 'CSE303', 1, 'Summer22', 9, 8, 0, 0, 2, 'F'),
('2020001', 'Navid Al Faiyaz Provi', 'CSE303', 1, 'Summer22', 70, 50, 18, 38, 38, 'B-'),
('2020331', 'Mohammad Mahmudul Islam', 'CSE303', 1, 'Summer22', 45, 31, 16, 25, 23, 'D'),
('2020729', 'Sanjida Afrin', 'CSE303', 1, 'Summer22', 20, 20, 6, 0, 9, 'F'),
('2020760', 'Fahad Zaman Chowdhury', 'CSE303', 1, 'Summer22', 62, 51, 3, 45, 35, 'C'),
('2020780', 'Alvi Noor Hossain', 'CSE303', 1, 'Summer22', 72, 89, 13, 37, 32, 'B-'),
('2020789', 'Newaz Ben Alam', 'CSE303', 1, 'Summer22', 51, 28, 3, 47, 28, 'D+'),
('2020952', 'Mysha Samiha', 'CSE303', 1, 'Summer22', 70, 34, 27, 45, 41, 'B-'),
('2022235', 'Morshada Khanam Mim', 'CSE303', 1, 'Summer22', 70, 76, 40, 15, 29, 'B-'),
('2022350', 'Sumaiya Akter Nitu', 'CSE303', 1, 'Summer22', 50, 35, 16, 20, 30, 'D+'),
('2022504', 'Md. Zahidul Islam', 'CSE303', 1, 'Summer22', 8, 5, 3, 0, 0, 'F'),
('2022759', 'Avishak Sikdar', 'CSE303', 1, 'Summer22', 30, 27, 0, 15, 15, 'F'),
('2130642', 'Nahian Najah', 'CSE303', 1, 'Summer22', 55, 60, 23, 12, 26, 'C-'),
('1711411', 'Asif Hossain Khan', 'CSE303', 2, 'Summer22', 50, 51, 13, 29, 21, 'D+'),
('1721527', 'Md. Sakimuzzaman', 'CSE303', 2, 'Summer22', 50, 56, 12, 18, 22, 'D+'),
('1721820', 'Towhidur Rahman Talukdar', 'CSE303', 2, 'Summer22', 26, 42, 6, 0, 8, 'F'),
('1731237', 'Abu Bakar Siddique', 'CSE303', 2, 'Summer22', 60, 82, 16, 21, 24, 'C'),
('1810810', 'Mashiat Anjum Talukder', 'CSE303', 2, 'Summer22', 57, 56, 12, 28, 29, 'C-'),
('1820293', 'Mosfica Jahan', 'CSE303', 2, 'Summer22', 60, 58, 36, 0, 35, 'C'),
('1820735', 'Imam Tajnoor Hossain Amrit', 'CSE303', 2, 'Summer22', 5, 0, 0, 0, 0, 'F'),
('1820781', 'Kazi Ikramul Islam', 'CSE303', 2, 'Summer22', 45, 34, 15, 11, 21, 'D'),
('1821411', 'Sourav Chakraborty', 'CSE303', 2, 'Summer22', 55, 60, 3, 25, 26, 'C-'),
('1821552', 'Polok Kumar Das', 'CSE303', 2, 'Summer22', 8, 9, 0, 0, 0, 'F'),
('1831124', 'Md Tuhin Al Jobayer', 'CSE303', 2, 'Summer22', 24, 35, 5, 0, 9, 'F'),
('1910207', 'Sanzida Nadia', 'CSE303', 2, 'Summer22', 46, 34, 13, 15, 32, 'D'),
('1910279', 'Rahat Hasan Shihab', 'CSE303', 2, 'Summer22', 80, 80, 13, 44, 44, 'B+'),
('1911116', 'Fatin Ishraq Ahammed', 'CSE303', 2, 'Summer22', 70, 58, 23, 26, 43, 'B-'),
('1920582', 'Md. Masum Musfique', 'CSE303', 2, 'Summer22', 86, 82, 13, 53, 46, 'A-'),
('1930426', 'Ishraque Rahman', 'CSE303', 2, 'Summer22', 27, 35, 7, 7, 9, 'F'),
('1930492', 'Md. Shariar Hossain Omee', 'CSE303', 2, 'Summer22', 27, 29, 18, 0, 13, 'F'),
('1930544', 'Ali Daud Hossain', 'CSE303', 2, 'Summer22', 51, 63, 5, 27, 22, 'D+'),
('2020259', 'Mahmuda Nizam', 'CSE303', 2, 'Summer22', 45, 35, 3, 27, 25, 'D'),
('2020716', 'Md. Rifat Hossain', 'CSE303', 2, 'Summer22', 93, 91, 35, 45, 45, 'A'),
('2020810', 'Faria Islam Sumi', 'CSE303', 2, 'Summer22', 47, 57, 8, 20, 20, 'D'),
('2021030', 'Daiyan Mohammad Shams', 'CSE303', 2, 'Summer22', 46, 38, 23, 15, 22, 'D'),
('2021111', 'Muhtasim Ibteda Shochcho', 'CSE303', 2, 'Summer22', 52, 50, 8, 29, 26, 'D+'),
('2021358', 'Parvez Ahmed Fahim', 'CSE303', 2, 'Summer22', 30, 25, 0, 14, 16, 'F'),
('2022058', 'Mohammad Aftab Mahmud', 'CSE303', 2, 'Summer22', 66, 48, 22, 39, 35, 'C+'),
('2022214', 'Farhan Masud Khan Pathan', 'CSE303', 2, 'Summer22', 52, 30, 9, 34, 31, 'D+'),
('2022280', 'Fatin Israq Tabib', 'CSE303', 2, 'Summer22', 80, 68, 21, 47, 43, 'B+'),
('2022606', 'Tonmoy George Chiran', 'CSE303', 2, 'Summer22', 82, 84, 24, 44, 39, 'B+'),
('2022745', 'Shafkat Muhib', 'CSE303', 2, 'Summer22', 55, 49, 22, 22, 26, 'C-'),
('2030087', 'Jannat Un Nayeem Iqra', 'CSE303', 2, 'Summer22', 75, 89, 10, 32, 40, 'B'),
('2030443', 'Aldrin Kabya Biswas', 'CSE303', 2, 'Summer22', 85, 94, 8, 50, 41, 'A-'),
('2030314', 'Tanima Ahamed Tulon', 'CSE303', 2, 'Summer22', 103, 86, 40, 58, 53, 'A'),
('2120015', 'Syed Alif Ul Alam', 'CSE303', 2, 'Summer22', 85, 66, 30, 49, 44, 'A-'),
('1610831', 'Md.Sakib Hossain', 'CSE303', 3, 'Summer22', 50, 39, 9, 30, 27, 'D+'),
('1710365', 'Fardeen Hossain Bhuiyan', 'CSE303', 3, 'Summer22', 29, 50, 0, 0, 11, 'F'),
('1710820', 'Tanha Shamree', 'CSE303', 3, 'Summer22', 34, 67, 0, 0, 11, 'F'),
('1730837', 'Shafayet Hossain Hridoy', 'CSE303', 3, 'Summer22', 45, 64, 8, 12, 17, 'D'),
('1731374', 'Md Musaraf Hussain', 'CSE303', 3, 'Summer22', 16, 20, 0, 0, 6, 'F'),
('1810665', 'Niaz Murshed Uz Zaman', 'CSE303', 3, 'Summer22', 16, 27, 0, 0, 4, 'F'),
('1810745', 'Abu Bakar Siddique', 'CSE303', 3, 'Summer22', 60, 48, 10, 37, 32, 'C'),
('1820106', 'Md. Al-Amin', 'CSE303', 3, 'Summer22', 55, 79, 12, 5, 28, 'C-'),
('1820236', 'Syed Golam Sadik', 'CSE303', 3, 'Summer22', 29, 52, 3, 0, 9, 'F'),
('1820290', 'Shah Javed Hossain', 'CSE303', 3, 'Summer22', 25, 41, 0, 0, 9, 'F'),
('1821013', 'Munabbirul Saqlain', 'CSE303', 3, 'Summer22', 34, 56, 7, 0, 13, 'F'),
('1821984', 'Salma Maliha', 'CSE303', 3, 'Summer22', 21, 27, 6, 0, 8, 'F'),
('1830405', 'Sadman Saifee', 'CSE303', 3, 'Summer22', 60, 58, 0, 36, 34, 'C'),
('1830410', 'Mahir Daiyan Khan', 'CSE303', 3, 'Summer22', 65, 83, 15, 20, 31, 'C+'),
('1831178', 'A. K. M. Galib Hasan', 'CSE303', 3, 'Summer22', 13, 16, 0, 0, 4, 'F'),
('1920181', 'Seeyam Akhter', 'CSE303', 3, 'Summer22', 50, 72, 5, 17, 21, 'D+'),
('1920404', 'Toushif Hossain', 'CSE303', 3, 'Summer22', 80, 72, 18, 36, 48, 'B+'),
('1920511', 'Sabrin Anan Oyshee', 'CSE303', 3, 'Summer22', 28, 38, 8, 0, 11, 'F'),
('1920741', 'Arafat Azaz Jesan', 'CSE303', 3, 'Summer22', 16, 26, 0, 0, 4, 'F'),
('1921278', 'Maisha Adity Farzana', 'CSE303', 3, 'Summer22', 55, 68, 13, 16, 28, 'C-'),
('1921298', 'Faisal Bhuiyan', 'CSE303', 3, 'Summer22', 94, 97, 26, 48, 47, 'A'),
('1921553', 'Atika Sultana', 'CSE303', 3, 'Summer22', 26, 33, 8, 0, 10, 'F'),
('1921719', 'Md.Al-Abid Supto', 'CSE303', 3, 'Summer22', 14, 22, 0, 0, 3, 'F'),
('1921785', 'Fahad Kabir', 'CSE303', 3, 'Summer22', 55, 76, 5, 22, 23, 'C-'),
('1921848', 'Umme Tasnim', 'CSE303', 3, 'Summer22', 100, 98, 28, 54, 51, 'A'),
('1931150', 'Tanjina Sikder Tonny', 'CSE303', 3, 'Summer22', 31, 16, 10, 0, 26, 'F'),
('1931269', 'Farhan Sajid', 'CSE303', 3, 'Summer22', 50, 67, 21, 0, 24, 'D+'),
('2020222', 'Azwad Fawad Hasan', 'CSE303', 3, 'Summer22', 85, 100, 10, 41, 45, 'A-'),
('2020301', 'Mushfiqur Alam Bhuiyan', 'CSE303', 3, 'Summer22', 106, 107, 30, 58, 53, 'A'),
('2020367', 'Akib Raihan', 'CSE303', 3, 'Summer22', 90, 81, 23, 58, 44, 'A'),
('2020549', 'Mofajjel Hossain Chowdhury', 'CSE303', 3, 'Summer22', 14, 23, 0, 0, 3, 'F'),
('2020977', 'Anannya Preeta', 'CSE303', 3, 'Summer22', 60, 60, 18, 28, 28, 'C'),
('2021397', 'Injamam Ul Haque', 'CSE303', 3, 'Summer22', 80, 79, 11, 45, 43, 'B+'),
('2021591', 'S.M.A Sayed Al Banna', 'CSE303', 3, 'Summer22', 95, 88, 35, 53, 47, 'A'),
('2021607', 'Syed Niaz Mohtasim', 'CSE303', 3, 'Summer22', 65, 57, 17, 37, 32, 'C+'),
('2030932', 'Riyad Hossain', 'CSE303', 3, 'Summer22', 50, 48, 0, 26, 26, 'D+'),
('1710153', 'Kazi Mostafir Hassan Sifat', 'CSE303', 4, 'Summer22', 8, 7, 0, 0, 0, 'F'),
('1730034', 'Shah Sadmaney Yeasar Shopnil', 'CSE303', 4, 'Summer22', 50, 45, 0, 32, 24, 'D+'),
('1821593', 'Md. Kaysar Mahmud Bengen', 'CSE303', 4, 'Summer22', 45, 62, 12, 0, 17, 'D'),
('1830015', 'Mehedi Hasan Ayon', 'CSE303', 4, 'Summer22', 45, 51, 6, 20, 17, 'D'),
('1830032', 'Syed Mohaimin Ul Hoque', 'CSE303', 4, 'Summer22', 45, 32, 0, 22, 18, 'D'),
('1830395', 'Syed Mohammad Zeeshan', 'CSE303', 4, 'Summer22', 45, 49, 6, 11, 17, 'D'),
('1830668', 'Nabilah Tabassum Oshin', 'CSE303', 4, 'Summer22', 70, 98, 16, 25, 27, 'B-'),
('1830968', 'Md. Yakub Hossain', 'CSE303', 4, 'Summer22', 23, 24, 9, 0, 10, 'F'),
('1910566', 'Md Sajed', 'CSE303', 4, 'Summer22', 31, 44, 13, 0, 11, 'F'),
('1910807', 'Fatema Tamim', 'CSE303', 4, 'Summer22', 28, 30, 7, 8, 12, 'F'),
('1910888', 'Shamim Ahmed', 'CSE303', 4, 'Summer22', 45, 8, 21, 37, 25, 'D'),
('1911212', 'Abir Hasan', 'CSE303', 4, 'Summer22', 17, 17, 0, 0, 9, 'F'),
('1920280', 'Shahria Sultana', 'CSE303', 4, 'Summer22', 27, 21, 7, 7, 14, 'F'),
('1920408', 'S.M Farhan Shariar', 'CSE303', 4, 'Summer22', 23, 27, 7, 0, 10, 'F'),
('1921392', 'Tanzil Ahmmed', 'CSE303', 4, 'Summer22', 67, 58, 34, 31, 31, 'C+'),
('1921562', 'Fardin Islam', 'CSE304', 4, 'Summer22', 30, 48, 0, 7, 10, 'F'),
('1921860', 'Faiyaz Ahmed', 'CSE305', 4, 'Summer22', 21, 32, 0, 0, 8, 'F'),
('1930160', 'Nure Jannat Disha', 'CSE306', 4, 'Summer22', 5, 0, 0, 0, 0, 'F'),
('1930539', 'Md.Faisal Mahim', 'CSE307', 4, 'Summer22', 12, 18, 3, 0, 0, 'F'),
('1931375', 'Atm Jannatul Mashroor', 'CSE308', 4, 'Summer22', 5, 0, 0, 0, 0, 'F'),
('2010361', 'Mohammed Fardeen Ashraf', 'CSE309', 4, 'Summer22', 15, 17, 2, 0, 5, 'F'),
('2010386', 'Nurul Amin', 'CSE310', 4, 'Summer22', 45, 54, 8, 11, 15, 'D'),
('2010764', 'Siam Tahsin Bhuiyan', 'CSE311', 4, 'Summer22', 70, 95, 15, 29, 27, 'B-'),
('2020741', 'Ashiqur Rahman Sami', 'CSE312', 4, 'Summer22', 75, 88, 15, 42, 32, 'B'),
('2021556', 'Miraj Hossain Pran', 'CSE313', 4, 'Summer22', 23, 13, 20, 0, 10, 'F'),
('2022119', 'Md.Ridwan Mahmud', 'CSE314', 4, 'Summer22', 45, 57, 22, 7, 18, 'D'),
('2022385', 'Jenad Sultana Proma', 'CSE315', 4, 'Summer22', 14, 19, 0, 0, 3, 'F'),
('2022826', 'Sakib Mahmud', 'CSE316', 4, 'Summer22', 45, 34, 10, 20, 16, 'D'),
('2030183', 'Jaima Jahan Khan', 'CSE317', 4, 'Summer22', 20, 25, 0, 5, 7, 'F'),
('2120265', 'Shohan Islam Joy', 'CSE318', 4, 'Summer22', 55, 36, 20, 27, 29, 'C-');

-- --------------------------------------------------------

--
-- Table structure for table `objectives`
--

DROP TABLE IF EXISTS `objectives`;
CREATE TABLE IF NOT EXISTS `objectives` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objective` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `courseOutlineId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `objectives_courseOutlineId_fkey` (`courseOutlineId`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `objectives`
--

INSERT INTO `objectives` (`id`, `objective`, `courseOutlineId`) VALUES
(1, 'Understand the basic concepts of web application development.', 1),
(2, 'Understand the basic concepts of web application development tools.', 1),
(3, 'Understand the basic concepts of web application development frameworks.', 1),
(4, 'Understand the basic concepts of web application security.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `outcome`
--

DROP TABLE IF EXISTS `outcome`;
CREATE TABLE IF NOT EXISTS `outcome` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `outcome` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `courseOutlineId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `outcome_courseOutlineId_fkey` (`courseOutlineId`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `outcome`
--

INSERT INTO `outcome` (`id`, `outcome`, `courseOutlineId`) VALUES
(1, 'Develop web applications using HTML, CSS, and JavaScript.', 1),
(2, 'Develop web applications using React.js.', 1),
(3, 'Develop web applications using Node.js.', 1),
(4, 'Develop web applications using Node.js.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `policy`
--

DROP TABLE IF EXISTS `policy`;
CREATE TABLE IF NOT EXISTS `policy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `policy` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `courseOutlineId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `policy_courseOutlineId_fkey` (`courseOutlineId`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `policy`
--

INSERT INTO `policy` (`id`, `policy`, `courseOutlineId`) VALUES
(1, '70% attendance is mandatory.', 1),
(2, 'Students are expected to be on time for the class.', 1),
(3, 'Students are expected to be polite and respectful to the instructor and other students.', 1),
(4, 'Students are expected to be honest and ethical in their academic work.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE IF NOT EXISTS `question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniqueId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `question` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `marks` int(11) NOT NULL,
  `co` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `question_uniqueId_fkey` (`uniqueId`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `uniqueId`, `question`, `marks`, `co`) VALUES
(30, 'Cse101Summer221', 'What is a boolean data type ?', 2, 1),
(29, 'Cse101Summer221', 'Analyze : for(int i =5 ;i<=5;i++) {print (\"Hello world\");}', 8, 3);

-- --------------------------------------------------------

--
-- Table structure for table `questionpaper`
--

DROP TABLE IF EXISTS `questionpaper`;
CREATE TABLE IF NOT EXISTS `questionpaper` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniqueId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `semester` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `section` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `questionpaper_uniqueId_key` (`uniqueId`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `questionpaper`
--

INSERT INTO `questionpaper` (`id`, `uniqueId`, `course_id`, `semester`, `section`) VALUES
(21, 'Cse101Summer221', 'Cse101', 'Summer22', 1);

-- --------------------------------------------------------

--
-- Table structure for table `resource`
--

DROP TABLE IF EXISTS `resource`;
CREATE TABLE IF NOT EXISTS `resource` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `courseOutlineId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `resource_courseOutlineId_fkey` (`courseOutlineId`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `resource`
--

INSERT INTO `resource` (`id`, `title`, `courseOutlineId`) VALUES
(1, 'Introduction to HTML', 1),
(2, 'Introduction to CSS', 1),
(3, 'Introduction to JavaScript', 1),
(4, 'Introduction to React.js', 1);

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
CREATE TABLE IF NOT EXISTS `schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `week` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `topic` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `readings` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `courseOutlineId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `schedule_courseOutlineId_fkey` (`courseOutlineId`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`id`, `week`, `topic`, `readings`, `courseOutlineId`) VALUES
(1, 'Week 1', 'Web App', 'Introduction to HTML', 1),
(2, 'Week 2', 'HTML', 'Introduction to HTML', 1),
(3, 'Week 3', 'CSS', 'Introduction to HTML', 1),
(4, 'Week 4', 'JS', 'Introduction to HTML', 1),
(5, 'Week 5', 'React', 'Introduction to HTML', 1),
(6, 'Week 6', 'Node', 'Introduction to HTML', 1),
(7, 'Week 7', 'Express', 'Introduction to HTML', 1),
(8, 'Week 8', 'MongoDB', 'Introduction to HTML', 1);

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
CREATE TABLE IF NOT EXISTS `_prisma_migrations` (
  `id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('26f6c982-f425-4d8f-845d-2662631fdbdb', '52544954d963725748feaa8c964889f8116285235d9471676d8c7e31aaabc440', '2022-12-04 16:46:50.912', '20221204124408_init', NULL, NULL, '2022-12-04 16:46:50.859', 1),
('5eeccbcb-6c4d-4678-8aa4-070a6c4df535', '28cdfc55d4a69e1d8cbb60bcfe00a8041a0df0a199676b5e96aac4f827be7801', '2022-12-04 16:46:51.017', '20221204124531_init', NULL, NULL, '2022-12-04 16:46:50.913', 1),
('05c6f5cf-d5ff-42fb-92ac-2c609578f9d3', '7503c96c7c000cf310bb0a4c16395c9235af21d07f080a39d29da29c9cc74a25', '2022-12-04 16:46:51.071', '20221204140743_init', NULL, NULL, '2022-12-04 16:46:51.017', 1),
('d2788f29-2f11-4e9a-88ae-85db23c9f22d', '6252a9dbfe376029af89dda9029f54d28a02827488e8a01f51a71d069700e853', '2022-12-04 16:46:51.137', '20221204150820_init', NULL, NULL, '2022-12-04 16:46:51.071', 1),
('7e2fa87b-b15b-4bb5-a91c-0d142cad6a6d', 'f66c802e08eaeb5bdb6c78154975f9cca463b2c33296ff673e661f4d2741b9b0', '2022-12-04 16:46:55.795', '20221204164655_init', NULL, NULL, '2022-12-04 16:46:55.651', 1),
('adda76d7-436b-410a-917e-5ecc775a4343', 'd8375cc81c8adb6e5770dea171b518462347f8ac09a23487b0fa1e2f566e0eaa', '2022-12-06 12:52:10.779', '20221206125210_init', NULL, NULL, '2022-12-06 12:52:10.356', 1),
('be1b9d2e-1c01-4f14-bac3-78f293fe2c9c', '852b02aec6596d20e3b23cb5a583bdde0f4d00fd7aaa2dd62c33ee06e0ccd9c5', '2022-12-06 12:55:49.713', '20221206125549_init', NULL, NULL, '2022-12-06 12:55:49.384', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
