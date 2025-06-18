//선언
function add1(x,y) {
    return x+y
}
console.log(add1(1,2))

//익명
const add2 = function(x,y) {
    return x+y;
}
console.log(add2(2,3))

//화살표
const add3 = (x,y) => {
    return x+ y
}
console.log(add3(3,4));

//콜백함수(함수안에 함수 들어가는 거)
const ten = (cb) => {
    for(let i=0; i<10; i++) {
        cb();     //()의미 - 함수 실행해라
    }
}
ten(function() {
    console.log('call function')
})

setTimeout(function(){
    console.log(`1초 뒤에 호출`)
},1000)           //1000ms => 1초

setInterval(function(){
    console.log(`1초 마다 실행`)
},1000)           //1000ms => 1초마다 실행