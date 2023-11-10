'use client';

type CriarEventoProps = {
	handleNextClick: () => void;
};

export default function VisualizarSala({ handleNextClick }: CriarEventoProps) {
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
					Salas
				</h1>
				<h2 className="text-center" style={{ color: '#000000' }}>
					Salas que irão ser utilizadas no evento, insira uma de cada vez
				</h2>
			</div>

			<form className="mt-8 flex flex-col bg-white">
				<div className="mb-5 flex flex-row gap-6">
					<div className="mb-5 flex flex-col">
						<label className="mb-2 text-sm font-medium " htmlFor="tipo">
							Tipo:
						</label>
						<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
							<input
								className="w-48 rounded-md border-0 bg-white text-sm outline-none"
								type="text"
								name="tipo"
								id="tipo"
								placeholder="Digite o tipo"
								required
							/>
						</div>
					</div>
					<div className="mb-5 flex flex-col">
						<label className="mb-2 text-sm font-medium" htmlFor="limite">
							Limite de Pessoas:
						</label>
						<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
							<input
								className="w-48 rounded-md border-0 bg-white text-sm outline-none"
								type="text"
								name="limite_pessoas"
								id="limite_pessoas"
								placeholder="Digite o limite de pessoas"
								required
							/>
						</div>
					</div>
				</div>

				<div className="mb-5 flex flex-row gap-6">
					<div className="mb flex flex-col">
						<label className="mb-2 text-sm font-medium" htmlFor="andar">
							Andar:
						</label>
						<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
							<input
								className="w-48 rounded-md border-0 bg-white text-sm outline-none"
								type="text"
								name="andar"
								id="andar"
								placeholder="Digite o Andar"
								required
							/>
						</div>
					</div>

					<div className="mb flex flex-col">
						<label className="mb-2 text-sm font-medium" htmlFor="num">
							Número:
						</label>
						<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
							<input
								className="w-48 rounded-md border-0 bg-white text-sm outline-none"
								type="text"
								name="num"
								id="num"
								placeholder="Digite o Número"
								required
							/>
						</div>
					</div>
				</div>

				<div className="mb-5 flex flex-row gap-6">
					<div className="mb flex flex-col">
						<label className="mb-2 text-sm font-medium" htmlFor="tema">
							Tema:
						</label>
						<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
							<input
								className="w-48 rounded-md border-0 bg-white text-sm outline-none"
								type="text"
								name="tema"
								id="tema"
								placeholder="Digite o Tema"
								required
							/>
						</div>
					</div>

					<div className="mt-6 flex items-center justify-center gap-6">
						<button
							className="w-56
                    rounded-xl border-none p-2 text-center text-base font-medium text-white"
							style={{ backgroundColor: '#4C1FA6' }}
							type="submit"
						>
							Cadastrar Sala
						</button>
					</div>
				</div>
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
					Avançar
				</button>
			</div>

			<table className="mt-12 w-2/4 text-center">
				<thead style={{ backgroundColor: '#E4E4E4' }}>
					<tr className="h-14">
						<th scope="col">Tipo</th>
						<th scope="col" className="">
							Andar
						</th>
						<th scope="col" className="">
							Número
						</th>
						<th scope="col" className="">
							Limite de Pessoas
						</th>
						<th scope="col" className="">
							Tema
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="h-14">
						<td scope="row" className="">
							Palestra
						</td>
						<td className="">4</td>
						<td className="">2344</td>
						<td className="">67</td>
						<td className="">Plástico</td>
					</tr>
					<tr className="h-14" style={{ backgroundColor: '#E4E4E4' }}>
						<td scope="row" className="">
							aaaa
						</td>
						<td className="">7</td>
						<td className="">20</td>
						<td className="">74</td>
						<td className="">Inteligência</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
