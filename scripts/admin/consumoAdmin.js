let admins=[]
const app = document.querySelector('#contain');

const origin = 'http://www.transhipper.somee.com/api/users/pagination?PageNumber=1&PageSize=15' 

 function watchAdmin(){
              
 fetch(origin,{
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

function createTable(datos){
  app.innerHTML=''
  for(let valor of datos){
    if(valor.rol == "Admin"){
      app.innerHTML+=`
     <div class='container'>
      
        
          <td>${valor.curp}</td>
          <td>${valor.name}</td>
          <td>${valor.lastName}</td>
          <td>${valor.emailAddres}</td>
          <td>${valor.rol}</td>
          
      
     </div>
      `
    }
  }
}

watchAdmin();



  
    var cuenta={}
    const data = (datos) =>{
       cuenta ={
        id:datos.id,
        name:datos.name,
        lastName:datos.lastName,
        emailAddres:datos.emailAddres,
        password:datos.password,
        numberPhone:datos.numberPhone,
        birthday:datos.birthday,
        rol:datos.rol
      }
    
}
    

