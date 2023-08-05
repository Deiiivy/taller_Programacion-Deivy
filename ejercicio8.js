function ahorroAño(){

  let sueldo 
  let sueldoMes
  let sueldoAño
  let sueldoSemana
  let ahorro

  sueldo = parseInt(prompt("ingrese su sueldo semanal"))

   sueldoSemana = sueldo * (15/100)


  sueldoMes = sueldoSemana*4
  
  sueldoAño = sueldoMes*12

  ahorro = sueldoAño - sueldoMes

  alert('ahorro del año es: '+ahorro)


}

ahorroAño()