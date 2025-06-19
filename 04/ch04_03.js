//restfull API작성하기

const express = require('express')
//app = Express애플리케이션 객체를 만듦
const app = express()
const PORT = 3000;

const books = [
    { id: 1, title: "Node.js 교과서", author: "이지훈" },
    { id: 2, title: "한 눈에 보는 Node.js", author: "이지훈" },
    { id: 3, title: "Node.js 디자인패턴", author: "이지훈" }
]

app.use(express.json())     //미들웨어, 응답,요청시 JSON처리 담당

//전체 코드에서 RESTful API의 범위 - 이 라우트 핸들러(엔드포인트:API경로)
//app.get, post, put, delete등의 엔드포인트들이 레스트풀 API이다
//http://localhost:3000/books
app.get("/books", (req, res) => {
    res.json(books)
})

//객체 요소로 책1권 가져오기(조회/읽기 R)
//http://localhost:3000/books/1,http://localhost:3000/books/2
app.get("/books/:id", (req, res) => {
    const id = req.params.id //문자열
    const book = books.find((b) => b.id === parseInt(id)) //===타입이랑 값 동일해야 참
    if (!book) {
        return res.status(404).json({ message: "책을 찾을 수 없어용" })
    }
    res.json(book); //status 200
})

//post로 객체 추가하기(쓰기/생성 C)
app.post("/books", (req, res) => {
    const { title, author } = req.body;//요청본문에[서 titile, author 추출
    const book = {
        id: books.length + 1,
        title,
        author,
    }
    books.push(book) //push배열에 book객체 추가
    res.status(201).json(book)
})

//put으로 객체 수정하기 (수정 U)
//localhost:3000/books/1
app.put("/books/:id", (req, res) => {
    const id = req.params.id;
    const { title, author } = req.body;
    const book = books.find((book) => book.id === parseInt(id))
    if (!book) {
        return res.status(404).json({ error: "책이 엄슴미당" })
    }
    book.title = title;
    book.author = author;
    res.json(book)
})

//객체 삭제 (삭제 D)
app.delete("/books/:id",(req,res)=>{
    const id = req.params.id;
    const index = books.findIndex((book)=>book.id === parseInt(id))
    if(index ===- 1) {
        return res.status(404).json({error:"책을 찾을 수가 없씀미당"})
    }
    books.splice(index,1)
    res.status(204).send() //204: NoContent 요청은 성공 그러나 줄 컨텐츠는 없음
})


//서버 실행문
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 시작`)
})