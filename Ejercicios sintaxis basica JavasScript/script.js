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
    if (frase[i] === letra[]) {
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
};

juegoDelPum();

/**
 * Desarrolla una aplicación que permita calcular los salarios mensuales de los trabajadores de una empresa a partir de los siguientes datos:

a. Número de horas trabajadas.
b. Turno realizado: Mañanas (m), Tardes (t) o Noches (n).

Para el cálculo del salario bruto se tendrá en cuenta que el turno de mañana se paga a 15 €/hora, el de tarde se paga a 17 €/hora y el turno de noche se paga 20 €/hora.

Para el cálculo del salario neto se realizan determinados descuentos destinados al pago de impuestos de la siguiente forma:
-Si el salario bruto es menor de 600 € el descuento es del 8%.
-Si el salario bruto está entre 600 € y 1000 € el descuento es del 10%.
-Si el salario bruto es mayor de 1000 € el descuento es del 12%.

Se desea calcular el salario neto de cada trabajador. Para ello la aplicación irá pidiendo uno a uno los trabajadores hasta que el usuario indique lo contrario.

Para cada trabajador se mostrará su salario neto.

Antes de finalizar la aplicación mostrará el importe total de salarios abonados. El script se escribirá usando tantas funciones como sea posible con el fin de poder reutilizar la máxima cantidad de código en un futuro.
 */

const calcularSalarioTurno = (turno) => {
  let salarioHora = 0;
  if (turno === "m") {
    salarioHora = 15;
  } else if (turno === "t") {
    salarioHora = 17;
  } else if (turno === "n") {
    salarioHora = 20;
  }

  return salarioHora;
};

const calcularMensualBruto = (salarioHora, horasTrabajadas) => {
  return salarioHora * horasTrabajadas;
};
const calcularMensualneto = (salarioBruto) => {
  let salarioNeto = 0;
  if (salarioBruto < 600) {
    salarioNeto = salarioBruto - (salarioBruto * 8) / 100;
  } else if (salarioBruto >= 600 && salarioBruto <= 1000) {
    salarioNeto = salarioBruto - (salarioBruto * 10) / 100;
  } else if (salarioBruto > 1000) {
    salarioNeto = salarioBruto - (salarioBruto * 12) / 100;
  }

  return salarioNeto;
};

let finalizar = false;
let numeroTrabajador = 1;
console.log("Calculadora de salario");

while (!finalizar) {
  console.log(`trabajador numero ${numeroTrabajador}`);
  let turno = ""
  do {
    turno = prompt(
      "introduce el turno en el que trabajas mañana[m],tarde[t],noche[n]"
    ).toLowerCase();
    if (turno !== "m" && turno !== "t" && turno !== "n") {
      alert("introduce un turno correcto");
    }
  } while (turno !== "m" && turno !== "t" && turno !== "n");
  let horas = true;
  let horasMensuales = ""
  while (horas) {
    horasMensuales = parseFloat(prompt(
      "introduce cuantas horas has trabajado este mes"
    ));

    
    if (!isNaN(horasMensuales) && horasMensuales > 0) {
      
      horas = false;
    } else {
      alert("por favor introduce un numero de horas correctas");
    }
  }

  let precioHora = calcularSalarioTurno(turno);
  let salarioBruto = calcularMensualBruto(precioHora, horasMensuales);
  let salarioNeto = calcularMensualneto(salarioBruto);

  console.log(
    `trabajador ${numeroTrabajador} tiene un salario mensual bruto de ${salarioBruto} y un salario neto de ${salarioNeto}`
  );
  let continuar = prompt(
    "quieres seguir calculando el salario de otro trabajador si[s], salir[otro]"
  ).toLowerCase();
  if (continuar !== "s") {
    finalizar = true;
  }

  numeroTrabajador++;
  precioHora = 0;
  salarioBruto = 0;
  salarioNeto = 0;
}
