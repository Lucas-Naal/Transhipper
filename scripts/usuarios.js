const app= document.querySelector('#contenido');
const pagination = document.querySelector('#pagination')

const url= 'http://www.transhipper.somee.com/api/Users' 

function Usuarios(){
              
fetch(url,{
headers:{
  'Authorization': `Bearer ${localStorage.getItem("token")}`,
  'Content-Type': 'application/json',
    }
    })
      .then(res => res.json())
      .then(datos => {
        createTable(datos)
    })
}

function createTable(datos){
  app.innerHTML=''
  for(let valor of datos){
    if (valor.rol == 'User') {
      app.innerHTML+=`
      <tr>
        <th scope="row">${valor.curp}</th>
        <td>${valor.name}</td>
        <td>${valor.lastName}</td>
        <td>${valor.emailAddres}</td>
        </tr>
      `
    }
   
  }
  pagination.innerHTML = `<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>`
}

Usuarios();