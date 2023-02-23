async function buscar(){
    let acc = document.querySelector('#id').value;
    let originb = 'http://www.transhipper.somee.com/api/users/curp/' + acc 
  
    console.log(originb)
    await fetch(originb,{
      headers:{
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
          },
          
          })
            .then(res => res.json())
            .then(datos => {
              if(datos.curp == acc){
                document.querySelector('#nombres').value=datos.name,
                document.querySelector('#apellido').value=datos.lastName,
                document.querySelector('#email').value=datos.emailAddres,
                document.querySelector('#password').value=datos.password,
                document.querySelector('#numero').value=datos.numberPhone,
                document.querySelector('#roll').value=datos.rol
                document.querySelector('#idenitficador').value=datos.curp
                
            
              }else{
                alert("EL CURP ES INCORRECTO")
              }
          })
      }