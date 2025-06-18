let date = new Date()

if (date.getHours() < 12) {
    console.log("오전")
} else {
    console.log("오후")
}

const hour = date.getHours()
const timeOfDay = hour < 12 ? "오전" : "오후"
console.log(`gusw2o ${timeOfDay}입니다`)

const temperature = 24
//문제1 30도가 넘어가면 "더운 날씨입니다" 출력
//20도 넘어가면 "따뜻한 날씨입니다" 출력
//10도 넘어가면 "선선한 날씨입니다" 출력
//나머지 추운 날씨 입니다 출력

if (temperature > 30) {
    console.log("더운 날씨입니다")
} else if (temperature > 20) {
    console.log("따뜻한 날씨입니다")
} else if (temperature > 10) {
    console.log("신선한 날씨입니다")
} else {
    console.log("추운 날씨입니다")
}

//문제2 스위치 문으로 요일을 출력해주세요
//day == 1 월/ 2 화/3수/4목/5금/6토/0일
const day = date.getDay()
console.log(day)

switch (day) {
    case 1:"월요일"
        
        break;
    case 2:"화요일"
        
        break;
    case 3:"수요일"
        
        break;
    case 4:"목요일"
        
        break;
    case 5:"금요일"
        
        break;
    case 6:"토요일"
        
        break;

    default: "일요일"
        break;
}

const name = "진영님"
const displayName = name || "익명님" //name 값이 있으면 해당값 없으면 "익명님이 들어감"
console.log(`환영합니다 ${displayName}`)

//nullish 변합연산자
const userInput = null;
const defaultValue = "기본값";
const result = userInput ?? defaultValue;
console.log(`결과 : ${result}`)


//조건부 실행
const isLoggedIn = true;
isLoggedIn && console.log("로그인 되었습니다.")
