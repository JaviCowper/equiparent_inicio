

const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


const datos = {
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
}

nombre.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);


// El Event de Submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();



// Validar el Formulario

const { nombre, telefono, email, mensaje } = datos;

if(nombre === '' || telefono === '' || email === '' || mensaje === '' ) {
    mostrarAlerta('Todos los campos son obligatorios', true);

    return; // Corta la ejecución del código
}

// Crear alerta de envío de mensaje correctamente
mostrarAlerta('Mensaje enviado correctamente');
});


function leerTexto(e) {
// console.log(e.target.value);
datos[e.target.id] = e.target.value;

console.log(datos);
}

function mostrarAlerta(mensaje, error = null ) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

     // desaparezca después de 5 segundos
     setTimeout(() => {
        alerta.remove();
    }, 5000);
}
const btnEnviar = document.querySelector('.boton_w_sm_100');
btnEnviar.navegation('go', function(event){

});
