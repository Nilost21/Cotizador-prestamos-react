/* eslint-disable no-unused-vars */
import { useState } from 'react'; //Importamos el hook de react, {} para solo seleccionar uno y no todos los que tiene
import Header from './components/Header/Header'; // Importamos el componente Header que creamos
import Button from './components/Button/Button';
import { formatearDinero } from './helpers';

//Esta función sera nuestro componente de react
function App() {
  //1- Creamos una constante donde haremos un destructuring de un array
  //2- De la función useState() vamos a extraer 2 valores del array, la variable a modificar, y el metodo set que cambiara el estado
  //3- Dentro de la función pondremos el rango máximo
  const [cantidad, setCantidad] = useState(10000);

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
    </div>
  );
}

export default App; //Exportamos por default el componente APP
