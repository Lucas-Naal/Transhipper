   
function updateAdmin(){

    const userId=document.querySelector('#idenitficador').value;

    const originUpdate = 'http://www.transhipper.somee.com/api/users/'+ userId
  
    const dataUser = {

      name:document.querySelector('#nombres').value,
      lastName:document.querySelector('#apellido').value,
      emailAddres:document.querySelector('#email').value,
      password:document.querySelector('#password').value,
      numberPhone:document.querySelector('#numero').value,
      id:document.querySelector('#idenitficador').value,
      rol:document.querySelector('#roll').value
     
      
    }
    console.log(dataUser);
  
    fetch(originUpdate,{
  
      method: 'PUT',
  
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(dataUser)
    }).then(res => res.text()).then(a => {
  
      document.querySelector('#nombres').value='',
      document.querySelector('#apellido').value='',
      document.querySelector('#email').value='',
      document.querySelector('#password').value='',
      document.querySelector('#numero').value='',
      document.querySelector('#roll').value=' '
      document.querySelector('#idenitficador').value=''
  
      console.log(a)
  
  
    })
  }


