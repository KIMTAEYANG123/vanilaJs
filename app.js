
// 바뀌지 않는 값 constant
// const a = 5;

// 바뀔 수 있는 값 
// let b = 2;


// null = 안 넣은 것이 아니라 아무 것도 상태
// false = false라는 값이 있는 것
// undefined = 메모리에 공간은 있는데 아무 것도 없는 것 

// 브라우저의 핵심 객체는 document
// hmtl를 js에서 접근 및 변경 등을 할 수 있도록 만든 DOM임
document.title = 'KIM TAE YANG';
// 아이디로 요소를 찾을 때
const title = document.getElementById('title');
title.innerText = 'Got you!'

//클래스로 찾는 법
const hellos = document.getElementsByClassName('hellos');

//css처럼 잡을 수 있음
//여러개의 요소가 있을 땐 첫번째 요소만 가져옴
const hi = document.querySelector('.hellos');

// 그렇기 때문에 all을 붙여 사용하면 배열로 나오게 됨
const hiAll = document.querySelectorAll('.hellos');
