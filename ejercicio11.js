function promedioAlumno(){

  let nota1 = parseFloat(prompt('ingrese la nota del primer examen'))
  let nota2 = parseFloat(prompt('ingrese la nota del segundo examen'))
  let nota3 = parseFloat(prompt('ingrese la nota del tercer examen'))

  let porcentajeNota1 = nota1 * (25/100)
  let porcentajeNota2 = nota2 * (25/100)
  let porcentajeNota3 = nota3 * (50/100)

  let promedio = (porcentajeNota1 + porcentajeNota2 + porcentajeNota3) / 3
  alert('el promedio es: '+ promedio)
}