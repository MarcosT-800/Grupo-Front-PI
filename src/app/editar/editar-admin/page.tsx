'use client';

import _padStart from 'lodash/padStart';

import EdicaoAdmin from '@/components/FormsAdmin/Editar';
import Navbar from '@/components/Navbar';

export default function EditarAdmin() {
	return (
		<div>
			<Navbar />
			<EdicaoAdmin />
		</div>
	);
}
