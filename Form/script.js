// Selecciona el formulario de inicio de sesión
const form = document.querySelector('form');

// Agrega un evento de envío al formulario
form.addEventListener('submit', function (event) {
    // Previene el comportamiento predeterminado del formulario (envío de datos)
    event.preventDefault();

    // Obtiene los valores de los campos de usuario y contraseña
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica si los campos de usuario y contraseña están vacíos
    if (username === '' || password === '') {
        alert('Por favor, ingresa tu usuario y contraseña.');
        return;
    }

    // Verifica si el usuario y contraseña son correctos
    if (username === 'admin' && password === 'password') {
        // Si los datos son correctos, muestra un mensaje
        alert('Usuario y contraseña correctos.');
        // Si los datos son correctos, redirige al usuario a la página de inicio
        window.location.href = 'index.html';
    } else {
        // Si los datos son incorrectos, muestra un mensaje de error
        alert('Usuario o contraseña incorrectos.');
    }
});