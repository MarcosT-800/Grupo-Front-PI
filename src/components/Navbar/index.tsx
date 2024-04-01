'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { BiSearch } from 'react-icons/bi';

import * as S from './styles';

export default function Navbar() {
	const router = useRouter();
	const [currentOption, setCurrentOption] = useState('/cadastrar');
	const [query, setQuery] = useState('');

	useEffect(() => {
		const currentRoute = window.location.pathname;
		setCurrentOption(currentRoute);
	}, []);

	const handleOptionClick = (option: any) => {
		setCurrentOption(option);
		router.push(`${option}`);
	};

	const handleSearch = (e: any) => {
		e.preventDefault();
		router.push(`/results?q=${query}`);
	};

	return (
		<div className="fixed left-0 right-0 top-0 z-50 bg-white px-16 py-5 shadow-xl">
			<div className="flex items-center justify-between">
				<div
					className="flex items-center rounded-lg border-2 px-2 py-1.5"
					style={{ borderColor: '#4B00E0' }}
				>
					<input
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Digite sua pesquisa"
						className="ml-2 w-60 text-base outline-none"
					/>
					<button
						className="mr-0.5 border-l pl-2 outline-none"
						style={{ borderLeftColor: '#4B00E0', color: '#4B00E0' }}
						type="submit"
					>
						<BiSearch />
					</button>
				</div>
				<Image
					src="/assets/navbar/logo-engetec.svg"
					alt="logo engetec"
					width={180}
					height={180}
				/>
				<div className="flex items-center gap-5">
					<S.OptionMenu
						onClick={() => handleOptionClick('/')}
						className="cursor-pointer text-base"
						selected={currentOption === '/'}
					>
						Página Inicial
					</S.OptionMenu>
					<S.OptionMenu
						onClick={() => handleOptionClick('/login')}
						className="cursor-pointer text-base"
						selected={currentOption === '/login'}
					>
						Login
					</S.OptionMenu>
					<S.OptionMenu
						onClick={() => handleOptionClick('/cadastrar')}
						className="cursor-pointer text-base"
						selected={currentOption === '/cadastrar'}
					>
						Cadastrar
					</S.OptionMenu>
					<S.OptionMenu
						onClick={() => handleOptionClick('/suporte')}
						className="cursor-pointer text-base"
						selected={currentOption === '/suporte'}
					>
						Suporte
					</S.OptionMenu>
				</div>
			</div>
		</div>
	);
}
