'use client';

export default function MeusEventos() {
	return (
		<div className="container mb-6 mt-40 flex flex-col items-center">
			<div className="w-1/2">
				<h1
					className="text-center text-3xl font-bold text-black"
					style={{ color: '#ef0037' }}
				>
					Meus Eventos
				</h1>
				<h2 className="text-center" style={{ color: '#000000' }}>
					Todos os eventos em que você organiza ou administra
				</h2>

				<div className="mt-8 h-64 w-full	 rounded-lg border-2	border-solid	border-rose-500">
					<h1 className="text-xl font-semibold text-rose-500">
						Tech Talks: Descobrindo as Fronteiras da Tecnologia
					</h1>
				</div>
			</div>
		</div>
	);
}
