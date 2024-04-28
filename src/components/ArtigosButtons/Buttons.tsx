import React from 'react';
import { } from 'react-icons/fa';

interface ButtonProps {
    label: string;
    icon: React.ReactNode; // Pode ser qualquer nó React, como um ícone do React Icons
    color?: string; // Cor do botão
}

const buttons = [
    { label: "Botão 1", color: "green-500" },
    { label: "Botão 2", color: "green-500" },
    { label: "Botão 3", color: "green-500" },
    { label: "Botão 4", color: "green-500" },
    { label: "Botão 5", color: "green-500" },
    { label: "Botão 6", color: "blue-500" },
    { label: "Botão 7", color: "blue-500" },
    { label: "Botão 8", color: "red-500" },
];

const ButtonList = () => {
    return (
        <div className="flex flex-wrap justify-between">
            {buttons.map((button, index) => (
                <Button key={index} label={button.label} color={button.color} icon={button.icon} />
            ))}
        </div>
    );
}

const Button: React.FC<ButtonProps> = ({ label, icon, color = 'blue-500' }) => {
    return (
        <button className={`flex items-center text-${color} text-white py-2 px-4 rounded-md focus:outline-none hover:bg-${color}-600`}>
            <span className="mr-2">{icon}</span>
            {label}
        </button>
    );
}

export default ButtonList;
