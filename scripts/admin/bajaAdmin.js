async function deleteAdmin(){

    let userid=document.querySelector('#idenitficador').value;
    let origindelete= 'http://www.transhipper.somee.com/api/users/' + userid
  
    console.log(origindelete)
  
    await fetch(origindelete,{
      method:'DELETE',
      headers:{
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
            'Content-Type': 'application/json',
    }
    }).then(res => res.text()
      
    ).then((a)=>{
      console.log(a)
    })
  }