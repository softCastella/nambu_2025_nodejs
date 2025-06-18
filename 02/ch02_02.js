const path = require("path");
const fs= require("fs") //filesystem module

//경로(디렉토리) 생성
// const fullPath = path.join(__dirname,"files","a","b","test.txt") //join함수/ (인자수)여러 경로 지정가능
// console.log(`전체경로  : ${fullPath}`); //files/a/b/test.txt

//--dirname: 현재 디렉토리 절대경로를 가져옴

//문제1 : fullPath2 변수에 현재 디렉토리/files/task/jobs/01.txt경로를 만들어보기
// const fullPath2 = path.join(__dirname,"files","tasks","jobs","01.txt")
// console.log(`전체경로  : ${fullPath2}`);

//const fullPath22 = __dirname + "\" + "files" 편하지만 win mac \/ 차이로 불편

//경로 분리
// const pathParts = path.parse(fullPath)
// console.log(pathParts);

//문제2 fullPath2를 parse로 경로 분리하기(ext네임)
// const pathParts2 = path.parse(fullPath2)
// console.log(pathParts2)

// const ext = path.extname(fullPath)
// console.log(ext)


const dirPath = path.join(__dirname,"new-dir")
console.log(dirPath)
if(!fs.existsSync(dirPath)) {//경로가 있으면 true, 없으면 false
fs.mkdirSync(dirPath,{recursive:true})}

// //문제2 dirPath2 변수를 만들고 현재디렉토리 밑에 tasks 디렉토리를 만들어보세요
// const dirPath2= path.join(__dirname,"tasks")
// console.log(dirPath2)
// if(fs.existsSync(dirPath2)) //경로가 있으면 true, 없으면 false
// fs.mkdirSync(dirPath2)

// const dirPath3 = path.join(__dirname,"tasks","jobs","01");
// if(!fs.existsSync(dirPath3)) {
//     fs.mkdirSync(dirPath3,{recursive: true})
// }

// const filePath = path.join(dirPath3,"test.txt")
// fs.writeFileSync(filePath,"디렉토리 생성후 파일 생성 테스트 중")

//문제2 : 현재 디렉토리 밑에 main/src/code/javascript.txt파일을 생성하고
//       파일 내 "자바스크립트 테스트 파일입니다"를 적어놓으세요
// 1) 디렉토리를 만든다 2) 파일을 만들고 쓴다
// const dirPath4 = path.join(__dirname,"main","src","code")
// if(!fs.existsSync(dirPath4)) {
//     fs.mkdirSync(dirPath4,{recursive:true})
// }
// const filePath4 = path.join(dirPath4,"javascript.txt")
// fs.writeFileSync(filePath4,"자바스크립트 테스트 중")

//디렉토리 이름 변경
const newDirPath = path.join(__dirname,"rename-dir");
fs.renameSync(dirPath,newDirPath) //경로변경 == 디렉토리변경(mv)

//디렉토리 삭제
fs.rmdirSync(newDirPath)