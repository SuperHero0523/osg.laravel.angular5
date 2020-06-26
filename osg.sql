/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : osg

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-06-26 09:33:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `athletes`
-- ----------------------------
DROP TABLE IF EXISTS `athletes`;
CREATE TABLE `athletes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birth` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `height` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `muscle_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `interest` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `experience` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postal_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `place` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of athletes
-- ----------------------------
INSERT INTO `athletes` VALUES ('1', '3', 'Mr', '03.03.88', '189', 'TypeA', 'Boxing', '10', 'Norway', '', '', 'Working as professional trainer for 10 years. I am confident and passionate about what I do for a living. Let me help you transform your personal life, mentally and physically.', null, '2019-08-23 10:06:39', '2019-08-23 10:06:41');

-- ----------------------------
-- Table structure for `designers`
-- ----------------------------
DROP TABLE IF EXISTS `designers`;
CREATE TABLE `designers` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birth` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `education` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `special` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `experience` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postal_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `place` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of designers
-- ----------------------------
INSERT INTO `designers` VALUES ('1', '2', 'Mr', '06.22.96', 'Norges idrettshøyskole', 'Hypertrophy and power lifting', '10', 'Norway', '', '', 'Oslo', '', '2019-08-23 10:03:30', '2019-08-23 06:27:13');

-- ----------------------------
-- Table structure for `migrations`
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES ('1', '2014_10_12_000000_create_users_table', '1');
INSERT INTO `migrations` VALUES ('2', '2014_10_12_100000_create_password_resets_table', '1');

-- ----------------------------
-- Table structure for `password_resets`
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of password_resets
-- ----------------------------

