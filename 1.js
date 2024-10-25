/*
Realiza un programa que haciendo uso del objeto DATE, crees un objeto de una
para saludar al usuario tras abrir la aplicación indicando la hora y la fecha actual.
Haz también que se muestre por consola una hora posterior y una hora anterior.
*/
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var fechaActual = new Date();
window.alert("Hola, la fecha actual es: " + fechaActual.getDate() + "/" + (meses[fechaActual.getMonth()]) + "/" + fechaActual.getFullYear());
console.log('La hora de antes es ' + (fechaActual.getHours() - 1) + ':' + fechaActual.getMinutes() + ':' + fechaActual.getSeconds());
console.log('La hora de despues es ' + (fechaActual.getHours() + 1) + ':' + fechaActual.getMinutes() + ':' + fechaActual.getSeconds());
