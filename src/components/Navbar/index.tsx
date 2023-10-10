'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
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
		<div className="fixed left-0 right-0 top-0 z-50 bg-white px-16 py-5 shadow-xl">
			<div className="flex items-center justify-between">
				<Image
					src="/assets/navbar/engetec-logo.svg"
					alt="logo engetec"
					width={200}
					height={200}
				/>
				<div className="flex items-center gap-6">
					<p
						onClick={() => handleOptionClick('/')}
						className={`cursor-pointer text-base ${
							currentOption === '/'
								? 'font-bold text-fuchsia-700'
								: 'font-medium text-black'
						}`}
					>
						Página Inicial
					</p>
					<p
						onClick={() => handleOptionClick('/login')}
						className={`cursor-pointer text-base ${
							currentOption === '/login'
								? 'font-bold text-fuchsia-700'
								: 'font-medium text-black'
						}`}
					>
						Login
					</p>
					<p
						onClick={() => handleOptionClick('/cadastro/cadastrar-admin')}
						className={`cursor-pointer text-base ${
							currentOption === '/cadastro/cadastrar-admin'
								? 'font-bold text-fuchsia-700'
								: 'font-medium text-black'
						}`}
					>
						Criar Evento
					</p>
					<p
						onClick={() => handleOptionClick('/suporte')}
						className={`cursor-pointer text-base ${
							currentOption === '/suporte'
								? 'font-bold text-fuchsia-700'
								: 'font-medium text-black'
						}`}
					>
						Suporte
					</p>
				</div>
			</div>
		</div>
	);
}
