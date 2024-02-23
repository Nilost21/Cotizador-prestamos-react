/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'; //Importamos el hook de react, {} para solo seleccionar uno y no todos los que tiene
import Header from './components/Header/Header'; // Importamos el componente Header que creamos
import Button from './components/Button/Button';
import { formatearDinero, calcularTotalPagar } from './helpers';

//Esta función sera nuestro componente de react
function App() {
  //1- Creamos una constante donde haremos un destructuring de un array
  //2- De la función useState() vamos a extraer 2 valores del array, la variable a modificar, y el metodo set que cambiara el estado
  //3- Dentro de la función pondremos el rango máximo
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

  //useEffect es una función que recibe un callback, al principio y un array al final
  useEffect(() => {
    //'Componente listo...o la cantidad cambio o los meses'
    const resultadoTotalPagar = calcularTotalPagar(cantidad, meses);
    setTotal(resultadoTotalPagar);

    //Calcular el pago mensual
  }, [cantidad, meses]); //En este array colocaremos los useState para que cuando se vayan actualizando el use useEffect vuelva a ejecutar el componente

  useEffect(() => {
    setPago(total / meses);
  }, [meses, total]);

  const MIN = 0; //Creamos una variable de mínimo
  const MAX = 20000; //Otra de Máximo
  const STEP = 100; //Y un step para que el rango salte de 100 en 100

  //Creamos una función que recibirá el evento dentro de la etiqueta input, y esta función se llamara dentro del atributo en la etiqueta
  function handleChange(e) {
    setCantidad(Number(e.target.value));
  }

  function handleClickDecremento() {
    const valor = cantidad - STEP;

    if (valor < MIN) {
      alert('Cantidad no valida');
      return;
    }
    setCantidad(valor);
  }

  function handleClickIncremento() {
    const valor = cantidad + STEP;

    if (valor > MAX) {
      alert('Cantidad no valida');
      return;
    }
    setCantidad(valor);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <div className="flex justify-between my-6">
        <Button operador="-" fn={handleClickDecremento} />
        <Button operador="+" fn={handleClickIncremento} />
      </div>
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-line-500 hover:accent-lime-600"
        onChange={handleChange} //Agregamos el evento como atributo dentro de la etiqueta HTML
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />
      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {formatearDinero(cantidad)}
      </p>
      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-600">Plazo</span> a pagar
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center font-bold text-gray-500"
        value={meses}
        onChange={(e) => setMeses(+e.target.value)}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className="text-indigo-600">de pagos</span>
        </h2>
        <p className="text-xl text-gray-500 text-center font-bold ">
          {meses} Meses
        </p>
        <p className="text-xl text-gray-500 text-center font-bold ">
          {formatearDinero(total)} Total a pagar
        </p>
        <p className="text-xl text-gray-500 text-center font-bold ">
          {formatearDinero(pago)} Mensuales
        </p>
      </div>
    </div>
  );
}

export default App; //Exportamos por default el componente APP
