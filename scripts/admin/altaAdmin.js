
let admin=' '
const appAlta = document.querySelector('#formalta');
const originalta = 'http://transhipper.somee.com/api/users' 

async function altaAdmin(){
  const cuenta={
    name:document.querySelector("#nombres").value,
    lastName:document.querySelector("#apellido").value,
    emailAddres:document.querySelector("#email").value,
    password:document.querySelector("#password").value,
    numberPhone:document.querySelector("#numero").value,
    rol:document.querySelector("#roll").value ="Admin",
    curp:document.querySelector('#idenitficador').value,
  }

  console.log(cuenta)

  await fetch(originalta,{
    method: 'POST',
    headers:{
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(cuenta)
  }).then(res => {


    
  }).then(data => data.json()
  ).then(a => {
    console.log(a)
  }).catch((error) => {
    console.log(error)
  })
}
