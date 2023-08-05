



function calcularCobroHoras(horas) {
  const tarifaPorHora = 5; 
  const horasCompletas = parseInt(horas);
  const cobroTotal = tarifaPorHora * horasCompletas;
  return cobroTotal;
}

const horasDeUso = prompt('ingresa las horas de uso'); 
const cobro = calcularCobroHoras(horasDeUso);
alert(`El cobro por ${horasDeUso} horas de uso es: $${cobro}`);
