// Call the dataTables jQuery plugin
$(document).ready(function() {

    cargarUsuarios();

  $('#usuarios').DataTable();
});

async function cargarUsuarios(){
    const request = await fetch('api/usuarios', {
        method: 'GET',
        headers: getHeaders()
      });
      const usuarios = await request.json();

      let listadoHtml = '';



      for (let usuario of usuarios){
      let btnEliminar = `<a href="#" onclick="eliminarUsuario(${usuario.id})" class="btn btn-danger btn-circle">
                                  <i class="fas fa-trash"></i>
                              </a>`;
                              let telefonoTXT = usuario.telefono == null ? '-' : usuario.telefono;
       let usuarioHtml = `<tr>
                                <td>${usuario.id}</td>
                                <td>${usuario.apellido}</td>
                                <td>${usuario.email}</td>
                                <td>${telefonoTXT}</td>
                                <td>
                                    ${btnEliminar}
                                </td>
                           </tr>`

        listadoHtml += usuarioHtml;
      }

      document.querySelector('#usuarios  tbody').outerHTML = listadoHtml;
}

function getHeaders() {
return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    }
}

async function eliminarUsuario(id){

    if (confirm('Deseas eliminar este usuario?')){
        const request = await fetch('api/usuarios/'+id, {
                    method: 'DELETE',
                    headers: getHeaders()
        });
    }else {
        return;
    }
    location.reload();
}
