import PropTypes from 'prop-types'; //Importamos los PropTypes

//Creamos un componente de botón que recibirá 2 props, {} destructoramos los props para asignarlos como variables
function Button({ operador, fn }) {
  return (
    <button
      type="button"
      className="h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500"
      onClick={fn} //Este botón recibirá un evento de click que activara la función que toma como props
    >
      {operador}
    </button>
  );
}

//Asignamos los tipos de pros por defecto que recibirá cada uno
Button.propTypes = {
  operador: PropTypes.string.isRequired, //Operador recibirá un string
  fn: PropTypes.func.isRequired, // fn recibirá una función
};

export default Button;
