import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('')

    const handleChangeInputValue = (e) => setInputValue( e.target.value );

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ) setCategories( inputValue );
    }
    return (
        <form onSubmit={ handleSubmit }>
            <input
                id="inputCategory"
                value={ inputValue }
                onChange={ handleChangeInputValue }
                autoComplete="off"
            />
            <button type="submit" >Añadir categoria</button>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory

