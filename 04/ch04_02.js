const express = require('express')
const app = express()

// const PORT = 3001

app.get("/", (req,res) =>{
    res.send(`
        <html>
            <head>
                <title>첫번째 마이 홈피</title>
            </head>
            <body>
                <h1>첫번 째 익스프레스 홈</h1>
                <nav>
                    <a href="/">홈</a>
                    <a href="/about">소개</a>
                    <a href="/contact">연락처</a>
                </nav>
                <p>익스프레스로 만든 간단한 홈피입ㅂ니다.</p>
            </body>
        </html>
        `)
})

app.get("/about", (req, res) => {
    //req: HTTP요청, res : HTTP응답
    res.send(`
        <h1>소개 페이지</h1><p>이 홈피는 익스프레스 학습을 위해 만들었다</p>
    `)
})

app.get("/contact", (req, res) => {
    //req: HTTP요청, res : HTTP응답
    res.send(`
        <h1>연락처</h1><p>이메일: 000@1111.com</p>
    `)
})

//문제1 서버 3001로 시작 코드를 넣어 보세요 
app.listen(3001, () => {
    console.log(`서버가 http://localhost:3001 실행 중입니다`)
})