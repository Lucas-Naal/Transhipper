function updateStatus()  {

    let idstatus = document.querySelector('#EnvioIDUp').value;
let origin = 'http://www.transhipper.somee.com/api/Envios/Reports/' + idstatus
    

const status={

  typereport:document.querySelector('#type').value,
  description:document.querySelector('#description').value,
  envioId:document.querySelector('#delivery').value,
  

}

  console.log(status)

    fetch(origin,{

      method: 'PUT',
          headers: {

        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',

          },body: JSON.stringify(status)
        }).then(res => res.text()).then(a => {
  
          document.querySelector('#type').value = '',
          document.querySelector('#description').value = '',
          document.querySelector('#delivery').value = '',
          

          alert('DATOS ACTUALIZADOS')
          console.log('Se actualizaron los datos')

        }
        )
         
  }
