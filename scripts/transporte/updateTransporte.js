async function updateTransporte(){

    const transid4 =document.querySelector('#placa').value;
    const originupdate = 'http://www.transhipper.somee.com/api/Transporte/' + transid4

    var transporte={
  
      
     
      capacity:document.querySelector('#capacity').value,
      curpUser:document.querySelector('#curpUser').value
      
    }
  
    console.log(transporte)
    console.log(originupdate)
  
  await fetch( originupdate ,{
  
      method: 'PUT',
  
          headers: {

        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(transporte)
    }).then(res => res.text()).then(a => {
  
      document.querySelector('#placa').value = '',
      document.querySelector('#curpUser').value = '',
      document.querySelector('#capacity').value = '',
     
     console.log(a)
  
  
    })
  }
  