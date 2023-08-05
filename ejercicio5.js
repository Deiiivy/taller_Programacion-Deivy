function generarPresupuestoPintura() {
  
  let precioPorMetroCuadrado;
  let areaPintar;
  let costoTotal;

 
  precioPorMetroCuadrado = parseFloat(prompt("Bienvenido a la calculadora de presupuestos de pintura.\nIngrese el precio por metro cuadrado:"));
  areaPintar = parseFloat(prompt("Ingrese el área a pintar en metros cuadrados:"));


  costoTotal = precioPorMetroCuadrado * areaPintar;

  
  console.log("El presupuesto para pintar " + areaPintar + " metros cuadrados es: $" + costoTotal.toFixed(2));
}

generarPresupuestoPintura();