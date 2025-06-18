//http 웹서버관련 내장 모듈
const http = require ('http')

//req:HTTP요청, res: HTTP응답
const server = http.createServer((req,res)=>{
    //요청이 올때마다 실행되는 콜백 함수
    //요청한 브라우저에게 응답은 200번 성공, 컨텐트 타입은 그냥 텍스트, 캐릭터 셋utf-8이야
    res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"}) //헤더정보를 보여줌
    //본문에 "안녕하세요~" 클라이언트에게 보내준다.
    res.end(("안녕하세요~ 최진영의 첫번째 웹서버에 오셨어용"))

}); //나만의 웹서버()안에 인자콜백함수 1개만 들어감

const PORT = 3000;
server.listen(PORT,() => {
    //서버가 3000번 포트로 요청을 기다리고 있습니다.
    console.log(`나만의 웹서버가 http://localhost:${PORT}에서 실행 중 입니다.`)
})
//node ch02_03.js터미널 실행시 서버가 실행된다

