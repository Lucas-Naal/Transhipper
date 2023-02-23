let producto=' '
const appAlta = document.querySelector('#altaproducto');
const origin = 'http://www.transhipper.somee.com/api/Products' 

appAlta.addEventListener('submit', (event)=>{
  event.preventDefault(producto);
  const Product={
    name:document.querySelector("#name").value,
    
    image:document.querySelector("#image").value,
  
  }


  fetch(origin,{
    method: 'POST',
    headers:{
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      'Content-Type': 'application/json',
      
    },
    body:JSON.stringify(Product)
  }).then(data => {
    console.log(data)
  }
  ).then(a => {
    
  }).catch((error) => {
    console.log(error)
  })
});
