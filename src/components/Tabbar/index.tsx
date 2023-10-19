'use client';

import { useState } from 'react';

import CadastroAdmin from '../FormsAdmin/Cadastrar';
import CadastroEvento from '../FormsEvento/Cadastrar';
import RegrasEvento from '../FormsRegras/cadastrar/regras-evento';

type TabbarProps = {
	currentOption: string;
	handleOptionClick: (option: string) => void;
};

export default function Tabbar({
	currentOption,
	handleOptionClick,
}: TabbarProps) {
	const tabbarOptions = [
		'cadastrar-evento',
		'regras-evento',
		'regras-avaliacao',
		'regras-artigos',
		'regras-apresentacao',
		'cadastrar-equipe',
	];

	const [currentPageIndex, setCurrentPageIndex] = useState(
		tabbarOptions.findIndex((option) => option === currentOption)
	);

	const goToNextPage = () => {
		const nextPageIndex = currentPageIndex + 1;
		if (nextPageIndex < tabbarOptions.length) {
			setCurrentPageIndex(nextPageIndex);
			handleOptionClick(tabbarOptions[nextPageIndex]);
		}
	};
	const renderContent = () => {
		switch (currentOption) {
			case 'cadastrar-admin':
				return <CadastroAdmin handleNextClick={goToNextPage} />;
			case 'cadastrar-evento':
				return <CadastroEvento handleNextClick={goToNextPage} />;
			case 'regras-evento':
				return <RegrasEvento handleNextClick={goToNextPage} />;
			case 'regras-avaliacao':
				return null;
			case 'regras-artigos':
				return null;
			case 'regras-apresentacao':
				return null;
			case 'cadastrar-equipe':
				return null;
			default:
				return null;
		}
	};
	return (
		<div>
			<div className="fixed left-0 right-0 top-24 z-40 bg-white px-28 py-5 shadow">
				<div className="flex flex-wrap items-center justify-center gap-5">
					<p className="mb-1 text-xl font-semibold">‹</p>
					<p
						onClick={() => handleOptionClick('cadastrar-admin')}
						className={`flex-shrink-0 cursor-pointer text-sm ${
							currentOption === 'cadastrar-admin'
								? 'font-bold text-fuchsia-700'
								: 'font-medium text-gray-400'
						}`}
					>
						Cadastro de Administador
					</p>
					<p
						onClick={() => handleOptionClick('cadastrar-evento')}
						className={`flex-shrink-0 cursor-pointer text-sm ${
							currentOption === 'cadastrar-evento'
								? 'font-bold text-fuchsia-700'
								: 'font-medium text-gray-400'
						}`}
					>
						Cadastro de Evento
					</p>
					<p
						onClick={() => handleOptionClick('regras-evento')}
						className={`flex-shrink-0 cursor-pointer text-sm ${
							currentOption === 'regras-evento'
								? 'font-bold text-fuchsia-700'
								: 'font-medium text-gray-400'
						}`}
					>
						Regras para Evento
					</p>
					<p
						onClick={() => handleOptionClick('regras-avaliacao')}
						className={`flex-shrink-0 cursor-pointer text-sm ${
							currentOption === 'regras-avaliacao'
								? 'font-bold text-fuchsia-700'
								: 'font-medium text-gray-400'
						}`}
					>
						Regras para Avaliação
					</p>
					<p
						onClick={() => handleOptionClick('regras-artigos')}
						className={`flex-shrink-0 cursor-pointer text-sm ${
							currentOption === 'regras-artigos'
								? 'font-bold text-fuchsia-700'
								: 'font-medium text-gray-400'
						}`}
					>
						Regras para Artigos
					</p>
					<p
						onClick={() => handleOptionClick('regras-apresentacao')}
						className={`flex-shrink-0 cursor-pointer text-sm ${
							currentOption === 'regras-apresentacao'
								? 'font-bold text-fuchsia-700'
								: 'font-medium text-gray-400'
						}`}
					>
						Regras para Apresentação
					</p>
					<p
						onClick={() => handleOptionClick('cadastrar-equipe')}
						className={`flex-shrink-0 cursor-pointer text-sm ${
							currentOption === 'cadastrar-equipe'
								? 'font-bold text-fuchsia-700'
								: 'font-medium text-gray-400'
						}`}
					>
						Cadastrar Equipe
					</p>
					<p className="mb-1 text-xl font-semibold">›</p>
				</div>
			</div>
			{renderContent()}
		</div>
	);
}
