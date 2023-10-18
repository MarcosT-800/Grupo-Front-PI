'use client';

import _padStart from 'lodash/padStart';

import EdicaoEvento from '@/components/FormsEvento/Editar';
import Navbar from '@/components/Navbar';

export default function EditarEvento() {
	return (
		<div>
			<Navbar />
			<EdicaoEvento />
		</div>
	);
}
