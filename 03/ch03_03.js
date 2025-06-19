const moment = require("moment")

const nowDate = moment(); //현재 시각 가져오기
console.log(nowDate);
console.log(nowDate.format("YYYY-MM-DD HH:mm:ss")); //format - 형식을 추가해서
console.log(nowDate.format("YYYY년 MM월 DD일"));
console.log(nowDate.format("YYYY년 MM월 DD일 HH시 mm분 ss초 "));

//문제 현재 날짜 + 시각 2025/06/18 형태로 출력
console.log(nowDate.format("YYYY/MM/DD"));

//날짜 포메팅 : 특정 날짜의 문자열을 모멘트 객체 형태로 바꿀 수 있다
const dateMoment = moment("2024-03-30");
console.log(dateMoment);

//시간을 추가, 빼기
const nextDays = nowDate.add(7,"days") //7일 후 
console.log(nextDays)

//시간 차이 계산
const startDate = moment();
const endDate = moment("2025-08-20");
const diffDay = endDate.diff(startDate,"days");
console.log("과정 종료까지 남은 날수", nowDate, endDate, diffDay);


console.log("-------문제2--------")
//문제2 오늘부터 100일 후 날자를 yyyy년 mm월 dd일로 출력
const startDate1 = moment();
const endDate1 = startDate1.add(100,"days")
console.log(`${startDate.format("YYYY년 MM월 DD일")}에서 100일 후 날짜는 ${endDate1.format("YYYY년 MM월 DD일")}`)

console.log("-------문제3--------")
//문제3 2024-03-15 부터 2025-09-20까지  몇 개월이 지났나 계산
const startDate2 = moment("2024-03-15");
const endDate2 = moment("2025-09-20");
const diffMonth = endDate2.diff(startDate2,"months");
console.log(`2024-03-15 부터 2025-09-20까지 지난 개월수는 ${diffMonth}개월`);

console.log("-------문제4--------")
//문제4 오늘부터 크리스마스까지 남은 일수를 계산
const startDate3 = moment();
const endDate3 = moment("2025-12-25");
const diffDay3 = endDate3.diff(startDate3,"days");
console.log(`크리스마스까지 남은 날수, ${diffDay3}일`);


require("moment/locale/ko") //한글 로케일 불러오기
moment.locale("ko")           //한국어 로케일 설정

const s3 = moment()
console.log(`요일 : ${s3.format("d")}`) //3
console.log(`요일 : ${s3.format("dd")}`) //we
console.log(`요일 : ${s3.format("ddd")}`) //wed
console.log(`요일 : ${s3.format("dddd")}`) ///wednesday

//문제5 올 크리스마스는 무슨 요일일까요?
const s4 = moment("2025-12-25");
console.log(`요일 : ${s4.format("dddd")}`) //

//문제6 내 생일의 요일
const birthday = moment("1984-08-29");
console.log(`내가 태어난 요일은 ${birthday.format("dddd")}입니다`)