const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
const dataForm = new FormData(form);

fetch('https://httpbin.org/post' , {
    method: 'POST',
    body: dataForm
}).then(Response => Response.json())
.then(Response => console.log(Response))

window.location.href = "/src/page/app.html"
})
