'use client';

type CriarEventoProps = {
	handleNextClick: () => void;
};

export default function CadastrarUsuario({
	handleNextClick,
}: CriarEventoProps) {
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
					Cadastrar Usuários
				</h1>
				<h2 className="text-center" style={{ color: '#000000' }}>
					Cadastre os membros da equipe
				</h2>
			</div>

			<div
				className="mt-8 flex h-96 w-2/4 flex-col items-center justify-center rounded-lg border-neutral-400"
				style={{ backgroundColor: '#E4E4E4' }}
			>
				<form className="fle flex-col">
					<div className="flex flex-col gap-4">
						<label className="mr-64 text-base" htmlFor="cad">
							Cadastrar Manualmente:
						</label>
						<button className="rounded-xl border-2 border-solid border-black  bg-transparent p-4 text-center text-lg text-black">
							Organizador, Avaliador e Chair{' '}
						</button>
						<label className="mr-64 mt-4 text-base" htmlFor="link">
							Enviar Link para Cadastro:
						</label>

						<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
							<input
								className="w-full rounded-md border-0 bg-white text-sm outline-none"
								type="text"
								name="link"
								id="link"
								placeholder="https://link.com"
								readOnly
							/>
						</div>

						<button
							className="absolute ml-96 mt-44 w-28 rounded-xl py-2 text-center text-base"
							style={{ backgroundColor: '#B7B7B7' }}
						>
							copiar
						</button>

						<div className="mt-6 flex items-center justify-center gap-6">
							<button
								className="w-44
                    rounded-xl border-none p-2 text-center text-base font-medium text-white"
								style={{ backgroundColor: '#8A8A8A' }}
								type="submit"
							>
								Voltar
							</button>
							<button
								className="w-44
                    rounded-xl border-none p-2 text-center text-base font-medium text-white"
								style={{ backgroundColor: '#EF0037' }}
								type="submit"
								onClick={handleNextButtonClick}
							>
								Avançar
							</button>
						</div>
					</div>
				</form>
			</div>

			<div className="mt-14 flex w-1/2 flex-col">
				<h1 className="text-start text-2xl font-bold text-black">
					Gerenciamento dos usuários
				</h1>
			</div>

			<table className="mt-12 w-1/2 text-center">
				<thead style={{ backgroundColor: '#E4E4E4' }}>
					<tr className="h-14">
						<th scope="col">Função</th>
						<th scope="col" className="">
							Nome
						</th>
						<th scope="col" className="">
							E-mail
						</th>
						<th scope="col" className="">
							Ações
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="h-20">
						<td className="">Administrador</td>
						<td className="">Heitor Golsavez</td>
						<td className="">heitor@gmail.com</td>
						<td className="">
							<div className="flex flex-col items-center gap-2">
								<button className="mt-2 w-32 rounded-xl border-2 border-solid  border-black bg-transparent p-2 text-center text-sm text-black">
									Ver mais
								</button>
								<button className="mb-2 mt-2 w-32 rounded-xl border-2 border-solid  border-rose-500 bg-transparent p-2 text-center text-sm text-rose-500">
									Mudar Função
								</button>
							</div>
						</td>
					</tr>
					<tr className="h-20" style={{ backgroundColor: '#E4E4E4' }}>
						<td className="">Avaliador</td>
						<td className="">Heitor Golsavez</td>
						<td className="">heitor@gmail.com</td>
						<td className="">
							<div className="flex flex-col items-center gap-2">
								<button className="mt-2 w-32 rounded-xl border-2 border-solid  border-black bg-transparent p-2 text-center text-sm text-black">
									Ver mais
								</button>
								<button className="mb-2 mt-2 w-32 rounded-xl border-2 border-solid  border-rose-500 bg-transparent p-2 text-center text-sm text-rose-500">
									Mudar Função
								</button>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
