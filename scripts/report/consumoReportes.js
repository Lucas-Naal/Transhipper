function buscarStatus(){

  let idstatus = document.querySelector('#EnvioIDUp').value;
  let originDelete = 'http://www.transhipper.somee.com/api/Envios/Reports/' + idstatus

  fetch(originDelete,{

    method: 'GET',

    headers:{
            
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'application/json',

        }
        })
          .then(res => res.json())
          .then(datos => {
            if(datos.id == idstatus){

              document.querySelector('#type').value=datos.typeReport;
              document.querySelector('#description').value=datos.description;
              document.querySelector('#delivery').value=datos.envioId;

            }
            else{
              alert('EL ID DEL ENVIO ES INCORRECTO')
            }
        })
    }



  
