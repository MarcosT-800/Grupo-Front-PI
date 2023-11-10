'use client';

import { useState } from 'react';

import { FaTimes } from 'react-icons/fa';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import mockedOptionAreas from '@/mocks/OptionsAreas';

export default function CadastroComissao() {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [password, setPassword] = useState('');
	const [confirmpasswordVisible, setConfirmpasswordVisible] = useState(false);
	const [confirmpassword, setConfirmpassword] = useState('');
	const checkboxNames = ['Organizador', 'Chair', 'Avaliador'];
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
	const [isBoxVisible, setIsBoxVisible] = useState(false);

	const handleAddArea = (
		setArea: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		const lastArea =
			setArea === setAreas ? areas[areas.length - 1] : ass[ass.length - 1];

		const hasBlankArea =
			setArea === setAreas ? areas.includes('') : ass.includes('');

		if (lastArea.trim() !== '' || !hasBlankArea) {
			setIsBoxVisible(true);
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

	const handleTogglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};
	const handleToggleConfirmPasswordVisibility = () => {
		setConfirmpasswordVisible(!confirmpasswordVisible);
	};

	return (
		<div className="container mb-6 mt-52 flex justify-center">
			<div className="w-1/2">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#4B00E0' }}
				>
					Cadastrar Comissão
				</h1>
				<p className="text-center text-sm text-black">
					Cadastro como parte da comissão, possível mais de uma função
				</p>
				<form className="mt-8 w-full bg-white">
					<div className="flex justify-center gap-5">
						<div className="w-full">
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="fullName">
									Nome completo
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="fullName"
										id="fullName"
										placeholder="Nome da Comissão"
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="cpf">
									CPF
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="cpf"
										id="cpf"
										placeholder="CPF da Comissão"
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="email">
									Email
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="email"
										name="email"
										id="email"
										placeholder="emailcomissao@email.com"
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="password">
									Senha
								</label>
								<div className="flex items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2.5">
									<input
										className="w-11/12 rounded-md border-0 bg-white text-sm outline-none"
										type={passwordVisible ? 'text' : 'password'}
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										name="password"
										id="password"
										placeholder="Senha da Comissão"
										required
									/>
									{passwordVisible ? (
										<FiEye
											className="h-4 w-4 text-black"
											onClick={handleTogglePasswordVisibility}
										/>
									) : (
										<FiEyeOff
											className="h-4 w-4 text-black"
											onClick={handleTogglePasswordVisibility}
										/>
									)}
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="password">
									Confirmar Senha
								</label>
								<div className="flex items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2.5">
									<input
										className="w-11/12 rounded-md border-0 bg-white text-sm outline-none"
										type={confirmpasswordVisible ? 'text' : 'password'}
										value={confirmpassword}
										onChange={(e) => setConfirmpassword(e.target.value)}
										name="password"
										id="password"
										placeholder="Senha da Comissão"
										required
									/>
									{confirmpasswordVisible ? (
										<FiEye
											className="h-4 w-4 text-black"
											onClick={handleToggleConfirmPasswordVisibility}
										/>
									) : (
										<FiEyeOff
											className="h-4 w-4 text-black"
											onClick={handleToggleConfirmPasswordVisibility}
										/>
									)}
								</div>
							</div>
						</div>
						<div className="w-full">
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="areas">
									Áreas de Conhecimento
								</label>
								<div className="flex items-center">
									<div className="w-full rounded-md border border-gray-300 bg-white px-4 py-2">
										<select
											className="w-full rounded-md border-0 bg-white text-sm outline-none"
											name="areas"
											value={areas[areas.length - 1]}
											onChange={(e) =>
												handleAreaChange(
													areas.length - 1,
													e.target.value,
													setAreas
												)
											}
											required
										>
											<option value="Areas" selected>
												Áreas de Conhecimento
											</option>
											{Object.values(mockedOptionAreas).map((option, index) => (
												<option key={index} value={option.value}>
													{option.label}
												</option>
											))}
										</select>
									</div>
									<div
										className="ml-3 cursor-pointer rounded-full px-2"
										onClick={() => handleAddArea(setAreas)}
										style={{ backgroundColor: '#4B00E0' }}
									>
										<p className="text-xl font-bold text-white">+</p>
									</div>
								</div>
								{isBoxVisible && (
									<div className="flex gap-2.5">
										{areas
											.filter((area) => area.trim() !== '') // Exclui as áreas em branco
											.map((area, index) => (
												<div
													key={index}
													className="mt-3 flex items-center rounded-full border border-gray-300 bg-white px-2 py-0.5"
												>
													<div className="w-full">
														<input
															className="w-full rounded-md border-0 bg-white text-sm outline-none"
															type="text"
															name="areas"
															value={area}
															onChange={(e) =>
																handleAreaChange(
																	index,
																	e.target.value,
																	setAreas
																)
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
								)}
							</div>
							<div className="mb-5 flex flex-col">
								<label
									className="mb-2 text-sm font-medium"
									htmlFor="instituicao"
								>
									Instituição Referente
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="instituicao"
										id="instituicao"
										placeholder="Instituição da Comissão"
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="turno">
									Turno
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<select
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										name="turno"
										id="turno"
										required
									>
										<option value="Matutino">Matutino</option>
										<option value="Vespertino">Vespertino</option>
										<option value="Noturno">Noturno</option>
									</select>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="link">
									Link Lattes
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="url"
										name="link"
										id="link"
										placeholder="link Lattes da Comissão"
										required
									/>
								</div>
							</div>
							<div className="mb-5">
								<label className="mb-2 text-sm font-medium" htmlFor="funcao">
									Função no Evento
								</label>
								<div className="flex items-center gap-3 py-2.5">
									{checkboxNames.map((name, index) => (
										<div key={index}>
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
						</div>
					</div>
					<div className="mb-6">
						<p className="text-center text-xs font-normal text-slate-400">
							Já tem uma conta？
							<a className="font-bold underline" style={{ color: '#4B00E0' }}>
								Log in
							</a>
						</p>
					</div>
					<div className="flex items-center justify-center gap-5">
						<button
							className="mb-6 w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white"
							type="submit"
							style={{ backgroundColor: '#8A8A8A' }}
						>
							Voltar
						</button>
						<button
							className="mb-6 w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white"
							style={{ backgroundColor: '#4B00E0' }}
							type="submit"
						>
							Cadastrar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
