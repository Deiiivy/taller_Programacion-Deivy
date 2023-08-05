function calcularHipotenusa() {
 
  let ladoA;
  let ladoB;
  let hipotenusa;

  ladoA = parseFloat(prompt("Ingrese la longitud del lado A:"));
  ladoB = parseFloat(prompt("Ingrese la longitud del lado B:"));

  hipotenusa = Math.sqrt(ladoA ** 2 + ladoB ** 2);

  console.log("La hipotenusa del triángulo rectángulo es:", hipotenusa.toFixed(2));
}


calcularHipotenusa();