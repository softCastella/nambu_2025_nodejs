const fetchData = (callback) => { //callback <-handleData
    setTimeout(() => {              //서버에서 데이터를 받는 부분(무조건 콜백으로 받음)
        const data = "서버에서 받은 데이터"
        callback(data)
    }, 1000)
}

const handleData = (data) => { //서버에서 받은 데이터를 처리하는 내용, 데이터 파싱 등등
    console.log("콜백에서 받은 데이터", data)
}

// fetchData(handleData)

const fetchDataPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; //작업 성공여부
            //외부에서나 db에서 데이터를 가지고 오는 로직이 있는 자리
            if (success) {
                resolve();  //성공했을 때 호출되는 함수
            } else {
                reject();   //실패했을때 호출되는 함수
            }
        }, 1000);
    }); //인자 1개만 들어옴
}

fetchDataPromise()   //외부 라이브러리들이 이런 형태로 함수 제공
    .then((data) => {
        console.log("프로미스에서 받은 데이터 ", data);
    })
    .catch((error) => {
        console.log("에러", error)
    })

const getData = async () => {
    try {
        const data = await fetchDataPromise();
        console.log("async/await data", data) //데이터 패치가 성공했을 때 처리 로직(resolve)
    } catch (e) {
        console.log("에러", error) //(reject)
    }
}

//문제 2초후에 "안녕하세요!"라는 메세지 출력 Promise를 만들고 실행
const greet = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("안녕하세요")
            } else {
                reject("안녕못해요")
            }
        }, 2000);
    });
}

greet().then((msg) => {
    console.log(msg);
})
    .catch((error) => {
        console.error(error);
    });

    //async, await greet안녕하세요


const sayHi = async () => {
    try{
    const data = await greet();
    console.log("안뇽하세요!!")
    } catch(e){
        console.log(e)
    }
}
sayHi()