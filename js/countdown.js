// Establece la fecha y hora objetivo: 17 de enero a las 4:00 PM
// ¡AJUSTA EL AÑO SI ES NECESARIO! (Ejemplo: 2025, 2026, etc.)
const targetDate = new Date("Jan 17, 2026 16:00:00").getTime();

// Función que actualiza el contador cada segundo
function updateCountdown() {
    // Obtener la hora actual
    const now = new Date().getTime();

    // Encontrar la distancia entre 'ahora' y la fecha objetivo
    const distance = targetDate - now;

    // Cálculo de días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Formatear los números para que siempre tengan dos dígitos (ej: 05)
    const formatTime = (time) => String(time).padStart(2, '0');
    
    // Si el contador ya terminó
    if (distance < 0) {
        clearInterval(countdownInterval);
        const timerContainer = document.getElementById("countdown-timer");
        if (timerContainer) {
            timerContainer.innerHTML = "¡EL EVENTO HA COMENZADO!";
            timerContainer.style.fontSize = "1.5em";
        }
        return;
    }

    // Mostrar el resultado en los elementos con IDs
    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);
}

// Ejecutar la función inmediatamente
updateCountdown();

// Actualizar el contador cada 1 segundo
const countdownInterval = setInterval(updateCountdown, 1000);