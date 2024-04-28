// InputText.jsx
import React from 'react';

interface InputTextProps {
    id: string;
    label: string;
}

const InputText: React.FC<InputTextProps> = ({ id, label }) => {
    return (
        <div>
            <label htmlFor={id} className="block mb-2">{label}:</label>
            <input type="text" id={id} name={id} className="block w-full border-2 rounded rounded-[15px] border-gray-300 p-2 mb-4" />
        </div>
    );
}

export default InputText;
