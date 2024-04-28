// InputCheckbox.jsx
import React from 'react';

interface InputCheckboxProps {
    id: string;
    label: string;
}

const InputCheckbox: React.FC<InputCheckboxProps> = ({ id, label }) => {
    return (
        <div className="flex items-center">
            <input type="checkbox" id={id} name={id} className="borde-2 border-black rounded-md h-8 w-8 mr-2 cursor-pointer" />
            <label htmlFor={id} className="font-medium text-[18px]">{label}</label>
        </div>
    );
}

export default InputCheckbox;
