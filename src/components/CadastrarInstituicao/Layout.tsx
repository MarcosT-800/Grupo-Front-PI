import React from 'react';

const Formulario = () => {
    return (
        <div className='h-[130vh] flex flex-col justify-center items-center '>
        <form className='border p-20 px-[130px] rounded-lg shadow-lg'>
            <h1 className="text-3xl font-bold mb-4 text-[#4B00E0] text-center">Cadastrar Instituição</h1>
            <p className="text-sm text-gray-600 mb-4 text-center font-medium">Irá ter que passar por uma aprovação para ter a instituição cadastrada</p>
                <div className="mb-4">
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-800 mb-2">Nome:</label>
                    <input type="text" id="nome" name="nome" className="w-full border-2 border-gray-300 rounded-lg  border border-gray-300 py-1 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="cpf" className="block text-sm font-medium text-gray-800 mb-2">CNPJ:</label>
                    <input type="text" id="cpf" name="cpf" className="w-full border-2 border-gray-300 rounded-lg border border-gray-300 py-1 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div className='w-full items-center flex justify-center'>
                    <button type="submit" className="px-14 bg-[#4B00E0] text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

export default Formulario;
