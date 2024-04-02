'use client';

import { useState } from 'react';

import { FaTimes } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';

type CriarEventoProps = {
	handleNextClick: () => void;
};

export default function Arquivos({ handleNextClick }: CriarEventoProps) {
	const [tipo, setTipo] = useState('');
	const [dataInicioSubmissao, setDataInicioSubmissao] = useState('');
	const [dataFinalSubmissao, setDataFinalSubmissao] = useState('');
	const [dataInicioAvaliacao, setDataInicioAvaliacao] = useState('');
	const [dataFinalAvaliacao, setDataFinalAvaliacao] = useState('');
	const [normas, setNormas] = useState('');

	const handleNextButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		handleNextClick();
	};

	const [areas, setAreas] = useState(['']);
	const [autores, setAutores] = useState(['']);
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
	const handleAddAutores = (
		setAutor: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		const lastAutor =
			setAutor === setAutores
				? autores[autores.length - 1]
				: ass[ass.length - 1];
		if (lastAutor.trim() !== '') {
			setAutor((prevAutores) => [...prevAutores, '']);
		}
	};
	const handleRemoveAutores = (
		index: number,
		setAutor: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		setAutor((prevAutores) => prevAutores.filter((_, i) => i !== index));
	};
	const handleAutorChange = (
		index: number,
		value: string,
		setAutor: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		const newAutores = [...(setAutor === setAutores ? autores : ass)];
		newAutores[index] = value;
		setAutor(newAutores);
	};

	const [file, setFile] = useState<File | null>(null);
	const [fileApresent, setFileApresent] = useState<File | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files && e.target.files[0];

		if (selectedFile) {
			setFile(selectedFile);
		}
	};

	const handleFileDelete = () => {
		setFile(null);
	};

	const handleFileApresentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files && e.target.files[0];

		if (selectedFile) {
			setFileApresent(selectedFile);
		}
	};

	const handleFileApresentDelete = () => {
		setFileApresent(null);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		localStorage.clear();
		localStorage.setItem('areas', JSON.stringify(areas));
		localStorage.setItem('autores', JSON.stringify(autores));

		handleNextClick();
	};

	return (
		<div className="container mb-6 mt-52 flex justify-center">
			<div className="w-1/2">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#ef0037' }}
				>
					Arquivos
				</h1>
				<h2 className="text-center" style={{ color: '#000000' }}>
					Arquivos que serão submetidos pelos participantes
				</h2>
				<form className="mt-8 w-full bg-white" onSubmit={handleSubmit}>
					<div className="flex justify-center gap-5">
						<div className="w-full">
							<div className="mb-5 flex flex-col">
								<label
									className="mb-2 text-sm font-medium"
									htmlFor="archiveType"
								>
									Tipo de Arquivo
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="archiveType"
										id="farchiveType"
										placeholder="Artigo, Análise Científica, etc..."
										value={tipo}
										onChange={(e) => setTipo(e.target.value)}
										required
									/>
								</div>
							</div>
							<div className="flex justify-between gap-3">
								<div className="w-1/2">
									<div className="mb-5 flex flex-col">
										<label
											className="mb-2 text-sm font-medium"
											htmlFor="dateInicioSubmissao"
										>
											Data Início Submissão
										</label>
										<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
											<input
												className="w-full rounded-md border-0 bg-white text-sm outline-none"
												type="Date"
												name="dateInicioSubmissao"
												id="dateInicioSubmissao"
												value={dataInicioSubmissao}
												onChange={(e) => setDataInicioSubmissao(e.target.value)}
												required
											/>
										</div>
									</div>
								</div>
								<div className="w-1/2">
									<div className="mb-5 flex flex-col">
										<label
											className="mb-2 text-sm font-medium"
											htmlFor="dateFinalSubmissao"
										>
											Data Final Submissão
										</label>
										<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
											<input
												className="w-full rounded-md border-0 bg-white text-sm outline-none"
												type="Date"
												name="dateFinalSubmissao"
												id="dateFinalSubmissao"
												value={dataFinalSubmissao}
												onChange={(e) => setDataFinalSubmissao(e.target.value)}
												required
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="flex justify-between gap-3">
								<div className="w-1/2">
									<div className="mb-5 flex flex-col">
										<label
											className="mb-2 text-sm font-medium"
											htmlFor="dateInicioAvaliacao"
										>
											Data Início Avaliação
										</label>
										<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
											<input
												className="w-full rounded-md border-0 bg-white text-sm outline-none"
												type="Date"
												name="dateInicioAvaliacao"
												id="dateInicioAvaliacao"
												value={dataInicioAvaliacao}
												onChange={(e) => setDataInicioAvaliacao(e.target.value)}
												required
											/>
										</div>
									</div>
								</div>
								<div className="w-1/2">
									<div className="mb-5 flex flex-col">
										<label
											className="mb-2 text-sm font-medium"
											htmlFor="dateFinalAvaliacao"
										>
											Data Final Avaliação
										</label>
										<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
											<input
												className="w-full rounded-md border-0 bg-white text-sm outline-none"
												type="Date"
												name="dateFinalAvaliacao"
												id="dateFinalAvaliacao"
												value={dataFinalAvaliacao}
												onChange={(e) => setDataFinalAvaliacao(e.target.value)}
												required
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="normas">
									Normas de Publicação
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<textarea
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										name="normas"
										id="normas"
										placeholder="Normas de Publicação"
										rows={5}
										value={normas}
										onChange={(e) => setNormas(e.target.value)}
										required
									/>
								</div>
							</div>
						</div>
						<div className="w-full">
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="autores">
									Qual usuário submeterá:
								</label>
								<div>
									<div className="mb-3 flex items-center">
										<div className="w-full rounded-md border border-gray-300 bg-white px-4 py-2">
											<input
												className="w-full rounded-md border-0 bg-white text-sm outline-none"
												type="text"
												name="autores"
												value={autores[autores.length - 1]}
												onChange={(e) =>
													handleAutorChange(
														autores.length - 1,
														e.target.value,
														setAutores
													)
												}
												placeholder="Usuário que submeterá o arquivo"
												required
											/>
										</div>
										<div
											className="ml-3 cursor-pointer rounded-full px-2"
											onClick={() => handleAddAutores(setAutores)}
											style={{ backgroundColor: '#4B00E0' }}
										>
											<p className="text-xl font-bold text-white">+</p>
										</div>
									</div>
									<div className="flex gap-2.5">
										{autores.map((autor, index) => (
											<div
												key={index}
												className="flex items-center rounded-full border border-gray-300 bg-white px-2 py-0.5"
											>
												<div className="w-full">
													<input
														className="w-full rounded-md border-0 bg-white text-sm outline-none"
														type="text"
														name="autores"
														value={autor}
														onChange={(e) =>
															handleAutorChange(
																index,
																e.target.value,
																setAutores
															)
														}
														readOnly
														required
													/>
												</div>
												<div
													className="ml-2 cursor-pointer rounded-full px-1"
													style={{ backgroundColor: '#ef0037' }}
													onClick={() => handleRemoveAutores(index, setAutores)}
												>
													<FaTimes className="w-2 text-white" />
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="areas">
									Áreas de Conhecimento
								</label>
								<div>
									<div className="mb-3 flex items-center">
										<div className="w-full rounded-md border border-gray-300 bg-white px-4 py-2">
											<input
												className="w-full rounded-md border-0 bg-white text-sm outline-none"
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
												placeholder="Áreas de Conhecimento do arquivo"
												required
											/>
										</div>
										<div
											className="ml-3 cursor-pointer rounded-full px-2"
											onClick={() => handleAddArea(setAreas)}
											style={{ backgroundColor: '#4B00E0' }}
										>
											<p className="text-xl font-bold text-white">+</p>
										</div>
									</div>
									<div className="flex gap-2.5">
										{areas.map((area, index) => (
											<div
												key={index}
												className="flex items-center rounded-full border border-gray-300 bg-white px-2 py-0.5"
											>
												<div className="w-full">
													<input
														className="w-full rounded-md border-0 bg-white text-sm outline-none"
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
													className="ml-2 cursor-pointer rounded-full px-1"
													style={{ backgroundColor: '#ef0037' }}
													onClick={() => handleRemoveArea(index, setAreas)}
												>
													<FaTimes className="w-2 text-white" />
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="file">
									Submeter Modelo de Arquivo
								</label>

								<div className="flex w-full items-center justify-center rounded-md border-0 bg-gray-200 px-4 py-3">
									<label htmlFor="fileInput" className="cursor-pointer">
										<FiUpload className="mx-2 h-5 w-5 text-black" />{' '}
									</label>
									<input
										type="file"
										id="fileInput"
										name="file"
										style={{ display: 'none' }}
										onChange={(e) => handleFileChange(e)}
										required
									/>
									<span className="text-sm">{file ? file.name : ''}</span>
									{file && (
										<button
											className="ml-2 mr-1 cursor-pointer rounded-full bg-red-500 px-1"
											onClick={handleFileDelete}
										>
											<FaTimes className="w-2 text-white" />
										</button>
									)}
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="file">
									Submeter Modelo de Apresentação
								</label>

								<div className="flex w-full items-center justify-center rounded-md border-0 bg-gray-200 px-4 py-3">
									<label htmlFor="fileApresentInput" className="cursor-pointer">
										<FiUpload className="mx-2 h-5 w-5 text-black" />{' '}
									</label>
									<input
										type="file"
										id="fileApresentInput"
										name="fileApresent"
										style={{ display: 'none' }}
										onChange={(e) => handleFileApresentChange(e)}
										required
									/>
									<span className="text-sm">
										{fileApresent ? fileApresent.name : ''}
									</span>
									{fileApresent && (
										<button
											className="ml-2 mr-1 cursor-pointer rounded-full bg-red-500 px-1"
											onClick={handleFileApresentDelete}
										>
											<FaTimes className="w-2 text-white" />
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center gap-5">
						<button
							className="mb-6 w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white"
							style={{ backgroundColor: '#EF0037' }}
							type="submit"
							// onClick={handleNextButtonClick}
						>
							Avançar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
