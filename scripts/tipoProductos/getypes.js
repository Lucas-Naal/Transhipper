const originget = 'http://www.transhipper.somee.com/api/categoryproducts/'
const app = document.querySelector('#contain');

let types = []

function createTable(datos){

  app.innerHTML=''

  for(let valor of datos){
    
       app.innerHTML+=`

       <div>
      <option class="">${valor.name}</option>
    
       </div>
    
      `
    
  }
}

function getypes() {

  fetch(originget,{
        headers:{
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'application/json',
            }
            })
              .then(res => res.json())
              .then(datos => {
                createTable(datos);
            })
        }
        
     

       getypes()

