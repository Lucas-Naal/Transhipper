
page1 = document.querySelector('#pagination')
const cambiar2='http://www.transhipper.somee.com/api/users/pagination?PageNumber=2&PageSize=15'

async function cambiarpage() {
  await fetch(cambiar2,{

        headers:{
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'application/json',
        }
      }).then(res => res.json())
      .then(datos => {
        createTableEnvios(datos);
      })
    }
    
 function createTableEnvios(datos){
      shimpmentsdata.innerHTML='';
      for(let valor of datos){
        shimpmentsdata.innerHTML+=`
         
        <tr>
          <th scope="grid">${valor.id}</th>
          <td>${valor.productId}</td>
          <td>${valor.weightContent}</td>
          <td>${valor.sourceLocation}</td>
          <td>${valor.destinationLocation}</td>
          <td>${valor.placaTransport}</td>
        </tr>
      
        `
      }
      
}

page1 = document.querySelector('#pagination')
const cambiar3 ='http://www.transhipper.somee.com/api/users/pagination?PageNumber=3&PageSize=15'

async function cambiarpage2() {
  await fetch(cambiar2,{

        headers:{
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'application/json',
        }
      }).then(res => res.json())
      .then(datos => {
        createTableEnvios(datos);
      })
    }
    
 function createTableEnvios(datos){
      shimpmentsdata.innerHTML='';
      for(let valor of datos){
        shimpmentsdata.innerHTML+=`
         
        <tr>
          <th scope="grid">${valor.id}</th>
          <td>${valor.productId}</td>
          <td>${valor.weightContent}</td>
          <td>${valor.sourceLocation}</td>
          <td>${valor.destinationLocation}</td>
          <td>${valor.placaTransport}</td>
        </tr>
      
        `
      }
      
}


page1 = document.querySelector('#pagination')
const cambiar4 ='http://www.transhipper.somee.com/api/users/pagination?PageNumber=4&PageSize=15'

async function cambiarpage3() {
  await fetch(cambiar2,{

        headers:{
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'application/json',
        }
      }).then(res => res.json())
      .then(datos => {
        createTableEnvios(datos);
      })
    }
    
 function createTableEnvios(datos){
      shimpmentsdata.innerHTML='';
      for(let valor of datos){
        shimpmentsdata.innerHTML+=`
         
        <tr>
          <th scope="grid">${valor.id}</th>
          <td>${valor.productId}</td>
          <td>${valor.weightContent}</td>
          <td>${valor.sourceLocation}</td>
          <td>${valor.destinationLocation}</td>
          <td>${valor.placaTransport}</td>
        </tr>
      
        `
      }
      
}
