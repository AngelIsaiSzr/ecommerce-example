document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Aquí se podría agregar una validación adicional o hacer una llamada a un backend para autenticación

        alert('Iniciar sesión con éxito: ' + email);
        loginForm.reset();
        const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.hide();
    });

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        // Aquí se podría agregar validación adicional o hacer una llamada a un backend para registro

        alert('Registro exitoso: ' + name + ' (' + email + ')');
        registerForm.reset();
        const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));
        registerModal.hide();
    });
});
