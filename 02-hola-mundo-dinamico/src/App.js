import React from 'react';
import PropTypes from 'prop-types';

const App = ( { saludo, nombre } ) => {


    return ( <h1> {saludo} { nombre } </h1> );
}

//Validación de datos obligatorios
App.propTypes = {
    nombre: PropTypes.string.isRequired,
    saludo: PropTypes.string
};

App.defaultProps = {
    saludo: 'Hola, soy'
}

export default App;