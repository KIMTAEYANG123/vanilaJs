
const loginInput = document.querySelector('.login-form input');
const loginForm = document.querySelector('.login-form');

function onLoginBtnClick(e){
    e.preventDefault();
    const userName = loginInput.value;
    if(userName === ''){
        console.log('아이디를 입력해주세요')
    }else if(userName.length >= 15 ){
        alert('15글자 이하로 작성해주세요')
    }
    console.log('로그인 하기')
}

loginForm.addEventListener('submit',onLoginBtnClick)