'use client';

import EditarAdmin from '@/components/FormsAdmin/Editar';
import EditarEvento from '@/components/FormsEvento/Editar';
import EditarRegrasEvento from '@/components/FormsRegras/editar/regras-evento';

type TabbarProps = {
	currentOption: string;
	handleOptionClick: (option: string) => void;
};

export default function TabbarAutentic({
	currentOption,
	handleOptionClick,
}: TabbarProps) {
	const renderContent = () => {
		switch (currentOption) {
			case 'editar-admin':
				return <EditarAdmin />;
			case 'editar-evento':
				return <EditarEvento />;
			case 'regras-evento':
				return <EditarRegrasEvento />;
			case 'regras-avaliacao':
				return null;
			case 'regras-artigos':
				return null;
			case 'regras-apresentacao':
				return null;
			case 'editar-equipe':
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
						onClick={() => handleOptionClick('editar-admin')}
						className={`flex-shrink-0 cursor-pointer text-sm ${
							currentOption === 'editar-admin'
								? 'font-bold text-fuchsia-700'
								: 'font-medium text-gray-400'
						}`}
					>
						Detalhes do Administador
					</p>
					<p
						onClick={() => handleOptionClick('editar-evento')}
						className={`flex-shrink-0 cursor-pointer text-sm ${
							currentOption === 'editar-evento'
								? 'font-bold text-fuchsia-700'
								: 'font-medium text-gray-400'
						}`}
					>
						Detalhes do Evento
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
						onClick={() => handleOptionClick('editar-equipe')}
						className={`flex-shrink-0 cursor-pointer text-sm ${
							currentOption === 'editar-equipe'
								? 'font-bold text-fuchsia-700'
								: 'font-medium text-gray-400'
						}`}
					>
						Detalhes da Equipe
					</p>
					<p className="mb-1 text-xl font-semibold">›</p>
				</div>
			</div>
			{renderContent()}
		</div>
	);
}
