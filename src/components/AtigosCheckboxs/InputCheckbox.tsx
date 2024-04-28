import React from 'react';

interface InputCheckboxProps {
    id: string;
    label: string;
    isChecked: boolean; 
    onChange: (isChecked: boolean) => void;
}

const InputCheckbox: React.FC<InputCheckboxProps> = ({ id, label, isChecked, onChange }) => {
    return (
        <div className="flex items-center">
            <input type="checkbox" id={id} name={id} className="borde-2 border-black rounded-md h-8 w-6 ml-6 cursor-pointer" 
            checked={isChecked}
            onChange={(e) => onChange(e.target.checked)} />
            <label htmlFor={id} className="font-medium text-[18px] ml-2">{label}</label>
        </div>
    );
}

export default InputCheckbox;
