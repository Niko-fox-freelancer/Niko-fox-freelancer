document.addEventListener("DOMContentLoaded", function() {
    const userNameSpan = document.getElementById("user-name");
    const logoutButton = document.getElementById("logout");

    // Verificar si hay un usuario registrado en el localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        userNameSpan.textContent = user.name;
        logoutButton.style.display = 'inline';
    } else {
        // Si no hay usuario, redirigir al inicio de sesión
        const email = prompt("Por favor, ingresa tu email:");
        const password = prompt("Por favor, ingresa tu contraseña:");
        
        // Verificar credenciales
        if (email && password) {
            alert("Iniciaste sesión como: " + email);
            userNameSpan.textContent = email;
            logoutButton.style.display = 'inline';
        }
    }

    // Manejar el cierre de sesión
    logoutButton.addEventListener("click", function() {
        localStorage.removeItem("user");
        userNameSpan.textContent = "";
        logoutButton.style.display = 'none';
        alert("Has cerrado sesión.");
    });

    // Manejar el registro
    const registrationForm = document.getElementById("registration-form");
    if (registrationForm) {
        registrationForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Guardar información en localStorage
            localStorage.setItem("user", JSON.stringify({ name, email, password }));
            alert("Registro exitoso. Redirigiendo a la página principal...");
            window.location.href = "index.html";
        });
    }
});