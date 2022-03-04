![waving](https://capsule-render.vercel.app/api?type=waving&height=200&text=✨모모펀딩✨&fontAlign=50&fontAlignY=40&color=gradient)


#### Team : 선생님들 / Member : 팀장 - 안영진, 팀원 - 김윤하, 백승윤, 임건호, 송지호, 정지민                  
[발표회 영상](https://youtu.be/oX-1kP-MaEo)

## 모모펀딩은 WebRTC기술을 활용한 실시간 라이브 크라우드 펀딩 서비스입니다.

### 사용한 JVM ,웹서버, WAS 제품 등의 종류와 설정값, 버전(IDE 버전 포함)
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
![image](https://user-images.githubusercontent.com/31895069/156505923-c3aed3a1-fa23-48ba-bdc3-9b674dbe308a.png)

## **2. 회원관리**
![image](https://user-images.githubusercontent.com/31895069/156505968-d1c6b8de-b355-4350-b1b6-f1e7a441a4cc.png)
![image](https://user-images.githubusercontent.com/31895069/156505971-4556644b-ac6c-41ab-bc34-57fd35509ecb.png)


## **3. 펀딩하기 페이지**
![image](https://user-images.githubusercontent.com/31895069/156506013-b49729a6-7d17-4ff2-91d5-fa41e781af08.png)
![image](https://user-images.githubusercontent.com/31895069/156506019-b24e0362-b595-4457-951e-5a4641559ff1.png)
![image](https://user-images.githubusercontent.com/31895069/156506026-e3e3ac31-5632-4e87-a89a-ef954c2b3744.png)
![image](https://user-images.githubusercontent.com/31895069/156506030-4ccd79ee-8664-4bdb-9cb9-fa73f6d4adaa.png)


---

## **4. 라이브 페이지**
![image](https://user-images.githubusercontent.com/31895069/156506068-f03d64e5-6107-4996-9956-a74ac06c81af.png)
![image](https://user-images.githubusercontent.com/31895069/156506074-c3598536-6c30-44df-8bd3-46fa265eeebc.png)
![image](https://user-images.githubusercontent.com/31895069/156506085-a8ebd4e4-0a98-4bf6-8f7e-08eba2f84f8d.png)
![image](https://user-images.githubusercontent.com/31895069/156506088-1a4384c1-45fb-48fa-a577-4c2ac319de8c.png)

---

## **5. 프로젝트 만들기**
![image](https://user-images.githubusercontent.com/31895069/156506108-dd15e66f-4fdb-4b1b-966f-bc7a9af750b7.png)
![image](https://user-images.githubusercontent.com/31895069/156506111-65cb5977-96cb-4084-a783-0483bc688318.png)
![image](https://user-images.githubusercontent.com/31895069/156506121-f3872963-fae2-465f-ae87-f4c0d36a7875.png)
![image](https://user-images.githubusercontent.com/31895069/156506125-6cfd151e-f809-4a8c-80dd-dc9892458398.png)

---

## **6. 공지사항**
- USER, ADMIN 역할 구분
  - USER: 조회만 가능
  - ADMIN: 등록, 수정, 삭제 가능
![image](https://user-images.githubusercontent.com/31895069/156506139-31b092e1-12ab-4277-a1d7-382f1294e238.png)
![image](https://user-images.githubusercontent.com/31895069/156506141-d6e0b74b-4890-4e3d-8848-9055d40db6b9.png)
![image](https://user-images.githubusercontent.com/31895069/156506146-374c1750-e3ff-458a-a3ab-927eb6fcdf6f.png)

---

## **7. 프로필 페이지**
![image](https://user-images.githubusercontent.com/31895069/156506157-4d51f467-67b3-48c6-857a-98f39ca13151.png)

---

## **8. 프로젝트 관리 페이지**
![image](https://user-images.githubusercontent.com/31895069/156506175-da8df9d3-8dfd-452d-b225-24c20eddae5a.png)
![image](https://user-images.githubusercontent.com/31895069/156506182-208e0b04-e99a-4c1c-a73c-651d90a39188.png)
![image](https://user-images.githubusercontent.com/31895069/156506184-69051e43-b7d8-461c-9857-aaf95c552aa0.png)


## **9. 변경사항**
![image](https://user-images.githubusercontent.com/31895069/156506194-2dc4a815-9d86-4393-b9a0-660ba7d91302.png)
![image](https://user-images.githubusercontent.com/31895069/156506200-872ca968-3398-42e2-b790-8a5d5d3ce5a6.png)

<br/>
모모펀딩 상단부와 하단부의 로고가 변경되었습니다.


