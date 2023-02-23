
async function deletetype() {

    let produtcoid=document.querySelector('#id').value;
    
  
    let origindelete= 'http://www.transhipper.somee.com/api/categoryproducts/ ' + produtcoid

    console.log(origindelete)

 await   fetch(origindelete,{

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