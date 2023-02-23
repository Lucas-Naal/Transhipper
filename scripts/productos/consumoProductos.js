async function buscar(){
  let acc = document.querySelector('#idproducto').value;
  let originb = 'http://www.transhipper.somee.com/api/Products/' + acc 

  console.log(originb)
  await fetch(originb,{
    headers:{
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
      'Content-Type': 'application/json',
        },
        
        })
          .then(res => res.json())
          .then(datos => {
            if(datos.id == acc){
              document.querySelector('#idproducto').value=datos.id,
              document.querySelector('#name').value=datos.name,
              document.querySelector('#image').value=datos.image
              
          
            }else{
              alert("EL ID ES INCORRECTO")
            }
        })
    }