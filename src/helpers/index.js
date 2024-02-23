/* eslint-disable no-unused-vars */
const formatearDinero = (valor) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formatter.format(valor);
};

//Creamos una variable total a pagar que recibe una cantidad y un plazo de tiempo
const calcularTotalPagar = (cantidad, plazo) => {
  let total; // Inicializamos una variable total en 0

  //Mientras mayor es la cantidad solicitada menor es el interés
  if (cantidad < 5000) {
    total = cantidad * 1.5; //50% de interés
  } else if (cantidad >= 5000 && cantidad < 10000) {
    total = cantidad * 1.4; // 40% de interés
  } else if (cantidad >= 10000 && cantidad < 15000) {
    total = cantidad * 1.3; // 30% de interés
  } else {
    total = cantidad * 1.2; // 20% de interés
  }

  //Plazo - mas plazo, mayor interés
  if (plazo === 6) {
    total *= 1.1; // 10% de interés
  } else if (plazo === 12) {
    total *= 1.2;
  } else {
    total *= 1.3;
  }

  return total; // Una vez que se pasan esas series de condiciones, recibidas por la cantidad y el plazo, nos devuelve el total final
};

export { formatearDinero, calcularTotalPagar };
