import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/NavbarAuthenticated';
import InputDate from '@/components/ArtigosInputs/InputDate';
import InputFile from '@/components/ArtigosInputs/InputFile';
import InputCheckbox from '@/components/AtigosCheckboxs/InputCheckbox';
import InputSelect from '@/components/ArtigosInputs/InputSelect';
import InputTextarea from '@/components/ArtigosInputs/InputTextarea';
import InputText from '@/components/ArtigosInputs/InputText';
import Button from '@/components/ArtigosButtons/Buttons';
import ButtonList from '@/components/ArtigosButtons/Buttons';

export default async function Support() {
	return (
		<div className='w-full flex flex-col justify-items-center '>
			<Navbar />
			<div className='absolute top-28 left-1/2 w-3/4 bg-white z-50 p-4 shadow-md flex justify-center transform -translate-x-1/2'>
				<nav className='w-full justify-center items-center'>
				<ButtonList />		
			</nav>
			</div>


			<div className='h-[170vh] flex flex-col justify-center items-center mt-36'>
				<h1 className="text-3xl font-bold mb-4 mt-26 text-[#EF0037]">Arquivos</h1>
				<p className='text-[16px] text-font-dosis font-normal leading-[18.7px] mb-4 text-[#000000]'>Arquivos que serão submetidos pelos participantes</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-20'>
					<div>
						<InputSelect id="select" label="Tipo de arquivo" options={[
							{ value: "Análise Ciêntifica", label: "Análise Ciêntifica" },
							{ value: "option2", label: "Option 2" },
							{ value: "option3", label: "Option 3" },
						]} />

						<InputTextarea id="textarea" label="Normas de publicação" rows={4} />

						<InputText id="input" label="Limite de arquivos por avaliador" />

						<div className="flex gap-12">
							<InputDate id="date1" label="Data de início para avaliação " />
							<svg className="w-4 h-4 mt-1 -ml-12 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
							</svg>
							<InputDate id="date2" label="Data final para avaliação" />
						</div>
					</div>

					<div>
						<div className='flex gap-20'>
							<InputDate id="date1" label="Data 1" />
							<InputDate id="date2" label="Data 2" />
						</div>
						<div className="flex flex-col mt-8 gap-2 mb-8">
							<div className="flex flex-col -mt-2 gap-8 mb-8">
								<InputFile id="file1" label="Upload arquivo 1" />
								<InputFile id="file2" label="Upload arquivo 2" />
							</div>
						</div>

						<div className="flex gap-10 mb-4 w-full">
							<InputCheckbox id="checkbox1" label="Precisa de Avaliação" />
							<InputCheckbox id="checkbox2" label="Precisa de Apresentação" />
						</div>
					</div>
				</div>

				<div className='mt-12'>
					<button className='bg-[#0391C9] text-white p-2 px-6 rounded-full'>
						Cadastrar arquivo
					</button>
				</div>

				<div className='mt-8 space-x-6'>
					<button className='bg-[#8A8A8A] text-white p-2 px-16 rounded-full'>
						Voltar
					</button>
					<button className='bg-[#4B00E0] text-white p-2 px-14 rounded-full'>
						Avançar
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);
}
