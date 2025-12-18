// 1. Esperamos a que cargue el HTML
document.addEventListener('DOMContentLoaded', function() {
   
    // 2. Referencia al formulario y tu número
    const formulario = document.getElementById('formularioPresupuesto');
   
    // IMPORTANTE: Reemplaza las X con tu número real.
    // Ejemplo: "5491122334455" (Sin espacios, ni signos +)
    const NUMERO_TELEFONO = "5491134885363";

    // 3. ESTA ES LA FUNCIÓN DE ENVÍO (La que corregimos)
    formulario.addEventListener('submit', function(event) {
        // Evitamos que la página se refresque
        event.preventDefault();

        // Capturamos los datos que escribió el usuario
        const nombre = document.getElementById('nombre').value.trim();
        const direccion = document.getElementById('direccion').value.trim();
        const servicio = document.getElementById('servicio').value;
        const detalles = document.getElementById('detalles').value.trim();
       
        // Creamos el mensaje usando saltos de línea normales (tecla Enter)
        // Al usar las comillas invertidas `` podemos escribir en varios renglones
        const mensajeBase = `*🔔 SOLICITUD DE PRESUPUESTO WEB 🔔*

Hola, me gustaría solicitar un presupuesto para un trabajo.

*Cliente:* ${nombre}
*Dirección/Zona:* ${direccion}
*Servicio Requerido:* ${servicio}
*Detalles del Trabajo:* ${detalles}

¡Gracias!`;

        // Aquí es donde sucede la magia: encodeURIComponent convierte
        // los espacios y saltos de línea al formato que WhatsApp entiende.
        const mensajeCodificado = encodeURIComponent(mensajeBase);

        // Creamos el enlace final
        const enlaceWhatsApp = `https://api.whatsapp.com/send?phone=${NUMERO_TELEFONO}&text=${mensajeCodificado}`;

        // Abrimos WhatsApp en una nueva pestaña
        window.open(enlaceWhatsApp, '_blank');

        // Limpiamos el formulario para que quede vacío
        formulario.reset();
       
        // Aviso visual para el usuario
        alert("¡Solicitud generada! Te estamos redirigiendo a WhatsApp.");
    });
});