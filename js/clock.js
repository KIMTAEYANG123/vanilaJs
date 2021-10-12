const clock = document.querySelector('.clock');

function getClock(){
    const date = new Date();
    const hours = date.getHours().toString().padStart(2,"0");
    const minutes = date.getMinutes().toString().padStart(2,"0");
    const seconds = date.getSeconds().toString().padStart(2,"0");

    clock.innerText =`${hours} : ${minutes} : ${seconds}`
}

getClock();
// 1초 간격으로 함수가 실행 됨 
setInterval(getClock, 1000);


