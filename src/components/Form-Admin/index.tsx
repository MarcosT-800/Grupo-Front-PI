'use client';

import { comissaoRequest } from '@/lib/repository';
import { Comissao } from '@/lib/repository/comission/index.repository';
import { useState } from 'react';

import { FaTimes } from 'react-icons/fa';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function CadastroComissao() {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [cpf, setCpf] = useState('');
	const [email, setEmail] = useState('');
	const [instituicao, setInst] = useState('');
	const [turno, setTurno] = useState('');
	const [lattes, setLattes] = useState('');
	const [confirmpasswordVisible, setConfirmpasswordVisible] = useState(false);
	const [confirmpassword, setConfirmpassword] = useState('');
		
	const handleTogglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};
	const handleToggleConfirmPasswordVisibility = () => {
		setConfirmpasswordVisible(!confirmpasswordVisible);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data: Comissao = {
			name,
			cpf,
			email,
			instituicao,
			turno,
			lattes,
			adm: true,
			organizador: true,
			chair: true,
			avaliador: true,
			senha: password,
			// certificado: '',
		}
		try {
			const result : Comissao = await comissaoRequest.create(data)
			localStorage.setItem('comissao', JSON.stringify(result))
			console.log(data);
		} catch (error) {
			console.log(error);
		}

	}


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
				<form className="mt-8 w-full bg-white" onSubmit={handleSubmit}>
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
										value={name}
										onChange={(e) => setName(e.target.value)}
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
										value={cpf}
										onChange={(e) => setCpf(e.target.value)}
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
										value={email}
										onChange={(e) => setEmail(e.target.value)}
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
										value={instituicao}
										onChange={(e) => setInst(e.target.value)}
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
										value={turno}
										onChange={(e) => setTurno(e.target.value)}
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
										value={lattes}
										onChange={(e) => setLattes(e.target.value)}	
										required
									/>
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
