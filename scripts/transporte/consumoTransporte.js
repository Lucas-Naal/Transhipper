function buscartransporte(){

    let placa = document.querySelector('#placatransporte').value;
    let originDelete = 'http://www.transhipper.somee.com/api/Transporte/' + placa
  
    fetch(originDelete,{
  
      method: 'GET',
  
      headers:{
              
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
            'Content-Type': 'application/json',
  
          }
          })
            .then(res => res.json())
            .then(datos => {
              if(datos.placa == placa){

                document.querySelector('#curpUser').value=datos.curpUser
              
                document.querySelector('#capacity').value=datos.capacity
                document.querySelector('#placa').value=datos.placa
              }
             
              else{
                alert('LA PLACA DEL VEHICULO ES INCORRECTO')
              }
          })
      }

      

  




