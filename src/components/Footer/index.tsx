'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import * as S from './styles';

export default function Footer() {
	return (
		<S.ContainerFooter className="bg-white px-5 pb-7 pt-16">
			<div className="flex items-end justify-between">
				<div>
					<p className="mb-2 text-center text-base font-bold text-white">
						Navegue pelo Site
					</p>
					<div className="flex items-center justify-center gap-5">
						<div className="flex flex-col gap-1">
							<p className="text-center text-sm font-normal text-white">
								Página Inicial
							</p>
							<p className="text-center text-sm font-normal text-white">
								Eventos Inscritos
							</p>
							<p className="text-center text-sm font-normal text-white">
								Criar Evento
							</p>
							<p className="text-center text-sm font-normal text-white">
								Meus Eventos
							</p>
							<p className="text-center text-sm font-normal text-white">
								Meus Artigos
							</p>
						</div>
						<div className="flex flex-col gap-1">
							<p className="text-center text-sm font-normal text-white">
								Meus Arquivos
							</p>
							<p className="text-center text-sm font-normal text-white">
								Minhas Avaliações
							</p>
							<p className="text-center text-sm font-normal text-white">
								Minhas Salas
							</p>
							<p className="text-center text-sm font-normal text-white">
								Configurações
							</p>
							<p className="text-center text-sm font-normal text-white">
								Acessibilidade
							</p>
						</div>
					</div>
				</div>
				<div>
					<div>
						<p className="mb-2 text-center text-base font-bold text-white">
							Navegue pelo Engetec
						</p>
						<div className="flex items-center justify-center gap-5">
							<div className="flex flex-col gap-1">
								<p className="text-center text-sm font-normal text-white">
									Página Inicial
								</p>
								<p className="text-center text-sm font-normal text-white">
									Apresentação
								</p>
								<p className="text-center text-sm font-normal text-white">
									Expediente
								</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-center text-sm font-normal text-white">
									Menu para Submissão
								</p>
								<p className="text-center text-sm font-normal text-white">
									Salas e Atividades
								</p>
								<p className="text-center text-sm font-normal text-white">
									Anais Anteriores
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</S.ContainerFooter>
	);
}
