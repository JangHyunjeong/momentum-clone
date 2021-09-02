const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);    
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreeting(username){ 
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerHTML = `Hello ${username}`;
}

if(savedUsername === null){
    //input show
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',onLoginSubmit);
}else {
    //greetingd
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(savedUsername);
}


