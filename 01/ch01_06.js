//객체
//eg. 최진영이라는 객체 표현
const name = "최진영"
const age = 40
const job = "developer"

const name1 ="홍길동"
const age1 = 50
const job1 = "sw engineer"

const person1 ={ //person1이라는 객체로 관리
    name : '최진영',
    age : 50,
    job : 'sw engineer'
}
console.log(person1.name, person1['name'])

//객체 추가
person1.hobby = ["cook","fishing"]
console.log(person1)

//객체 순회
console.log(Object.keys(person1));

//값만 가져오기
console.log(Object.values(person1));

//객체에 함수 넣기
person1.addAge = function(){
    this.age = this.age +1;
}
person1.addAge();
console.log(person1);

class PersonInfo {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    addAge(age){
        this.age = this.age + age;
    }

    addAge(){
        return this.age
    }
}
let p1 = new PersonInfo("최진영", 40, "화곡동")
console.log(p1)
p1.addAge(50)
console.log(p1.addAge())

//상속
class Employee extends PersonInfo {
    constructor(name, age, address, salary) {
        super(name, age, address)
        this.salary = salary;
    }
}

let e1 = new Employee("최진영", 60 , "강서 화곡", 10000000)
console.log(e1)

//try..catch 예외 처리(에러)
try {
    //DB 커넥션 얻어와서 데이터 질의
    const arr = new Array(-1)
} catch(e){
    console.log("예외 발생",e)
} finally {
    //DB 커넥션 닫아주기
    console.log("예외가 발생해도 이작업은 반드시 필요")
}

//커스텀 에러
try {
    const err = new Error("나만의 에러")
    err.name = "나만의 에러"
    err.message = "나만의 에러가 완성되었어요"
    throw err
} catch(e) {
    console.log("나만의 에러를 잡음")
}

//문제1
console.log("문제1")
class CarInfo {
    constructor(brand,color, model){
        this.brand = brand;
        this.color = color;
        this.model = model;
    }

    drive(){
        console.log(`${this.brand} ${this.model}모델이 ${this.color}색이 달리는 중`);
    }

    stop(){
        console.log(`${this.brand} ${this.model}모델이 ${this.color}색이 멈췄습니다`);
    }
}

let car1 = new CarInfo("기아", "하양", "모닝")
console.log(car1)

car1.drive();
car1.stop();

class ElectricCarInfo extends CarInfo {
    constructor(brand,color,model,battery) {
        super(brand,color,model)
        this.battery = battery;
    }
    charge(){
        console.log(`${this.brand} ${this.model}모델이 ${this.color}색이 충전 중`)
    }
}
let eCar1 = new ElectricCarInfo("테슬라", "보라", "모델3", 90)
let eCar2 = new ElectricCarInfo("제네시스", "빨강", "G80", 120)
let eCar3 = new ElectricCarInfo("소나타", "검정", "s70", 60)
console.log(eCar1)
eCar1.drive()
eCar2.charge()
eCar3.stop()