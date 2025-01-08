CREATE TABLE applicants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(120) NOT NULL UNIQUE,
    `phone` VARCHAR(20),
    `age` VARCHAR(20),
    `password` VARCHAR(30) NOT NULL,
    `address` VARCHAR(200),
    `resume_path` VARCHAR(200),
    `status` VARCHAR(50),
    `role` VARCHAR(100),
    `image` BLOB NOT NULL,
    applied_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `ats_db`. `jobpost` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(100) NOT NULL,
    `description` TEXT NOT NULL,
    `require` VARCHAR(120) NOT NULL,
    `subject` VARCHAR(50) NOT NULL,
    `location` VARCHAR(50) NOT NULL,
    `salary` VARCHAR(20) NOT NULL,
    `cv` LONGBLOB NOT NULL,
    applied_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)ENGINE = InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE teachers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(120) NOT NULL UNIQUE,
    `phone` VARCHAR(20),
    `age` VARCHAR(20),
    `address` VARCHAR(200),
    `summary` VARCHAR(500),
    `qual` VARCHAR(50),
    `skills` VARCHAR(500),
    `certificate` VARCHAR(500),
    `exp` VARCHAR(500),
    `leader` VARCHAR(500),
    `subject` VARCHAR(200),
    `coursedev` VARCHAR(500),
    `profilepic` LONGBLOB NOT NULL,
    applied_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `admin`
(
`id` INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
`name` VARCHAR(30) NOT NULL,
-- `lastname` VARCHAR(30) NOT NULL,
`username` VARCHAR(30) NOT NULL,
`email` VARCHAR(50) NOT NULL,
`password` VARCHAR(30) NOT NULL,
`mobile` VARCHAR(20) NOT NULL,
`status` VARCHAR(50),
 `role` VARCHAR(10)
-- `image` BLOB NOT NULL
 ) ENGINE = InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE school (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(120) NOT NULL UNIQUE,
    `phone` VARCHAR(20),
    `password` VARCHAR(30) NOT NULL,
    `description` VARCHAR(300),
    `address` VARCHAR(200),
    `status` VARCHAR(50),
    `role` VARCHAR(10),
    `image` LONGBLOB NOT NULL,
    applied_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



INSERT INTO admin (`name`,`password`)
    VALUES('MB', 'root');
