// InputTextarea.jsx
import React from 'react';

interface InputTextareaProps {
    id: string;
    label: string;
    rows?: number;
}

const InputTextarea: React.FC<InputTextareaProps> = ({ id, label, rows = 4 }) => {
    return (
        <div>
            <label htmlFor={id} className="block mb-2">{label}:</label>
            <textarea id={id} name={id} rows={rows} className="block w-full border-2 border-gray-300 rounded rounded-[20px] p-2 mb-4"></textarea>
        </div>
    );
}

export default InputTextarea;
