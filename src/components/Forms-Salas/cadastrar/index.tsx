'use client';

import { useEffect, useState } from 'react';

import axios from 'axios';
import { toNumber } from 'lodash';
import moment from 'moment';

import { Sala } from '@/lib/repository/sala/index.repository';
import AlertCard from '@/components/AlertCard';

type CriarEventoProps = {
	handleNextClick: () => void;
};

export default function VisualizarSala({ handleNextClick }: CriarEventoProps) {
	const [tipo, setTipo] = useState('');
	const [limite, setLimite] = useState('');
	const [andar, setAndar] = useState('');
	const [numero, setNumero] = useState('');
	const [tema, setTema] = useState('');
	const [salas, setSalas] = useState<Sala[]>([]);
	const [showCard, setShowCard] = useState(false);

	const handleNextButtonClick = () => {
		handleNextClick();
	};

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		const eventId = localStorage.getItem('eventId');
		// const eventId = '5a57554e-fb55-4022-9873-0e67df9ed507';
		console.log(salas)

		if (eventId) {
			let salasCreated: Sala[] = [];
			try {
				salas.forEach(async (sala) => {
					const salaObjt: Sala = {
						andar: sala.andar,
						numero: sala.numero,
						limitePessoas: sala.limitePessoas,
						temaSala: sala.temaSala,
						tipo: sala.tipo,
						eventId,
					};
					const result = await axios.post(
						'http://localhost:5002/sala',
						salaObjt
					);
					console.log(result);
					if (result.data.sala) {
						salasCreated.push(result.data.sala);
						setShowCard(true);
						setTimeout(() => {
							setShowCard(false);
							handleNextButtonClick();
						}, 3000);
						setAndar('');
						setLimite('');
						setNumero('');
						setTema('');
						setTipo('');
					}
				});
			} catch (error) {
				console.log(error);
			}
		}
		handleNextClick();
	};
	const handleAddOnTable = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSalas((prev) => [
			...prev,
			{
				andar: toNumber(andar),
				numero: toNumber(numero),
				limitePessoas: toNumber(limite),
				temaSala: tema,
				tipo
			},
		]);
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
				<AlertCard message='Salas cadastradas com sucesso' show={showCard} />
				<h2 className="text-center" style={{ color: '#000000' }}>
					Salas que irão ser utilizadas no evento, insira uma de cada vez
				</h2>
			</div>

			<form className="mt-8 flex flex-col bg-white" onSubmit={handleAddOnTable}>
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
								value={tipo}
								onChange={(e) => setTipo(e.target.value)}
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
								type="number"
								name="limite_pessoas"
								id="limite_pessoas"
								placeholder="Digite o limite de pessoas"
								value={limite}
								onChange={(e) => setLimite(e.target.value)}
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
								value={andar}
								onChange={(e) => setAndar(e.target.value)}
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
								value={numero}
								onChange={(e) => setNumero(e.target.value)}
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
								value={tema}
								onChange={(e) => setTema(e.target.value)}
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
					type="button"
					onClick={handleSubmit}
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
					{salas && (
						<>
							{salas.map((sala, index) => {
								return (
									<tr
										key={index}
										className="h-14"
										style={{
											backgroundColor: !(index % 2 === 0) ? '#E4E4E4' : '#fff',
										}}
									>
										<td scope="row" className="">
											{sala.tipo}
										</td>
										<td className="">{sala.andar}</td>
										<td className="">{sala.numero}</td>
										<td className="">{sala.limitePessoas}</td>
										<td className="">{sala.temaSala}</td>
									</tr>
								);
							})}
						</>
					)}
					{/* <tr className="h-14">
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
					</tr> */}
				</tbody>
			</table>
		</div>
	);
}
