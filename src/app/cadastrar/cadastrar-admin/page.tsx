'use client';

import _padStart from 'lodash/padStart';

import CadastroAdmin from '@/components/FormsAdmin/Cadastrar';
import Navbar from '@/components/Navbar';

export default function CadastrarAdmin() {
	return (
		<div>
			<Navbar />
			<CadastroAdmin />
		</div>
	);
}
