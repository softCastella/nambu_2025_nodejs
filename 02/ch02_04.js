const users = [
  { id: 1, name: "김민수", age: 25, score: 88 },
  { id: 2, name: "이수진", age: 22, score: 92 },
  { id: 3, name: "박지훈", age: 28, score: 76 },
  { id: 4, name: "최유리", age: 24, score: 85 },
  { id: 5, name: "정현우", age: 27, score: 90 },
  { id: 6, name: "한지민", age: 23, score: 81 },
  { id: 7, name: "오세훈", age: 26, score: 79 },
  { id: 8, name: "윤아름", age: 21, score: 95 },
];

//조건에 맞는 요소만
const youngs = users.filter((user) => {
  console.log(user);
  return user.age < 25; //판별식이 들어감
});
console.log(youngs); //return 조건에 있는 애들만 반환, 새배열생성
//select * from users where age <25;

//문제1 user에서 점수가 80점 미만인 친구들만 골라내세요
console.log("------문제1-------");
const sco1 = users.filter((user) => user.score < 80);
console.log(sco1);

const userNames = users.map((user) => {
  return user.name;
});
console.log(userNames);

//문제2 아이디, 이름만 반환하는 배열 만들기
console.log("------문제2-------");
const idandNames = users.map((user) => {
  return { id: user.id, name: user.name };
});
console.log(idandNames);

//문제3 성적이 80이상인 친구들 아이디, 이름, 성적
console.log("------문제3-나의시도------");
const score = users.map((user) => {
  if (user.score >= 80) {
    return { id: user.id, name: user.name, score: user.score };
  }
});
console.log(score);

console.log("------문제3-풀이------");
const hiScores = users
  .filter((user) => user.score > 80)
  .map((user) => {
    return { id: user.id, name: user.name, score: user.score };
  });
console.log(hiScores);

console.log("-------forEach------");
users.forEach((user) => {
  console.log(`${user.name}님의 점수는 ${user.score}입니다`);
});

//reduce함수 : 배열을 단일 ㄱ밧을 축소 sum : 누적변수
const totalScore = users.reduce((sum, user) => {
  return sum + user.score;
}, 0);
console.log(totalScore);

//문제4 나이가 25이상인 사람들의 토탈 점수를 구해보세요
const totalScore1 = users
  .filter((user) => user.age > 25)
  .reduce((sum, user) => {
    return sum + user.score;
  }, 0);
console.log(totalScore1);

const sortedByAge = [...users].sort((a, b) => {
  return a.age - b.age;
  //a.age - b.age가 음수이면 a가 b 앞에 있고
  //a.age = b.age가 양수이면 a가 b 뒤로 가고
  //a.age = b.age 0이면 아무것도 안한다
}); //나이 오름차순 정려
console.log(sortedByAge);
