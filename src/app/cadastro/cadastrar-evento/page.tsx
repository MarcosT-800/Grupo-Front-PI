'use client';

import _padStart from 'lodash/padStart';

import CadastroEvento from '@/components/FormsEvento/Cadastrar';
import Navbar from '@/components/Navbar';

export default function CadastrarEvento() {
	return (
		<div>
			<Navbar />
			<CadastroEvento />
		</div>
	);
}
