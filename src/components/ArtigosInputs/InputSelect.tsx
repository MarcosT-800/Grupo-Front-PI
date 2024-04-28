// InputSelect.jsx
import React from 'react';

interface InputSelectProps {
    id: string;
    label: string;
    options: { value: string; label: string }[];
}

const InputSelect: React.FC<InputSelectProps> = ({ id, label, options }) => {
    return (
        <div>
            <label htmlFor={id} className="block mb-2">{label}:</label>
            <select id={id} name={id} className="block w-full p-2 px-2 mb-4 rounded rounded-[15px] border-2 border-gray-300">
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}

export default InputSelect;
