const fruits = ["사과","수박","바나나","오렌지"]
const [first,second] = fruits;
console.log(first,second);

const student = {
    name:"최진영",
    age:50,
    grade:"B"
}

// const name= student.name
// const age= student.age
// const grade= student.grade

//객체 구조 분해 할당
const {name,age,grade} =student;
console.log(name,age,grade);

//객체 구조 분해 - 다른 변수 이름으로 할당
const{ name:name1, age:age1, grade:grade1} = student;
console.log(name1,age1,grade1);

const person ={
    name: '홍길동'
}

//이런식으로 기본값을 주는 것이 가능
const {name:personName, age:personAge = 25} = person;
console.log(person)
console.log(age)
console.log(name)

//객체를 매개변수로 받는 함수
const printStudentInfo = ({name, age, grade = "B"}) => {
    console.log(`학생정보`)
    console.log(`- 이름 : ${name}`)
    console.log(`- 나이 : ${age}`)
    console.log(`- 성적 : ${grade}`)
}
printStudentInfo(student); //객체가 그대로 인자로 들어옴

//문제 book객체 출력 함수 printBook 매개변수 객체구조 분해할당이용

const book = {
    name : '돈의 속성',
    price: 16020,
    publisher : '스노우폭스북스'
}
const printBook  = ({name,price,publisher =""}) =>{
    console.log(`책정보`)
    console.log(`-이름:${name} `)
    console.log(`-가격:${price}`)
    console.log(`-출판사:${publisher}`)
}
const book2 = {
    name: '부의 인문학',
    price: 20000
};
printBook(book2);

const user ={
    id:1,
    info:{
        name:"김지아",
        address: {
            city:"서울",
            street: "강남대로"
        },
    },
};

const {
    id,
    info:{
        name: userName,
        address: {city:cityName,street},
        },
    } = user;

    console.log(`ID:${id}`)
    console.log(`이름:${userName}`)
    console.log(`도시:${cityName}`)
    console.log(`거리:${street}`)
    //city변수 이름 cityName

    //문제 첫요소 firstcolor, 두번째 요소는 secondcolor에 할당
const colors = ["빨강","파랑","노랑","초록","보라"]
const [firstcolor,secondcolor, ...others] =colors;
console.log(firstcolor, secondcolor,others);

//문제
const user1 = {name: "소지섭", age: 45, email: "so@email.com"};
const user2 = {name: "전종서", age: 30};

//함수 formatUserInfo만들기
const formatUserInfo = ({name, age, email="이메일 없음"}) => {
    return `이름은 ${name} 나이는 ${age} 이메일은 ${email}`; //문자열 한 개
    
};
console.log(formatUserInfo(user1));
console.log(formatUserInfo(user2));