const express = require("express")
const moment = require("moment")
const Database = require("better-sqlite3") //스마트폰정도에 들어가는 작은 db, 설치없이 파일로 사용
const path = require("path")

//DB setting
const db_name = path.join(__dirname, "post.db")
const db = new Database(db_name)

//express setting
const app = express()
const PORT = 3000
app.use(express.json())

//1. post.db 게시판 전용 테이블을 만들기 (if not extists문 매우 중요!)
const create_sql = `
    create table if not exists posts (      
        id integer primary key autoincrement,
        title varchar(255),
        content text,
        author varchar(100),
        createdAt datetime default current_timestamp,
        count integer default 0
    )
`
db.exec(create_sql)

//1. 게시글 정ㅂ보 조회
app.post("/posts", (req, res) => {
    const { title, content, author } = req.body;
    let sql = `
    insert into posts(title, content, author)
    values( ?, ?, ?)
    `
    db.prepare(sql).run(title, content, author)
    res.status(201).json({ message: "ok" })
});

app.get("/posts",(req,res)=>{
    let sql = `
    select id, title, content, author, createdAt from posts order by createdAt desc
    `
    const stmt = db.prepare(sql)
    const rows = stmt.all()
    console.log(rows)
    res.status(200).json({ data:rows })
});


//2. 게시글 상세 정보 조회
app.get("/posts/:id", (req, res) => {
    const id = req.params.id;
    let sql = `
        select id, title, content, author, createdAt, count
        from posts where id =?
        `
    // from posts order by createdAt desc
    const stmt = db.prepare(sql) //쿼리 준비
    const post = stmt.get(id)
    // const rows = stmt.all()      //쿼리 날려
    // console.log(rows)
    // res.status(200).json({data:rows})
    res.status(200).json({ data: post })
})

//localhost:3000/posts/
app.put("/posts/:id", (req, res) => {
    const id = req.params.id
    const { title, content } = req.body
    let sql = `
        update posts set title =?, content = ?
        where id= ?
    `
    const stmt = db.prepare(sql)
    stmt.run(title, content, id) //실 쿼리문 db실행
    res.redirect(`/posts/${id}`)
})

//server start
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 시작_memoApp`)
})