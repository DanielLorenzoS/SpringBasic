async function registrarUsuario(){
    let datos = {};
    datos.nombre = document.querySelector('#txtNombre').value;
    datos.apellido = document.querySelector('#txtApellido').value;
    datos.email = document.querySelector('#txtEmail').value;
    datos.password = document.querySelector('#txtPassword').value;

    let repeatPassword = datos.nombre = document.querySelector('#txtRepeatPassword').value;

    if (!repeatPassword  == datos.password) {
        alert('La contraseña no es igual')
        return;
    }

    const request = await fetch('api/usuarios', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });
      alert('Cuenta creada con éxito');
      window.location.href = 'login.html';
}



