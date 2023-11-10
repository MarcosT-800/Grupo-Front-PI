'use client';

import React, { useState } from 'react';

import { BiFilterAlt, BiSearch } from 'react-icons/bi';

export default function FiltroBusca() {
	const [query, setQuery] = useState('');
	const [isSearchVisible, setIsSearchVisible] = useState(false);

	const handleSearchClick = () => {
		setIsSearchVisible(!isSearchVisible);
	};

	return (
		<div className="flex items-center justify-end gap-3">
			<div className="flex items-center">
				<label
					className={
						isSearchVisible ? 'hidden' : 'cursor-pointer font-medium text-black'
					}
					onClick={handleSearchClick}
				>
					Buscar
				</label>
				<div
					className={`flex items-center rounded-lg border border-black px-2 py-1.5 ${
						isSearchVisible ? '' : 'hidden'
					}`}
				>
					<input
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Digite sua pesquisa"
						className={`text-base outline-none ${
							isSearchVisible ? '' : 'hidden'
						}`}
					/>
				</div>
				<button className="pl-2 text-black outline-none" type="button">
					<BiSearch />
				</button>
			</div>
			<div className="flex items-center">
				<label className="cursor-pointer font-medium text-black">Filtrar</label>
				<button className="pl-2 text-black outline-none" type="button">
					<BiFilterAlt />
				</button>
			</div>
		</div>
	);
}
