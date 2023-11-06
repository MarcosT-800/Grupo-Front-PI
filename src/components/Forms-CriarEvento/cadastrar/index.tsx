'use client';

import { useState } from 'react';

import { FaTimes } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';

type CriarEventoProps = {
	handleNextClick: () => void;
};

export default function CriarEvento({ handleNextClick }: CriarEventoProps) {
	const handleNextButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		handleNextClick();
	};
	const checkboxEvento = ['Público', 'Privado'];
	const [checkboxes, setCheckboxes] = useState(checkboxEvento.map(() => false));
	const checkboxGerar = ['Anais', 'Certificados'];
	const [checkboxesGerar, setCheckboxesGerar] = useState(
		checkboxGerar.map(() => false)
	);

	const handleCheckboxChangeEvento = (index: any) => {
		setCheckboxes((prev) => {
			const newCheckboxes = [...prev];
			newCheckboxes[index] = !newCheckboxes[index];
			return newCheckboxes;
		});
	};
	const handleCheckboxChangeGerar = (index: any) => {
		setCheckboxesGerar((prev) => {
			const newCheckboxes = [...prev];
			newCheckboxes[index] = !newCheckboxes[index];
			return newCheckboxes;
		});
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
			<div className="w-1/2">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#ef0037' }}
				>
					Crie seu próprio evento!
				</h1>
				<form className="mt-8 w-full bg-white">
					<div className="flex justify-center gap-5">
						<div className="w-full">
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="eventName">
									Nome do Evento
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="eventName"
										id="feventName"
										placeholder="Nome do Evento"
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="descricao">
									Descrição do Evento
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<textarea
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										name="descricao"
										id="descricao"
										placeholder="Descrição do Evento"
										rows={4}
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="select">
									Selecione
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<select
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										name="select"
										id="select"
										required
									>
										<option value="Presencial">Presencial</option>
										<option value="Hibrido">Híbrido</option>
										<option value="Remoto">Remoto</option>
									</select>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="assunto">
									Assunto Principal
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="assunto"
										id="assunto"
										placeholder="Assunto Principal do Evento"
										required
									/>
								</div>
							</div>
						</div>
						<div className="w-full">
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="name">
									Nome do Administrador
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<select
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										name="name"
										id="name"
										required
									>
										<option value=""></option>
										<option value=""></option>
										<option value=""></option>
									</select>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="email">
									Email do Administrador
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<select
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										name="email"
										id="email"
										required
									>
										<option value=""></option>
										<option value=""></option>
										<option value=""></option>
									</select>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label
									className="mb-2 text-sm font-medium"
									htmlFor="emailEvent"
								>
									Email do Evento
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="emailEvent"
										id="emailEvent"
										placeholder="Email do Evento"
										required
									/>
								</div>
							</div>
							<div className="mb-0.5">
								<label className="mb-2 text-sm font-medium" htmlFor="evento">
									Evento
								</label>
								<div className="flex items-center gap-3 py-2.5">
									{checkboxEvento.map((name, index) => (
										<div key={index}>
											<div className="flex items-center">
												<input
													className="hidden"
													type="checkbox"
													name={`checkbox-${index}`}
													id={`checkbox-${index}`}
													checked={checkboxes[index]}
													onChange={() => handleCheckboxChangeEvento(index)}
												/>
												<label
													className="flex cursor-pointer items-center"
													style={
														checkboxes[index]
															? {
																	color: '#4B00E0',
															  }
															: {
																	color: '#000',
															  }
													}
													htmlFor={`checkbox-${index}`}
												>
													<div
														className="mr-2 flex h-3.5 w-3.5 items-center justify-center"
														style={
															checkboxes[index]
																? {
																		backgroundColor: '#4B00E0',
																		border: '1px solid #4B00E0',
																  }
																: {
																		backgroundColor: '#fff',
																		border: '1px solid #4B00E0',
																  }
														}
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
													<span className="text-sm font-medium">{name}</span>
												</label>
											</div>
										</div>
									))}
								</div>
							</div>
							<div className="mb-5">
								<label className="mb-2 text-sm font-medium" htmlFor="gerar">
									Gerar
								</label>
								<div className="flex items-center gap-3 py-2.5">
									{checkboxGerar.map((name, index) => (
										<div key={index}>
											<div className="flex items-center">
												<input
													className="hidden"
													type="checkbox"
													name={`checkbox1-${index}`}
													id={`checkbox1-${index}`}
													checked={checkboxesGerar[index]}
													onChange={() => handleCheckboxChangeGerar(index)}
												/>
												<label
													className="flex cursor-pointer items-center"
													style={
														checkboxesGerar[index]
															? {
																	color: '#4B00E0',
															  }
															: {
																	color: '#000',
															  }
													}
													htmlFor={`checkbox1-${index}`}
												>
													<div
														className="mr-2 flex h-3.5 w-3.5 items-center justify-center"
														style={
															checkboxesGerar[index]
																? {
																		backgroundColor: '#4B00E0',
																		border: '1px solid #4B00E0',
																  }
																: {
																		backgroundColor: '#fff',
																		border: '1px solid #4B00E0',
																  }
														}
													>
														{checkboxesGerar[index] && (
															<svg
																className="pointer-events-none h-2 w-3 fill-current text-white"
																viewBox="0 0 20 20"
															>
																<path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
															</svg>
														)}
													</div>
													<span className="text-sm font-medium">{name}</span>
												</label>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="mb-6 flex flex-col">
							<label className="mb-2 text-sm font-medium" htmlFor="file">
								Anexar Logo
							</label>

							<div className="flex w-full items-center justify-center rounded-md border-0 bg-gray-200 px-4 py-5">
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
					</div>
					<div className="flex items-center justify-center gap-5">
						<button
							className="mb-6 w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white"
							style={{ backgroundColor: '#EF0037' }}
							type="submit"
							onClick={handleNextButtonClick}
						>
							Criar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
