// script.js

function ejemploIfElse() {
    const edad = prompt("¿Cuál es tu edad?");
    if (edad >= 18) {
      alert("Eres mayor de edad.");
    } else {
      alert("Eres menor de edad.");
    }
  }
  
  function ejemploSwitch() {
    const numero = prompt("Ingresa un número del 0 al 6 (donde 0 es domingo)");
    let mensaje;
    switch (parseInt(numero)) {
      case 0:
        mensaje = "Domingo";
        break;
      case 1:
        mensaje = "Lunes";
        break;
      case 2:
        mensaje = "Martes";
        break;
      case 3:
        mensaje = "Miércoles";
        break;
      case 4:
        mensaje = "Jueves";
        break;
      case 5:
        mensaje = "Viernes";
        break;
      case 6:
        mensaje = "Sábado";
        break;
      default:
        mensaje = "Número inválido";
    }
    alert("Día seleccionado: " + mensaje);
  }
  
  function ejemploTryCatch() {
    try {
      const valor = prompt("Ingresa un número positivo");
      if (valor < 0) {
        throw new Error("El número no es positivo");
      }
      alert("¡Bien hecho! El número es válido.");
    } catch (e) {
      alert("Error atrapado: " + e.message);
    }
  }
  
  function ejemploFor() {
    const n = prompt("¿Cuántas veces quieres iterar (for)?");
    let salida = "";
    for (let i = 0; i < n; i++) {
      salida += `Iteración ${i + 1}\n`;
    }
    alert(salida);
  }
  
  function ejemploWhile() {
    const n = prompt("¿Cuántas veces quieres iterar (while)?");
    let i = 0;
    let salida = "";
    while (i < n) {
      salida += `Iteración ${i + 1}\n`;
      i++;
    }
    alert(salida);
  }
  
  function ejemploDoWhile() {
    const n = prompt("¿Cuántas veces quieres iterar (do...while)?");
    let i = 0;
    let salida = "";
    do {
      salida += `Iteración ${i + 1}\n`;
      i++;
    } while (i < n);
    alert(salida);
  }
  
  function saludarUsuario(nombre) {
    const user = prompt("¿Cómo te llamas?");
    alert(`Hola, ${user || nombre}!`);
  }
  
  function operadores() {
    const a = parseFloat(prompt("Ingresa un número A"));
    const b = parseFloat(prompt("Ingresa un número B"));
    alert(`a + b = ${a + b}, a == b: ${a == b}, a > b && b > 0: ${a > b && b > 0}`);
  }
  
  function ejemploMath() {
    const num = prompt("Ingresa un número para sacar su raíz cuadrada");
    alert(`Raíz cuadrada: ${Math.sqrt(num)}\nAleatorio entre 0 y 1: ${Math.random()}`);
  }
  
  function mostrarFecha() {
    const fecha = new Date();
    alert("Fecha y hora actual: " + fecha.toLocaleString());
  }
  
  function formatearTexto() {
    const texto = prompt("Ingresa un texto");
    alert(`Mayúsculas: ${texto.toUpperCase()}\nMinúsculas: ${texto.toLowerCase()}`);
  }
  
  function mostrarArreglos() {
    const elementos = prompt("Ingresa valores separados por coma (ej: 1,2,3)").split(',');
    const typed = new Int16Array(elementos.map(Number));
    alert(`Arreglo normal: ${elementos.join(", ")}\nArreglo tipado: ${typed.join(", ")}`);
  }
  
  function demostrarDOM() {
    const nuevoTexto = prompt("¿Qué texto quieres mostrar en el párrafo?");
    document.getElementById("demo").textContent = nuevoTexto || "Texto cambiado con JavaScript";
  }
  