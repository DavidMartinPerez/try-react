import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 0 }) => {
    //hook
    const [ counter, setCounter ] = useState( value );
    //handle
    const handleIncreaseCounter = ( increaseIn ) => setCounter(counter + increaseIn);
    const handleResetCounter = () => setCounter( value );
    const handleDecreaseCounter = ( decreaseIn ) => setCounter(counter - decreaseIn);

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ () => handleIncreaseCounter( 1 ) }> Aumentar </button>
            <button onClick={ handleResetCounter }> Reset </button>
            <button onClick={ () => handleDecreaseCounter( 1 ) }> Disminuir </button>
        </>
    )
}


// Proptypes
CounterApp.propTypes = {
    value: PropTypes.number,
}

export default CounterApp
