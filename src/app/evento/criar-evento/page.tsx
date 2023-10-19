'use client';

import { useState } from 'react';

import Navbar from '@/components/Navbar';
import Tabbar from '@/components/Tabbar';

export default function CriarEvento() {
	const [currentOption, setCurrentOption] = useState('/');

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};
	return (
		<div>
			<Navbar />
			<Tabbar
				currentOption={currentOption}
				handleOptionClick={handleOptionClick}
			/>
		</div>
	);
}
