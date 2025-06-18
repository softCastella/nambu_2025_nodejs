//문제1
console.log('문제1')
const arr = [1,2, "멈춰",3,4,true, false]
for (i in arr) {
    if(arr[i]== "멈춰"){
    break;}
    console.log(arr[i])
}

//문제2
console.log('문제2')
const p2 =[5,10,15,20,25]
for(i in p2) {
    if(p2[i]>=20){
        break;
    }
    console.log(p2[i])
}

//문제3
console.log('문제3')
const p3 = [1,2,3,4,5,6,7,8,9,10]
for(i in p3) {
    if(i % 2 === 1) {
        continue;
    }
    console.log(p3[i])
}

//문제4
console.log('문제4')
const p4 = [1,2,3,4,5,6,7,8,9,10]
for(let i =1;i<=10; i++) {
    if(p4[i] % 3 == 0) {
        continue;
    }
    console.log(p4[i])
}

//문제5
console.log('문제5')
const p5 = ["사과",1,"바나나", 2, "포도", false]
for (i in p5) {
    if(typeof p5[i] == "string") {
        console.log(p5[i])
    }
}

