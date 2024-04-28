import React from 'react';

const data = [
  { tipo: 'artigo', usuario: 'Sophia Almeida', areas: 'Biologia' },
  { tipo: 'análise', usuario: 'Lucas Pinheiros', areas: 'Ciência' }
];

const Tabela = () => {
  return (
    <table className="border-collapse border border-gray-400 rounded-lg w-1/1 overflow-hidden">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-400 p-2">Tipo</th>
          <th className="border border-gray-400 p-2">Usuário</th>
          <th className="border border-gray-400 p-2">Áreas</th>
          <th className="border border-gray-400 p-2"></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
            <td className="border border-gray-400 p-2 pl-4 font-medium">{item.tipo}</td>
            <td className="border border-gray-400 p-2 pl-4 font-medium">{item.usuario}</td>
            <td className="border border-gray-400 p-2 pl-4 font-medium">{item.areas}</td>
            <td className="border p-2 px-6 flex">
              <button className="border border-[#4C1FA6] text-[#4C1FA6] hover:bg-[#4C1FA6] hover:text-white font-medium text-white px-8 py-1 rounded rounded-[12px] mr-4 flex items-center gap-2"><span><img src='assets/Artigos/iconEditar.png' /></span>Editar</button>
              <button className="border border-[#BF0000] text-[#BF0000] hover:bg-[#BF0000] hover:text-white font-medium px-8 py-1 rounded rounded-[12px] ml-2 flex items-center gap-2"><span><img src='assets/Artigos/iconDelete.png' /></span>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;
