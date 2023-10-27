'use client';

import { useEffect, useState } from 'react';

import axios from 'axios';
import _padStart from 'lodash/padStart';

import CadastroAdmin from '@/components/FormsAdmin/Cadastrar';
import Navbar from '@/components/Navbar';
import {
	Admin,
	AdminRepository,
} from '@/lib/repository/admin/index.repository';
import { publicApi } from '@/services';

const [concats, setContacts] = useState<Admin[]>([]);

useEffect(() => {
	publicApi.get('/admins').then((response) => {
		console.log(response.data);
		// setContacts(response.data._admins);

	});
}, []);

export default function CadastrarAdmin() {
	return (
		<div>
			<Navbar />
			<h1>TESTE</h1>
			{concats.map((admin: Admin, index: number) => (
				<div key={index}>{admin.nome}</div>
			))}

			<CadastroAdmin />
		</div>
	);
}
