/*
Ej1 Realiza  una funcion que reciba el numero de dni por parametro y devuelve su letra
si el dni no esta bien formado debera mostrar un error
 */

const calcularLetraDNI = (dniNumero) => {
  let letra = "";
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

  if (dniNumero.length !== 8) {
    console.error("error grave infernal");
  } else {
    const resto = dniNumero % 23;
    letra = letras[resto];
  }

  return letra;
};

const dni = "12345678";
const letra = calcularLetraDNI(dni);
console.log(`la letra del DNI ${dni} es ${letra}`);

/*
 Ej2 Crea una funcion que reciba un texto y lo devuelva alreves
 */

const devuelveTextoAlreves = (texto) => texto.split("").reverse().join("");

const devuelveTextoAlreves2 = (texto) => {
  let textoVuelta = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    textoVuelta += texto[i];
  }

  return textoVuelta;
};

const texto = "hola que tal como estas";
const textoNuevo = devuelveTextoAlreves(texto);
const textoNuevo2 = devuelveTextoAlreves2(texto);
console.log(texto);
console.log(textoNuevo);
console.log(textoNuevo2);
