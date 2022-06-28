const btn = document.querySelector('button')
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
})

btn.addEventListener('click', function() {
    let url = new URL(window.location.protocol + '//' + window.location.host + '/login')
    console.log(url);
    url.searchParams.append('username', username.value);
    url.searchParams.append('password', password.value);
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if(data.src)
            window.location.href = '/user/' + data.src;
        if(data.message)
            alert(data.message)
    });
})
