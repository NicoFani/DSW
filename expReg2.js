const prompt=require("prompt-sync")({sigint:true});



// Función para calcular el CUIT
function calcularCUIT(dni) {
  // Verificar que el DNI sea un número de 8 dígitos
  if (!/^\d{8}$/.test(dni)) {
    return "El DNI ingresado no es válido. Debe contener 8 dígitos.";
  }

  // Generar el número de CUIT
  var cuit = "20" + dni; // Agregar el prefijo "20" para personas físicas

  // Calcular el dígito verificador
  var acumulado = 0;
  var digitos = cuit.split("");
  var digitoVerificador;

  for (var i = 0; i < digitos.length; i++) {
    var digito = parseInt(digitos[i], 10);
    var coeficiente = (i % 2 === 0) ? 5 : 4;
    acumulado += digito * coeficiente;
  }

  var resto = acumulado % 11;
  if (resto === 0) {
    digitoVerificador = 0;
  } else {
    digitoVerificador = 11 - resto;
  }

  // Retornar el CUIT completo
  return cuit + digitoVerificador;
}

// Solicitar el ingreso del DNI por teclado
var dni = prompt("Ingrese su número de DNI:");

// Calcular el CUIT
var cuit = calcularCUIT(dni);

// Mostrar el resultado
if (!/^\d{8}$/.test(dni)) {
  console.log("El DNI ingresado no es válido. Debe contener 8 dígitos.");
}
else {
  console.log("El CUIT correspondiente al DNI " + dni + " es: " + cuit);
}


