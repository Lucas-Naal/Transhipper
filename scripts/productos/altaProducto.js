let producto=' '
const appAlta = document.querySelector('#altaproducto');
const origin = 'http://www.transhipper.somee.com/api/Products' 

appAlta.addEventListener('submit', (event)=>{
  event.preventDefault(producto);

  const Product={

    name:document.querySelector("#name").value,
    categoryId:document.querySelector("#category").value,
    image:document.querySelector("#image").src,

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
    console.log(Product)
  }
  ).then(a => {
    
  }).catch((error) => {
    console.log(error)
  })
});
