'use client';

import { useState } from 'react';

export default function CadastroEvento() {
	const checkboxNames = ['online', 'híbrido', 'presencial'];
	const [checkboxes, setCheckboxes] = useState(checkboxNames.map(() => false));

	const handleCheckboxChange = (index: any) => {
		setCheckboxes((prev) => {
			const newCheckboxes = [...prev];
			newCheckboxes[index] = !newCheckboxes[index];
			return newCheckboxes;
		});
	};

	const [areas, setAreas] = useState(['']);

	const handleAddArea = () => {
		setAreas([...areas, areas[areas.length - 1]]);
	};

	const handleRemoveArea = (index: any) => {
		setAreas((prevAreas) => prevAreas.filter((_, i) => i !== index));
	};

	const handleAreaChange = (index: any, value: any) => {
		const newAreas = [...areas];
		newAreas[index] = value;
		setAreas(newAreas);
	};
	return (
		<div className="container mb-6 mt-36 flex justify-center">
			<div className="w-1/3">
				<h1 className="text-2xl font-bold text-black">Cadastrar Evento</h1>
				<form className="mt-10 w-full bg-white">
					<div className="flex flex-col">
						<div className="mb-6 flex flex-col">
							<label
								className="mb-2 text-sm font-medium md:text-base"
								htmlFor="name"
							>
								Nome
							</label>

							<div className="rounded-md border-0 bg-gray-200 px-4 py-2.5">
								<input
									className="w-full rounded-md border-0 bg-gray-200 text-sm outline-none md:text-base"
									type="text"
									name="name"
									id="name"
									placeholder="Nome do Evento"
									required
								/>
							</div>
						</div>
						<div className="mb-4">
							{checkboxNames.map((name, index) => (
								<div key={index} className="mb-2">
									<div className="flex items-center">
										<input
											className="hidden"
											type="checkbox"
											name={`checkbox-${index}`}
											id={`checkbox-${index}`}
											checked={checkboxes[index]}
											onChange={() => handleCheckboxChange(index)}
										/>
										<label
											className={`flex cursor-pointer items-center ${
												checkboxes[index] ? 'text-violet-500' : 'text-black'
											}`}
											htmlFor={`checkbox-${index}`}
										>
											<div
												className={`h-3 w-3 border border-violet-500 ${
													checkboxes[index] ? 'bg-violet-500' : 'bg-white'
												} mr-2 flex items-center justify-center`}
											>
												{checkboxes[index] && (
													<svg
														className="pointer-events-none h-2 w-3 fill-current text-white"
														viewBox="0 0 20 20"
													>
														<path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
													</svg>
												)}
											</div>
											<span className="text-sm font-semibold">
												{name.toUpperCase()}
											</span>
										</label>
									</div>
								</div>
							))}
						</div>
						<div className="mb-6 flex flex-col">
							<label
								className="mb-2 text-sm font-medium md:text-base"
								htmlFor="local"
							>
								Local do Evento
							</label>

							<div className="rounded-md border-0 bg-gray-200 px-4 py-2.5">
								<input
									className="w-full rounded-md border-0 bg-gray-200 text-sm outline-none md:text-base"
									type="text"
									name="local"
									id="local"
									placeholder="Endereço do evento"
									required
								/>
							</div>
						</div>
						<div className="mb-6 flex flex-col">
							<label
								className="mb-2 text-sm font-medium md:text-base"
								htmlFor="datainicio"
							>
								Data de Início
							</label>

							<div className="rounded-md border-0 bg-gray-200 px-4 py-2.5">
								<input
									className="w-full rounded-md border-0 bg-gray-200 text-sm outline-none md:text-base"
									type="date"
									name="datainicio"
									id="datainicio"
									required
								/>
							</div>
						</div>
						<div className="mb-6 flex flex-col">
							<label
								className="mb-2 text-sm font-medium md:text-base"
								htmlFor="datafinal"
							>
								Previsão Data Final
							</label>

							<div className="rounded-md border-0 bg-gray-200 px-4 py-2.5">
								<input
									className="w-full rounded-md border-0 bg-gray-200 text-sm outline-none md:text-base"
									type="date"
									name="datafinal"
									id="datafinal"
									required
								/>
							</div>
						</div>
						<div className="mb-6 flex flex-col">
							<label
								className="mb-2 text-sm font-medium md:text-base"
								htmlFor="descricao"
							>
								Descrição
							</label>

							<div className="rounded-md border-0 bg-gray-200 px-4 py-2.5">
								<textarea
									className="w-full rounded-md border-0 bg-gray-200 text-sm outline-none md:text-base"
									name="descricao"
									id="descricao"
									placeholder="Descrição do evento"
									required
								/>
							</div>
						</div>
						<div className="mb-6 flex flex-col">
							<label
								className="mb-2 text-sm font-medium md:text-base"
								htmlFor="areas"
							>
								Áreas do Evento
							</label>

							<div>
								<div className="mb-3 flex items-center">
									<div className="w-full rounded-md border-0 bg-gray-200 px-4 py-2.5">
										<input
											className="w-full rounded-md border-0 bg-gray-200 text-sm outline-none md:text-base"
											type="text"
											name="areas"
											value={areas[areas.length - 1]}
											onChange={(e) =>
												handleAreaChange(areas.length - 1, e.target.value)
											}
											placeholder="Áreas do Evento"
											required
										/>
									</div>
									<div
										className="ml-3 cursor-pointer rounded-full bg-violet-500 px-2"
										onClick={handleAddArea}
									>
										<p className="text-xl font-bold text-white">+</p>
									</div>
								</div>
								<div className="flex gap-2.5">
									{areas.map((area, index) => (
										<div
											key={index}
											className="flex items-center rounded-full border-0 bg-gray-200 px-3 py-1.5"
										>
											<div className="w-full">
												<input
													className="w-full rounded-md border-0 bg-gray-200 text-sm outline-none"
													type="text"
													name="areas"
													value={area}
													onChange={(e) =>
														handleAreaChange(index, e.target.value)
													}
													readOnly
													required
												/>
											</div>
											<div
												className="ml-2 cursor-pointer rounded-full bg-red-500 px-1"
												onClick={() => handleRemoveArea(index)}
											>
												<p className="text-xs font-bold text-white">x</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="align-center flex justify-center">
						<button
							className="mb-6 mt-3 w-1/2 rounded-xl border-none bg-violet-500 p-2 text-center text-base font-medium text-white"
							type="submit"
						>
							Próximo
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
