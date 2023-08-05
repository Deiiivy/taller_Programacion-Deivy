function calcularPrecioFinal() {
 
  let precioInicial;
  let descuento;
  let precioConDescuento;
  let iva;
  let precioFinal;


  precioInicial = parseFloat(prompt("Ingrese el precio inicial del artículo:"));


  descuento = precioInicial * (20 / 100);
  precioConDescuento = precioInicial - descuento;

  iva = precioConDescuento * (15 / 100);

 
  precioFinal = precioConDescuento + iva;


  alert("Precio con descuento: $" + precioConDescuento.toFixed(2));
  alert("Precio final (con descuento y IVA): $" + precioFinal.toFixed(2));
}


calcularPrecioFinal();






