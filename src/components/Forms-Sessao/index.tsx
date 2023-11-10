'use client';

import FiltroBusca from '../Filtro-Busca';

export default function Sessao() {
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
				>
					Finalizar
				</button>
			</div>

			<div className="mt-14 flex w-2/3 flex-col">
				<div className="flex justify-between">
					<h1 className="text-start text-2xl font-bold text-black">
						Gerenciamento das sessões
					</h1>
					<FiltroBusca />
				</div>
			</div>

			<table className="mt-8 w-2/3 text-center">
				<thead style={{ backgroundColor: '#E4E4E4' }}>
					<tr className="h-14">
						<th scope="col">Sessão</th>
						<th scope="col" className="">
							Sala
						</th>
						<th scope="col" className="">
							Artigos
						</th>
						<th scope="col" className="">
							Horário
						</th>
						<th scope="col" className="">
							Chair
						</th>
						<th scope="col" className="">
							Ações
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="h-20">
						<td scope="row" className="">
							01
						</td>
						<td className="">01</td>
						<td className="">
							<h1 className="text-xs">Artigo 1</h1>
							<h1 className="text-xs">Artigo 2</h1>
							<h1 className="text-xs">Artigo 3</h1>
						</td>
						<td className="">13:30 até 14:30</td>
						<td className="">Heitor Golsavez</td>
						<td className="">
							<button className="rounded-xl border-2 border-solid  border-black bg-transparent p-2 text-center text-sm text-black">
								Ver mais
							</button>
						</td>
					</tr>
					<tr className="h-20" style={{ backgroundColor: '#E4E4E4' }}>
						<td scope="row" className="">
							02
						</td>
						<td className="">02</td>
						<td className="">
							<h1 className="text-xs">Artigo 1</h1>
							<h1 className="text-xs">Artigo 2</h1>
							<h1 className="text-xs">Artigo 3</h1>
						</td>
						<td className="">13:30 até 14:30</td>
						<td className="">Heitor Golsavez</td>
						<td className="">
							<button className="rounded-xl border-2 border-solid  border-black bg-transparent p-2 text-center text-sm text-black">
								Ver mais
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
