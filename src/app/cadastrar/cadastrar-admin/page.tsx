'use client';
import { useEffect, useState } from 'react';

import _padStart from 'lodash/padStart';

import CadastroAdmin from '@/components/FormsAdmin/Cadastrar';
import Navbar from '@/components/Navbar';
import { Admin, AdminRepository } from '@/lib/repository/admin/index.repository';

const [concats, setContacts] = useState<Admin[]>([]);

useEffect(() => {
	async function getContacts() {
		const contacts = await AdminRepository.getAll();
  
		setContacts(contacts._embedded.admins);
	  }
  
	  getContacts();
}, [])


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
