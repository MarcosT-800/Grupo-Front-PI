'use client';

import { useEffect, useState } from 'react';

import _padStart from 'lodash/padStart';

import CadastroAdmin from '@/components/FormsComissao/cadastrar/';
import Navbar from '@/components/Navbar';
import { publicApi } from '@/services';

export default function CadastrarAdmin() {
	// const [concats, setContacts] = useState<Admin[]>([]);

	console.log('cadastrar admin index file', process.env.NEXT_PUBLIC_API_URL);

	useEffect(() => {
		const getAdmins = async () => {
			publicApi
				.get('/admins', {
					headers: {
						Accept: 'application/json',
						// Authorization: 'Bearer ' + localStorage.getItem('token'),
						// 	res.setHeader('Access-Control-Allow-Origin', '*');
						//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
						//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
					},
				})
				.then((response) => {
					console.log(response.data._embedded.admins);
					// setContacts(response.data._embedded.admins);
				})
				.catch((error) => {
					console.log(error);
				});
		};
		getAdmins();
	}, []);

	return (
		<div>
			<Navbar />
			<h1 style={{ marginTop: '100px' }}>TESTE</h1>
			{/* {concats.map((admin: Admin, index: number) => (
				<div key={index}>{admin.nome}</div>
			))} */}

			<CadastroAdmin />
		</div>
	);
}
