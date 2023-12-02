'use client';

import { useState } from 'react';

import { FiEye, FiEyeOff } from 'react-icons/fi';
import Select from 'react-select';

import mockedOptionTurnos from '@/mocks/OptionsTurnos';

/*type CadastroAdminProps = {
	handleNextClick: () => void;
};*/

export default function CadastroUser() {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [password, setPassword] = useState('');
	const [confirmpasswordVisible, setConfirmpasswordVisible] = useState(false);
	const [confirmpassword, setConfirmpassword] = useState('');

	const customStyles = {
		control: (provided: any) => ({
			...provided,
			width: '100%',
			height: 'auto',
			borderRadius: '0.375rem',
			border: '1',
			background: 'white',
			fontSize: '0.875rem',
		}),
	};

	const handleTogglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};
	const handleToggleConfirmPasswordVisibility = () => {
		setConfirmpasswordVisible(!confirmpasswordVisible);
	};

	/*const handleNextButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		handleNextClick();
	};*/

	return (
		<div className="container mb-6 mt-52 flex justify-center">
			<div className="w-1/2">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#4B00E0' }}
				>
					Cadastrar Usuário
				</h1>
				<p className="text-center text-sm text-black">Cadastro como usuário</p>
				<form className="mt-8 w-full bg-white">
					<div className="flex items-center justify-center gap-5">
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
										placeholder="Nome do Usuário"
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
										placeholder="CPF do Usuário"
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
										placeholder="emailuser@email.com"
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
										placeholder="Senha do Usuário"
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
						</div>
						<div className="w-full">
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
										placeholder="Instituição do Usuário"
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="curso">
									Curso
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="curso"
										id="curso"
										placeholder="Matutino"
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="periodo">
									Período de Estudo
								</label>

								<div className="w-full">
									<Select
										name="turnos"
										options={mockedOptionTurnos}
										className="basic-multi-select border-gray-300"
										classNamePrefix="select"
										styles={customStyles}
									/>
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
										placeholder="Senha do Usuário"
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
