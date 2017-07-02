MEAN 소개
=========

## MongoDB 설치

1. http://mongodb.org/downloads 파일 다운로드

2. 윈도우에 MongoDB 설치 (C:\Program Files\MongoDB\)

3. db 폴더 생성
```shell
    > md c:\data\db
```
4. MongoDB 실행
```shell
    > cd c:\Program Files\MongoDB\Server\3.2\bin
    cd c:\Program Files\MongoDB\Server\3.2\bin > mongod
```
5. MongoDB config 파일 만들기
```shell
    > md c:\data\log
```
 - c:\Program Files\MongDB\Server\3.2\mongod.cfg 파일 생성
 ```
 systemLog:
    destination: file
    path: c:\data\log\mongod.log
 storage:
    dbPath: c:\data\db
 ```
 6. CMD 를 관리자 권한으로 열고 만일 MongoDB 서비스가 등록 되어 있다면 아래와 같이 서비스 종료하고 삭제한다.
 ```shell
    > sc stop MongoDB
    > sc delete MongoDB
 ```
7. MongoDB 서비스를 아래와 같이 등록하여 사용한다.
```shell
    > "C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe" --config
      "C:\Program Files\MongoDB\Server\3.2\mongod.cfg" --install
```  
8. MongoDB 서비스 시작 하기
```shell
    > net start MongoDB
```

## MongoDB 쉘 사용하기

``` shell
    > cd mongodb/bin
    > mongo
```
``` shell
    > use local

    > db.articles.insert({title:"Hello World", author:"John Doe"});

    > db.articles.find()
    { _id: ObjectId("52d02240e4b01d67d71ad577"), title: "Hello World" , author: "John Doe" }
```

## Node.js 설치

1. https://nodejs.org/en/download 에서 64bit 버전 다운로드 후 설치