'use client';

import { useState } from 'react';

import CadastroAdmin from '../FormsAdmin/Cadastrar';
import CadastroEvento from '../FormsEvento/Cadastrar';
import RegrasEvento from '../FormsRegras/cadastrar/regras-evento';
import * as S from './styles';

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
			case 'cadastrar-user':
				return <CadastroAdmin handleNextClick={goToNextPage} />;
			case 'cadastrar-convidado':
				return <CadastroEvento handleNextClick={goToNextPage} />;
			case 'cadastrar-comissao':
				return <RegrasEvento handleNextClick={goToNextPage} />;
			default:
				return null;
		}
	};
	return (
		<div>
			<div className="fixed left-0 right-0 top-28 z-40 bg-white px-28 py-5 shadow">
				<div className="flex flex-wrap items-center justify-center gap-5">
					<S.OptionMenu
						onClick={() => handleOptionClick('cadastrar-user')}
						className="flex-shrink-0 cursor-pointer text-sm"
						selected={currentOption === 'cadastrar-user'}
					>
						Cadastrar Usuário
					</S.OptionMenu>
					<p
						onClick={() => handleOptionClick('cadastrar-convidado')}
						className={`flex-shrink-0 cursor-pointer text-sm ${
							currentOption === 'cadastrar-convidado'
								? 'font-bold text-fuchsia-700'
								: 'font-medium text-gray-400'
						}`}
					>
						Cadastrar Convidado
					</p>
					<p
						onClick={() => handleOptionClick('cadastrar-comissao')}
						className={`flex-shrink-0 cursor-pointer text-sm ${
							currentOption === 'cadastrar-comissao'
								? 'font-bold text-fuchsia-700'
								: 'font-medium text-gray-400'
						}`}
					>
						Cadastrar Comissão
					</p>
				</div>
			</div>
			{renderContent()}
		</div>
	);
}
