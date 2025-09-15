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

/*
 Ej 3 Crea una función que genere 100 números aletorios entre 1 y 1000 que no se repitan.
 Finalmente muestralos por pantalla
 */

const generarNumerosAleatorios = () => {
  let numerosAleatorios = [];

  while (numerosAleatorios.length <= 100) {
    let numero = Math.floor(Math.random() * 1000) + 1;
    if (!numerosAleatorios.includes(numero)) {
      numerosAleatorios.push(numero);
    }
  }

  console.log(numerosAleatorios);
};

generarNumerosAleatorios();

/*
  Ej 4 Escribe un programa que nos pida una frase, nos pida despues una letra y nos diga
  cuantas veces aparece dicho letra en la frase. 
  */

const vecesEnFrase = () => {
  let frase = prompt("Introduce una frase: ");
  let letra = prompt("Ahora introduce una letra");
  let contador = 0;

  for (let i = 0; i < frase.length - 1; i++) {
    if (frase[i] === letra) {
      contador++;
    }
  }

  console.log(
    `la letra ${letra} aparece en la frase introducida ${contador} veces`
  );
};

//vecesEnFrase();

/*
  Ej 5 Escribe un programa que escriba por pantalla los divisores de un número dado
 */

const dimeDivisores = (numeroDado) => {
  let divisores = [];

  for (let i = 1; i <= numeroDado; i++) {
    if (numeroDado % i == 0) {
      divisores.push(i);
    }
  }

  return divisores;
};

let numeroDivisor = 12;

let divisores = dimeDivisores(numeroDivisor);

console.log(divisores);

/**
 * Juego del pum, escribe los numeros separados por coma y cada vez que enceuntre un numero terminado en 7
 * o multiplo de 7 escribe pum y cambie de renglon
 */

const juegoDelPum = () => {
  let output = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0 || i % 10 === 7) {
      console.log(output + "PUM");
      output = "";
    } else {
      if (output !== "") {
        output += ",";
      }
      output += i;
    }
  }
}

juegoDelPum();
