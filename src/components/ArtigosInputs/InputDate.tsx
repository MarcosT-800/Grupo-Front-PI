// InputDate.jsx
import React from 'react';

interface InputDateProps {
    id: string;
    label: string;
}

const InputDate: React.FC<InputDateProps> = ({ id, label }) => {
    return (
        <div className="flex-1">
            <label htmlFor={id} className="block mb-2">{label}:</label>
            <input type="date" id={id} className="w-full border-2 rounded rounded-[15px] block border border-gray-300 rounded p-2 px-12 mb-4" />
        </div>
    );
}

export default InputDate;
