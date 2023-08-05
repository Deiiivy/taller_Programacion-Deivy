function calcularEdad() {
 
  const añoNacimiento = parseInt(prompt('ingrese su año de nacimiento'))
  const añoActual = (new Date()).getFullYear();
  const edad = añoActual - añoNacimiento

  alert(`La edad de la persona es: ${edad}`)
}

calcularEdad();




