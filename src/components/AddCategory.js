import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setcategories}) => {


    const [inputValue, setinputValue] = useState('')
    
    const HandledInputChange = (e) =>{
        setinputValue(e.target.value);
    }
    
    const HandledSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length >2){
            setcategories(cats =>[...cats,inputValue]);
            setinputValue('');
        }
    }
  return (
    <form onSubmit={HandledSubmit}>
        <input 
        ///estos atributos son necesarios para la etiqueta input
            type="text"
            value={inputValue}
            onChange ={HandledInputChange}

        />
    </form>
  )
}
AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}
