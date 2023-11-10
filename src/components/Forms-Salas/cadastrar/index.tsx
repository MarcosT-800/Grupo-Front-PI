'use client';

import { useState } from 'react';

type CriarEventoProps = {
	handleNextClick: () => void;
};

export default function VisualizarSala({ handleNextClick }: CriarEventoProps) {
	const [salas, setSalas] = useState(
		[] as {
			tipo: string;
			limite_pessoas: string;
			andar: string;
			num: string;
			tema: string;
		}[]
	);
	const [formData, setFormData] = useState({
		tipo: '',
		limite_pessoas: '',
		andar: '',
		num: '',
		tema: '',
	});
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};
	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSalas((prevSalas) => [...prevSalas, formData]);
		setFormData({
			tipo: '',
			limite_pessoas: '',
			andar: '',
			num: '',
			tema: '',
		});
	};

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

			<form className="mt-8 flex flex-col bg-white" onSubmit={handleFormSubmit}>
				<div className="mb-5 flex flex-row gap-6">
					<div className="flex flex-col">
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
								onChange={handleInputChange}
								required
							/>
						</div>
					</div>
					<div className="flex flex-col">
						<label
							className="mb-2 text-sm font-medium"
							htmlFor="limite_pessoas"
						>
							Limite de Pessoas:
						</label>
						<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
							<input
								className="w-48 rounded-md border-0 bg-white text-sm outline-none"
								type="text"
								name="limite_pessoas"
								id="limite_pessoas"
								placeholder="Digite o limite de pessoas"
								onChange={handleInputChange}
								required
							/>
						</div>
					</div>
				</div>
				<div className="mb-5 flex flex-row gap-6">
					<div className="flex flex-col">
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
								onChange={handleInputChange}
								required
							/>
						</div>
					</div>
					<div className="flex flex-col">
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
								onChange={handleInputChange}
								required
							/>
						</div>
					</div>
				</div>

				<div className="mb-5 flex flex-row gap-6">
					<div className="lex flex-col">
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
								onChange={handleInputChange}
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
						<th scope="col">Andar</th>
						<th scope="col">Número</th>
						<th scope="col">Limite de Pessoas</th>
						<th scope="col">Tema</th>
					</tr>
				</thead>
				<tbody>
					{salas.map((sala, index) => (
						<tr
							key={index}
							className={index % 2 === 0 ? 'h-14 bg-white' : 'h-14 bg-gray-200'}
						>
							<td>{sala.tipo}</td>
							<td>{sala.andar}</td>
							<td>{sala.num}</td>
							<td>{sala.limite_pessoas}</td>
							<td>{sala.tema}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
