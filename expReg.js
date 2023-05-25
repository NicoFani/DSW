const prompt=require("prompt-sync")({sigint:true});

function validarEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (regex.test(email)) {
    console.log ("\n")
    console.log("El email es válido.");
  } else {
    console.log ("\n")
    console.log("El email no es válido.");
  }
}

// Se le solicita al usuario ingresar su correo
console.log ("\n")
var email = prompt("Ingrese un correo electrónico: ");

// Valida el email ingreso
validarEmail(email);
