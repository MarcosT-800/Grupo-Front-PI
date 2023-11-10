'use client';

import MeusEventos from '@/components/Eventos';
import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/Navbar/NavbarAuthenticated';

export default function Evento() {
	return (
		<div>
			<NavbarAuthenticated />
			<MeusEventos />
			<Footer />
		</div>
	);
}
