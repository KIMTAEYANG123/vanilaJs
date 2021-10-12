
const loginInput = document.querySelector('.login-form input');
const loginForm = document.querySelector('.login-form');
const greeting =document.querySelector('.greeting');

//자바스크립트는 오타가 나도 지적을 안 해주므로 변수를 만들어 저장해 놓으면 좋음
const USERNAME_KEY = 'userName';

//로그인 버트 클릭 시 localstorage에 저장
function onLoginBtnClick(e){
    e.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add('hidden');
    localStorage.setItem(USERNAME_KEY,userName)
    if(userName === ''){
        console.log('아이디를 입력해주세요')
    }else if(userName.length >= 15 ){
        alert('15글자 이하로 작성해주세요')
    }
    paintGreeting(userName)
}

loginForm.addEventListener('submit',onLoginBtnClick)

/**
 * 로그인 후 h1을 렌더하는 함수
 * @param {로그인 유저 이름} userName 
 */
function paintGreeting(userName){
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove('hidden');
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    loginForm.classList.remove('hidden');
    loginForm.addEventListener('submit',onLoginBtnClick)
}else{
    loginForm.classList.add('hidden');
    paintGreeting(savedUserName)
}
