const Form = document.querySelector('form');

Form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const formData = new FormData(Form);
    const data = Object.fromEntries(formData);
    fetch('https://reqres.in/api/users',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        }, 
        body: JSON.stringify(data)
    })
})