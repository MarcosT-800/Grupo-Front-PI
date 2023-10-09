'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

export default function Navbar() {
	const router = useRouter();
	const [currentOption, setCurrentOption] = useState('/');

	useEffect(() => {
		const currentRoute = window.location.pathname;

		setCurrentOption(currentRoute);
	}, []);

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);

		router.push(`${option}`);
	};

	return (
		<div className="fixed left-0 right-0 top-0 p-7 shadow-xl">
			<div className="flex items-center gap-6">
				<p
					onClick={() => handleOptionClick('/')}
					className={`cursor-pointer text-base font-normal ${
						currentOption === '/' ? 'font-bold text-fuchsia-700' : 'text-black'
					}`}
				>
					Página Inicial
				</p>
				<p
					onClick={() => handleOptionClick('/login')}
					className={`cursor-pointer text-base font-normal ${
						currentOption === '/login'
							? 'font-bold text-fuchsia-700'
							: 'text-black'
					}`}
				>
					Login
				</p>
				<p
					onClick={() => handleOptionClick('/cadastro/cadastrar-admin')}
					className={`cursor-pointer text-base font-normal ${
						currentOption === '/cadastro/cadastrar-admin'
							? 'font-bold text-fuchsia-700'
							: 'text-black'
					}`}
				>
					Criar Evento
				</p>
				<p
					onClick={() => handleOptionClick('/suporte')}
					className={`cursor-pointer text-base font-normal ${
						currentOption === '/suporte'
							? 'font-bold text-fuchsia-700'
							: 'text-black'
					}`}
				>
					Suporte
				</p>
			</div>
		</div>
	);
}
