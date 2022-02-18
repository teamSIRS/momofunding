-- MariaDB dump 10.19  Distrib 10.6.5-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: momofunding
-- ------------------------------------------------------
-- Server version	10.6.5-MariaDB-1:10.6.5+maria~focal

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `creator`
--

DROP TABLE IF EXISTS `creator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `creator` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `register_time` datetime(6) DEFAULT NULL,
  `account` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `creator_content` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `creator_image_path` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `creator_image_url` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `creator_name` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tel` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `project_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKbgprdixg1i47ad53wmaw88lfr` (`project_id`),
  CONSTRAINT `FKbgprdixg1i47ad53wmaw88lfr` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creator`
--

LOCK TABLES `creator` WRITE;
/*!40000 ALTER TABLE `creator` DISABLE KEYS */;
INSERT INTO `creator` VALUES (1,NULL,'241-424-35322','깨끗한 먹거리를 만들겠습니다. 안심하며 먹을 수 있는 음식 싸푸드','/var/images/creator/1_creator.jpg','https://i6a202.p.ssafy.io/api/images/creator/1_creator.jpg','싸피푸드','ssafyfood@naver.com','010-2482-9393',1),(2,NULL,'241-424-35322','명장의 만두. 김씨 손만두입니다.','/var/images/creator/2_creator.jpg','https://i6a202.p.ssafy.io/api/images/creator/2_creator.jpg','김씨 손만두','ssafyfood@naver.com','010-2482-9393',2),(3,NULL,'241-424-35322','맛좋고 영양만점 디저트집','/var/images/creator/3_creator.jpg','https://i6a202.p.ssafy.io/api/images/creator/3_creator.jpg','싸피디저트','ssafyfood@naver.com','010-2482-9393',3),(4,NULL,'2251-12612','전국 최고의 김치 박가네 김치','/var/images/creator/4_creator.jpg','https://i6a202.p.ssafy.io/api/images/creator/4_creator.jpg','박가네 김치','parkkimchi@naver.com','010-1244-3276',4),(5,NULL,'110-242-523523','편안한 가구, 싸피다인 에서 시작하세요.','/var/images/creator/5_creator.jpg','https://i6a202.p.ssafy.io/api/images/creator/5_creator.jpg','싸피다인','dinessff@naver.com','010-2412-1791',5),(6,NULL,'110-242-523523','편안한 가구, 싸피다인 에서 시작하세요.','/var/images/creator/6_creator.jpg','https://i6a202.p.ssafy.io/api/images/creator/6_creator.jpg','싸피다인','dinessff@naver.com','010-2412-1791',6),(7,NULL,'110-242-523523','편안한 가구, 싸피다인 에서 시작하세요.','/var/images/creator/7_creator.jpg','https://i6a202.p.ssafy.io/api/images/creator/7_creator.jpg','싸피다인','dinessff@naver.com','010-2412-1791',7),(8,NULL,'239-539393-333','캠핑 관련 용품은 싸마운틴 피스.','/var/images/creator/default.png','https://i6a202.p.ssafy.io/api/images/creator/default.png','싸마운틴 피스','mountain@naver.com','010-9984-2322',8),(9,NULL,'241-424-35322','편안한 가구, 싸피다인 에서 시작하세요.','/var/images/creator/6_creator.jpg','https://i6a202.p.ssafy.io/api/images/creator/6_creator.jpg','싸피다인','dinessff@naver.com','010-2412-1791',9),(10,NULL,'107207207','모션데스크의 일등 데스카','/var/images/creator/default.png','https://i6a202.p.ssafy.io/api/images/creator/default.png','데스카','deska@naver.com','010-9841-3226',10),(11,NULL,'239-539393-333','진짜 가구의 명품 싸로스.','/var/images/creator/11_creator.jpg','https://i6a202.p.ssafy.io/api/images/creator/11_creator.jpg','싸로스','ssarose@naver.com','010-9843-3274',11),(12,NULL,'239-539393-333','진짜 가구의 명품 싸로스.','/var/images/creator/12_creator.jpg','https://i6a202.p.ssafy.io/api/images/creator/12_creator.jpg','싸로스','ssarose@naver.com','010-9843-3274',12),(13,NULL,'36237495','똑똑한 청소기 로봇청소기 싸푸.','/var/images/creator/default.png','https://i6a202.p.ssafy.io/api/images/creator/default.png','싸푸','ssafu@naver.com','010-9284-2712',13),(14,NULL,'4584523-235','내방을 화려하게 스마트 조명 싸라이트','/var/images/creator/14_creator.jpg','https://i6a202.p.ssafy.io/api/images/creator/14_creator.jpg','싸라이트','lightyourroom@naver.com','010-1784-3772',14),(15,NULL,'2251-12612','정말 좋은 면도기','/var/images/creator/default.png','https://i6a202.p.ssafy.io/api/images/creator/default.png','면도러','myeonn@naver.com','010-1244-3276',15),(16,NULL,'252-0326-36-1','대한민국 제일의 초음파 세척기','/var/images/creator/default.png','https://i6a202.p.ssafy.io/api/images/creator/default.png','초음파 세척기','music@naver.com','010-2994-2357',16),(17,NULL,'823636-3522','신발관련해서는 여기다! 싸피슈즈~','/var/images/creator/default.png','https://i6a202.p.ssafy.io/api/images/creator/default.png','싸피슈즈','sshose@naver.com','010-2169-2322',17),(18,NULL,'823636-3522','신발관련해서는 여기다! 싸피슈즈~','/var/images/creator/default.png','https://i6a202.p.ssafy.io/api/images/creator/default.png','싸피슈즈','sshose@naver.com','010-2169-2322',18),(19,NULL,'11774-3-252','편한 패션 1인자 싸피 파숑','/var/images/creator/19_creator.jpg','https://i6a202.p.ssafy.io/api/images/creator/19_creator.jpg','싸피 파숑','ssafyfashion@naver.com','010-2694-1167',19),(20,NULL,'11774-3-252','편한 패션 1인자 싸피 파숑','/var/images/creator/20_creator.jpg','https://i6a202.p.ssafy.io/api/images/creator/20_creator.jpg','싸피 파숑','ssafyfashion@naver.com','010-2694-1167',20),(21,'2022-02-17 18:56:49.076000','','','/var/images/creator/default.png','https://i6a202.p.ssafy.io/api/images/creator/default.png','','','',21),(22,'2022-02-17 19:13:51.681000','','','/var/images/creator/default.png','https://i6a202.p.ssafy.io/api/images/creator/default.png','','','',22);
/*!40000 ALTER TABLE `creator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `live`
--

