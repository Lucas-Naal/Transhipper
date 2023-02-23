
function deleteProducto  () {

    let produtcoid=document.querySelector('#idproducto').value;
    
  
    let origindelete= 'http://www.transhipper.somee.com/api/Products/ ' + produtcoid

    console.log(origindelete)

    fetch(origindelete,{

      method:'DELETE',

      headers:{

        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
    }
    }).then(res => res.text(),

    ).then((a)=>{
      console.log(a)
    })
  }