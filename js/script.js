document.addEventListener('DOMContentLoaded', () => {
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    let invitadoNombre = getUrlParameter('nombre');
    const textElement = document.getElementById('personalized-text');
    let contenidoHTML = '';

    if (!invitadoNombre) {
        textElement.innerHTML = 'Te esperamos'; 
        return; 
    }
    
    // --- Lógica Mejorada para Nombres Largos ---
    const partes = invitadoNombre.split(' y ');
    let nombrePrincipal = partes[0].trim();
    
    // Si el nombre principal es muy largo, insertamos un <br> después de la primera palabra.
    const palabras = nombrePrincipal.split(' ');
    if (palabras.length > 2 && nombrePrincipal.length > 15) { 
        // Ejemplo: Si es más de 15 caracteres y más de 2 palabras, salta después de la primera.
        nombrePrincipal = palabras.slice(0, 2).join(' ') + '<br>' + palabras.slice(2).join(' ');
    }


    if (partes.length > 1) {
        // Manejar "Ing. Pedro Orellana" y "y Sra."
        const textoSecundario = partes.slice(1).join(' y ').trim();

        contenidoHTML += `<span>${nombrePrincipal}</span>`;
        contenidoHTML += `<span class="secondary-line">y ${textoSecundario}</span>`;
    } else {
        // Nombre simple
        contenidoHTML += `<span>${nombrePrincipal}</span>`;
    }
    
    textElement.innerHTML = contenidoHTML;
});