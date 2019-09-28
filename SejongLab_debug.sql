-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: SejongLab_debug
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `college`
--

DROP TABLE IF EXISTS `college`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `college` (
  `college_id` int(11) NOT NULL AUTO_INCREMENT,
  `college_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`college_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `college`
--

LOCK TABLES `college` WRITE;
/*!40000 ALTER TABLE `college` DISABLE KEYS */;
INSERT INTO `college` VALUES (1,'인문과학대학'),(2,'사회과학대학'),(3,'경영대학'),(4,'호텔관광대학'),(5,'자연과학대학'),(6,'생명과학대학'),(7,'전자정보공학대학'),(8,'소프트웨어융합대학'),(9,'공과대학'),(10,'예체능대학'),(12,'법학부');
/*!40000 ALTER TABLE `college` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `com`
--

DROP TABLE IF EXISTS `com`;
/*!50001 DROP VIEW IF EXISTS `com`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `com` AS SELECT 
 1 AS `dept_name`,
 1 AS `lab_name`,
 1 AS `professor_name`,
 1 AS `professor_email`,
 1 AS `lab_location`,
 1 AS `lab_tel`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `department` (
  `dept_id` int(11) NOT NULL,
  `dept_name` varchar(45) DEFAULT NULL,
  `college_id` int(11) NOT NULL,
  PRIMARY KEY (`dept_id`),
  KEY `fk_department_college1_idx` (`college_id`),
  CONSTRAINT `fk_department_college1` FOREIGN KEY (`college_id`) REFERENCES `college` (`college_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (1,'컴퓨터공학과',8),(2,'소프트웨어학과',8),(3,'정보보호학과',8),(4,'데이터사이언스학과',8),(5,'지능기전공학부',8),(6,'창의소프트학부',8);
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `dept`
--

DROP TABLE IF EXISTS `dept`;
/*!50001 DROP VIEW IF EXISTS `dept`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `dept` AS SELECT 
 1 AS `dept_name`,
 1 AS `lab_name`,
 1 AS `professor_name`,
 1 AS `professor_email`,
 1 AS `professor_url`,
 1 AS `lab_location`,
 1 AS `lab_tel`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `dp`
--

DROP TABLE IF EXISTS `dp`;
/*!50001 DROP VIEW IF EXISTS `dp`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `dp` AS SELECT 
 1 AS `dept_name`,
 1 AS `lab_name`,
 1 AS `professor_name`,
 1 AS `professor_email`,
 1 AS `lab_location`,
 1 AS `lab_tel`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `field`
--

DROP TABLE IF EXISTS `field`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `field` (
  `field_id` int(11) NOT NULL,
  `field_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`field_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `field`
--

LOCK TABLES `field` WRITE;
/*!40000 ALTER TABLE `field` DISABLE KEYS */;
INSERT INTO `field` VALUES (1,'영상처리'),(2,'인공지능'),(3,'컴퓨터네트워크'),(4,'HCI'),(5,'멀티미디어정보처리'),(6,'CAD/CAM'),(7,'로보틱스'),(8,'패턴인식'),(9,'컴퓨터구조론'),(10,'분산처리시스템'),(11,'멀티미디어'),(12,'데이터베이스'),(13,'정보통신'),(14,'컴퓨터그래픽스'),(15,'컴퓨터비젼'),(16,'알고리즘'),(17,'임베디드시스템'),(18,'데이터마이닝'),(20,'데이터시각화'),(21,'컴퓨터학'),(22,'IT서비스경영'),(23,'증강현실'),(24,'speech & audio processing'),(25,'정보시스템'),(26,'테크노경영'),(27,'디지털콘텐츠'),(28,'시스템보안'),(29,'보안공학'),(30,'초고속시스템'),(31,'소프트웨어공학'),(32,'암호학'),(33,'네트워크 보안'),(34,'정보보호'),(36,'함수해석학'),(38,'의료영상 분석'),(40,'금융공학'),(41,'경영과학'),(42,'전기정보공학'),(43,'의학공학'),(44,'신소재공학'),(45,'무선통신'),(46,'반도체소자'),(47,'디스플레이'),(52,'신호처리'),(53,'통신'),(54,'클라우드 컴퓨팅'),(55,'분산/병렬파일시스템'),(56,'빅데이터 플랫폼 구축'),(57,'SSD'),(58,'얼굴인식'),(59,'법의학 이미지 분석'),(60,'얼굴 모델링'),(61,'분광학'),(62,'컴퓨터 시뮬레이션'),(63,'이상탐지'),(64,'Video Retrieval'),(65,'Deep learning'),(66,'미디어 프로세서'),(67,'GPU'),(68,'결함내성시스템'),(69,'생체인식'),(70,'빅데이터'),(71,'Video Coding'),(72,'가상현실'),(73,'생물정보학'),(74,'IoT'),(75,'정보검색'),(76,'텔레메틱스'),(77,'데이터 분석'),(78,'드론'),(79,'지능형 로봇'),(80,'애니메이션'),(81,'게임'),(82,'스마트폰 보안'),(83,'취약점 분석'),(84,'웨어러블');
/*!40000 ALTER TABLE `field` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `frcomment`
--

DROP TABLE IF EXISTS `frcomment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `frcomment` (
  `frcomment_id` int(11) NOT NULL,
  `frcomment_issuedate` date DEFAULT NULL,
  `frcomment_authorid` int(11) DEFAULT NULL,
  `frcomment_contents` varchar(45) DEFAULT NULL,
  `frboard_id` int(11) NOT NULL,
  PRIMARY KEY (`frcomment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `frcomment`
--

LOCK TABLES `frcomment` WRITE;
/*!40000 ALTER TABLE `frcomment` DISABLE KEYS */;
INSERT INTO `frcomment` VALUES (1,'2019-05-29',2,'맞아 넌 뚱땡이야!',1);
/*!40000 ALTER TABLE `frcomment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `freeboard`
--

DROP TABLE IF EXISTS `freeboard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `freeboard` (
  `frboard_id` int(11) NOT NULL AUTO_INCREMENT,
  `frboard_authorid` int(11) DEFAULT NULL COMMENT 'ntboard author은 professor만 가능함.\n',
  `frboard_issuedate` date DEFAULT NULL,
  `frboard_contents` longtext,
  `frboard_title` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`frboard_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `freeboard`
--

LOCK TABLES `freeboard` WRITE;
/*!40000 ALTER TABLE `freeboard` DISABLE KEYS */;
INSERT INTO `freeboard` VALUES (1,1,'2019-05-29','경제통상학과 학생인데, 소융대 컴퓨터 공학과로 전과하고 싶습니다. 전과하신분 있나요?','다른데에서 소융대로 전과하신분 있나요?'),(2,1,'2019-06-04','연구실이 어디인지 아시나요??','컴공과 공성곤 교수님'),(3,1,'2019-06-04','제발ㅜㅜ공결신청서 내야하는데 금요일 수업 캔슬됨...','이근영 교수님 연구실 아는사람..?'),(4,1,'2019-06-04','수업 과제에 관련된 질문인데 직접가서 질문해도 되겠지?','교수님 연구실가서 질문해도 될까..?');
/*!40000 ALTER TABLE `freeboard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lab`
--

DROP TABLE IF EXISTS `lab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lab` (
  `lab_id` int(11) NOT NULL AUTO_INCREMENT,
  `lab_location` varchar(45) DEFAULT NULL,
  `lab_name` longtext,
  `lab_tel` varchar(45) DEFAULT NULL,
  `professor_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`lab_id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lab`
--

LOCK TABLES `lab` WRITE;
/*!40000 ALTER TABLE `lab` DISABLE KEYS */;
INSERT INTO `lab` VALUES (1,'대양AI센터 725호','Imaging and Pattern Recognition Lab','02-3408-3097',1),(2,'대양AI센터 822호','Artificial Intelligence Lab','02-3408-3238',2),(3,'대양AI센터 722호','HCI Lab','02-3408-3759',4),(4,'대양AI센터 818호','Multimedia Framework Lab','02-3408-3757',5),(5,'대양AI센터 718호','시스템공학연구실','02-3408-3747',7),(6,'대양AI센터 802호','Robotics and Embedded System Lab','02-3408-3243',8),(7,'대양AI센터 819호','Computer Vision & Pattern Recognition (CVPR) Lab','02-3408-3874',9),(8,'대양AI센터 723호','미디어프로세서연구실','02-3408-3752',10),(9,'대양AI센터 823호','결함내성시스템 연구실','02-3408-3240',11),(10,'대양AI센터 826호','멀티미디어 & 인터넷 연구실','02-3408-3242',13),(11,'대양AI센터 825호','Multimedia & Internet Lab','02-3408-3241',14),(12,'대양AI센터 719호','인공지능-빅데이터연구센터','02-3408-3755',15),(13,'대양AI센터 820호','무선디지털통신 연구실','02-3408-3737',16),(14,'대양AI센터 821호','Digital Media System (DMS) Lab','02-3408-3753',17),(15,'대양AI센터 720호','Graphics & Virtual Reality','02-3408-3754',18),(16,'대양AI센터 721호','영상처리 연구실','02-3408-3751',19),(17,'대양AI센터 709호','컴퓨터알고리즘 및 응용 연구실','02-3408-3839',20),(18,'대양AI센터 805호','System Design Lab','02-3408-3886',21),(19,'대양AI센터 808호','차세대 네트워크 연구실','02-3408-3840',22),(20,'대양AI센터 804호','Data Mining Lab','02-3408-2902',23),(21,'대양AI센터 806호','데이터 시각화 연구실','02-3408-3756',25),(22,'대양AI센터 807호','Quantitative Imaging and Informatics Lab','02-6935-2492',26),(23,'대양AI센터 423호','Intelligence Information Processing Lab','02-6935-2480',37),(24,'대양AI센터 625호','지능형 시스템 연구실','02-3408-3795',40),(25,'대양AI센터 622호','지능형 미디어 연구실','02-3408-3797',41),(26,'대양AI센터 619호','Mixed Reality & Interaction Lab','02-3408-3798',42),(27,'대양AI센터 624호','Interaction Technology Lab','02-3408-3847',43),(28,'대양AI센터 623호','그래픽스 연구실','02-3408-3830',44),(29,'충무관 1125호','Intelligent Data Lab','02-3408-3887',45),(30,'대양AI센터 626호','Computer Graphics Lab','02-3408-3832',47),(31,'대양AI센터 621호','데이터베이스 연구실','02-6935-2470',46),(32,'대양AI센터 703호','시스템보안 연구실','02-6935 - 2453',55),(33,'대양AI센터 702호','소프트웨어 보안 연구실','02-3408 - 2901',56),(34,'대양AI센터 708호','정보보호 연구실','02-3408-3888',57),(35,'대양AI센터 724호','취약점 분석 연구실','02-6935 - 2425',58),(36,'대양AI센터 726호','Crypto Laboratory','02-6935-2454',59),(37,'대양AI센터 706호','Applied Analytics (A-SQ) Lab','02-6935-2438',65),(38,'대양AI센터 707호','의료 빅데이터 연구실','02-6935-2476',67),(39,'충무관 204A호','모바일 지능형 임베디드시스템 연구실','02-3408-3696',69),(40,'대양AI센터 602호',' Intelligent Signal Processing Lab','02- 6935- 2520 ',71),(41,'충무관 308호','전자소자 플랫폼 연구실','02-6935-2521',72),(42,'충무관 203A호',' Intelligent Vehicle Perception Laboratory','02-3408-3481',73),(43,'충무관 818호','지능항법제어시스템 연구실','02-3408-3783',74),(44,'대양AI센터 603호','지능형 비주얼 컴퓨팅 연구실','02-6935-2672',80),(45,'대양AI센터 609호','지능통신 연구실','02-6935-2670',78),(46,'우정당312호','로보틱스 및 컴퓨터비전 연구실','02-6935-2671',79),(47,'대양AI센터 801호','Computer Network & 한국.net Social Name Portal Research ','02-3408-3236',3),(48,NULL,'노용덕교수님 연구실',NULL,6),(49,'대양AI센터 809호','임채훈교수님 연구실','02-3408-3738',24),(50,'다산관 111호','하길찬교수님 연구실','02-3408-3787',64),(51,'광개토관 409호','조윤식교수님 연구실','02-6935-2550',66),(52,'광개토관 1016C호','박성훈교수님 연구실','02-6935-2522',70);
/*!40000 ALTER TABLE `lab` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `major-in`
--

DROP TABLE IF EXISTS `major-in`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `major-in` (
  `dept_id` int(11) NOT NULL,
  `stu_id` int(11) NOT NULL,
  PRIMARY KEY (`dept_id`,`stu_id`),
  KEY `fk_major-in_department1_idx` (`dept_id`),
  KEY `fk_major-in_student1_idx` (`stu_id`),
  CONSTRAINT `fk_major-in_department1` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_major-in_student1` FOREIGN KEY (`stu_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `major-in`
--

LOCK TABLES `major-in` WRITE;
/*!40000 ALTER TABLE `major-in` DISABLE KEYS */;
INSERT INTO `major-in` VALUES (1,9),(2,2),(2,3),(2,8),(3,4),(3,7),(4,5),(4,6);
/*!40000 ALTER TABLE `major-in` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `noticeboard`
--

DROP TABLE IF EXISTS `noticeboard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `noticeboard` (
  `ntboard_id` int(11) NOT NULL AUTO_INCREMENT,
  `ntboard_authorid` int(11) DEFAULT NULL COMMENT 'ntboard author은 professor만 가능함.\n',
  `ntboard_issuedate` datetime DEFAULT NULL,
  `ntboard_contents` longtext,
  `ntboard_title` longtext,
  PRIMARY KEY (`ntboard_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `noticeboard`
--

LOCK TABLES `noticeboard` WRITE;
/*!40000 ALTER TABLE `noticeboard` DISABLE KEYS */;
INSERT INTO `noticeboard` VALUES (1,1,'2019-05-30 00:00:00','안녕하세요\r \r 컴퓨터공학과입니다.\r \r  \r \r 전자정보통신공학과 문주희 교수님 연구실에서 학생을 모집합니다.\r \r  \r \r 자세한 사항은 첨부된 파일을 참고하시기 바랍니다.\r \r  \r \r 문의 : 하재민 010-2819-8029\r \r  \r \r 감사합니다.','문주희 교수님 연구실 학부 연구생 모집'),(2,1,'2019-06-01 00:00:00','학부 연구생 모집 공고\n \n  \n \n  \n \n 1. 해당자 : 세종대학교 재학생 및 대학원 진학 희망자\n \n 2. 연구분야 :\n \n   1) 시각적 분석 / 데이터 시각화\n \n   2) 데이터 분석\n \n   3) VR 기술\n \n   3) 뇌파 / 시선 등 생체 데이터 분석\n \n   4) Deep Learning 응용\n \n 3. 신청방법 : 아래 이메일로 연락\n \n 4. 담당교수 : 장 윤 교수님\n \n  \n \n **신청 접수 및 문의 메일:\n \n 유상봉 박사과정 usangbong@gmail.com\n \n  \n \n  Prev 전자정보통신공학과 문주희 교수님 연구실 학부 연구생 모집 [연구생모집] SW 개발자 모집 공고 Next ','	[장윤교수님 연구실] 학부 연구생 모집 공고'),(3,1,'2019-06-04 16:29:10','첨부파일을 확인하시고, 관심있는 학생들은 지원하시기 바랍니다.','차세대 네트워크 연구실 (양효식 교수님) 연구생 모집'),(4,1,'2019-06-04 16:29:24','첨부 파일 참고','지능기전공학부 학부연구생 모집 (연구실 별 모집)\r'),(5,1,'2019-06-04 16:32:03','하이브리드 전자소자 플랫폼(Hybrid Electronics Platform Laboratory, HELP LAB) 연구실에서 스마트 디스플레이, 센서, 반도체분야를 이끌어갈 인재를 모집합니다.\n\n\n\n\n\n※연구분야\n\n1. 프린팅기반 산화물 반도체 재료 및 트랜지스터\n\n2. 퇴행성 뇌질환 조기진단을 위한 준-2차원 반도체 센서 플랫폼\n\n3. 웨어러블 센서 기반의 생체신호 모니터링\n\n4. 자세한 연구내용 및 실적은 HELP LAB 홈페이지를 참조하세요 (바로가기)\n\n\n\n※향후진로\n\n1. 반도체, 디스플레이 관련 대기업\n\n2. 센서 재료 및 부품관련 대기업\n\n3. 스마트기기 분야 창업 등\n\n\n\n※모집인원 : 0명\n\n\n\n※자격조건\n\n1. 전기전자, 재료, 화학, 기계, 컴퓨터, 바이오관련 학과 전공자 모두 가능\n\n2. 반도체 및 디스플레이 재료 및 소자, 앱프로그래밍, 알고리즘 수업 이수자 우대\n\n\n\n※대우\n\n1. 개인연구공간, 컴퓨터 제공\n\n2. 연차별 연구보조금 차등지급(학부생의 경우 년차에 따라 지급이 달라짐. 석, 박사 지원금 지급)\n\n3. 우수연구결과 도출 시 해외학술발표 경비 지원 (미국, 유럽, 일본 등) 및 인센티브 지급\n\n\n\n※지원방법\n\n1. 이메일 주소로 본인의 이력서 제출 (관심연구분야, 관심 수업과목 및 이수한 과목 등 상세히 표시)\n\n2. 이메일 주소: youseung@sejong.ac.kr\n\n\n\n가족같은 분위기에 교수-학생간 허물없는 토론과 연구가 있는 HELP LAB에 오셔서 본인의 열정과 꿈을 실현해 보세요! HELP LAB은 언제나 열려있습니다. 이메일 또는 교수와의 만남을 통해 본인의 미래를 상담하세요!','하이브리드 전자소자 플랫폼 연구실 연구원 모집합니다.'),(6,1,'2019-06-26 00:27:07','dssddss','sdds'),(7,1,'2019-06-26 01:22:01','xxxxxxxxxxxxxxxxxx','xxxxx');
/*!40000 ALTER TABLE `noticeboard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ntcomment`
--

DROP TABLE IF EXISTS `ntcomment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ntcomment` (
  `ntcomment_id` int(11) NOT NULL,
  `ntcomment_issuedate` date DEFAULT NULL,
  `ntcomment_authorid` int(11) DEFAULT NULL,
  `ntcomment_contents` varchar(45) DEFAULT NULL,
  `ntboard_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ntcomment`
--

LOCK TABLES `ntcomment` WRITE;
/*!40000 ALTER TABLE `ntcomment` DISABLE KEYS */;
INSERT INTO `ntcomment` VALUES (1,'2019-05-30',1,'맞아 난 뚱땡이야!',1);
/*!40000 ALTER TABLE `ntcomment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prof-achievement`
--

DROP TABLE IF EXISTS `prof-achievement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prof-achievement` (
  `ach_id` int(11) NOT NULL,
  `title` longtext,
  `ach_type` varchar(45) DEFAULT NULL,
  `professor_id` int(11) NOT NULL,
  PRIMARY KEY (`ach_id`),
  KEY `fk_achievement_professor1_idx` (`professor_id`),
  CONSTRAINT `fk_achievement_professor1` FOREIGN KEY (`professor_id`) REFERENCES `professor` (`professor_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prof-achievement`
--

LOCK TABLES `prof-achievement` WRITE;
/*!40000 ALTER TABLE `prof-achievement` DISABLE KEYS */;
/*!40000 ALTER TABLE `prof-achievement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `professor`
--

DROP TABLE IF EXISTS `professor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `professor` (
  `professor_id` int(11) NOT NULL AUTO_INCREMENT,
  `uniqNum` int(11) NOT NULL,
  `professor_name` varchar(45) DEFAULT NULL,
  `professor_email` varchar(45) DEFAULT NULL,
  `professor_url` varchar(45) DEFAULT NULL,
  `professor_officeHour` varchar(45) DEFAULT NULL,
  `lab_id` int(11) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`professor_id`),
  KEY `fk_professor_lab1_idx` (`lab_id`),
  CONSTRAINT `fk_professor_lab1` FOREIGN KEY (`lab_id`) REFERENCES `lab` (`lab_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8 ROW_FORMAT=REDUNDANT;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `professor`
--

LOCK TABLES `professor` WRITE;
/*!40000 ALTER TABLE `professor` DISABLE KEYS */;
INSERT INTO `professor` VALUES (1,10001,'공성곤','skong@sejong.edu','http://ce.sejong.ac.kr/~iis/',NULL,1,'0000'),(2,10002,'국형준','kook@sejong.ac.kr','http://home.sejong.ac.kr/~kook/','월수 4:20-5:00pm',2,'0000'),(3,10003,'김영복','yungbkim@sejong.ac.kr','http://home.sejong.ac.kr/~yungbkim/','Mon/Wed 15~16:30 (HP 010-5380-5125)',47,'0000'),(4,10004,'김용국','ykim@sejong.ac.kr','http://ce.sejong.ac.kr/~ykim/','화목 오후 3:00 ~ 6:00',3,'0000'),(5,10005,'김해광','hkkim@sejong.ac.kr','http://home.sejong.ac.kr/~hkkim/','Monday and Tuesday from 13:00 to 16 hours',4,'0000'),(6,10006,'노용덕','novak@sejong.ac.kr','http://home.sejong.ac.kr/~novak/','수요일 : 오후 1:30 - 5:00',48,NULL),(7,10007,'노재춘','jano@sejong.ac.kr','http://home.sejong.ac.kr/~jano/','화,목: 2시 ~ 4시',5,NULL),(8,10008,'문승빈','sbmoon@sejong.ac.kr','http://home.sejong.ac.kr/~sbmoon/','Every Monday 2:00-3:00 pm',6,NULL),(9,10009,'문현준','hmoon@sejong.edu','http://home.sejong.ac.kr/~hmoon/','Mon,Wed 16:00~17:30',7,NULL),(10,10010,'박우찬','pwchan@sejong.ac.kr','http://home.sejong.ac.kr/~pwchan/',NULL,8,NULL),(11,10011,'박태순','tspark@sejong.ac.kr','http://home.sejong.ac.kr/~tspark/','월15:00-17:00',9,NULL),(12,10012,'송상훈','song@sejong.ac.kr','http://home.sejong.ac.kr/~song/','화: 16:00 ~ 17:00 목: 16:00 ~ 17:00',NULL,NULL),(13,10013,'신동규','shindk@sejong.ac.kr','http://home.sejong.ac.kr/~shindk/','월 오후 1:00-4:00 수 오후 1:00-4:00',10,NULL),(14,10014,'신동일','dshin@sejong.ac.kr','http://home.sejong.ac.kr/~dshin/',NULL,11,NULL),(15,10015,'유성준','sjyoo@sejong.ac.kr','http://home.sejong.ac.kr/~sjyoo/','월 13:30 ~ 15:00',12,NULL),(16,10016,'유영환','yhyou@sejong.ac.kr','http://home.sejong.ac.kr/~yhyou/','월수금 2~6시',13,NULL),(17,10017,'이영렬','yllee@sejong.ac.kr','http://home.sejong.ac.kr/~yllee/','5:00 ~ 6:00 PM, everyday',14,NULL),(18,10018,'최수미','smchoi@sejong.ac.kr','http://home.sejong.ac.kr/~smchoi/','학생면담은 이메일로 연락주세요.',15,NULL),(19,10019,'한동일','dihan@sejong.ac.kr','http://home.sejong.ac.kr/~dihan/','화/목/금 15시 ~ 18시',16,NULL),(20,10020,'나중채','jcna@sejong.ac.kr','http://home.sejong.ac.kr/~jcna08/','이메일로 문의',17,NULL),(21,10021,'박기호','ghpark@sejong.ac.kr','http://home.sejong.ac.kr/~ghpark/','화/목: 4:30 - 6:00',18,NULL),(22,10022,'양효식','hsyang@sejong.edu','http://home.sejong.ac.kr/~hsyang/',NULL,19,NULL),(23,10023,'윤은일','yunei@sejong.ac.kr','http://home.sejong.ac.kr/~yunei/',NULL,20,NULL),(24,10024,'임채훈','chlim@sejong.ac.kr','http://home.sejong.ac.kr/~chlim/','수,금 12:00 - 15:00',49,NULL),(25,10025,'장윤','jangy@sejong.ac.kr','https://sites.google.com/view/yunjang','면담을 원할 경우 이메일을 보내세요.',21,NULL),(26,10026,'곽진태','jkwak@sejong.ac.kr','www.kwaklab.net','T,Th: 3:00-4:30pm',22,NULL),(27,10027,'권기학',NULL,NULL,NULL,NULL,NULL),(28,10028,'Abolghasem Sadeghi-Niaraki','a.sadeghi@sejong.ac.kr',NULL,NULL,NULL,NULL),(29,10029,'Md. Jalil Piran','piran@sejong.ac.kr',NULL,NULL,NULL,NULL),(30,10030,'Shake Md Riazul Islam',NULL,NULL,NULL,NULL,NULL),(31,10031,'안용학',NULL,NULL,NULL,NULL,NULL),(32,10032,'임필옥','pollim@sejong.ac.kr',NULL,NULL,NULL,NULL),(33,10033,'Muhammad Raheel Bhutta','raheel.bhutta@sejong.ac.kr',NULL,NULL,NULL,NULL),(34,10034,'Anish Prasad Shrestha','anishpshrestha@sejong.ac.kr',NULL,NULL,NULL,NULL),(35,10035,'Rajendra Dhakal','rajendra@sejong.ac.kr',NULL,NULL,NULL,NULL),(36,10036,'Gyanendra Prasad JOSHI','joshi@sejong.ac.kr',NULL,NULL,NULL,NULL),(37,10037,'이수정','leesoo86@sejong.ac.kr','http://home.sejong.ac.kr/~soojeonglee/','금요일 16:00-17:00',23,NULL),(38,10038,'김도년',NULL,NULL,NULL,NULL,NULL),(39,10039,'장문정',NULL,NULL,NULL,NULL,NULL),(40,10040,'김원일','wikim@sejong.ac.kr','http://home.sejong.ac.kr/~wikim/','월,수 2:00-3:00 혹은 by appointment',24,NULL),(41,10041,'백성욱','sbaik@sejong.ac.kr','http://home.sejong.ac.kr/~sbaik/','화/목 14:00~16:00',25,NULL),(42,10042,'이종원','jwlee@sejong.ac.kr','http://home.sejong.ac.kr/~jwlee/','면담을 원하는 학생은 이메일로 연락 주세요.',26,NULL),(43,10043,'권순일','sikwon@sejong.ac.kr','http://home.sejong.ac.kr/~sikwon/','TBA',27,NULL),(44,10044,'송오영','oysong@sejong.ac.kr','http://home.sejong.ac.kr/~oysong/','월수2:00~3:00',28,NULL),(45,10045,'최준연','zoon@sejong.ac.kr','http://home.sejong.ac.kr/~joonyeon/','본인의 시간표와 면담 희망 시간을 email 로 보내면 됩니다.',29,NULL),(46,10046,'노승민','smrho@sejong.edu','http://seungminrho.kr/',NULL,31,NULL),(47,10047,'박상일','sipark@sejong.ac.kr','http://home.sejong.ac.kr/~sipark/','언제든 연구실에 전화하고 찾아오시면 됩니다.',30,NULL),(48,10048,'이병희',NULL,NULL,NULL,NULL,NULL),(49,10049,'Irfan Mehmood',NULL,NULL,NULL,NULL,NULL),(50,10050,'Maqbool Hussain',NULL,NULL,NULL,NULL,NULL),(51,10051,'Muhammad Afzal',NULL,NULL,NULL,NULL,NULL),(52,10052,'Muhammad Attique',NULL,NULL,NULL,NULL,NULL),(53,10053,'MUHAMMAD Khan',NULL,NULL,NULL,NULL,NULL),(54,10054,'김영갑','alwaysgabi@sejong.ac.kr','https://sites.google.com/site/alwaysgabi/',NULL,NULL,NULL),(55,10055,'박기웅','woongbak@sejong.ac.kr','http://core.kaist.ac.kr/~woongbak/','Set appointment by email request',32,NULL),(56,10056,'송재승','jssong@sejong.ac.kr','http://jseungsong.weebly.com/','일정표에서 가능한 시간 확인 바랍니다. ',33,NULL),(57,10057,'신지선','jsshin@sejong.ac.kr','http://home.sejong.ac.kr/~jsshin/','이메일 통해서 정함.',34,NULL),(58,10058,'윤주범','jbyun@sejong.ac.kr','http://home.sejong.ac.kr/~jbyun/','매주 화 10:00~17:00',35,NULL),(59,10059,'이광수','kwangsu@sejong.ac.kr','https://sites.google.com/site/kwangsulee07/',NULL,36,NULL),(60,10060,'강지원',NULL,NULL,NULL,NULL,NULL),(61,10061,'박대섭',NULL,NULL,NULL,NULL,NULL),(62,10062,'Aamir Shahzad',NULL,NULL,NULL,NULL,NULL),(63,10063,'Lewis Nkenyereye',NULL,NULL,NULL,NULL,NULL),(64,10064,'하길찬','kcha@sejong.ac.kr','http://home.sejong.ac.kr/~kcha/','오전 10시 30분 ~ 12시 오후 3시 ~ 4시 30분',50,NULL),(65,10065,'송재욱','jaewook.song@sejong.ac.kr','http://home.sejong.ac.kr/~jaewooksong/','By Appointment (e-mail)',37,NULL),(66,10066,'조윤식','yscho@sejong.ac.kr',NULL,'',51,NULL),(67,10067,'이승원','swlsejong@sejong.ac.kr','http://home.sejong.ac.kr/~swlsejong/','E-MAIL 로 사전 연락주세요.',38,NULL),(68,10068,'Lewis Nkenyereye','',NULL,NULL,NULL,NULL),(69,10069,'김형석','hyungkim@sejong.ac.kr','http://home.sejong.ac.kr/~hyungkim/4.html','이메일로 면담 신청 가능',39,NULL),(70,10070,'박성훈','s.park@sejong.ac.kr',NULL,NULL,52,NULL),(71,10071,'이병무','blee@sejong.ac.kr','https://sites.google.com/view/blee/home','By appointment',40,NULL),(72,10072,'임유승','youseung@sejong.ac.kr','https://helplab.wixsite.com/helplab','	이메일로 연락 주세요.',41,NULL),(73,10073,'서재규','jksuhr@sejong.ac.kr ','https://sites.google.com/view/ivpg/members',NULL,42,NULL),(74,10074,'송진우','jwsong@sejong.ac.kr ','https://sites.google.com/view/incsl/home','jwsong@sejong.ac.kr ',43,NULL),(75,10075,'Bui Duc Hong Phuc','buidhp@sejong.ac.kr ',NULL,NULL,NULL,NULL),(76,10076,'Shakhawat Hossain',NULL,NULL,NULL,NULL,NULL),(77,10077,'Muhammad Tabish Niaz','',NULL,NULL,NULL,NULL),(78,10078,'정철','cjeong@sejong.ac.kr','https://sites.google.com/view/sejong-icl/home',NULL,45,NULL),(79,10079,'최유경','ykchoi@sejong.ac.kr   ','https://www.rcv.sejong.ac.kr/',NULL,46,NULL),(80,10080,'이진영','jinyounglee@sejong.ac.kr','https://sites.google.com/view/ivcl',NULL,44,NULL);
/*!40000 ALTER TABLE `professor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `research`
--

DROP TABLE IF EXISTS `research`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `research` (
  `professor_id` int(11) NOT NULL,
  `field_id` int(11) NOT NULL,
  PRIMARY KEY (`field_id`,`professor_id`),
  KEY `fk_research_field1_idx` (`field_id`),
  KEY `fk_research_professor1_idx` (`professor_id`),
  CONSTRAINT `fk_research_field1` FOREIGN KEY (`field_id`) REFERENCES `field` (`field_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_research_professor1` FOREIGN KEY (`professor_id`) REFERENCES `professor` (`professor_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `research`
--

LOCK TABLES `research` WRITE;
/*!40000 ALTER TABLE `research` DISABLE KEYS */;
INSERT INTO `research` VALUES (1,1),(5,1),(17,1),(19,1),(80,1),(2,2),(4,2),(9,2),(15,2),(25,2),(40,2),(46,2),(3,3),(22,3),(69,3),(4,4),(5,5),(6,6),(8,7),(79,7),(9,8),(46,8),(12,9),(21,9),(11,10),(13,11),(14,12),(15,12),(23,12),(46,12),(16,13),(22,13),(78,13),(6,14),(18,14),(44,14),(47,14),(4,15),(9,15),(19,15),(41,15),(79,15),(20,16),(8,17),(21,17),(69,17),(23,18),(41,18),(45,18),(25,20),(26,21),(27,22),(42,23),(43,23),(43,24),(45,25),(41,27),(54,28),(55,28),(54,29),(55,30),(56,31),(24,32),(57,32),(59,32),(64,32),(24,33),(57,33),(58,33),(59,34),(64,36),(18,38),(26,38),(65,40),(65,41),(67,42),(67,43),(70,44),(16,45),(69,45),(71,45),(78,45),(72,46),(72,47),(17,52),(71,52),(78,53),(7,54),(59,54),(7,55),(7,56),(7,57),(1,58),(4,58),(9,58),(1,59),(1,60),(1,61),(6,62),(4,63),(5,64),(9,65),(17,65),(26,65),(37,65),(78,65),(80,65),(10,66),(10,67),(11,68),(13,69),(14,70),(15,70),(46,70),(17,71),(80,71),(18,72),(20,73),(21,74),(59,74),(23,75),(23,76),(23,77),(45,77),(65,77),(66,77),(26,78),(41,79),(79,79),(43,80),(44,80),(47,80),(43,81),(44,81),(57,82),(58,83),(69,84);
/*!40000 ALTER TABLE `research` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `id` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `auth` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','0000','관리자','0'),(2,'syhwang','1229','황수영','2'),(3,'suhwa','0219','채수화','2'),(4,'qkralwn','0703','박미주','2'),(5,'yoon','0119','윤소현','2'),(6,'5dong','1215','양수진','2'),(7,'bakhi','0323','박희진','2'),(8,'hmkoo','0319','구혜민','2'),(9,'doyoung','0721','황도영','2'),(10,'jihyun','0924','지현','2'),(11,'dot2','1214','이정음','2'),(13,'ss','0000','황수수','2');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_dept`
--

DROP TABLE IF EXISTS `work_dept`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `work_dept` (
  `professor_id` int(11) NOT NULL,
  `dept_id` int(11) NOT NULL,
  PRIMARY KEY (`professor_id`,`dept_id`),
  KEY `fk_work-dept_department1_idx` (`dept_id`),
  KEY `fk_work-dept_professor1_idx` (`professor_id`),
  CONSTRAINT `fk_work-dept_department1` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_work-dept_professor1` FOREIGN KEY (`professor_id`) REFERENCES `professor` (`professor_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_dept`
--

LOCK TABLES `work_dept` WRITE;
/*!40000 ALTER TABLE `work_dept` DISABLE KEYS */;
INSERT INTO `work_dept` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(12,1),(13,1),(14,1),(15,1),(16,1),(17,1),(18,1),(19,1),(20,1),(21,1),(22,1),(23,1),(24,1),(25,1),(26,1),(27,1),(28,1),(29,1),(30,1),(31,1),(32,1),(33,1),(34,1),(35,1),(36,1),(37,1),(38,1),(39,1),(40,2),(41,2),(42,2),(43,2),(44,2),(45,2),(46,2),(47,2),(48,2),(49,2),(50,2),(51,2),(52,2),(53,2),(1,3),(7,3),(13,3),(25,3),(40,3),(54,3),(55,3),(56,3),(57,3),(58,3),(59,3),(60,3),(61,3),(62,3),(63,3),(64,3),(7,4),(15,4),(25,4),(26,4),(40,4),(41,4),(45,4),(65,4),(66,4),(67,4),(69,5),(70,5),(71,5),(72,5),(73,5),(74,5),(75,5),(76,5),(77,5),(78,5),(79,5),(80,5);
/*!40000 ALTER TABLE `work_dept` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `com`
--

/*!50001 DROP VIEW IF EXISTS `com`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `com` AS select `a`.`dept_name` AS `dept_name`,`b`.`lab_name` AS `lab_name`,`c`.`professor_name` AS `professor_name`,`c`.`professor_email` AS `professor_email`,`b`.`lab_location` AS `lab_location`,`b`.`lab_tel` AS `lab_tel` from (((`department` `a` join `lab` `b`) join `professor` `c`) join `work_dept` `d`) where ((`a`.`dept_id` = `d`.`dept_id`) and (`d`.`professor_id` = `c`.`professor_id`) and (`b`.`professor_id` = `c`.`professor_id`) and (`a`.`dept_id` = 1)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `dept`
--

/*!50001 DROP VIEW IF EXISTS `dept`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `dept` AS select `a`.`dept_name` AS `dept_name`,`b`.`lab_name` AS `lab_name`,`c`.`professor_name` AS `professor_name`,`c`.`professor_email` AS `professor_email`,`c`.`professor_url` AS `professor_url`,`b`.`lab_location` AS `lab_location`,`b`.`lab_tel` AS `lab_tel` from (((`SejongLab_debug`.`department` `a` join `SejongLab_debug`.`professor` `c`) join `SejongLab_debug`.`work_dept` `d`) join (select `SejongLab_debug`.`lab`.`lab_name` AS `lab_name`,`SejongLab_debug`.`lab`.`lab_location` AS `lab_location`,`SejongLab_debug`.`lab`.`lab_tel` AS `lab_tel`,`SejongLab_debug`.`lab`.`professor_id` AS `professor_id` from `SejongLab_debug`.`lab`) `b`) where ((`a`.`dept_id` = `d`.`dept_id`) and (`d`.`professor_id` = `c`.`professor_id`) and (`b`.`professor_id` = `c`.`professor_id`) and (`a`.`dept_id` = '5')) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `dp`
--

/*!50001 DROP VIEW IF EXISTS `dp`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `dp` AS select `a`.`dept_name` AS `dept_name`,`b`.`lab_name` AS `lab_name`,`c`.`professor_name` AS `professor_name`,`c`.`professor_email` AS `professor_email`,`b`.`lab_location` AS `lab_location`,`b`.`lab_tel` AS `lab_tel` from (((`department` `a` join `lab` `b`) join `professor` `c`) join `work_dept` `d`) where ((`a`.`dept_id` = `d`.`dept_id`) and (`d`.`professor_id` = `c`.`professor_id`) and (`b`.`professor_id` = `c`.`professor_id`) and (`a`.`dept_id` = 1)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-28  8:16:08
