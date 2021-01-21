window.addEventListener('load',function () {
    let passwordLabel = document.getElementById('pass');
    let passwordInput = document.querySelector('.main-personal__access-form-item-password');
    let passwordInputOpen = document.querySelector('.main-personal__access-form-item-password input');

    document.addEventListener('click', function (event) {
        if(event.target === passwordLabel) {
            passwordInput.classList.add('password-open');
        } else if (event.target === passwordInputOpen) {
            passwordInput.classList.add('password-open');
        } else {
            passwordInput.classList.remove('password-open');
        }
    })
});