-- ----------------------------
-- Table structure for `trainers`
-- ----------------------------
DROP TABLE IF EXISTS `trainers`;
CREATE TABLE `trainers` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birth` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `education` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `special` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `experience` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `workplace_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postal_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `place` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of trainers
-- ----------------------------
INSERT INTO `trainers` VALUES ('1', '1', 'male', '08/22/1992', 'Norges idrettshøyskole', 'Hypertrophy and power lifting', '10', 'Norway', 'Oslo', 'Working as professional trainer for 10 years. I am confident and passionate about what I do for a living. Let me help you transform your personal life, mentally and physically.', '', '', '', '/assets/uploads/profile_logo/kdfXrz26h5vfHRI9Zl23OqbTUBYmk5uQhVzvifkl.jpeg', '2019-08-22 06:27:13', '2019-08-22 06:27:13');
INSERT INTO `trainers` VALUES ('11', '18', 'male', '09/06/1990', 'Information Technology', 'Design', '10', 'Norway', 'Oslo', 'test descriptoi', 'Testveien 50', '0511', 'Oslo', null, '2020-05-08 03:06:00', '2020-05-08 03:06:00');
INSERT INTO `trainers` VALUES ('23', '30', 'male', '09/06/1990', 'Information Technology', 'Sport performance', '6', 'Norway', 'Oslo', 'test', 'Testveien 50', '1235', 'Oslo', null, '2020-06-10 17:27:36', '2020-06-10 17:27:36');
INSERT INTO `trainers` VALUES ('24', '31', 'male', '06/25/1996', 'Information Technology', 'power lifting', '5', 'Norway', 'Oslo', 'teste', 'Testveien 50', '1234', 'Oslo', null, '2020-06-24 11:53:04', '2020-06-24 11:53:04');
INSERT INTO `trainers` VALUES ('25', '32', 'male', '06/25/1996', 'Information Technology', 'power lifting', '5', 'Norway', 'Oslo', 'ads', 'Testveien 50', '1234', 'Oslo', null, '2020-06-24 15:23:49', '2020-06-24 15:23:49');
INSERT INTO `trainers` VALUES ('26', '33', 'male', '06/25/1996', 'Information Technology', 'power lifting', '5', 'Norway', 'Oslo', 'ads', 'Testveien 50', '12345', 'Oslo', null, '2020-06-24 15:37:00', '2020-06-24 15:37:00');
INSERT INTO `trainers` VALUES ('27', '34', 'male', '06/25/1996', 'Information Technology', 'power lifting', '54', 'Norway', 'Oslo', 'asdasd', 'Testveien 50', '1234', '123asd', null, '2020-06-24 15:38:46', '2020-06-24 15:38:46');
INSERT INTO `trainers` VALUES ('28', '35', 'male', '06/25/1996', 'Information Technology', 'power lifting', '5', 'Norway', 'Oslo', 'adsasqw', 'Testveien 50', '12345', 'Oslo', null, '2020-06-24 15:41:51', '2020-06-24 15:41:51');
INSERT INTO `trainers` VALUES ('29', '36', 'male', '06/25/1996', 'Information Technology', 'power lifting', '5', 'Norway', 'Oslo', 'das', 'Testveien 50', '1234', 'Oslo', null, '2020-06-24 17:22:14', '2020-06-24 17:22:14');
INSERT INTO `trainers` VALUES ('30', '37', 'male', '06/25/1996', 'Information Technology', 'power lifting', '5', 'Norway', 'Oslo', 'test des', 'Testveien 50', '12345', 'Oslo', null, '2020-06-24 17:24:36', '2020-06-24 17:24:36');
INSERT INTO `trainers` VALUES ('31', '38', 'male', '06/25/1996', 'Information Technology', 'power lifting', '5', 'Norway', 'Oslo', 'test des', 'Testveien 50', '1234', 'Oslo', null, '2020-06-24 17:28:15', '2020-06-24 17:28:15');
INSERT INTO `trainers` VALUES ('32', '39', 'male', '06/25/1996', 'Information Technology', 'power lifting', '5', 'Norway', 'Oslo', 'gjhggiu', 'Testveien 50', '1234', 'Oslo', null, '2020-06-24 23:46:27', '2020-06-24 23:46:27');
INSERT INTO `trainers` VALUES ('33', '40', 'male', '06/25/1996', 'Information Technology', 'power lifting', '5', 'Norway', 'Oslo', 'gjhggiu', 'Testveien 50', '1234', 'Oslo', null, '2020-06-24 23:51:28', '2020-06-24 23:51:28');
INSERT INTO `trainers` VALUES ('34', '41', 'male', '06/25/1996', 'Information Technology', 'power lifting', '6', 'Norway', 'Oslo', 'oihohhhoi', 'Testveien 50', '1235', 'Oslo', null, '2020-06-24 23:52:43', '2020-06-24 23:52:43');
INSERT INTO `trainers` VALUES ('35', '42', 'male', '06/25/1996', 'Information Technology', 'power lifting', '5', 'Norway', 'Oslo', 'test', 'Testveien 50', '1234', 'Oslo', null, '2020-06-25 01:41:26', '2020-06-25 01:41:26');
INSERT INTO `trainers` VALUES ('36', '43', 'male', '06/25/1996', 'Information Technology', 'power lifting', '5', 'Norway', 'Oslo', 'dasdwq', 'Testveien 50', '12345', 'Oslo', null, '2020-06-25 02:27:36', '2020-06-25 02:27:36');
INSERT INTO `trainers` VALUES ('37', '44', 'male', '06/25/1996', 'Information Technology', 'power lifting', '5', 'Norway', 'Oslo', 'adswqedwq', 'Testveien 50', '5213', 'Oslo', null, '2020-06-25 02:35:55', '2020-06-25 02:35:55');
INSERT INTO `trainers` VALUES ('38', '45', 'male', '06/25/1996', 'Information Technology', 'power lifting', '5', 'Norway', 'Oslo', 'dasdwq', 'Testveien 50', '2134', 'Oslo', null, '2020-06-25 02:41:38', '2020-06-25 02:41:38');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `api_token` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'PersonalTrainer', 'Nohman J.', '45494649', 'nohman@janjua.net', '2018-12-14 16:38:46', '$2y$10$q37BGO28A9ky7CwFMEJl7elmnwvXDrZbkxb8aSD7cbTLTL6eeMXyq', '0r1kMXpVAkV1mpO8s0V6SfE128TwZNWihxJWEzG8CEimXdjpeuaOkLz0DlSe', '4ZoWhPfrphYmPWit1ntKac8prlOePoJD7zUPxlfOTkylPyktublmFTWQ1v02', '2018-12-14 16:37:15', '2018-12-14 16:38:46');
INSERT INTO `users` VALUES ('2', 'ProgramDesigner', 'Andreas S.', '45494649', 'admin@fantasylab.io', '2018-12-14 16:42:51', '$2y$10$8F1LqJee/h.yzyIDOt3hp.KbPosviDHJinjVq4gmjpKDgZRn6hkzS', 'f9aVlJNwDI3S0wDZvo3mscD7G4h7M9Qtzn8HvJ7WpVNTMIBbOXkRQdi3K8ai', 'ZvxTKuDLl1FLikNDbpKs20QU4YKLMz1iruJBj9IENahHgf7Z8Ul9iDtiy6Zb', '2018-12-14 16:41:45', '2018-12-14 16:42:51');
INSERT INTO `users` VALUES ('3', 'StrengthAthlete', 'Kamil O.', '45494649', 'devtool@fantasylab.io', '2018-12-14 16:49:22', '$2y$10$/oxATCTeyAs/507/hem5SOJXpNFInjhO8Jg2ZFnrWjl3qwvBGBc5e', '0jHRUw4CT8OsqWdHI8bcQQty5ocyMecKelxV78xMgXEART2A1Jzu1nfzI3Lz', '1QoDHcPp1Mz1RNmtziOWfHm25E4WbF5fxWisfxcalC12XFWMu0Xg0i53hy6b', '2018-12-14 16:44:05', '2018-12-14 16:49:22');
INSERT INTO `users` VALUES ('4', 'PersonalTrainer', 'Andreas Stensrud', '48355979', 'andreas.j.stensrud@gmail.com', '2018-12-14 18:51:04', '$2y$10$rl7Lm5XdxIuEanIgwSaMvepQrbvfL0hhEVeA8Uvyx0qvGOPsTCipi', '0pHDEOkTQwL0U3drXZAWe5gexZPQh0i3RvDo3KFhdj6x86REaJCVHnuWPUCs', 'fUx1CClU61j5H2F74XIjQv3IkRRynaw6le2WrfNua98bzbSTnrUgRJMSVhbz', '2018-12-14 18:49:06', '2018-12-14 18:51:04');
INSERT INTO `users` VALUES ('18', 'PersonalTrainer', 'Nohman Janjua', '45494649', 'nohman@fantasylab.io', null, '$2y$10$C8aUglvT0BMqJBP8JWBMgeMXwK8x18nkYr9rxfYzypBK5gLk2ubEe', 'Jc9Fe01Dl8hnF6Y5g78lzmbcEAdlXYhPptrmZ14CINZwxHttYvR6C65k56Me', null, '2020-05-08 03:05:59', '2020-05-08 03:06:00');
INSERT INTO `users` VALUES ('45', 'PersonalTrainer', 'David Beckham', '+441632960639', 'lifeisyoureality@gmail.com', '2020-06-25 02:41:58', '$2y$10$9uDcM2mshxaWxkouq1fm0uPz9TgQ60RV2p2QFZDIvH7I..53C.YTK', '8UChk5UL3P3f904AWqZ6we2KLaJ6JITdx8DDJJ4cga4Gk1lz2lUcKul8d7sj', null, '2020-06-25 02:41:38', '2020-06-25 02:41:58');
