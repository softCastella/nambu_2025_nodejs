let arr = [5,23,"hello",true,"world",-9]
console.log(arr)
console.log(arr[1])

console.log('----for-----')

//for (초기조건 ; 종료조건; 증감)
for (let i = 0 ; i<arr.length; i++) {
    console.log(`${i} is ${arr[i]}`)
}
console.log('----for in-----')

//for in
for(i in arr) {
    console.log(`${i}is${arr[i]}`)
}
console.log('----for of-----')
//for of
for(e of arr){
    console.log(e)
}

console.log('-----break----')
for(i in arr) {
    if(typeof arr[i]=="string") {
        break;
    }
    console.log(arr[i]);
} //5,23

console.log('----countinue-----')
for(i in arr) {
    if(typeof arr[i]=="string") { //조건걸리면 스킵하고 다음 조건 반복
        continue;
    }
    console.log(arr[i]);
} 