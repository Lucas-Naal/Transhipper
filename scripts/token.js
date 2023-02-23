
let token = ' ';

const origin = 'http://www.transhipper.somee.com/api/Account'
const form = document.querySelector('#form');


form.addEventListener('submit', (event) => {

    event.preventDefault(token);
    const cuenta = {
        email: document.querySelector('#Account').value,
        password: document.querySelector('#Password').value

    }
    fetch(origin, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cuenta)
    }).then(data =>
        data.json()
    ).then(a => {
        
        localStorage.setItem('token', a.token);
        
        if (localStorage.getItem("token") != null) {
           
            setTimeout(function () { window.location.href = "menuAdmin.html"; }, 1000);
        } else {
            localStorage.removeItem('token');
            alert('el login no es correcto');
        }
    }).catch((error) => {
        console.log(error)
    })
}

)
