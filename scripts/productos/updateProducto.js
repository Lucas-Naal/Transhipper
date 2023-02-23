
async function updateproducto()  {

    const productoid =document.querySelector('#idproducto').value;
    const origin = 'http://www.transhipper.somee.com/api/Products/' + productoid
    
    const producto={

      name:document.querySelector('#nombreproducto').value,
      type:document.querySelector('#kind').value,
      imageUrl:document.querySelector('#imageurl').value,
      
    }

    console.log(producto)

    await fetch(origin,{ 

      method: 'PUT',
          headers: {

        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',

          },
          body: JSON.stringify(producto)
    }).then(res => res.text()).then(a => {

      document.querySelector('#nombreproducto').value = '',
      document.querySelector('#kind').value = '',
      document.querySelector('#imageurl').value = '',
     
      alert('Datos actualizados')
  
  
    })
  }