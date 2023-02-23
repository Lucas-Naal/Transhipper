let kindpop=' '
const appAlta = document.querySelector('#formalta');
const originAlta = 'http://www.transhipper.somee.com/api/categoryproducts' 




  appAlta.addEventListener('submit', (event)=>{
    event.preventDefault(kindpop);
  
    const kind={
      
      name:document.querySelector("#name").value,
      
    
    }
  
  fetch(originAlta,{
  
      method: 'POST',
  
      headers:{
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
        
      },
      body:JSON.stringify(kind)
    }).then(data => {
      alert('TIPO AÑADIDO CON EXITO')
    }
    ).then(a => {
      
    }).catch((error) => {
      console.log(error)
    })
  });


