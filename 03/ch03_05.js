//.env파일 프로그램상 로드
require("dotenv").config()

console.log(`서버 포트 : ${process.env.PORT}`)
//문제1 DB_NAME, DB_USER, DB_PASSWORD, API_KEY. NODE_EMV출력

console.log(
    `디비 이름 : ${process.env.DB_NAME},
디비 포트 : ${process.env.DB_PORT || 5432},
디비 유저 : ${process.env.DB_USER},
디비 비번 : ${process.env.DB_PASSWORD},
API-KEY : ${process.env.API_KEY},
NODE-EMV : ${process.env.NODE_EMV}`
)

if(!process.env.OPENAI_API_KEY) {
    console.error(`오픈ai의 키가 필요합니다`)
}

const isDevelopment = process.env.NODE_ENV === "development"
if(isDevelopment) {
    console.log(`개발환경에서의 로직 처리`)
} else {
    console.log(`운영환경에서의 로직 처리`)
}