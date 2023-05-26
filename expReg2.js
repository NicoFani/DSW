const prompt=require("prompt-sync")({sigint:true});

// Función para validar el DNI utilizando una expresión regular
function validarDNI(dni) {
  // Expresión regular para validar el DNI de 7 u 8 dígitos numéricos
  var regexDNI = /^\d{7,8}$/;
  return regexDNI.test(dni);
}

// Función para calcular el CUIT
function calcularCUIT(genero, dni) {
  var cuit = '';
  
  if (genero === 'femenino') {
    cuit += '27'; // Prefijo para género femenino
  } else if (genero === 'masculino') {
    cuit += '20'; // Prefijo para género masculino
  } else {
    console.log('Género inválido');
    return;
  }
  
  if (validarDNI(dni)) {
    cuit += dni;
    var verificador = 0;
    var cuitArray = cuit.split('').map(Number);
    
    // Cálculo del dígito verificador
    var coeficiente = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    for (var i = 0; i < coeficiente.length; i++) {
      verificador += cuitArray[i] * coeficiente[i];
    }
    
    verificador = 11 - (verificador % 11);
    if (verificador === 11) {
      verificador = 0;
    }
    
    cuit += verificador;
    console.log('El CUIT calculado es:', cuit);
  } else {
    console.log('DNI inválido');
  }
}

var genero = prompt('Ingrese el género (femenino o masculino):');
var dni = prompt('Ingrese el DNI:');

calcularCUIT(genero, dni);


