//모듈 임포트
const express = require("express")
const path = require("path")
const moment = require("moment")
const Database = require("better-sqlite3")

//익스프레스 설정
const app = express()
const PORT = 3000
app.use(express.json())

//db설정
const db_name = path.join(__dirname, "todo.db")
const db = new Database(db_name)

const create_sql = `
    create table if not exists todos (
    id integer primary key autoincrement,
    task varchar(255),
    description text,
    completed boolean default 0,
    createdAt datetime default current_timestamp,
    priority integer default 1
    )
`

db.exec(create_sql)

//1. 할 일 쓰기 POST http://localhost:3000/todos
app.post("/todos",(req,res) => {
    const {task, description} = req.body;
    let sql = `
    insert into todos(task, description)
    values( ?, ?)
    `;
    const stmt = db.prepare(sql);
    stmt.run(task, description);
    res.status(201).json({message:"ok", data:rows});
})

//2. 할 일 목록 조회 GET http://localhost:3000/todos
app.get("/todos",(req,res) => {
    let sql = `
    select id, task, description, completed, createdAt, priority from todos`
    const stmt = db.prepare(sql)
    const rows = stmt.all()
    console.log(rows)
    res.status(200).json({data:rows})
})

//3. 할 일 1건 조회 GET http://localhost:3000/todos/1
app.get("/todos/:id",(req,res) => {
    const id = req.params.id;
    let sql = `
    select id, task, description, completed, createdAt, priority from todos where id =?`
    const todos = db.prepare(sql).stmt.get(id)
    console.log(rows)
    res.status(200).json({message:"ok", data:todos})
})

//4. 할일 수정 PUT http://localhost:3000/todos/1
app.put("/todos/:id", (req,res) => {

    const id = req.params.id;
    const {task,description} = req.body
    let sql = `
    update todos set task =?, description = ?
    where id =?
    `
    db.prepare(sql).run(task, description,id)
    res.redirect(`/todos/${id}`)
})
//5. 할 일 삭제 DELETE http://localhost:3000/todos/1
app.delete("/todos/:id", (req,res) => {
    const id = req.params.id;
    let sql = `delete from todos where id =?`
    db.prepare(sql).run(id)
    res.json({message:"ok"})
})


//서버 설정
app.listen(PORT, () =>{
    console.log(`서버가 ${PORT}에서 돌아가고 있어용용용`)
})