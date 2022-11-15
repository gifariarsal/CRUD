SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `bootcamp` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `website` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `bootcamp` (`id`, `name`, `description`, `website`, `phone`, `email`, `address`) VALUES
(1, 'Chevalier Bootcamp', 'Devworks is a full stack JavaScript Bootcamp located in the heart of Boston that focuses on the technologies you need to get a high paying job as a web developer', 'https://devworks.com', '(111) 111-1111', 'enroll@devworks.com', '233 Bay State Rd Boston MA 02215');

ALTER TABLE `bootcamp`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `bootcamp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;
