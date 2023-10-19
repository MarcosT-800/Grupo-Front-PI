'use client';

export default function EditarRegrasEvento() {
	return (
		<div className="container mb-6 mt-52 flex justify-center">
			<div className="w-1/3">
				<h1 className="text-2xl font-bold text-black">
					Editar Regras do Evento
				</h1>
				<form className="mt-8 w-full bg-white">
					<div className="flex flex-col">
						<div className="mb-6 flex flex-col">
							<label
								className="mb-2 text-sm font-medium md:text-base"
								htmlFor="subData"
							>
								Previsão para período de submissão de artigos
							</label>
							<div className="flex items-center gap-6">
								<div className="rounded-md border-0 bg-gray-200 px-4 py-2.5">
									<input
										className="w-full rounded-md border-0 bg-gray-200 text-sm outline-none md:text-base"
										type="Date"
										name="subDataInicio"
										id="subDataInicio"
										required
									/>
								</div>
								<p className="text-base font-semibold text-black">Até</p>
								<div className="rounded-md border-0 bg-gray-200 px-4 py-2.5">
									<input
										className="w-full rounded-md border-0 bg-gray-200 text-sm outline-none md:text-base"
										type="Date"
										name="subDataFim"
										id="subDataFim"
										required
									/>
								</div>
							</div>
						</div>
						<div className="mb-6 flex flex-col">
							<label
								className="mb-2 text-sm font-medium md:text-base"
								htmlFor="avaData"
							>
								Previsão para período de avaliações
							</label>
							<div className="flex items-center gap-6">
								<div className="rounded-md border-0 bg-gray-200 px-4 py-2.5">
									<input
										className="w-full rounded-md border-0 bg-gray-200 text-sm outline-none md:text-base"
										type="Date"
										name="avaDataInicio"
										id="avaDataInicio"
										required
									/>
								</div>
								<p className="text-base font-semibold text-black">Até</p>
								<div className="rounded-md border-0 bg-gray-200 px-4 py-2.5">
									<input
										className="w-full rounded-md border-0 bg-gray-200 text-sm outline-none md:text-base"
										type="Date"
										name="avaDataFim"
										id="avaDataFim"
										required
									/>
								</div>
							</div>
						</div>
						<div className="mb-6 flex flex-col">
							<label
								className="mb-2 text-sm font-medium md:text-base"
								htmlFor="inscData"
							>
								Previsão para período de inscrição de participantes
							</label>
							<div className="flex items-center gap-6">
								<div className="rounded-md border-0 bg-gray-200 px-4 py-2.5">
									<input
										className="w-full rounded-md border-0 bg-gray-200 text-sm outline-none md:text-base"
										type="Date"
										name="inscDataInicio"
										id="inscDataInicio"
										required
									/>
								</div>
								<p className="text-base font-semibold text-black">Até</p>
								<div className="rounded-md border-0 bg-gray-200 px-4 py-2.5">
									<input
										className="w-full rounded-md border-0 bg-gray-200 text-sm outline-none md:text-base"
										type="Date"
										name="inscDataFim"
										id="inscDataFim"
										required
									/>
								</div>
							</div>
						</div>
						<div className="mb-6 flex flex-col">
							<label
								className="mb-2 text-sm font-medium md:text-base"
								htmlFor="aprData"
							>
								Previsão para período de apresentações
							</label>
							<div className="flex items-center gap-6">
								<div className="rounded-md border-0 bg-gray-200 px-4 py-2.5">
									<input
										className="w-full rounded-md border-0 bg-gray-200 text-sm outline-none md:text-base"
										type="Date"
										name="aprDataInicio"
										id="aprDataInicio"
										required
									/>
								</div>
								<p className="text-base font-semibold text-black">Até</p>
								<div className="rounded-md border-0 bg-gray-200 px-4 py-2.5">
									<input
										className="w-full rounded-md border-0 bg-gray-200 text-sm outline-none md:text-base"
										type="Date"
										name="aprDataFim"
										id="aprDataFim"
										required
									/>
								</div>
							</div>
						</div>
					</div>
					<div>
						<button
							className="mb-6 mt-4 w-1/3 rounded-xl border-none bg-cyan-700 p-2 text-center text-base font-medium text-white"
							type="submit"
						>
							Salvar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
