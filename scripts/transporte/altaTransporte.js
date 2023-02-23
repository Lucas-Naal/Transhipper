 let transporte=' '
const appAlta = document.querySelector('#transporte_form');
const originAlta = 'http://www.transhipper.somee.com/api/Transporte' 


  appAlta.addEventListener('submit', (event)=>{
    event.preventDefault(transporte);
  
    const transportedr={
      
      placa:document.querySelector("#placa").value,
      capacity:document.querySelector("#capacity").value,
      curpUser:document.querySelector('#curpUser').value,

      
    
    }
  
   fetch(originAlta,{
  
      method: 'POST',
  
      headers:{
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
        
      },
      body:JSON.stringify(transportedr)
    }).then(data => {
      alert('TRANSPORTE CREADO CON EXITO')
    }
    ).then(a => {
      
    }).catch((error) => {
      console.log(error)
    })
  });




 

