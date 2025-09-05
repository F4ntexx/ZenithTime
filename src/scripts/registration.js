const form = document.querySelector('form');
const nickname = document.getElementById('nickname');
const email = document.getElementById('email');
const password = document.getElementById('password');

const dataJSONform = {
    "nickname": nickname.value,
    "email": email.value,
    "password": password.value
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

fetch('http://localhost:5000/users' , {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataJSONform)
}).then(Response => {
    if (Response.ok){
        window.location.href = '/src/page/app.html';
    }else{
        console.log('Error runtime sendling ', Response.status)
    }
})
Response => Response.json()
.catch (error => {
console.log('Ошибка ввода' , error);
})
.then(Response => console.log(Response))
 const userDateLocalSt = localStorage.setItem('user', JSON.stringify(dataJSONform));
}
);
