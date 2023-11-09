'use client';

import { useState } from 'react';

import { AiOutlineFileSearch, AiOutlineStar } from 'react-icons/ai';
import { BiBrain, BiSolidSchool } from 'react-icons/bi';
import { BsQrCode } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { ImFilesEmpty } from 'react-icons/im';
import { LuFileSearch } from 'react-icons/lu';
import { MdDateRange } from 'react-icons/md';
import { PiFiles } from 'react-icons/pi';
import { TfiTimer } from 'react-icons/tfi';

export default function Menu() {
	return (
		<div className="container mb-6 mt-52 flex justify-center">
			<div className="w-1/2">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#ef0037' }}
				>
					Menu do Evento
				</h1>
				<p className="text-center text-sm text-black">
					Andamento da criação do Evento, acesse a área que deseja modificar ou
					incluir
				</p>
				<div className="mt-5 w-full bg-white">
					<div className="flex justify-end">
						<button
							className="mb-6 w-1/3 rounded-lg border-none py-1.5 text-center text-sm font-medium text-white"
							type="submit"
							style={{ backgroundColor: '#00B7FF' }}
						>
							Visualizar como participante
						</button>
					</div>
					<div className="flex flex-col gap-6">
						<div
							className="flex gap-4 rounded-xl p-5"
							style={{ border: '1px solid #ef0037' }}
						>
							<AiOutlineStar className="h-8 w-8" style={{ color: '#ef0037' }} />
							<div className="flex flex-col gap-0.5">
								<p
									className="text-base font-semibold"
									style={{ color: '#ef0037' }}
								>
									Editar Evento
								</p>
								<p className="text-sm font-medium">
									Edite as informações do evento cadastrado
								</p>
							</div>
						</div>
						<div className="flex gap-4 rounded-xl bg-gray-200 p-5">
							<MdDateRange className="h-8 w-8" />
							<div className="flex flex-col gap-0.5">
								<p className="text-base font-semibold">Data e Local</p>
								<p className="text-sm font-medium">
									Adicione as informações sobre a data, horário e localização do
									evento
								</p>
							</div>
						</div>
						<div className="flex items-stretch gap-5">
							<div
								className="flex w-1/2 items-center rounded-xl p-5"
								style={{ border: '1px solid #ef0037' }}
							>
								<div className="flex gap-4">
									<ImFilesEmpty
										className="block h-8 w-8"
										style={{ color: '#ef0037' }}
									/>
									<div className="flex flex-col gap-0.5">
										<p
											className="text-base font-semibold"
											style={{ color: '#ef0037' }}
										>
											Arquivos
										</p>
										<p className="text-sm font-medium">
											Insira as informações sobre o artigo <br /> e insira quais
											outros arquivos terão no <br /> evento (caso não possua
											não preencha)
										</p>
									</div>
								</div>
							</div>
							<div className="flex w-1/2 flex-col gap-5">
								<div
									className="flex gap-4 rounded-xl p-5"
									style={{ border: '1px solid #00B7FF' }}
								>
									<LuFileSearch
										className="h-8 w-8"
										style={{ color: '#00B7FF' }}
									/>
									<div className="flex flex-col gap-0.5">
										<p
											className="text-base font-semibold"
											style={{ color: '#00B7FF' }}
										>
											Visualizar Arquivos
										</p>
										<p className="text-sm font-medium">
											Visualize os arquivos enviados para este evento
										</p>
									</div>
								</div>
								<div
									className="flex gap-4 rounded-xl p-5"
									style={{ border: '1px solid #00B7FF' }}
								>
									<AiOutlineFileSearch
										className="h-8 w-8"
										style={{ color: '#00B7FF' }}
									/>
									<div className="flex flex-col gap-0.5">
										<p
											className="text-base font-semibold"
											style={{ color: '#00B7FF' }}
										>
											Visualizar Artigos
										</p>
										<p className="text-sm font-medium">
											Visualize os artigos enviados para este evento
										</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className="flex gap-4 rounded-xl p-5"
							style={{ border: '1px solid #ef0037' }}
						>
							<BiBrain className="h-8 w-8" style={{ color: '#ef0037' }} />
							<div className="flex flex-col gap-0.5">
								<p
									className="text-base font-semibold"
									style={{ color: '#ef0037' }}
								>
									Atividades
								</p>
								<p className="text-sm font-medium">
									Cadastre uma ou mais atividades (caso não possua não preencha)
								</p>
							</div>
						</div>
						<div
							className="flex gap-4 rounded-xl p-5"
							style={{ border: '1px solid #ef0037' }}
						>
							<FiUsers className="h-8 w-8" style={{ color: '#ef0037' }} />
							<div className="flex flex-col gap-0.5">
								<p
									className="text-base font-semibold"
									style={{ color: '#ef0037' }}
								>
									Usuários
								</p>
								<p className="text-sm font-medium">
									Cadastre ou envie o link para os membros da equipe e
									administre os já cadastrados
								</p>
							</div>
						</div>
						<div
							className="flex gap-4 rounded-xl p-5"
							style={{ border: '1px solid #ef0037' }}
						>
							<BiSolidSchool className="h-8 w-8" style={{ color: '#ef0037' }} />
							<div className="flex flex-col gap-0.5">
								<p
									className="text-base font-semibold"
									style={{ color: '#ef0037' }}
								>
									Salas
								</p>
								<p className="text-sm font-medium">
									Cadastre as salas que serão utilizadas no evento (caso não
									possua não preencha)
								</p>
							</div>
						</div>
						<div className="flex gap-4 rounded-xl bg-gray-200 p-5">
							<TfiTimer className="h-8 w-8" />
							<div className="flex flex-col gap-0.5">
								<p className="text-base font-semibold">Sessões</p>
								<p className="text-sm font-medium">
									Cadastre e altere as sessões que vão ter no evento (caso não
									possua não preencha)
								</p>
							</div>
						</div>
						<div className="flex w-full items-stretch gap-5">
							<div
								className="flex w-1/2 gap-4 rounded-xl p-5"
								style={{ border: '1px solid #5000F0' }}
							>
								<PiFiles className="h-8 w-8" style={{ color: '#5000F0' }} />
								<div className="flex flex-col gap-0.5">
									<p
										className="text-base font-semibold"
										style={{ color: '#5000F0' }}
									>
										Gerar Anais
									</p>
									<p className="text-sm font-medium">
										Gere os anais deste evento (Opção <br /> habilitada apenas
										ao fim de todas <br /> as sessões previstas deste evento)
									</p>
								</div>
							</div>
							<div
								className="flex w-1/2 gap-4 rounded-xl p-5"
								style={{ border: '1px solid #5000F0' }}
							>
								<BsQrCode className="h-8 w-8" style={{ color: '#5000F0' }} />
								<div className="flex flex-col gap-0.5">
									<p
										className="text-base font-semibold"
										style={{ color: '#5000F0' }}
									>
										Baixar QrCode
									</p>
									<p className="text-sm font-medium">
										Baixe e imprima os QrCodes para que <br /> os participantes
										do evento consigam <br /> o certificado como participante{' '}
										<br /> do evento
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-7 flex items-center justify-center gap-5">
						<button
							className="mb-6 w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white"
							type="submit"
							style={{ backgroundColor: '#BF0000' }}
						>
							Excluir Evento
						</button>
						<button
							className="mb-6 w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white"
							style={{ backgroundColor: '#FA023E' }}
							type="submit"
						>
							Postar Evento
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
