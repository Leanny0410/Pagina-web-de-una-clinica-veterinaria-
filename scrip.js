document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        if (nombre && email && mensaje) {
            if (validateEmail(email)) {
                const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
                modal.show();
                form.reset();
            } else {
                alert('Por favor, ingrese un correo electrónico válido.');
            }
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });

    const agendarForm = document.getElementById('agendarForm');
    if (agendarForm) {
        agendarForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const servicio = document.getElementById('servicio').value;
            const fecha = document.getElementById('fecha').value;

            if (nombre && email && servicio && fecha) {
                if (validateEmail(email)) {
                    alert('Cita agendada con éxito para ' + servicio + ' el ' + fecha);
                    agendarForm.reset();
                } else {
                    alert('Por favor, ingrese un correo electrónico válido.');
                }
            } else {
                alert('Por favor, complete todos los campos.');
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
