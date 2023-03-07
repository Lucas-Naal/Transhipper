const reportdata= document.querySelector('#reports');
const urlReport='http://www.transhipper.somee.com/api/envios/reports/pagination?PageNumber=1&PageSize=10' 

function Report(){
  fetch(urlReport,{
    headers:{
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
      'Content-Type': 'application/json',
    }
  }).then(res => res.json())
  .then(datos => {
    createTableReport(datos)
  })
}
function createTableReport(datos){
  reportdata.innerHTML='';
  for(let valor of datos){
    reportdata.innerHTML+=`
    <tr>
      <th scope="row">${valor.id}</th>
      <td>${valor.envioId}</td>
      <td>${valor.typeReport}</td>
      <td>${valor.status}</td>
      <td>     
      <!-- Button trigger modal -->
 <div class="container" style="height: 60px">
   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
     <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <circle cx="12" cy="12" r="9" />
       <line x1="12" y1="8" x2="12.01" y2="8" />
       <polyline points="11 12 12 12 12 16 13 16" />
     </svg>
   </button>
 </div>
 
 <!-- Modal -->
 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog">
     <div class="modal-content">
       <div class="modal-header">
         <h1 class="modal-title fs-5" id="exampleModalLabel">Reporte</h1>
         <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
       </div>
       <div class="modal-body">
         <form id="moma">
          <div class="mb-3">
           <label class="form-label">Buscar por Número de reporte</label>
           <input  type="text" class="form-control" id="buscador">
           <button  onclick="buscar()" type="button" class="btn btn-primary mt-2">Buscar</button>
          </div>
          <div class="mb-3">
           <label for="exampleInputEmail1" class="form-label">Reporte Id</label>
           <input type="text" class="form-control" id="reportId" disabled >
           
           <div class="mb-3">
             <label for="exampleInputPassword1" class="form-label">EnvioID</label>
             <input  class="form-control" id="shipID" disabled>
           </div>
         </div>
         <div class="mb-3">
           <label for="exampleInputPassword1" class="form-label">Tipo De Reporte</label>
           <input  class="form-control" id="kill" disabled>
         </div>
        
         <div class="mb-3">
           <label for="exampleInputPassword1" class="form-label">Descripción</label>
           <input  class="form-control" id="kindReport" disabled>
         </div>
 
         <div class="form-floating">
           <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
             <option value="Pendiente">Pendiente</option>
             <option value="Completo">Completo</option>
             <option value="Revisión">Revisión</option>
           </select>
           <label for="floatingSelect">Estado Del Reporte</label>
         </div>
         
         </form>
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
         <button  onclick="changeStatus()" type="submit" class="btn btn-primary">Actualizar Estado</button>
       </div>
     </div>
   </div>
 </div></td>
    </tr>
    
    `
  }
}

Report();
