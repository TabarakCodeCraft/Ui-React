import React, { useState } from 'react';
import "../radioBtn/radioBtn.css"

const RadioBtn = () => {
    const [selectOption, setSelectOPtion] = useState('');
    const options = [
        { id: 'option1', label: 'This is useful' },
        { id: 'option2', label: 'Something is wrong' },
        { id: 'option3', label: 'This is not relevant' },
        { id: 'option4', label: 'This is not useful' },
    ];
    const handleChange = (event) => {
        setSelectOPtion(event.target.value);
    }

    return (
       <>
       <div className="container">
            <h3 >What do you think?</h3>
            <div className="radio-group">
                {options.map((option, index) => (
                    <label key={index}>
                        <input
                            type="radio"
                            name="options"
                            value={option.id}
                            checked={selectOption === option.id}
                            onChange={handleChange}
                        />
                        {option.label}
                    </label>
                ))}
            </div>
        </div>
        </>
    );
}

export default RadioBtn;
