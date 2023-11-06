'use client';

import { useState } from 'react';

import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/Navbar/NavbarAuthenticated';
import TabbarAuthenticated from '@/components/Tabbar/TabbarAuthenticated';

export default function Evento() {
	const [currentOption, setCurrentOption] = useState('criar-evento');

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};
	return (
		<div>
			<NavbarAuthenticated />
			<TabbarAuthenticated
				currentOption={currentOption}
				handleOptionClick={handleOptionClick}
			/>
			<Footer />
		</div>
	);
}
