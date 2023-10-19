'use client';

import { useState } from 'react';

import { FaFile, FaTimes } from 'react-icons/fa';

export default function EditarEvento() {
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
	const [ass, setAss] = useState(['']);

	const handleAddArea = (
		setArea: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		const lastArea =
			setArea === setAreas ? areas[areas.length - 1] : ass[ass.length - 1];

		if (lastArea.trim() !== '') {
			setArea((prevAreas) => [...prevAreas, '']);
		}
	};

	const handleRemoveArea = (
		index: number,
		setArea: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		setArea((prevAreas) => prevAreas.filter((_, i) => i !== index));
	};

	const handleAreaChange = (
		index: number,
		value: string,
		setArea: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		const newAreas = [...(setArea === setAreas ? areas : ass)];
		newAreas[index] = value;
		setArea(newAreas);
	};

	const [file, setFile] = useState<File | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files && e.target.files[0];

		if (selectedFile) {
			setFile(selectedFile);
		}
	};

	const handleFileDelete = () => {
		setFile(null);
	};
	return (
		<div className="container mb-6 mt-52 flex justify-center">
			<div className="w-1/3">
				<h1 className="text-2xl font-bold text-black">Editar Evento</h1>
				<form className="mt-8 w-full bg-white">
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
						<div className="mb-8 flex flex-col">
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
												handleAreaChange(
													areas.length - 1,
													e.target.value,
													setAreas
												)
											}
											placeholder="Áreas do Evento"
											required
										/>
									</div>
									<div
										className="ml-3 cursor-pointer rounded-full bg-violet-500 px-2"
										onClick={() => handleAddArea(setAreas)}
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
														handleAreaChange(index, e.target.value, setAreas)
													}
													readOnly
													required
												/>
											</div>
											<div
												className="ml-2 cursor-pointer rounded-full bg-red-500 px-1"
												onClick={() => handleRemoveArea(index, setAreas)}
											>
												<FaTimes className="w-2 text-white" />
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
						<h1 className="mb-6 text-2xl font-bold text-black">
							Editar dados para Certificados
						</h1>
						<div className="mb-6 flex flex-col">
							<label
								className="mb-2 text-sm font-medium md:text-base"
								htmlFor="name"
							>
								Logo do Evento
							</label>

							<div className="flex w-full items-center rounded-md border-0 bg-gray-200 px-4 py-2.5">
								<label htmlFor="fileInput" className="cursor-pointer">
									<FaFile className="mr-2 text-gray-500" />{' '}
								</label>
								<input
									type="file"
									id="fileInput"
									name="file"
									style={{ display: 'none' }}
									onChange={(e) => handleFileChange(e)}
									required
								/>
								<span className="text-sm md:text-base">
									{file ? file.name : 'Inserir arquivo'}
								</span>
								{file && (
									<button
										className="ml-2 cursor-pointer rounded-full bg-red-500 px-1"
										onClick={handleFileDelete}
									>
										<FaTimes className="w-2 text-white" />
									</button>
								)}
							</div>
						</div>
						<div className="mb-8 flex flex-col">
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
											value={ass[ass.length - 1]}
											onChange={(e) =>
												handleAreaChange(ass.length - 1, e.target.value, setAss)
											}
											placeholder="Áreas do Evento"
											required
										/>
									</div>
									<div
										className="ml-3 cursor-pointer rounded-full bg-violet-500 px-2"
										onClick={() => handleAddArea(setAss)}
									>
										<p className="text-xl font-bold text-white">+</p>
									</div>
								</div>
								<div className="flex gap-2.5">
									{ass.map((area, index) => (
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
														handleAreaChange(index, e.target.value, setAss)
													}
													readOnly
													required
												/>
											</div>
											<div
												className="ml-2 cursor-pointer rounded-full bg-red-500 px-1"
												onClick={() => handleRemoveArea(index, setAss)}
											>
												<FaTimes className="w-2 text-white" />
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<button
							className="mb-6 w-1/2 rounded-xl border-none bg-cyan-700 p-2 text-center text-base font-medium text-white"
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
