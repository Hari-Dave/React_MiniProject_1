import React from 'react';
import colorNames from 'colornames';

const Input = ({ 
    colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="Color Name">Add Color Name: </label>
        <input
            id="Color Name" 
            autoFocus
            type="text"
            placeholder='Add Color Name' 
            required
            value={colorValue}
            onChange={(e) => {
                setColorValue(e.target.value)
                setHexValue(colorNames(e.target.value))
            }}
        />
        <button
            type='button'
            onClick={() => setIsDarkText(!isDarkText)}
        >
            Toggle Text Color
        </button>
    </form>
  )
}

export default Input