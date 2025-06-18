let pi;
console.log(pi); //undefined
pi = 3.141592
console.log(pi); //3.141592

// let radius = 12; //변수는 어떤 값을 담고 있다. 재활용에 용이하다
// console.log(`넓이 : ${pi * radius}`); //pi r ^2
// console.log(`둘레 : ${pi * 2 *radius}`) //

//문제1. area라는 변수를 만들고 radius 15인 경우 area의 넓이 계산
// let area;
// let radius = 15;
// console.log(`넓이 : ${area * radius}`); //Nan
radius = 15;
let area = pi * radius * radius;
console.log(area)


//문제2. 사각형의 넓이 계산 width, height에서 각각 값을 넣어 area2라는 변수 넓이 구하고 출력
// let area2;
// width = 20;
// height = 30;
// console.log(`area2 = ${width * height}`); 
let width = 10;
let height = 20;
let area2 = width * height;
console.log(area2);

let num = 0;
num++;
console.log(num);//1
num--; 
console.log(num); //0

console.log(String(52));
console.log(typeof String(52));

console.log(Number("52"));
console.log(typeof Number("52"));

console.log(parseInt("1234")); //1234
console.log(parseInt("1234.56")); //1234
console.log(parseFloat("1234.56")); //1234.56

console.log(Number("hello")); //NaN
console.log(isNaN("hello")); //true

console.log(typeof 10); //number
console.log(typeof "hello"); //string
console.log(typeof true); //boolean
console.log(typeof function(){}); //function
console.log(typeof {}); //object
console.log(typeof []); //object

//상수
const test = "변경 불가"
test = "값이 변경되는가?"
console.log(test);