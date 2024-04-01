'use client';

export default function FiltroBusca() {
	return (
		<div>
			<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
				<input
					className="w-full rounded-md border-0 bg-white text-sm placeholder-black outline-none"
					type="text"
					name="buscar"
					id="buscar"
					placeholder="Buscar"
					required
				/>
			</div>

			<button
				className="w-56
                    rounded-xl border-none p-2 text-center text-base text-black"
				type="submit"
			>
				Filtrar
			</button>
		</div>
	);
}
