'use client';

import { useState } from 'react';

import CadastrarUsuario from '@/components/Forms-CadastrarUsu';
import CriarEvento from '@/components/Forms-CriarEvento/cadastrar';
import DataLocal from '@/components/Forms-DataLocal/cadastrar';
import VisualizarSala from '@/components/Forms-Salas/cadastrar';
import Sessao from '@/components/Forms-Sessao';
import Menu from '@/components/Menu';

import * as S from './styles';

type TabbarProps = {
	currentOption: string;
	handleOptionClick: (option: string) => void;
};

export default function Tabbar({
	currentOption,
	handleOptionClick,
}: TabbarProps) {
	const renderContent = () => {
		switch (currentOption) {
			case 'menu':
				return <Menu />;
			case 'criar-evento':
				return (
					<CriarEvento
						handleNextClick={() => handleOptionClick('data-local')}
					/>
				);
			case 'data-local':
				return (
					<DataLocal handleNextClick={() => handleOptionClick('arquivos')} />
				);
			case 'arquivos':
				return;
			case 'atividades':
				return;
			case 'usuarios':
				return (
					<CadastrarUsuario
						handleNextClick={() => handleOptionClick('usuarios')}
					/>
				);
			case 'salas':
				return (
					<VisualizarSala handleNextClick={() => handleOptionClick('salas')} />
				);
			case 'sessoes':
				return <Sessao handleNextClick={() => handleOptionClick('sessoes')} />;
			default:
				return null;
		}
	};
	return (
		<div>
			<div className="fixed left-0 right-0 top-24 z-40 bg-white px-28 pb-5 pt-8 shadow">
				<div className="flex flex-wrap items-center justify-center gap-5">
					<div className="flex items-center gap-2">
						<S.OptionMenu
							onClick={() => handleOptionClick('menu')}
							className="flex-shrink-0 cursor-pointer text-sm"
							selected={currentOption === 'menu'}
						>
							Menu
						</S.OptionMenu>
						<S.IconMenu selected={currentOption === 'menu'} />
					</div>
					<div className="flex items-center gap-2">
						<S.OptionMenu
							onClick={() => handleOptionClick('criar-evento')}
							className="flex-shrink-0 cursor-pointer text-sm"
							selected={currentOption === 'criar-evento'}
						>
							Criar Evento
						</S.OptionMenu>
						<S.IconEvent selected={currentOption === 'criar-evento'} />
					</div>
					<div className="flex items-center gap-2">
						<S.OptionMenu
							onClick={() => handleOptionClick('data-local')}
							className="flex-shrink-0 cursor-pointer text-sm"
							selected={currentOption === 'data-local'}
						>
							Data e Local
						</S.OptionMenu>
						<S.IconDate selected={currentOption === 'data-local'} />
					</div>
					<div className="flex items-center gap-2">
						<S.OptionMenu
							onClick={() => handleOptionClick('arquivos')}
							className="flex-shrink-0 cursor-pointer text-sm"
							selected={currentOption === 'arquivos'}
						>
							Arquivos
						</S.OptionMenu>
						<S.IconFiles selected={currentOption === 'arquivos'} />
					</div>
					<div className="flex items-center gap-2">
						<S.OptionMenu
							onClick={() => handleOptionClick('atividades')}
							className="flex-shrink-0 cursor-pointer text-sm"
							selected={currentOption === 'atividades'}
						>
							Atividades
						</S.OptionMenu>
						<S.IconActivities selected={currentOption === 'atividades'} />
					</div>
					<div className="flex items-center gap-2">
						<S.OptionMenu
							onClick={() => handleOptionClick('usuarios')}
							className="flex-shrink-0 cursor-pointer text-sm"
							selected={currentOption === 'usuarios'}
						>
							Usuários
						</S.OptionMenu>
						<S.IconUsers selected={currentOption === 'usuarios'} />
					</div>
					<div className="flex items-center gap-2">
						<S.OptionMenu
							onClick={() => handleOptionClick('salas')}
							className="flex-shrink-0 cursor-pointer text-sm"
							selected={currentOption === 'salas'}
						>
							Salas
						</S.OptionMenu>
						<S.IconClasses selected={currentOption === 'salas'} />
					</div>
					<div className="flex items-center gap-2">
						<S.OptionMenu
							onClick={() => handleOptionClick('sessoes')}
							className="flex-shrink-0 cursor-pointer text-sm"
							selected={currentOption === 'sessoes'}
						>
							Sessões
						</S.OptionMenu>
						<S.IconSection selected={currentOption === 'sessoes'} />
					</div>
				</div>
			</div>
			{renderContent()}
		</div>
	);
}
