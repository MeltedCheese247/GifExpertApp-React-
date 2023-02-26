import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({categories,setCategories}) => {

    const [inputValue, setInputValue] = useState(categories);

    const handleInputChange = (evt) => {
        const newValue = evt.target.value;
        console.log(newValue);
        setInputValue( oldValue => newValue);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const newValue = inputValue;
        if (newValue.trim().length > 0){
            setCategories( oldValue => [newValue,...oldValue]);
            setInputValue('');
            console.log('Done');}
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={inputValue}
            onChange = {handleInputChange}
            />
        </form>
    </div>
  )
}

AddCategory.propTypes = {setCategories: PropTypes.func.isRequired}