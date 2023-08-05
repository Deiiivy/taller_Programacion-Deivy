function formasDePago() {
  let valorCompra
  let recargo
  let totalAPagar

  valorCompra = parseFloat(prompt("Ingrese el valor total de la compra:"))

  totalAPagar = valorCompra

  console.log("1 cuota de $" + totalAPagar.toFixed(2))

  recargo = totalAPagar * 0.05
  totalAPagar += recargo
  console.log("2 cuotas de $" + (totalAPagar / 2).toFixed(2) + " total $" + totalAPagar.toFixed(2))

  recargo = totalAPagar * 0.4
  totalAPagar += recargo
  console.log("6 cuotas de $" + (totalAPagar / 6).toFixed(2) + " total $" + totalAPagar.toFixed(2))
}

formasDePago()
