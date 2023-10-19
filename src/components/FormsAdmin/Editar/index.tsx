'use client';

import { useState } from 'react';

import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function EditarAdmin() {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [password, setPassword] = useState('');

	const handleTogglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	return (
		<div className="container mb-6 mt-52 flex justify-center">
			<div className="w-1/3">
				<h1 className="text-2xl font-bold text-black">Editar Administrador</h1>
				<form className="mt-8 w-full bg-white">
					<div className="flex flex-col">
						<div className="mb-6 flex flex-col">
							<label
								className="mb-2 text-sm font-medium md:text-base"
								htmlFor="fullName"
							>
								Nome completo
							</label>

							<div className="rounded-md border-0 bg-gray-200 px-4 py-2.5">
								<input
									className="w-full rounded-md border-0 bg-gray-200 text-sm outline-none md:text-base"
									type="text"
									name="fullName"
									id="fullName"
									placeholder="Nome do Administrador"
									required
								/>
							</div>
						</div>
						<div className="mb-6 flex flex-col">
							<label
								className="mb-2 text-sm font-medium md:text-base"
								htmlFor="cargo"
							>
								Cargo
							</label>

							<div className="rounded-md border-0 bg-gray-200 px-4 py-2.5">
								<input
									className="w-full rounded-md border-0 bg-gray-200 text-sm outline-none md:text-base"
									type="text"
									name="cargo"
									id="cargo"
									placeholder="Diretor - CEO"
									required
								/>
							</div>
						</div>
						<div className="mb-6 flex flex-col">
							<label
								className="mb-2 text-sm font-medium md:text-base"
								htmlFor="instituicao"
							>
								Instituição Referente
							</label>

							<div className="rounded-md border-0 bg-gray-200 px-4 py-2.5">
								<input
									className="w-full rounded-md border-0 bg-gray-200 text-sm outline-none md:text-base"
									type="text"
									name="instituicao"
									id="instituicao"
									placeholder="Instituição do Administrador"
									required
								/>
							</div>
						</div>
						<div className="mb-6 flex flex-col">
							<label
								className="mb-2 text-sm font-medium md:text-base"
								htmlFor="email"
							>
								Email
							</label>

							<div className="rounded-md border-0 bg-gray-200 px-4 py-2.5">
								<input
									className="w-full rounded-md border-0 bg-gray-200 text-sm outline-none md:text-base"
									type="email"
									name="email"
									id="email"
									placeholder="emailadmin@email.com"
									required
								/>
							</div>
						</div>
						<div className="mb-6 flex flex-col">
							<label
								className="mb-2 text-sm font-medium md:text-base"
								htmlFor="password"
							>
								Senha
							</label>
							<div className="flex items-center justify-between rounded-md border-0 bg-gray-200 px-4 py-2.5">
								<input
									className="w-11/12 rounded-md border-0 bg-gray-200 text-sm outline-none md:text-base"
									type={passwordVisible ? 'text' : 'password'}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									name="password"
									id="password"
									placeholder="Senha do Administrador"
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
						<div className="mb-6 flex flex-col">
							<label
								className="mb-2 text-sm font-medium md:text-base"
								htmlFor="cpf"
							>
								CPF
							</label>

							<div className="rounded-md border-0 bg-gray-200 px-4 py-2.5">
								<input
									className="w-full rounded-md border-0 bg-gray-200 text-sm outline-none md:text-base"
									type="text"
									name="cpf"
									id="cpf"
									placeholder="CPF do Administrador"
									required
								/>
							</div>
						</div>
					</div>
					<div className="mt-3.5 flex items-center justify-center">
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
