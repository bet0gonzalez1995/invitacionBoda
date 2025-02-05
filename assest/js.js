// Fecha actual
const fechaActual = new Date();
const dia = fechaActual.getDate();
const mes = fechaActual.toLocaleString('default', { month: 'short' }).toUpperCase(); // Obtener abreviatura del mes
const anio = fechaActual.getFullYear();

document.getElementById('dia').textContent = dia;
document.getElementById('mes').textContent = mes;
document.getElementById('anio').textContent = anio;

// Cuenta regresiva (fecha objetivo: 25 de marzo de 2024)
const fechaObjetivo = new Date('2025-07-26');

function actualizarCuentaRegresiva() {
    const ahora = new Date();
    const diferencia = fechaObjetivo.getTime() - ahora.getTime();

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
    document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
    document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
    document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');
}

actualizarCuentaRegresiva(); // Actualizar al cargar la página
setInterval(actualizarCuentaRegresiva, 1000); // Actualizar cada segundo