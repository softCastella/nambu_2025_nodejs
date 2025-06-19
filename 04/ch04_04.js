const express = require("express")
const moment = require("moment");
const { error } = require("winston");
const app = express()
const PORT = 3000;

const memos = [
    { id: 1, title: "샘플 메모1", content: "오늘 점심은 뭐 먹지...", createdAt: "2025-06-13" },
    { id: 2, title: "샘플 메모2", content: "오늘 점심은 뭐 하지...", createdAt: "2025-06-14" },
    { id: 3, title: "샘플 메모3", content: "오늘 점심은 졸자...", createdAt: "2025-06-15" },
]
//createdAt : moment().format("YYYY-MM-DD")
app.use(express.json())

//1. 메모 목록 반환
app.get("/memos", (req, res) => {
    res.json(memos)
})

//2. 메모 한 개 반환(id로)
app.get("/memos/:id", (req, res) => {
    const id = req.params.id
    const memo = memos.find((m) => m.id === parseInt(id))
    if (!memo) {
        return res.status(404).json({ message: "메모를 찾을 수가 없는걸??" })
    }
    res.status(200).json(memo)
})

//3. 메모 쓰기
app.post("/memos", (req, res) => {
    const { title, content } = req.body
    const memo = {
        id: memos.length + 1,
        title,
        content,
        createdAt : moment().format("YYYY-MM-DD")
    }
    memos.push(memo)
    res.status(201).json(memo)
})
//4. 메모 수정
app.put("/memos/:id", (req, res) => {
    const id = req.params.id;
    const { title, content } = req.body;
    const memo = memos.find((memo) => memo.id === parseInt(id))
    if (!memo) {
        return res.status(404).json({ error: "메모가 엄슴미당ㅇㅇㅇ..." })
    }
    memo.title = title;
    memo.content = content;
    memo.createdAt = moment().format("YYYY-MM-DD")
    res.status(200).json(memo)
})

//5. 메모 삭제
app.delete("/memos/:id", (req, res) => {
    const id = req.params.id;
    const index = memos.findIndex((memo) => memo.id === parseInt(id))
    if (index === -1) {
        return res.status(404).json({ error: "메모를 찾을 수 없씀미당" })
    }
    memos.splice(index, 1)
    res.status(204).send()
})

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 시작_memoApp`)
})