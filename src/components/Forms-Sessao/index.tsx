'use client';

type CriarEventoProps = {
	handleNextClick: () => void;
};

export default function Sessao({ handleNextClick }: CriarEventoProps) {
	const handleNextButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		handleNextClick();
	};

	return (
		<div className="container mb-6 mt-52 flex flex-col items-center">
			<div className="w-1/2">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#ef0037' }}
				>
					Sessões
				</h1>
				<h2 className="text-center" style={{ color: '#000000' }}>
					Salas que irão ser utilizadas no evento
				</h2>
			</div>

			<form className="mt-8 flex flex-col bg-white">
				<div className="mb-5 flex flex-col">
					<label className="mb-2 text-sm font-medium" htmlFor="tempoSessao">
						Tempo por Sessão:
					</label>
					<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
						<input
							className="w-full rounded-md border-0 bg-white text-sm outline-none"
							type="time"
							name="tempoSessao"
							id="tempoSessao"
							required
						/>
					</div>
				</div>

				<div className="mb-5 flex flex-col">
					<label
						className="mb-2 w-80 text-sm font-medium"
						htmlFor="tempoApresentacao"
					>
						Tempo por Apresentação:
					</label>
					<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
						<input
							className="w-full rounded-md border-0 bg-white text-sm outline-none"
							type="time"
							name="tempoApresentacao"
							id="tempoApresentacao"
							required
						/>
					</div>
				</div>

				<button
					className="ml-16 h-12 w-48
                    rounded-xl border-2 border-solid  border-black bg-transparent p-2 text-center text-base font-medium text-black"
					type="submit"
				>
					Distribuir
				</button>
			</form>

			<div className="mt-8 flex items-center justify-center gap-6">
				<button
					className="w-56
                    rounded-xl border-none p-2 text-center text-base font-medium text-white"
					style={{ backgroundColor: '#8A8A8A' }}
					type="submit"
				>
					Voltar
				</button>
				<button
					className="w-56
                    rounded-xl border-none p-2 text-center text-base font-medium text-white"
					style={{ backgroundColor: '#EF0037' }}
					type="submit"
					onClick={handleNextButtonClick}
				>
					Finalizar
				</button>
			</div>

			<div className="mt-14 flex w-1/2 flex-col">
				<h1 className="text-start text-2xl font-bold text-black">
					Gerenciamento das sessões
				</h1>
			</div>
		</div>
	);
}
