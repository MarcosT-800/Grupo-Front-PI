'use client';

import { useState } from 'react';

import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function CadastroConvidado() {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [password, setPassword] = useState('');
	const [confirmpasswordVisible, setConfirmpasswordVisible] = useState(false);
	const [confirmpassword, setConfirmpassword] = useState('');
	const checkboxNames = ['Palestrante', 'Mentor', 'Outro'];
	const [checkboxes, setCheckboxes] = useState(checkboxNames.map(() => false));

	const handleCheckboxChange = (index: any) => {
		setCheckboxes((prev) => {
			const newCheckboxes = [...prev];
			newCheckboxes[index] = !newCheckboxes[index];
			return newCheckboxes;
		});
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
					Cadastrar Convidado
				</h1>
				<p className="text-center text-sm text-black">
					Cadastro como convidado
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
										placeholder="Nome do Convidado"
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
										placeholder="CPF do Convidado"
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
										placeholder="emailconvidado@email.com"
										required
									/>
								</div>
							</div>
						</div>
						<div className="w-full">
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
										placeholder="Senha do Convidado"
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
										placeholder="Senha do Convidado"
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
							<div className="mb-4">
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
							className="mb-6 w-1/5 rounded-xl border-none bg-violet-500 p-2 text-center text-base font-medium text-white"
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
