const app= document.querySelector('#contenido');

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
}

Usuarios();