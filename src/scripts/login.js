const form = document.querySelector('form');
const formData = new FormData(form);
form.addEventListener('submit', (e) => {
    e.preventDefault();

fetch("http://localhost:5000/users",{
    method: "POST",
    headers: "multipart/formdata",
}
)
.then(Response => Response.json())
.then(Response => console.log(Response))


})



