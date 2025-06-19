//npm i winston

// const { format } = require("express/lib/response")
const winston = require("winston")

const logger = winston.createLogger({
    level: "info", //로깅레벨(info이상의 로깅레벨 출력
    format: winston.format.simple(), //간단한 텍스트 형식,
    transports: [
        new winston.transports.Console(), //콘솔로 출력
        new winston.transports.File({
            filename: "app.log"
        }), //콘솔로 출력
    ]
});

console.log("------로그레벨------")
console.log("로그레벨 : error > warn > info >debug > verbose")

logger.info("정보 - 일반적인 정보메세지를 출력할 때는 info를 쓰세요")
logger.error("에러가 발생했을 때 쓰세요")
logger.warn("경고! = 주의가 필요한 메세지 일때만 쓰세요 ")
logger.debug("디버그 - 개발 중에만 사용하세요")


const simpleLogger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(), //시간을 추가
        winston.format.printf(({timestamp, level,message}) => {
            return `${timestamp} [${level}] : ${message}`; //로그 포멧 변경
        })
    ),
    transports: [ new winston.transports.Console()],
});

simpleLogger.info("타임스탬프가 포함된 로그")