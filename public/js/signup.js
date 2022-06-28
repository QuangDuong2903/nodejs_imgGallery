const btn = document.querySelector('button')
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const check = document.querySelector('#terms-required');
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
})

btn.addEventListener('click', function() {
    if(username.value =='' || password.value =='' || confirmPassword.value =='' || check.checked == false) {
        alert('Vui lòng điền đủ thông tin')
    }
    else {
        if(password.value == confirmPassword.value) {
            const options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username: username.value, password: password.value})
            };
            fetch('/signup', options)
            .then(res => res.json())
            .then(data => {
                if(data.message) 
                    alert(data.message);
                if(data.src)
                    window.location.href = '/user/' + data.src;
            });
        }
        else 
            alert('Mật khẩu và nhập lại mật khẩu không trùng khớp')
    }
})