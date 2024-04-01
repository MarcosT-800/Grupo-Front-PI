import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/NavbarAuthenticated';

export default async function Support() {
	return (
		<div className='h-screen flex flex-col justify-items-center '>
			<Navbar />
			<div className='h-full flex justify-center items-center'>
                <h1>Artigos Page</h1>
            </div>
			<Footer />
		</div>
	);
}
