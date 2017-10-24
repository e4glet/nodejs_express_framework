/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50712
Source Host           : localhost:3306
Source Database       : move

Target Server Type    : MYSQL
Target Server Version : 50712
File Encoding         : 65001

Date: 2017-10-24 11:30:38
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `move_booking`
-- ----------------------------
DROP TABLE IF EXISTS `move_booking`;
CREATE TABLE `move_booking` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `area` varchar(50) NOT NULL,
  `cartype` varchar(20) NOT NULL,
  `movedate` date NOT NULL,
  `contact` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of move_booking
-- ----------------------------
INSERT INTO `move_booking` VALUES ('1', '海淀区', '厢式货车', '2017-05-30', '张三', '022-12345678', '0');
INSERT INTO `move_booking` VALUES ('2', '朝阳区', '金杯', '2017-05-31', '于狄', '022-26781234', '1');
INSERT INTO `move_booking` VALUES ('3', '东城区', '皮卡', '2017-06-06', 'John Doe', '022-12345678', '0');
INSERT INTO `move_booking` VALUES ('4', '东城区', '1041货车', '2017-06-02', 'ros', '022-87654321', '1');
INSERT INTO `move_booking` VALUES ('5', '海淀区', '皮卡', '2017-10-24', 'hello', '022-12345678', '0');
INSERT INTO `move_booking` VALUES ('6', '海淀区', '皮卡', '2017-10-24', 'hello', '022-12345678', '0');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'tom', '123456');
INSERT INTO `users` VALUES ('2', 'jack', '123456');
