function calcularMontoCheque() {

  const COSTO_HOTEL_POR_DIA = 1000
  const COSTO_COMIDA_POR_DIA = 500
  const OTROS_GASTOS_POR_DIA = 200


  let numeroDias = parseInt(prompt("Ingrese el número de días que el empleado viajará:"))
 
  let montoTotalHotel = COSTO_HOTEL_POR_DIA * numeroDias
  let montoTotalComida = COSTO_COMIDA_POR_DIA * numeroDias
  let montoTotalOtrosGastos = OTROS_GASTOS_POR_DIA * numeroDias

  
  let montoTotalCheque = montoTotalHotel + montoTotalComida + montoTotalOtrosGastos

  
  console.log(`Monto para hotel: $${montoTotalHotel}`)
  console.log(`Monto para comida: $${montoTotalComida}`)
  console.log(`Monto para otros gastos: $${montoTotalOtrosGastos}`)
  console.log(`Monto total del cheque: $${montoTotalCheque}`)
}


calcularMontoCheque();