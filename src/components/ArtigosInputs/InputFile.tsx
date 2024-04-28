'use client'
import React, { useState } from 'react';

interface InputFileProps {
    id: string;
    label: string;
}

const InputFile: React.FC<InputFileProps> = ({ id, label }) => {
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleClearFileName = () => {
        setFileName(null);
    };

    return (
        <div className="flex flex-col">
            <div className="flex flex-col-reverse">
                <input type="file" id={id} className="hidden" onChange={handleFileChange} />
                <label htmlFor={id} className="block border border-gray-300 rounded rounded-[20px] p-2 cursor-pointer mb-2 bg-[#0391C9] text-white text-center flex justify-between"><span className='ml-[170px] text-center'>Submeter modelo de arquivo</span><span className='cursor-pointer'><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z" />
                </svg>
                </span></label>
                <div className="flex items-center w-full">
                    {fileName && <span className='w-full block border border-gray-300 rounded rounded-[20px] p-2 cursor-pointer mb-4 bg-[#00B7FF] text-white'>{fileName}<span className='cursor-pointer ml-[390px]' onClick={handleClearFileName}>x</span></span>}
                </div>
            </div>
        </div>
    );
}

export default InputFile;
