'use client';

import { useState } from 'react';

import NavbarAutentic from '@/components/Navbar/NavbarAutentic';
import TabbarAutentic from '@/components/Tabbar/TabbarAutentic';

export default function VizualizarEvento() {
	const [currentOption, setCurrentOption] = useState('/');

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};
	return (
		<div>
			<NavbarAutentic />
			<TabbarAutentic
				currentOption={currentOption}
				handleOptionClick={handleOptionClick}
			/>
		</div>
	);
}
