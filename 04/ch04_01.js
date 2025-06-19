//1. Express 모듈 가져오기
const express = require('express') //express 모듈 활용 

//2. Express 애플리케이션 설정
const app = express();

//3. 포트 설정
const PORT = 3000;

//4. 라우팅 설정 - Get 요청 localhost:3000
//app.get GET요청을 처리해라 
app.get("/", (req, res) => {
    //req: HTTP요청, res : HTTP응답
    res.send("Hello World1")
})

app.get("/hello", (req, res) => {
    //req: HTTP요청, res : HTTP응답
    res.send("안녕 /hello 주소에 접근하셨습니다.")
})




//문제1 localhost:3000/world GET;요청할 경우 응답 "안녕 /hello 주소에 접근하셨습니다."
app.get("/world", (req, res) => {
    //req: HTTP요청, res : HTTP응답
    res.send("안녕 /world 주소에 접근하셨습니다.")
})




//5.서버 시작
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 실행 중입니다.`)
})

