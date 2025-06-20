const express = require("express") //express 모듈 임포트
const moment = require("moment") //날짜 모듈 임포트
const Database = require("better-sqlite3") //sqlite3 모듈 임포트(스마트폰정도 소용량 기기에 들어가는 작은 db, 설치없이 파일로 사용)
const path = require("path")//경로 모듈 임포트

//DB setting
const db_name = path.join(__dirname, "post.db")//sqlite용 DB파일
const db = new Database(db_name) //better-sqlite3의 데이터 베이스를 생성(with 물리적 데이터 베이스)

//express setting
const app = express() //app 이란 변수에 express 함수를 담음. app변수를 이용 express기능 사용
const PORT = 3000 //포트 설정
app.use(express.json()) //app.use 미들웨어를 설정하는 거. 모든 요청과 응답에 json 포맷을 처리.

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
db.exec(create_sql)  //exec sql을 실행시킴

//1. 게시글 작성
app.post("/posts", (req, res) => {   //post 요청 처리. http://my-url/posts POST-> 두번째인자의 핸들러 함수 실행
    const { title, content, author } = req.body; 
    //요청 본문(주소.헤더.본문-title, content, author:json포멧)
    let sql = `
    insert into posts(title, content, author)
    values( ?, ?, ?) 
    `
    //value(`${title}`)로 쓰면 보안에 취약해진다

    // insert쿼리문을 만들어 줌
    const stmt = db.prepare(sql) 
    //문자열 sql을 실제 쿼리문으로 파싱 tatement객체로 만듦 - 재활용성 극대화
    stmt.run(title, content, author) //run메서드를 사용
    // run메서드
    // stmt.run : UPDATE, INSERT, DELETE
    // stmt.all : SELECT * FROM TABLE or SELECT * FROM  TABLE WHERE -->[]배열로 값을 반환
    // stmt.get : SELECT * FROM TABLE LIMIT 1 --> {} 객체로 값 반환
    // db.prepare(sql).run(title, content, author) //stmt.run, stmt.all, stmt.get
    res.status(201).json({ message: "ok" }) 
});

//2.게시글 목록조회 http://localhost:3000/posts?page=2
//페이지네이션 추가
app.get("/posts",(req,res) => {
    const page = req.query.page ? parseInt(req.query.page) : 1; //페이지 주소(문자열)->
    const limit = 5;
    const offset = (page - 1) * limit;
    let sql = `
    select id, title, author, createdAt,count
    from posts order by createdAt desc limit ? offset ?
    `;
    const stmt = db.prepare(sql) //쿼리 준비하세요
    const rows = stmt.all(limit,offset) //쿼리 실행, 결과는 []배열를 반환
    console.log(rows)
    res.status(200).json({ data:rows }) //JSON.stringify({data:rows})객체를 JSON 문자열
});


//2. 게시글 상세 정보 조회 http://localhost:3000/2 GET
app.get("/posts/:id", (req, res) => {
    const id = req.params.id;
    let sql = `
        select id, title, content, author, createdAt, count
        from posts where id =?
        `
    // from posts order by createdAt desc
    const stmt = db.prepare(sql) //쿼리 준비
    const post = stmt.get(id)    //{}로 반환합니다 
    // const rows = stmt.all()      //쿼리 날려
    // console.log(rows)
    // res.status(200).json({data:rows})
    res.status(200).json({ data: post }) //json문자열로 리턴
})

//게시글 수정(수정게시글 ID --> req.params, 수정내용(title, content) --> req.body)
//localhost:3000/posts/1 PUT
app.put("/posts/:id", (req, res) => {
    const id = req.params.id //수정할 게시글을 파람에서 가지고와
    const { title, content } = req.body //수정할 내용은 본문에서 가져와
    let sql = `
        update posts set title =?, content = ?
        where id= ?
    `
    const stmt = db.prepare(sql) //쿼리문을 준비시키고  
    stmt.run(title, content, id) //실 쿼리문 db실행 stmt.run title, content, id넣어 날리기
    res.redirect(`/posts/${id}`)
})

//http://localhost:3000/posts/2 DELETE
app.delete("/posts/:id",(req,res) => {
    const id = req.params.id  //1. 삭제할 게시글 id가져와서
    let sql = `delete from posts where id = ?` //2. 쿼리문 만들어서
    const stmt = db.prepare(sql) //3. 쿼리문 준비
    stmt.run(id) //4. 쿼리문 실행
    res.json({message : "ok"}) //5. 결과로 응답줌
})

//server start
//npx nodemon api.js
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 시작_memoApp`)
})