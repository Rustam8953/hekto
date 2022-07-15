let password = /[0-9]|[A-Za-zA]|[!@#$%^&*]/;

const input = document.querySelector('.login-password');

const loginBtn = document.querySelector('.login-btn');

loginBtn.onClick = function(e) {
    e.preventDefault();
    if(!password.test(input.value)){
        console.log("dasdas")
    }
}

