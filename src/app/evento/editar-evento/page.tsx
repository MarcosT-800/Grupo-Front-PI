'use client';

import { useState } from 'react';

import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/Navbar/NavbarAuthenticated';
import EditarEvento from '@/components/Forms-Evento/editar';

export default function Evento() {
	const [currentOption, setCurrentOption] = useState('criar-evento');

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};
	return (
		<div>
			<NavbarAuthenticated />

                <EditarEvento
                />
            
			<Footer />
		</div>
	);
}