DROP TABLE IF EXISTS `live`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `live` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `register_time` datetime(6) DEFAULT NULL,
  `content` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `session_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_play_time` bigint(20) DEFAULT NULL,
  `viewer_count` int(11) DEFAULT NULL,
  `live_state_id` bigint(20) NOT NULL,
  `project_id` bigint(20) NOT NULL,
  `project_category_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKsl9wqctiiijbk8kdew6ajt7r9` (`live_state_id`),
  KEY `FKl6a2meipafjkoe6auqx1fmvbw` (`project_id`),
  KEY `FKfvwk9ucghw6b9n6bo7mwtrrwn` (`project_category_id`),
  CONSTRAINT `FKfvwk9ucghw6b9n6bo7mwtrrwn` FOREIGN KEY (`project_category_id`) REFERENCES `project_category` (`id`),
  CONSTRAINT `FKl6a2meipafjkoe6auqx1fmvbw` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`),
  CONSTRAINT `FKsl9wqctiiijbk8kdew6ajt7r9` FOREIGN KEY (`live_state_id`) REFERENCES `live_state` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `live`
--

LOCK TABLES `live` WRITE;
/*!40000 ALTER TABLE `live` DISABLE KEYS */;
INSERT INTO `live` VALUES (1,'2022-02-07 00:00:00.000000','고향 그대로의 맛 김씨 손 만두 출시 임박! 지금 바로 모모펀딩에서 김치 손 만두를 만나보세요!','232452345','김씨손만두 보고가세요~',300,1200,2,2,1),(2,'2022-02-03 00:00:00.000000','만두 출시 임박! 지금 예약하면 30% 할인!!','232422345','김씨손만두 보고가세요~!!',0,1500,2,2,1),(3,'2022-02-17 18:06:44.730000','베개 보러 오세요','8o5lmcdkftl','수면퀄리티 보장 메모리폼 베개',453,5,2,5,2),(4,'2022-02-17 18:17:08.958000','반갑습니다','9yn1r76fd7','매트리스 안녕하세용',90,5,2,6,2),(5,'2022-02-17 18:19:23.916000','놓치지 마세요!','pg00d0b6h6n','매트리스 펀딩 시작했습니다',7,0,2,6,2),(6,'2022-02-17 18:20:30.256000','쿠키 드시러 오세요^0^','p9cg712owb','🎉한 입만 먹어도 사르르 녹는 싸피 쿠키...눈으로 즐기러 오세요~!~!',121,4,2,3,1),(7,'2022-02-17 18:23:01.504000','쿠키 드셔보실라우?','6oysf0zg7aq','🧨입 안에서 폭죽이 터지는 쿠기 즐기러 오세요~',18,0,2,3,1),(8,'2022-02-17 18:24:29.189000','인기 제품 스마트 조명!','aamxf0emvjp','💡스마트 조명 펀딩 시작합니다!!💡',28,3,2,14,4),(9,'2022-02-17 18:25:33.233000','최고의 스마트 조명 얼른 들어오세요!!','afbn1x3b9k','스마트 조명 다시 펀딩 합니다 재 구매율 200%',33,3,2,14,4),(10,'2022-02-17 18:26:39.886000','스마트 조명','bw5z95px0cg','필수 아이템 스마트 조명 내 기분에 따라 달라지는 색깔?',6,0,2,14,4),(11,'2022-02-17 18:29:52.763000','여러분 캠핑에서 얼마나 중요한 게 식기인데...다들 아시죠?\n식기 보러 오세요^^!','21zxcm4drmr','🧤캠핑 식기 보러오세요~~',1615,3,2,8,2),(12,'2022-02-17 18:29:57.587000','당신을 좋은 곳으로 이끌어 줄 구두!!','why267x3qz','구두구두',1783,1,2,18,5),(13,'2022-02-17 18:31:03.715000','스프링 서랍장\n','9xdnrdhvglm','봄처럼 따뜻한 스프링 서랍장 지금 펀딩 시작합니다.!',739,2,2,12,3),(14,'2022-02-17 18:44:50.230000','스프링스프링','dktq79rlvwk','스프링 서랍장? 스프링 처럼 따뜻한 최고의 서랍장 펀딩 시작!!',2278,2,2,12,3),(15,'2022-02-17 18:57:48.387000','스마트 스마트~~!!!','0wash68x811','스마트한 조명은 내가 최고다~~~',61,5,2,14,4),(16,'2022-02-17 20:00:48.353000','','7f7wsixptyg','🎀편안한 베개 보고 가셔요~!',981,0,2,5,2),(17,'2022-02-18 00:44:49.898000','구두구두구두 아기다리고기다리던 구두입니다','nln1aw77v2o','다시는 길을 잃고 싶지 않은 당신을 위해...',0,1,1,18,5),(18,'2022-02-18 00:46:25.746000','스프링 서랍장','rfzzb9txcch','따뜻한 가구 서랍장.. 최고의 품질 스프링 서랍장 펀딩 시작!!!',0,2,1,12,3);
/*!40000 ALTER TABLE `live` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `live_state`
--

DROP TABLE IF EXISTS `live_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `live_state` (
  `id` bigint(20) NOT NULL,
  `state_name` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `live_state`
--

LOCK TABLES `live_state` WRITE;
/*!40000 ALTER TABLE `live_state` DISABLE KEYS */;
INSERT INTO `live_state` VALUES (1,'진행중'),(2,'종료');
/*!40000 ALTER TABLE `live_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notice`
--

DROP TABLE IF EXISTS `notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notice` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `register_time` datetime(6) DEFAULT NULL,
  `content` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `viewer_count` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKcvf4mh5se36inrxn7xlh2brfv` (`user_id`),
  CONSTRAINT `FKcvf4mh5se36inrxn7xlh2brfv` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notice`
--

LOCK TABLES `notice` WRITE;
/*!40000 ALTER TABLE `notice` DISABLE KEYS */;
INSERT INTO `notice` VALUES (1,'2022-01-13 00:00:00.000000','모모펀딩을 시작합니다.','공지사항입니다.',52,5),(2,'2022-01-21 00:00:00.000000','모모펀딩은 선생님들 이라는 팀이 만든 라이브 크라우드 펀딩 서비스 입니다.','공지입니다.',39,6),(3,'2022-02-02 00:00:00.000000','펀딩 창작자의 수수료율을 3%에서 5%으로 올립니다.','공지입니다.',20,5),(4,'2022-02-04 00:00:00.000000','2022년 상반기 2조 전원 취업 완료 입니다.','긴급 공지입니다.',28,5),(5,'2022-02-06 00:00:00.000000','공통 프로젝트 수고 많으셨습니다.','공지사항입니다.',13,5),(6,'2022-02-11 00:00:00.000000','현재 라이브에서 알 수 없는 오류가 발생하고 있습니다. 이점 양해 부탁드립니다.','공지입니다.',47,6),(7,'2022-02-13 00:00:00.000000','현재 서비스 전반적으로 보수중에 있습니다. 빠른 시일내로 좋은 서비스로 찾아 뵙겠습니다.','공지입니다.',75,6);
/*!40000 ALTER TABLE `notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `register_time` datetime(6) DEFAULT NULL,
  `current_amount` int(11) DEFAULT 0,
  `expiration_date` datetime(6) DEFAULT NULL,
  `funding_goal` int(11) DEFAULT NULL,
  `is_live_playing` tinyint(1) DEFAULT 0,
  `main_image_path` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `main_image_url` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `project_content` varchar(5000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `project_name` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `start_date` datetime(6) DEFAULT NULL,
  `sub_image_path` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `sub_image_url` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `summary` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `project_category_id` bigint(20) DEFAULT NULL,
  `project_state_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKnpaedaehkbviowukfk5jaignw` (`project_category_id`),
  KEY `FKfbiq8k9m5mxirfxcjtm6xa0m5` (`project_state_id`),
  KEY `FKo06v2e9kuapcugnyhttqa1vpt` (`user_id`),
  CONSTRAINT `FKfbiq8k9m5mxirfxcjtm6xa0m5` FOREIGN KEY (`project_state_id`) REFERENCES `project_state` (`id`),
  CONSTRAINT `FKnpaedaehkbviowukfk5jaignw` FOREIGN KEY (`project_category_id`) REFERENCES `project_category` (`id`),
  CONSTRAINT `FKo06v2e9kuapcugnyhttqa1vpt` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'2022-02-04 00:00:00.000000',0,'2022-02-28 00:00:00.000000',700000,0,'/var/images/project/1_main.jpg','https://i6a202.p.ssafy.io/api/images/project/1_main.jpg','통통하다못해 통통 뛰는 수박!!\n정말 한 번 드셔보시면 반하실 거예요.\n\n\n\n이 수박을 누가 만들었나요? 바로 저!!!','활발한 당신 뱃 속의 수박을 위해',NULL,'/var/images/project/1_sub.jpg','https://i6a202.p.ssafy.io/api/images/project/1_sub.jpg','통통한 수박입니다. 맛나요~!',1,1,1),(2,'2022-02-01 00:00:00.000000',442000,'2022-02-28 00:00:00.000000',2000000,0,'/var/images/project/2_main.jpg','https://i6a202.p.ssafy.io/api/images/project/2_main.jpg','30년 전통의 레시피로 빚은 김씨 손 만두!\n너무너무 맛있습니다\n\n\n만두의 참맛을 아는 당신이라면 눈물을 흘리며 먹을 그 맛이랍니다.\n\n속이 꽉찬 왕만두\n한입 크키의 핑거 푸드 만두\n적절한 크기의 한 끼 식사 대용 만두까지!\n\n취향껏 선택해보세요!\n\n\n후회하지 않을 그 맛!\n바로 김씨 손만두랍니다.','만두만두! 맛있을 만두 하지~~',NULL,'/var/images/project/2_sub.jpg','https://i6a202.p.ssafy.io/api/images/project/2_sub.jpg','김씨 손만두입니다. 정말 손으로 빚었답니다!',1,2,1),(3,'2022-02-05 00:00:00.000000',277000,'2022-03-05 00:00:00.000000',700000,0,'/var/images/project/3_main.jpg','https://i6a202.p.ssafy.io/api/images/project/3_main.jpg','성장기 아이에게 꼭 필요한 영양분이 가득 담겨있는, 싸피 쿠키!!\n\n아이들이 어찌나 좋아하는지~\n아이들 간식거리로 안성맞춤입니다.\n\n\n\n아이들 크는데 정말 많은 영양소가 필요하죠ㅠㅠ\n그만큼 챙겨먹이기도 힘든데요.\n바로 이 싸피 쿠키 하나에, 아이가 자라는 데 필요한 영양소가 전부 들어있다는 사실!\n\n영양분이 들어있어 맛없을 거라는 편견은 NoNoNo~~\n맛도 좋아 아이들이 더 달라고 난리랍니다^^\n\n\n\n아이들 생일파티에도 간식으로 내놓으면 딱이구요.\n어린아이가 있는 집에 선물용으로도 참 좋아요~\n\n\n\n아이들을 위한 싸피쿠키!\n이제 더이상 아이들 건강 챙기느라 힘겨워하지 마세요!','[2차 펀딩] 아이들이 좋아하는 영양간식 싸피쿠키',NULL,'/var/images/project/3_sub.jpg','https://i6a202.p.ssafy.io/api/images/project/3_sub.jpg','한 입 베어물면 고소하게 녹아내리는 싸피쿠키',1,2,1),(4,'2022-01-10 00:00:00.000000',0,'2022-01-29 00:00:00.000000',5000000,0,'/var/images/project/4_main.jpg','https://i6a202.p.ssafy.io/api/images/project/4_main.jpg','제철 재료로 정성들여 만든 박가네 김치, 5가지 종류의 다양한 김치를 맛보세요!!','박가네 김치',NULL,'/var/images/project/4_sub.jpg','https://i6a202.p.ssafy.io/api/images/project/4_sub.jpg','박가네 김치 5종 세트',1,3,3),(5,'2022-02-02 00:00:00.000000',1072000,'2022-02-25 00:00:00.000000',15000000,0,'/var/images/project/5_main.jpg','https://i6a202.p.ssafy.io/api/images/project/5_main.jpg','100만개의 메모리폼이 당신의 목에 맞춰 움직입니다. 냄새 없는 편안한 베개 싸피베개와 함께하세요\n\n\n평상시 목이 아파 고생하는 당신...\n혹시 편두통도 있으시진 않나요?\n\n\n편두통의 주원인 중 하나가 바로 목에 있다는 사실도 알고 계신가요??\n\n\n\n그런 여러분을 위해 준비했답니다.\n\n\n\n100만개의 메모리폼과 함께하는 싸피베개!!\n당신의 목 움직임을 인식해 편안하게~\n올바르지 못한 목의 움직임 또한 서서히 잡아준답니다.\n\n\n\n\n\n자면서 편안한 목의 움직임을 느껴보세요.\n싸피베개입니다^^!','목이 편안한 베개, 100만개의 메모리 폼',NULL,'/var/images/project/5_sub.jpg','https://i6a202.p.ssafy.io/api/images/project/5_sub.jpg','목이 정말 편안~한 메모리폼 베개',2,2,2),(6,'2022-02-01 00:00:00.000000',1725000,'2022-02-20 00:00:00.000000',20000000,0,'/var/images/project/6_main.jpg','https://i6a202.p.ssafy.io/api/images/project/6_main.jpg','프랑스 GEI 인증받은 싸피 매트리스, 만족도 4.9/5 를 자랑하는 싸피매트리스에서 편안하게 주무세요\n\n\n\n매트리스가 너무 푹신하거나! 너무 단단하거나!\n사람에게 불편하다는 사실 다들 알고 계셨나요?ㅠㅠ\n\n\n\n특히 누군가와 함께 해야할 때!\n다른 사람의 움직임이 내게도 전달된다면....?\n\n\n상상만으로도 편한 잠을 이룰 수 없을 것같은데요.\n\n\n\n그런 당신을 위한 매트리스가 여기 있습니다.\n\'싸피 매트리스\'\n\n\n프랑스 GEI 인증을 받은 안정성 높은 매트리스입니다.\n\n옆에서 아이가 뛰어 놀아도~?\n옆에서 타자기를 두드려도~?\n\n옆에 누운 당신에게는 미세한 진동조차 전해지지 않을거예요!\n\n\n편안한 당신의 휴식을 위하여\n싸피 매트리스 하나, 집에 장만하시는 건 어떨까요?','푹신 푹신 싸피 매트리스',NULL,'/var/images/project/6_sub.jpg','https://i6a202.p.ssafy.io/api/images/project/6_sub.jpg','셋이 누워도 하나 누운 것같은 싸피 매트리스',2,2,2),(7,'2022-01-27 00:00:00.000000',293000000,'2022-02-05 00:00:00.000000',127000000,0,'/var/images/project/7_main.jpg','https://i6a202.p.ssafy.io/api/images/project/7_main.jpg','난로 하나만으로 내 집이 북유럽이 된다구? 올 겨울 따뜻하게 북유럽 감성으로 즐겨보아요~~','[5차!!] 북유럽 디자인 난로 싸푸스토, 입체난방',NULL,'/var/images/project/7_sub.jpg','https://i6a202.p.ssafy.io/api/images/project/7_sub.jpg','난로 싸푸스토',2,3,4),(8,'2022-01-27 00:00:00.000000',3247000,'2022-03-30 00:00:00.000000',7000000,0,'/var/images/project/8_main.jpg','https://i6a202.p.ssafy.io/api/images/project/8_main.jpg','행복한 캠핑, 먹거리가 빠질 수 없겠죠~~\n스테인레스재질로 튼튼하고 깨끗한 싸푸스토 캠핑 식기, 4계절 용으로 언제든지 사용가능합니다~!!\n\n\n우리 가족 행복한 캠핑,\n연인과의 즐거운 캠핑,\n친구들과의 잊을 수 없는 캠핑!\n\n\n여러분의 추억에 함께 합니다.\n\'싸푸스토 캠핑 식기\'\n\n\n\n저희 \'싸마운틴 피스\'는 산에서의 평화에 주목하는 사람들입니다.\n산에서의 평화란 무엇일까요?\n\n\n바로 캠핑에서의 힐링입니다.\n\n\n\n캠핑에서 가장 중요한 것.\n바로 그릇인데요.\n\n다양한 요리를 해먹는 만큼, 식기는 캠핑에서 정말 중요한 존재입니다.\n\n\n\n위생적인 그릇,\n부식되지 않는 그릇,\n요리하기 편한 그릇,\n안전한 그릇!\n\n\n바로 싸푸스토 캠핑 식기입니다.','싸푸스토 캠핑 식기',NULL,'/var/images/project/8_sub.jpg','https://i6a202.p.ssafy.io/api/images/project/8_sub.jpg','때타지 않고 고급스러운 스테인레스 캠핑 식기',2,2,1),(9,'2022-01-27 00:00:00.000000',640000,'2022-03-20 00:00:00.000000',600000,0,'/var/images/project/9_main.jpg','https://i6a202.p.ssafy.io/api/images/project/9_main.jpg','사용자에 딱 맞는 사이즈의 흔들의자, 장인이 손수 제작합니다. 싸피 흔들의자에 앉아 편안한 휴식을 즐기세요\n\n\n\n세상이 흔들릴 정도로 흔들리지만, 안정적입니다.\n장인이 손수 제작하는 핸드메이드 작품이기 때문에,\n제작기간은 다소 많이 걸립니다.\n한정 수량 진행예정입니다.\n\n\n\n하지만 결코 후회하지 않으실 겁니다.\n안정적이지만, 흔들거리는,\n당신의 힐링을 위한 의자입니다.\n\n\n\n새롭게 흔들리는 당신의 세상을 느껴보세요.','목표달성 600%의 신화 싸피 흔들의자 4차 펀딩',NULL,'/var/images/project/9_sub.jpg','https://i6a202.p.ssafy.io/api/images/project/9_sub.jpg','흔들~ 흔들~ 세상이 흔들리는 흔들의자',3,2,2),(10,'2022-01-27 00:00:00.000000',170000000,'2022-02-10 00:00:00.000000',200000000,0,'/var/images/project/10_main.jpg','https://i6a202.p.ssafy.io/api/images/project/10_main.jpg','용도에 맞게 자유자재로 높이를 바꿀 수 있는 모션데스크, 흔들림X, 소음X, 튼튼함O, 만족도 최고의 데스크샷의 모션데스크 지금 바로 참여하세요!','가성비 최고의 모션데스크 데스크샷',NULL,'/var/images/project/10_sub.jpg','https://i6a202.p.ssafy.io/api/images/project/10_sub.jpg','데스크샷 모션 데스크',3,1,3),(11,'2022-01-29 00:00:00.000000',0,'2022-02-27 00:00:00.000000',127000000,0,'/var/images/project/11_main.jpg','https://i6a202.p.ssafy.io/api/images/project/11_main.jpg','봄의 분위기가 가득한 스프링 소파, 편안함의 끝판왕 스프링 소파 모두와서 즐기세요','봄 처럼 포근한 스프링 소파',NULL,'/var/images/project/11_sub.jpg','https://i6a202.p.ssafy.io/api/images/project/11_sub.jpg','Spring 소파',3,1,2),(12,'2022-01-25 00:00:00.000000',676000,'2022-03-15 00:00:00.000000',2400000,1,'/var/images/project/12_main.jpg','https://i6a202.p.ssafy.io/api/images/project/12_main.jpg','봄처럼 따뜻한 분위기의 디자인 스프링 서랍장, 4구에 넓은 내부공간, 실용성까지 갖춘 최고의 서랍장!!\n\n\n\n내부가 넓어 큰 베개도 수납이 가능합니다!\n수납장 문은 자석으로,\n가볍고 묵직하게 닫히는 느낌을 느껴보세요!\n\n\n\n\n고급 원목을 사용해 고급스러움도 갖췄답니다.\n다만, 사용할 수록 색이 어둡게 변합니다.\n고풍스럽고 우아한 느낌도 함께합니다.\n여러분의 시간과 함께하는 스프링 서랍장입니다.','봄처럼 포근한 스프링 서랍장',NULL,'/var/images/project/12_sub.jpg','https://i6a202.p.ssafy.io/api/images/project/12_sub.jpg','봄이오듯 따스한 분위기의 Spring 서랍장!',3,2,3),(13,'2022-01-25 00:00:00.000000',0,'2022-04-15 00:00:00.000000',400000000,0,'/var/images/project/13_main.jpg','https://i6a202.p.ssafy.io/api/images/project/13_main.jpg','지난 2차 펀딩에 힘입어 더욱더 업그레이드 된 로봇청소기 싸푸입니다. 더 뛰어난 인공지능과 흡입력으로 달라진 싸푸 얼른 이용하세요!','더욱더 오래가고 강력해진 로봇청소기 싸푸',NULL,'/var/images/project/13_sub.jpg','https://i6a202.p.ssafy.io/api/images/project/13_sub.jpg','로봇 청소기 싸푸',4,1,4),(14,'2022-02-01 00:00:00.000000',1009000,'2022-02-28 00:00:00.000000',6000000,0,'/var/images/project/14_main.jpg','https://i6a202.p.ssafy.io/api/images/project/14_main.jpg','원하는 색으로 아무때나 변경할 수 있다? 조명의 색을 변경해 나의 방을 마음껏 꾸며보세요!!\n\n\n\n\'나는 빨간 조명이 좋은데\'\n\'나는 조금 파란 조명이면 좋겠어\'\n\'왜 형광등은 항상 하얀색일까?\'\n\n\n\n그런 고민에 휩싸인 당신을 위해 준비했습니다.\n\n원하는 색으로 언제나 색이 바뀌는 스마트 조명!\n\n\n기분 따라,\n마음 따라,\n필요 따라,\n원하는 색으로 언제든 바꿔보세요!\n\n\n\n스마트 조명만 있다면, 그저 하얗던 당신의 방도 색색깔 아름다워질겁니다!','자유자재 색상 변경가능한 스마트 조명',NULL,'/var/images/project/14_sub.jpg','https://i6a202.p.ssafy.io/api/images/project/14_sub.jpg','스마트 조명',4,2,4),(15,'2022-02-04 00:00:00.000000',0,'2022-02-23 00:00:00.000000',10000000,0,'/var/images/project/15_main.jpg','https://i6a202.p.ssafy.io/api/images/project/15_main.jpg','오직 면도기 제작에만 몰두했습니다. 광고, 마케팅 전부다 줄여서 만든 가!격!파!괴! 싸피러 면도기 지금 바로 신청하세요','브랜드 면도기는 잊어라 싸피러 면도기',NULL,'/var/images/project/15_sub.jpg','https://i6a202.p.ssafy.io/api/images/project/15_sub.jpg','싸피러 면도기',4,1,3),(16,'2022-02-04 00:00:00.000000',0,'2022-02-10 00:00:00.000000',300000000,0,'/var/images/project/16_main.jpg','https://i6a202.p.ssafy.io/api/images/project/16_main.jpg','반지, 안경, 손톱깎이 등 틈새에 안보이는 떄까지 99.8퍼센트 세척하는 초음파 세척기!! 진짜 청결이란 이런것입니다~','어머나 깔끔해라~~ 초음파 세척기',NULL,'/var/images/project/16_sub.jpg','https://i6a202.p.ssafy.io/api/images/project/16_sub.jpg','초음파 세척기',4,3,4),(17,'2022-02-03 00:00:00.000000',196000,'2022-05-20 00:00:00.000000',900000,0,'/var/images/project/17_main.jpg','https://i6a202.p.ssafy.io/api/images/project/17_main.jpg','땀 배출이 빠르게!! 양말은 따뜻하게!! 최고의 기능성 양말 싸피양말~~\n\n\n\n만화 \'짱구는 못말려\'를 아십니까?\n짱구 아빠 신형만씨는 엄청난 발냄새의 소유자입니다.\n형만씨를 보며 남일 같지 않았던 당신...!\n\n\n\n수족냉증 탓에 항상 발이 차지만,\n따듯한 양말을 신으면 땀이 나 더욱 발이 차가워지는\n수족냉증 당신...!\n\n\n\n\n그런 여러분을 위한 기능성 양말! 싸피 양말입니다.\n\n\n여러분이 가는 발걸음 하나하나 따스하게 모십니다.','뽀송뽀송한 기능성 양말',NULL,'/var/images/project/17_sub.jpg','https://i6a202.p.ssafy.io/api/images/project/17_sub.jpg','뽀송뽀송 두근두근 기능성 양말',5,2,1),(18,'2022-02-01 00:00:00.000000',877300,'2022-06-14 00:00:00.000000',2000000,1,'/var/images/project/18_main.jpg','https://i6a202.p.ssafy.io/api/images/project/18_main.jpg','정장엔 깔끔한 구두가 있어야겠죠? 25년 수제구두 전문가의 손길이 만들어낸 남성 수제구두 로포드레, 최고의 품질로 보여드리겠습니다.\n\n\n수제구두 <로포드레>는 성수수제화타운 17년 장인이 손수 만든 구두의 시그니처 라인입니다.\n\n\n\n17년 장인의 노하우와 기술이 담긴 구두를 경험해보세요!\n\n\n이 구두와 함께라면\n\n\n면접의 긴장감도,\n회사에서의 지침도,\n사회의 두려움도\n\n모두 순식간에 잊혀진답니다.\n\n\n\n수제화의 가치를 아는 당신, 멋스럽고 고급스러운 수제화를 신고\n인생을 바꿔보세요!','남성 수제 구두 <로포드레>',NULL,'/var/images/project/18_sub.jpg','https://i6a202.p.ssafy.io/api/images/project/18_sub.jpg','뚜벅 뚜벅 발걸음 하나가 멋스러운 수제 구두',5,2,2),(19,'2022-02-05 00:00:00.000000',14599000,'2022-02-27 00:00:00.000000',670000000,0,'/var/images/project/19_main.jpg','https://i6a202.p.ssafy.io/api/images/project/19_main.jpg','평발들을 위한 슬리퍼 싸리퍼!!\n발바닥의 아치구조를 잡아주는 디자인, 그리고 푹신함.. 미국 MEV의 승인을 받은 평발 슬리퍼 싸리퍼!!\n\n\n\n평발이라 아치가 무너져 10분 이상 걷기가 힘들다구요?\n걷다보면 아치가 무너지는 유연형 평발이라구요?\n가족과의 단란한 소풍, 걷기가 힘들어 두려우시다구요?\n\n\n\n발바닥 아치를 위한 인체공학적 디자인,\n몸무게를 발바닥 전체에 고르게 전달해 통증을 줄여줍니다.\n\n\n지속적으로 슬리퍼 사용 시, 유연성 평발의 경우\n아치가 잡힌다는 미국 저명저널의 연구 결과도 있었답니다.\n\n\n\n평발로 고생하시는 여러분,\n저희 평발 슬리퍼를 사용해보시고\n삶을 바꿔보세요!','평발들을 위한 편한 슬리퍼 싸리퍼~',NULL,'/var/images/project/19_sub.png','https://i6a202.p.ssafy.io/api/images/project/19_sub.png','아야! 더이상 걷기를 포기하지 마세요!',5,2,3),(20,'2022-02-03 00:00:00.000000',0,'2022-02-11 00:00:00.000000',49200000,0,'/var/images/project/20_main.jpg','https://i6a202.p.ssafy.io/api/images/project/20_main.jpg','어느 패션에도 잘 어울리는 에코백 싸코백!!, 펀딩후 남은 금액은 환경단체에 기부됩니다!! 에코백도 사고 환경단체에 기부도하고 일석이조!~~','심플한 디자인의 에코백~',NULL,'/var/images/project/20_sub.jpg','https://i6a202.p.ssafy.io/api/images/project/20_sub.jpg','질겅질겅 절대 찢어지지 않는 환경 보전 에코백',5,1,4),(21,'2022-02-17 18:56:49.067000',0,NULL,0,0,'','','','',NULL,'','','',NULL,1,4),(22,'2022-02-17 19:13:51.680000',0,NULL,0,0,'','','','',NULL,'','','',NULL,1,4);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_category`
--

DROP TABLE IF EXISTS `project_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_category` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_category`
--

LOCK TABLES `project_category` WRITE;
/*!40000 ALTER TABLE `project_category` DISABLE KEYS */;
INSERT INTO `project_category` VALUES (1,'푸드'),(2,'리빙'),(3,'가구'),(4,'테크'),(5,'패션');
/*!40000 ALTER TABLE `project_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_state`
--

DROP TABLE IF EXISTS `project_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_state` (
  `id` bigint(20) NOT NULL,
  `content` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_state`
--

LOCK TABLES `project_state` WRITE;
/*!40000 ALTER TABLE `project_state` DISABLE KEYS */;
INSERT INTO `project_state` VALUES (1,'제작중'),(2,'펀딩중'),(3,'종료');
/*!40000 ALTER TABLE `project_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_select`
--

DROP TABLE IF EXISTS `question_select`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question_select` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `register_time` datetime(6) DEFAULT NULL,
  `content` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `survey_question_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKl0dmvipu1b07qi84etwc56sk6` (`survey_question_id`),
  CONSTRAINT `FKl0dmvipu1b07qi84etwc56sk6` FOREIGN KEY (`survey_question_id`) REFERENCES `survey_question` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_select`
--

LOCK TABLES `question_select` WRITE;
/*!40000 ALTER TABLE `question_select` DISABLE KEYS */;
INSERT INTO `question_select` VALUES (1,NULL,'싫어함',1),(2,NULL,'보통',1),(3,NULL,'좋아함',1),(4,NULL,'김치만두',2),(5,NULL,'고기만두',2),(6,NULL,'물만두',5),(7,NULL,'군만두',5),(8,NULL,'찐만두',5),(9,'2022-02-17 17:50:23.051000','빠다 코코넛',7),(10,'2022-02-17 17:50:28.599000','포카칩',7),(11,'2022-02-17 17:50:31.992000','다이제',7),(12,'2022-02-17 17:50:36.610000','빼빼로',7),(13,'2022-02-17 17:51:16.644000','높게',8),(14,'2022-02-17 17:51:20.895000','중간',8),(15,'2022-02-17 17:51:23.642000','낮게',8),(16,'2022-02-17 17:51:38.587000','100만',9),(17,'2022-02-17 17:51:41.975000','120만',9),(18,'2022-02-17 17:55:36.879000','흰색',14),(19,'2022-02-17 17:55:39.061000','베이지색',14),(20,'2022-02-17 17:55:41.342000','검정색',14),(21,'2022-02-17 17:55:43.285000','기타',14),(22,'2022-02-17 17:56:08.188000','화려한게 좋다',16),(23,'2022-02-17 17:56:11.429000','무난한게 좋다',16),(24,'2022-02-17 17:56:29.663000','캠핑식기',18),(25,'2022-02-17 17:56:39.193000','다크 브라운 식기',18),(26,'2022-02-17 17:56:56.178000','레드 클라이 식기',18),(27,'2022-02-17 17:58:19.654000','1점',19),(28,'2022-02-17 17:58:22.727000','2점',19),(29,'2022-02-17 17:58:25.153000','3점',19),(30,'2022-02-17 17:58:28.126000','4점',19),(31,'2022-02-17 17:58:30.872000','5점',19),(32,'2022-02-17 18:01:06.343000','여성용 슬리퍼',21),(33,'2022-02-17 18:01:10.325000','남성용 슬리퍼',21),(34,'2022-02-17 18:01:18.947000','기능성 슬리퍼',21),(35,'2022-02-17 18:02:35.807000','15도',22),(36,'2022-02-17 18:02:39.731000','30도',22),(37,'2022-02-17 18:02:43.053000','45도',22);
/*!40000 ALTER TABLE `question_select` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_type`
--

DROP TABLE IF EXISTS `question_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question_type` (
  `id` bigint(20) NOT NULL,
  `name` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_type`
--

LOCK TABLES `question_type` WRITE;
/*!40000 ALTER TABLE `question_type` DISABLE KEYS */;
INSERT INTO `question_type` VALUES (1,'객관식'),(2,'주관식');
/*!40000 ALTER TABLE `question_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reward`
--

DROP TABLE IF EXISTS `reward`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reward` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `register_time` datetime(6) DEFAULT NULL,
  `content` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deliver_start_date` datetime(6) DEFAULT NULL,
  `is_deliver` bit(1) DEFAULT NULL,
  `limited_quantity` int(11) DEFAULT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `option_description` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `project_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKngxwyvi0pv1oirba2fnm23g50` (`project_id`),
  CONSTRAINT `FKngxwyvi0pv1oirba2fnm23g50` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reward`
--

LOCK TABLES `reward` WRITE;
/*!40000 ALTER TABLE `reward` DISABLE KEYS */;
INSERT INTO `reward` VALUES (1,'2022-02-01 00:00:00.000000','정말 큰 왕 만두입니다. 제 포부처럼 큰 피에 제 마음을 가득 담았습니다.','2022-03-01 00:00:00.000000','',376,'왕만두(3개입)','수량 EX)3',9000,2),(2,'2022-02-01 00:00:00.000000','작지만 속이 꽉찬 만두입니다.','2022-03-01 00:00:00.000000','',323,'작지만 강한 만두(6개입)','수량 EX)3',7500,2),(3,'2022-02-01 00:00:00.000000','적절한 크기에 정말 맛난 만두라구요~!','2022-03-01 00:00:00.000000','',713,'적절하지만 약하지 않은 만두(3개입)','수량 EX)3',8000,2),(4,'2022-02-05 00:00:00.000000','한입 크기의 쏙쏙 쿠키','2022-03-13 00:00:00.000000','',603,'한입 크기 쿠키(3개입)','수량 EX)3',5000,3),(5,'2022-02-05 00:00:00.000000','한입 크기 쿠키 x3 \n포장용 대형 쿠키 랜덤 종류x17','2022-03-13 00:00:00.000000','',95,'선물용 쿠키(20개입)','수량 EX)3',15000,3),(6,'2022-02-05 00:00:00.000000','베개 핑크색 본품X1','2022-03-03 00:00:00.000000','',779,'메모리폼 베개(핑크)','수량 EX)1',18000,5),(7,'2022-02-05 00:00:00.000000','베개 파란색 본품X1','2022-03-03 00:00:00.000000','',631,'메모리폼 베개(블루)','수량 EX)1',18000,5),(8,'2022-02-03 00:00:00.000000','더블 사이즈 매트리스X1','2022-02-25 00:00:00.000000','',503,'더블','수량 EX)1',330000,6),(9,'2022-02-03 00:00:00.000000','퀸 사이즈 매트리스X1','2022-02-25 00:00:00.000000','',131,'퀸','수량 EX)1',390000,6),(10,'2022-02-03 00:00:00.000000','킹 사이즈 매트리스X1','2022-02-25 00:00:00.000000','',71,'킹','수량 EX)1',470000,6),(11,'2022-01-31 00:00:00.000000','기본 식기(실버)X1\n기본 접시(실버)X3','2022-04-08 00:00:00.000000','',493,'Simple-Silver','수량 EX)1',110000,8),(12,'2022-01-31 00:00:00.000000','기본 식기(골드)X1\n기본 접시(골드)X3','2022-04-08 00:00:00.000000','',323,'Simple-Gold','수량 EX)1',110000,8),(13,'2022-01-31 00:00:00.000000','음각 식기(실버)X1\n음각 접시(실버)X3\n음각 냄비(실버)X1','2022-04-08 00:00:00.000000','',191,'Luxury-Silver','수량 EX)1',190000,8),(14,'2022-01-31 00:00:00.000000','음각 식기(골드)X1\n음각 접시(골드)X3\n음각 냄비(골드)X1','2022-04-08 00:00:00.000000','',58,'Luxury-Gold','수량 EX)1',190000,8),(15,'2022-01-31 00:00:00.000000','원목 흔들의자X1','2022-04-08 00:00:00.000000','',0,'장인 흔들의자','수량 EX)1',100000,9),(16,'2022-01-25 00:00:00.000000','4구 서랍장(고무나무)','2022-03-20 00:00:00.000000','',84,'4구 서랍장','수량 EX)1',177000,12),(17,'2022-01-25 00:00:00.000000','5구 서랍장(호두나무)','2022-03-20 00:00:00.000000','',100,'5구 서랍장','수량 EX)1',219000,12),(18,'2022-02-02 00:00:00.000000','사자모양조명X1','2022-03-10 00:00:00.000000','',39,'사자 모양 조명','수량 EX)1',17000,14),(19,'2022-02-02 00:00:00.000000','기린모양조명X1','2022-03-10 00:00:00.000000','',169,'기린 모양 조명','수량 EX)1',18000,14),(20,'2022-02-02 00:00:00.000000','하마모양조명X1','2022-03-10 00:00:00.000000','',9,'하마 모양 조명','수량 EX)1',17000,14),(21,'2022-02-03 00:00:00.000000','양말 빨간색 스몰X1','2022-05-25 00:00:00.000000','',44,'RED 양말 S','수량 EX)1',3000,17),(22,'2022-02-03 00:00:00.000000','양말 빨간색 미디움X1','2022-05-25 00:00:00.000000','',144,'RED 양말 M','수량 EX)1',3000,17),(23,'2022-02-03 00:00:00.000000','양말 빨간색 라지X1','2022-05-25 00:00:00.000000','',54,'RED 양말 L','수량 EX)1',5000,17),(24,'2022-02-03 00:00:00.000000','양말 노란색 스몰X1','2022-05-25 00:00:00.000000','',64,'YELLOW 양말 S','수량 EX)1',3000,17),(25,'2022-02-03 00:00:00.000000','양말 노란색 미디움X1','2022-05-25 00:00:00.000000','',204,'YELLOW 양말 M','수량 EX)1',3000,17),(26,'2022-02-03 00:00:00.000000','양말 노란색 라지X1','2022-05-25 00:00:00.000000','',14,'YELLOW 양말 L','수량 EX)1',5000,17),(27,'2022-02-01 00:00:00.000000','플레인 토X1','2022-06-30 00:00:00.000000','',24,'1번 플레인 토','수량 EX)1',78900,18),(28,'2022-02-01 00:00:00.000000','윙팁X1','2022-06-30 00:00:00.000000','',39,'2번 윙팁','수량 EX)1',87900,18),(29,'2022-02-01 00:00:00.000000','몽크 스트랩X1','2022-06-30 00:00:00.000000','',64,'3번 몽크 스트랩','수량 EX)1',69900,18),(30,'2022-02-01 00:00:00.000000','스트레이트 팁X1','2022-06-30 00:00:00.000000','',62,'4번 스트레이트 팁','수량 EX)1',68900,18),(31,'2022-02-05 00:00:00.000000','S사이즈X1','2022-03-04 00:00:00.000000','',183,'슬리퍼 S','수량 EX)1',19000,19),(32,'2022-02-05 00:00:00.000000','M사이즈X1','2022-03-04 00:00:00.000000','',393,'슬리퍼 M','수량 EX)1',19000,19),(33,'2022-02-05 00:00:00.000000','L사이즈X1','2022-03-04 00:00:00.000000','',44,'슬리퍼 L','수량 EX)1',19000,19),(34,'2022-02-05 00:00:00.000000','XL사이즈X1','2022-03-04 00:00:00.000000','',11,'슬리퍼 XL','수량 EX)1',19000,19);
/*!40000 ALTER TABLE `reward` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reward_order`
--

DROP TABLE IF EXISTS `reward_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reward_order` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `register_time` datetime(6) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `option_content` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `recipient_address` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recipient_name` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recipient_tel` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `request_content` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `project_id` bigint(20) NOT NULL,
  `reward_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7blefggyityyith63qxyx8u4t` (`project_id`),
  KEY `FKn17u095qvoffwogsi9cvri14q` (`reward_id`),
  KEY `FKh8ukttljv7ukv768b5g2emi9x` (`user_id`),
  CONSTRAINT `FK7blefggyityyith63qxyx8u4t` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`),
  CONSTRAINT `FKh8ukttljv7ukv768b5g2emi9x` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKn17u095qvoffwogsi9cvri14q` FOREIGN KEY (`reward_id`) REFERENCES `reward` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reward_order`
--

LOCK TABLES `reward_order` WRITE;
/*!40000 ALTER TABLE `reward_order` DISABLE KEYS */;
INSERT INTO `reward_order` VALUES (1,'2022-02-17 17:18:09.893000',29000,'3',3,'멀티캠퍼스','박정후','010-8928-3838','빨리 와주세요 현기증 나용',2,1,2),(2,'2022-02-17 17:19:16.167000',65000,'4',4,'홍대 놀이터','김나박','010-9383-8389','오시면 연락 주세요!',3,5,2),(3,'2022-02-17 17:20:37.164000',49000,'5',5,'서울특별시 삼성동 싸피번지','송민주','010-1212-2334','배송 빨리 해주세요. 감사합니다! :D',2,1,8),(4,'2022-02-17 17:20:40.114000',382000,'2',2,'청담동 아파트 301동 102호','홍길은','016-3833-8290','개가 짖어요 조심 해요',8,13,2),(5,'2022-02-17 17:22:38.406000',439500,'5',5,'대구광역시 북구 432번지','김만수','010-2234-4465','어서 좋은 구두가 왔으면 좋겠네요! 조심히 배송해주세요!',18,28,8),(6,'2022-02-17 17:22:41.609000',676000,'3',3,'경기 성남시 분당구 판교역로 235 에이치스퀘어','김범수','010-8475-2838','방긋ㅎ',12,17,2),(7,'2022-02-17 17:23:49.895000',55000,'10',10,'서울특별시 마포구 망원동','김효진','01087453157','문 앞에 놔주세요',3,4,7),(8,'2022-02-17 17:24:13.375000',115000,'5',5,'경기도 남양주시 마석역 1번출구','박따뜻','010-8277-2877','조심히 와주세요',17,23,2),(9,'2022-02-17 17:24:30.212000',180000,'10',10,'제주특별시 서초구 45-7번지','한수진','010-2233-0945','빠른 배송 부탁드립니다.',14,19,8),(10,'2022-02-17 17:25:17.625000',54000,'6',6,'남극','루피','01054988521','',2,1,7),(11,'2022-02-17 17:25:29.026000',95000,'5',5,'부산 광역시 서구 ','최유리','010-2282-8380','마 빨리 온나~',14,19,2),(12,'2022-02-17 17:26:03.428000',100000,'1',1,'경기도 구리시 싸피5로 10','박순자','010-3377-8787','잘 부탁드립니다...^^',9,15,8),(13,'2022-02-17 17:27:04.442000',80000,'4',4,'강남역 4번출구 우체통 앞','김인국','010-3877-2073','추우니 조심해서 다녀요',5,6,1),(14,'2022-02-17 17:27:05.959000',188000,'10',10,'서울특별시 서초구 방배동','박진수','01066485721','커버 하나 더 주세요..',5,6,7),(15,'2022-02-17 17:27:54.253000',470000,'1',1,'서울특별시 서초구 방배동','박진수','01056532958','',6,10,7),(17,'2022-02-17 17:28:55.217000',785000,'2',2,'경기도 안산시 상록구 사동 한대앞역 ','안상호','010-8373-2222','조심히 오이소~~',6,9,1),(18,'2022-02-17 17:29:21.861000',51000,'3',3,'경기도 시흥시 은행동','김명희','01055784512','깨지지 않게 해주세요',14,18,7),(19,'2022-02-17 17:31:11.602000',114000,'2',2,'경기 여주시 가남읍 금당5길 139 1동','안조명','010-4848-1717','오는길이 험하니 조심해서 와주세요',14,18,1),(20,'2022-02-17 17:31:41.177000',437800,'2',2,'경기도 부천시','박민균','01062541897','',18,30,7),(21,'2022-02-17 17:32:41.642000',126000,'4',4,'전북 김제시 금구면 대화리 363-2 카페 대율담','이발소','010-8277-0929','아이가 있으니 문자 주세요 꼭',19,34,1),(22,'2022-02-17 17:32:59.055000',36000,'2',2,'경기도 부천시','박민균','01068954798','배송 후 전화 주세요',5,7,7),(23,'2022-02-17 17:33:38.354000',457000,'2',2,'서울특별시 강남구 테헤란로 438','김만득','010-3333-4444','근처에서 연락주세요',19,34,8),(24,'2022-02-17 17:34:52.808000',540000,'5',5,'전북 무주군 설천면 구천동1로 111','이편안','010-2777-1616','편안히 오세요',9,15,1),(25,'2022-02-17 17:35:01.689000',2090000,'10',10,'인천광역시 연수구 송도동','송지호','01055524861','',19,31,7),(26,'2022-02-17 17:36:15.231000',8777000,'40',40,'경기도 남양주시 569번지, 싸피건설','(주)싸피건설','02-1111-3454','단체배송입니다!',19,33,8),(27,'2022-02-17 17:39:46.725000',480000,'20',20,'전북 부안군 행안면 부안로 2524','곽두팔','010-2993-3383','퍼뜩 오이소',14,19,3),(28,'2022-02-17 17:41:23.767000',157000,'30',30,'경기도 고양시 덕양구 화정동 달빛마을 1단지','조아라','010-1526-2993','안쪽에 두세요',3,4,3),(29,'2022-02-17 17:42:26.590000',3149000,'150',150,'경기도 구리시 후원 487리 90','(주)대신하는건설','031-4566-9902','빠른 배송부탁드립니다. 직원들 사용해야 합니다.',19,33,8),(30,'2022-02-17 17:42:57.325000',310000,'30',30,'주소 서울 송파구 올림픽로32길 41 1층','왕준기','010-8267-2727','문 앞에 놔두세요',2,1,3),(31,'2022-02-17 17:44:20.334000',2865000,'15',15,'서울특별시 도봉구 498번지, (주)통하는 사람들','통하는 사람들','010-2223-4553','당일 배송 부탁드립니다.',8,14,8),(32,'2022-02-17 17:44:26.131000',768000,'40',40,'경기도 화천 사방거리','백흥기','010-8272-2727','단결!',5,6,3),(33,'2022-02-17 17:46:17.026000',89000,'5',5,'서울특별시 마포구 231번지, 73','이수잔','010-8897-2234','',14,20,8),(34,'2022-02-17 17:46:20.361000',81000,'15',15,'경기도 파주시 문발동 6단지','이산타','010-2877-2261','빨리와용',17,23,3);
/*!40000 ALTER TABLE `reward_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `survey`
--

DROP TABLE IF EXISTS `survey`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `survey` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `register_time` datetime(6) DEFAULT NULL,
  `content` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `end_date` datetime(6) NOT NULL,
  `title` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `project_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKt2dugyxi7u0iig4gq5cjy5ls2` (`project_id`),
  CONSTRAINT `FKt2dugyxi7u0iig4gq5cjy5ls2` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `survey`
--

LOCK TABLES `survey` WRITE;
/*!40000 ALTER TABLE `survey` DISABLE KEYS */;
INSERT INTO `survey` VALUES (1,'2022-02-18 00:00:00.000000','김씨 손 만두 설문입니다!\n여러분의 소중한 의견을 반영하여 더욱 맛있는 만두를 만들겠습니다.','2022-02-07 00:00:00.000000','김씨 손 만두 2차 수요조사',2),(2,'2022-02-04 00:00:00.000000','김씨 손 만두 설문입니다!\n여러분의 소중한 의견을 반영하여 더욱 맛있는 만두를 만들겠습니다.','2022-02-01 00:00:00.000000','김씨 손 만두 1차 수요조사',2),(3,'2022-02-17 17:50:02.693000','쿠키 선택','2022-02-22 16:51:00.000000','가장 좋아하는 쿠키 조사',3),(4,'2022-02-17 17:50:41.247000','여러분의 베개 취향이 궁금합니다','2022-02-21 02:50:00.000000','베개 취향 조사',5),(5,'2022-02-17 17:51:26.408000','고객 만족도 조사','2022-02-21 16:53:00.000000','고객 만족도 조사',3),(6,'2022-02-17 17:53:45.620000','매트리스 두께 선호도 조사입니다','2022-02-25 02:53:00.000000','매트리스 두께 선호도 조사',6),(7,'2022-02-17 17:54:27.763000','만족도 조사','2022-02-22 02:54:00.000000','만족도 조사',8),(8,'2022-02-17 17:55:05.147000','커버 색상은 뭐가 좋을까요?','2022-02-25 18:57:00.000000','매트리스 커버 색상',6),(10,'2022-02-17 17:56:08.038000','랭킹 조사','2022-02-25 04:57:00.000000','싸푸스토 식기 랭킹 조사',8),(11,'2022-02-17 17:57:54.487000','만족도 조사','2022-02-22 02:57:00.000000','양말 만족도 조사',17),(12,'2022-02-17 18:00:05.368000','만족도 조사','2022-02-19 04:01:00.000000','서랍장 만족도 조사',12),(13,'2022-02-17 18:00:49.097000','선호도 조사','2022-02-20 03:00:00.000000','차기 제품 선호도 조사',19),(14,'2022-02-17 18:01:37.924000','흔들의자가 어느정도 흔들리는게 좋으신가요?','2022-02-23 15:00:00.000000','흔들의자 경사도',9);
/*!40000 ALTER TABLE `survey` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `survey_answer`
--

DROP TABLE IF EXISTS `survey_answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `survey_answer` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `register_time` datetime(6) DEFAULT NULL,
  `content` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `question_select_id` bigint(20) DEFAULT NULL,
  `survey_question_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2yd1ac9heealou3c5gxh086c6` (`question_select_id`),
  KEY `FKfq9qpi8lity3w2qk1l0maocm` (`survey_question_id`),
  KEY `FK2y8f45lpuhclbbq7fid2o7oev` (`user_id`),
  CONSTRAINT `FK2y8f45lpuhclbbq7fid2o7oev` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK2yd1ac9heealou3c5gxh086c6` FOREIGN KEY (`question_select_id`) REFERENCES `question_select` (`id`),
  CONSTRAINT `FKfq9qpi8lity3w2qk1l0maocm` FOREIGN KEY (`survey_question_id`) REFERENCES `survey_question` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `survey_answer`
--

LOCK TABLES `survey_answer` WRITE;
/*!40000 ALTER TABLE `survey_answer` DISABLE KEYS */;
INSERT INTO `survey_answer` VALUES (1,NULL,NULL,2,1,1),(2,NULL,NULL,4,2,1),(3,NULL,'화이팅!!',NULL,3,1),(4,NULL,NULL,3,1,2),(5,NULL,NULL,4,2,2),(6,NULL,'맛있어요',NULL,3,2),(7,NULL,NULL,1,1,3),(8,NULL,NULL,5,2,3),(9,NULL,'별루에요 --',NULL,3,3),(10,NULL,NULL,1,1,4),(11,NULL,NULL,4,2,4),(12,NULL,'핫도그도 해주세요',NULL,3,4),(13,NULL,NULL,3,1,5),(14,NULL,NULL,5,2,5),(15,NULL,'김치보다 고기가 더 좋아요!',NULL,3,5),(16,NULL,NULL,2,1,6),(17,NULL,NULL,5,2,6),(18,NULL,'취업하고싶다',NULL,3,6),(19,NULL,NULL,3,1,7),(20,NULL,NULL,5,2,7),(21,NULL,'만두 웹사이트 안만드시나요?',NULL,3,7),(22,NULL,NULL,1,1,8),(23,NULL,NULL,4,2,8),(24,NULL,'배달이 빨라서 좋아요~',NULL,3,8),(25,NULL,NULL,1,1,9),(26,NULL,NULL,4,2,9),(27,NULL,'가격이 조금 비싸요~~',NULL,3,9),(28,'2022-02-17 18:09:50.951000','',14,8,4),(29,'2022-02-17 18:09:50.949000','',17,9,4),(30,'2022-02-17 18:09:50.950000','빨리 보내주세요 현기증 나요',NULL,11,4),(31,'2022-02-17 18:10:11.458000','',15,8,1),(32,'2022-02-17 18:10:11.458000','',17,9,1),(33,'2022-02-17 18:10:11.468000','폭신폭신하지만 목이 아프지 않은 베개가 좋아요!',NULL,11,1),(34,'2022-02-17 18:12:09.449000','',14,8,2),(35,'2022-02-17 18:12:09.449000','',NULL,11,2),(36,'2022-02-17 18:12:09.450000','',16,9,2),(37,'2022-02-17 18:14:00.990000','',13,8,3),(38,'2022-02-17 18:14:00.993000','',16,9,3),(39,'2022-02-17 18:14:00.995000','편해요 히히',NULL,11,3),(40,'2022-02-17 18:18:05.206000','꽃무늬',NULL,17,2),(41,'2022-02-17 18:18:05.207000','',22,16,2),(42,'2022-02-17 18:18:05.208000','',21,14,2),(43,'2022-02-17 18:18:06.553000','',23,16,3),(44,'2022-02-17 18:18:06.553000','',19,14,3),(45,'2022-02-17 18:18:06.559000','너무 귀여워요',NULL,17,3),(46,'2022-02-17 18:18:28.492000','폭신폭신',NULL,12,2),(47,'2022-02-17 18:18:31.903000','허리가 안 아픈 매트리스가 좋아요',NULL,12,3),(48,'2022-02-17 18:18:33.329000','저는 폭신폭신 포근한 게 좋아요!',NULL,12,1),(49,'2022-02-17 18:21:27.774000','',12,7,3),(50,'2022-02-17 18:21:28.700000','',10,7,2),(51,'2022-02-17 18:21:53.390000','',10,7,1),(52,'2022-02-17 18:22:12.709000','쿠키...너무...조아......요.....ㅎㅎ',NULL,10,1),(53,'2022-02-17 18:22:17.849000','과자는 역시 초코송이',NULL,10,2),(54,'2022-02-17 18:22:20.888000','쿠키가 양도 많고 맛있고 완전 혜자랍니당',NULL,10,3),(55,'2022-02-17 18:56:04.664000','너무 재밌네요',NULL,13,9),(56,'2022-02-17 18:56:09.578000','너무 튼튼해보여요',NULL,13,7),(57,'2022-02-17 18:56:11.288000','너무 음식이 이쁘게 보여서 좋아요 ㅎㅎ',NULL,13,4),(58,'2022-02-17 18:56:15.832000','빨리 보내주세요~',NULL,13,8);
/*!40000 ALTER TABLE `survey_answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `survey_live_record`
--

DROP TABLE IF EXISTS `survey_live_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `survey_live_record` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `register_time` datetime(6) DEFAULT NULL,
  `live_id` bigint(20) NOT NULL,
  `survey_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKg3cbyjouglk4jjpc4wq6l2fqp` (`live_id`),
  KEY `FKa4oryor3d1npk0o777bed0cpw` (`survey_id`),
  CONSTRAINT `FKa4oryor3d1npk0o777bed0cpw` FOREIGN KEY (`survey_id`) REFERENCES `survey` (`id`),
  CONSTRAINT `FKg3cbyjouglk4jjpc4wq6l2fqp` FOREIGN KEY (`live_id`) REFERENCES `live` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `survey_live_record`
--

LOCK TABLES `survey_live_record` WRITE;
/*!40000 ALTER TABLE `survey_live_record` DISABLE KEYS */;
/*!40000 ALTER TABLE `survey_live_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `survey_question`
--

DROP TABLE IF EXISTS `survey_question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `survey_question` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `register_time` datetime(6) DEFAULT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `question_type_id` bigint(20) NOT NULL,
  `survey_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKiryh48ujgdtbsdpmc5yenqmw6` (`question_type_id`),
  KEY `FK573vicrl6b0e4d2jdg3wpvuhy` (`survey_id`),
  CONSTRAINT `FK573vicrl6b0e4d2jdg3wpvuhy` FOREIGN KEY (`survey_id`) REFERENCES `survey` (`id`),
  CONSTRAINT `FKiryh48ujgdtbsdpmc5yenqmw6` FOREIGN KEY (`question_type_id`) REFERENCES `question_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `survey_question`
--

LOCK TABLES `survey_question` WRITE;
/*!40000 ALTER TABLE `survey_question` DISABLE KEYS */;
INSERT INTO `survey_question` VALUES (1,NULL,'만두를 얼마나 좋아하시나요?',1,1),(2,NULL,'좋아하는 만두는 무엇인가요?',1,1),(3,NULL,'더 나은 김씨 손 만두가 될 수 있도록 자유로운 의견을 적어주세요!',2,1),(4,NULL,'김씨 손 만두를 찾게된 계기가 무엇인가요?',2,2),(5,NULL,'어떤 만두를 좋아하시나요?',1,2),(6,NULL,'여러분의 자유로운 의견을 적어주세요',2,2),(7,'2022-02-17 17:50:16.264000','가장 좋아하는 쿠키는 무엇인가요?',1,3),(8,'2022-02-17 17:51:11.099000','어느 정도의 높이를 선호하시나요',1,4),(9,'2022-02-17 17:51:32.496000','메모리폼 개수',1,4),(10,'2022-02-17 17:51:41.951000','쿠키에 대한 솔직한 평을 남겨주세요',2,5),(11,'2022-02-17 17:51:54.632000','기타 의견 부탁드립니다',2,4),(12,'2022-02-17 17:54:20.062000','어떤 느낌의 매트리스를 좋아하는지 알려주세요!!',2,6),(13,'2022-02-17 17:55:03.003000','싸푸스토 식기에대한 솔직한 평가 부탁드립니다.',2,7),(14,'2022-02-17 17:55:32.942000','매트리스 커버 색상 선호 조사',1,8),(16,'2022-02-17 17:56:03.537000','나는 커버의 색상이',1,8),(17,'2022-02-17 17:56:18.106000','기타의견',2,8),(18,'2022-02-17 17:56:23.118000','가장 좋은 싸푸스토 제품을 알려주세요',1,10),(19,'2022-02-17 17:58:10.404000','기능성 양말에 점수를 준다면 몇점인가요?',1,11),(20,'2022-02-17 18:00:26.409000','스프링 서랍장을 이용하시면서 어떠셨는지 자세히 적어주세요',2,12),(21,'2022-02-17 18:00:59.319000','차기 제품 선호도 조사',1,13),(22,'2022-02-17 18:01:50.504000','의견을 작성해주세요',2,14),(23,'2022-02-17 18:02:27.664000','흔들의자 경사도',1,14);
/*!40000 ALTER TABLE `survey_question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `register_time` datetime(6) DEFAULT NULL,
  `email` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nickname` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'2022-02-01 00:00:00.000000','test_ct@naver.com','회원 컨설턴트님','password_ct','USER'),(2,'2022-02-01 00:00:00.000000','test_coach@naver.com','회원 코치','password_coach','USER'),(3,'2018-12-01 00:00:00.000000','hotsix@naver.com','싸피야','11111','USER'),(4,'2021-03-12 00:00:00.000000','hello@naver.com','맑은하루','2222','USER'),(5,'2022-02-02 00:00:00.000000','admin_ct@naver.com','관리자 컨설턴트님','password_ct','ADMIN'),(6,'2022-02-02 00:00:00.000000','admin_coach@naver.com','관리자 코치님','password_coach','ADMIN'),(7,'2020-11-04 00:00:00.000000','bye@google.com','방가방가','333','USER'),(8,'2020-02-22 00:00:00.000000','codinglove@fb.com','코딩조아','54321','USER'),(9,'2021-02-21 00:00:00.000000','piee@daum.net','카카오가자','abc222','USER');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-18  1:18:05
