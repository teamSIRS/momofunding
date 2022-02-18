![waving](https://capsule-render.vercel.app/api?type=waving&height=200&text=✨모모펀딩✨&fontAlign=50&fontAlignY=40&color=gradient)


Team : 선생님들 / Member : 팀장 - 안영진, 팀원 - 김윤하, 백승윤, 임건호, 송지호, 정지민

### 모모펀딩은 WebRTC기술을 활용한 실시간 라이브 크라우드 펀딩 서비스입니다.

## 사용한 JVM ,웹서버, WAS 제품 등의 종류와 설정값, 버전(IDE 버전 포함)
| Name               | Version       | Description                |
| ------------------ | ------------- | -------------------------- |
| Docker             | 20.10.12      |                            |
| MariaDB            | 10.6.5        | Database                   |
| NGINX              | 1.18.0        | Web server                 |
| Java               | 1.8           |                            |
| JVM                | 1.8.0_192     |                            |
| Gradle             | 7.3.2         | Build Tool                 |
| SpringBoot         | 2.6.2         |                            |
| openvidu-react     | 2.20.0        |                            |
| React.js           | 17.0.2        |                            |
| node               | 16.13.1       |                            |
| IntelliJ IDEA      | 2021.3.1      | IDE - Spring Boot          |
| Visual Studio Code | 1.64.2        | IDE - React.js             |
| MySQL Workbench    | 8.0.21        | DB Management Tool         |

## 실행 방법
### FE
* local(VisualStudioCode)
    * App.js파일 로컬 코드 사용
  ```bash
    npm install
    npm start
  ```
  * server
    * App.js파일 서버 코드 사용
    * local에서 빌드 필요
    ```bash
    npm run build
    ```
    * 빌드 파일(/build)를 서버 프론트 도커 폴더로 이동(/home/ubuntu/reactDocker/dd/)
      * 기존 build 폴더 존재 시 삭제 필요
      * /home/ubuntu/reactDocker/dd/에서 명령어 실행
    ```bash
    docker stop react-app && docker rm react-app
    docker rmi $(docker images | grep "react-app") # 실행 시 빨간 줄 뜨면 한번 더 입력
    docker build -t react-app -f Dockerfile .
    docker run --name react-app -d -p 3000:3000 react-app
    ```

### BE
#### jdk1.8, 인텔리제이 IDEA 2021.3 환경에서 구동하였습니다.
* local
    * application.yml파일 로컬 코드 사용
    ```
    IDE 실행
    ```
* server
    * application.yml파일 서버 코드 사용
    * 빌드 파일 필요
      * 인텔리제이 우측 상단 Gradle 클릭 > momofunding > Tasks > build > bootJar 더블클릭
    * /momofunding/build/libs폴더의 .jar 파일을 서버 /home/ubuntu/filezillaTest/에 옮기기
    * /home/ubuntu/filezillaTest/로 이동 후 명령어 실행
    ```bash
    docker stop springboot
    docker rm springboot
    docker rmi filezillatest_application
    docker-compose up -d
    ```

## 실행 화면 일부
## **1. 메인 페이지**
![image](/uploads/5771f1569f1c02fbef7133e6def3d6d4/image.png)

## **2. 회원관리**
![image](/uploads/9fbac695f3c14f82d465f93e339ee206/image.png)
![image](/uploads/c9226c5dd66e07d64b33a4fa055f1325/image.png)

## **3. 펀딩하기 페이지**
![image](/uploads/10e538e42279264e08a8a5f8b40e1ca9/image.png)
![image](/uploads/93a72b3934295bd964477bd084cc0908/image.png)
![image](/uploads/75503a689b79c4dd535414828f3ec30b/image.png)
![image](/uploads/9fb93e9c3a78f7db163f5cc2858ef523/image.png)

---

## **4. 라이브 페이지**
![image](/uploads/fedd3282c65ba31be83000dff00d1398/image.png)
<!-- ![image](/uploads/fbb48187854c3e2899207209b8ba600d/image.png) -->
![image](/uploads/54e37f200e4ab6dae098c99a41be03e9/image.png)
![image](/uploads/3fe68d7d1197279d71e66f786e000f1a/image.png)
![image](/uploads/c19a04a276e7f73a058fa7bbfbb64f28/image.png)

---

## **5. 프로젝트 만들기**
![image](/uploads/66e71ec640e1eef3b7b566e7057a55c5/image.png)
![image](/uploads/73a63da0561146aff6fb9f7813fd525f/image.png)
![image](/uploads/b28b684faabd097cbe6558ef23c1dbc4/image.png)
![image](/uploads/03e9019fa818a5733bea266e7ba53f07/image.png)

---

## **6. 공지사항**
![image](/uploads/03a2b16549dec8204303e3481f0bc01f/image.png)
![image](/uploads/86af2cc800c8ca3a6487832b0e4064f9/image.png)
![image](/uploads/8a098dc8d0c92211aab424211b62f0b6/image.png)
---

## **7. 프로필 페이지**
![image](/uploads/2e9fd79302e285a035a35f0af25766c7/image.png)

---

## **8. 프로젝트 관리 페이지**
![image](/uploads/7197e6b83cdb5a71a91eabb292136683/image.png)
![image](/uploads/427664c32e8d60017862e7fc302183fd/image.png)
![image](/uploads/1f641e4de2000b88392f3754a84f0b1a/image.png)
