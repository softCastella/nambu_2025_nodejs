//파일 다루기 fs 모듈 이용
const fs = require("fs"); //require : 모듈을 갖고 와라 commonjs방식 fs모듈(파일 다루기 모듈)임포트

//파일명, 작성 내용순서로 인자 삽입
// fs.writeFileSync("test.txt","hello world") 
//터미널 피드백용
// console.log("파일 쓰기 완료") 

//문제1 hello.txt만들고, 내용에 안녕하세요 반갑습니다. 제 이름은 이지훈입니다.
// fs.writeFileSync("hello.txt","제 이름은 최진영입니다")
// console.log("파일 쓰기 완료했다")

//파일 읽기
//인코딩 ASCII CODE 41 a, 42 b/ EUC-KR,utf-8등 인코딩을 씀
//문제2 hello.txt를 익어서 콘솔로 출력
// const data = fs.readFileSync("test.txt","utf-8"); 
// console.log(data,"데이터 읽기 완료")


//파일 상태를 볼 수 있다
// const stats1 = fs.statSync("test.txt")
// console.log(stats1)


//콜백방식
// fs.writeFile("async-test.txt","비동기 테스트 async-test hello wolrd!", (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log("비동기 파일 쓰기 완료")
// });

//문제3 async-hello.txt 파일을 만들고, 안녕하세요 비동기 파일 쓰기 테스트 작업입니다.
// fs.writeFile("async-hello.txt","안녕하세요 async-hello 비동기 파일 쓰기 테스트 작업입니다.", (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log("비동기 파일 쓰기 완료2")
// });

// fs.readFile("async-test.txt","utf-8",(err,data) =>{
//     if(err) {
//         console.log("읽기 에러",err);
//     } console.log("비동기파일읽기",data)
// })

// //문제4 async-hello.txt를 fs.readFile로읽기
// fs.readFile("async-hello.txt","utf-8",(err,data) =>{
//     if(err) {
//         console.log("읽기 에러",err);
//     } console.log("비동기파일읽기",data)
// })

//async await
const fsPromise = require("fs").promises;

const fileOp = async() => {
    try{
        await fsPromise.writeFile("promise-test.txt","Promise hello world");
        console.log("파일 쓰기 완료");

        const data = await fsPromise.readFile("promise-test.txt","utf-8");
        console.log("파일 읽기 완료",data);
    } catch(e) {
        console.log(e)
    }
}

fileOp();

//문제5 fileOp2함수를 만들고 promise방식으로 promise-hell.txt넣고 
//안녕하세요 프로미스 방식으로 파일 읽는 연습 중, promise-hello.txt다시 읽고 출력
const fileOp2 = async() => {
    try{
        await fsPromise.writeFile("promise-hello.txt","안녕하세요 프로미스 방식으로 파일 읽는 연습 중입니다");
        console.log("파일 쓰기 완료");

        const data = await fsPromise.readFile("promise-hello.txt","utf-8");
        console.log("파일 읽기 완료",data);
    } catch(e) {
        console.log(e)
    }
}

// fileOp2();

