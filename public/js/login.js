const btn = document.querySelector('button')

const username = document.querySelector('#username')

const password = document.querySelector('#password')

const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
})

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';')
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

btn.addEventListener('click', function() {
    let url = new URL(window.location.href)
    url.searchParams.append('username', username.value);
    url.searchParams.append('password', password.value);
    
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    })
    .then(res => res.json())
    .then(data => {
        if(data.src)
        {
            setCookie('token', data.token, 1)
            window.location.href = window.location.protocol + '//' + window.location.host + '/user/' + data.src
        }
        if(data.message)
            alert(data.message)
    })
})
