function buscar(){
    let acc = document.querySelector('#buscador').value;
    let originb = 'http://www.transhipper.somee.com/api/envios/reports/' + acc 
  
    console.log(originb)


     fetch(originb,{
      headers:{
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
          },
          
          })
            .then(res => res.json())
            .then(datos => {
              if(datos.id == acc){
                document.querySelector('#reportId').value=datos.id,
                document.querySelector('#shipID').value=datos.envioId
                document.querySelector('#kill').value=datos.typeReport,
                document.querySelector('#kindReport').value=datos.description
                              
            
              }else{
                alert("EL ID ES INCORRECTO")
              }
          })
      }



       function changeStatus() {


            const reportId =document.querySelector('#buscador').value;
            const origin = 'http://www.transhipper.somee.com/api/envios/reports/' + reportId
            
            const dataReport = {
              envioId:document.querySelector('#shipID').value,
              typeReport:document.querySelector('#kill').value,
              description:document.querySelector('#kindReport').value,
              status:document.querySelector('#floatingSelect').value

              
            }
        
            console.log(dataReport)
            console.log(origin);
        
      fetch(origin,{
        
              method: 'PUT',
                  headers: {
        
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json',
        
                  },
                  body: JSON.stringify(dataReport)
            }).then(res => res.text(
      
              
      
                       )).then(a => {
        
            window.location.reload()
            document.querySelector('#kill').value='',
            document.querySelector('#kindReport').value='',
            document.querySelector('#floatingSelect').value=''  

          
            })
          }
        