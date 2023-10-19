'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NavbarAutentic() {
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
						onClick={() => handleOptionClick('/evento/vizualizar-evento')}
						className={`cursor-pointer text-base ${
							currentOption === '/evento/vizualizar-evento'
								? 'font-bold text-fuchsia-700'
								: 'font-medium text-black'
						}`}
					>
						Evento
					</p>
					<p
						onClick={() => handleOptionClick('/equipe')}
						className={`cursor-pointer text-base ${
							currentOption === '/equipe'
								? 'font-bold text-fuchsia-700'
								: 'font-medium text-black'
						}`}
					>
						Equipe
					</p>
					<p
						onClick={() => handleOptionClick('/artigos')}
						className={`cursor-pointer text-base ${
							currentOption === '/artigos'
								? 'font-bold text-fuchsia-700'
								: 'font-medium text-black'
						}`}
					>
						Artigos
					</p>
					<p
						onClick={() => handleOptionClick('/sessao')}
						className={`cursor-pointer text-base ${
							currentOption === '/sessao'
								? 'font-bold text-fuchsia-700'
								: 'font-medium text-black'
						}`}
					>
						Sessão
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
