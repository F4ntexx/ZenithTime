const form = document.querySelector('form');
const nickname = document.getElementById('nickname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

const dataJSONform = {
    "nickname": nickname.value,
    "email": email.value,
    "password": password.value,
}

fetch('http://localhost:5000/users' , {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataJSONform)
}).then(Response => Response.json())
.then(Response => console.log(Response))
});
