import Catalog from './components/Catalog';
import FAQ from './components/FAQ';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Reviews from './components/Reviews';

function App() {
	return (
		<>
			<Header />
			<section
				className='min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center'
				style={{ backgroundImage: "url('./heroBg.jpg')" }}
			></section>

			<section className='flex flex-col lg:flex-row items-stretch bg-gray-100 min-h-[500px] lg:min-h-[600px]'>
				<div className='bg-gradient-to-br from-pink-500 to-pink-600 py-8 px-8 lg:py-12 lg:px-16 text-white flex flex-col justify-center text-center lg:text-left w-full lg:w-1/2'>
					<div className='space-y-6 lg:space-y-8'>
						<h1 className='font-black text-4xl lg:text-6xl xl:text-7xl leading-tight tracking-wide'>
							PENAWARAN
							<br />
							TERBATAS !
						</h1>

						<div className='space-y-2'>
							<p className='text-xl lg:text-2xl xl:text-3xl font-semibold italic border-b-2 border-white pb-2 inline-block'>
								Beli 2, Gratis 1
							</p>
							<p className='text-lg lg:text-xl xl:text-2xl font-medium'>Khusus minggu ini!</p>
						</div>

						<button className='bg-transparent border-2 border-white text-white px-8 py-3 lg:px-12 lg:py-4 font-bold text-lg lg:text-xl hover:bg-white hover:text-pink-600 transition-all duration-300 inline-flex items-center gap-2 mx-auto lg:mx-0'>
							→ Buy Now
						</button>
					</div>
				</div>

				<div className='w-full lg:w-1/2 relative overflow-hidden min-h-[300px] lg:min-h-auto'>
					<img
						src='./hero2Bg.jpg'
						alt='Perfume Collection'
						className='w-full h-full object-cover'
					/>
				</div>
			</section>

			<Catalog />

			<Reviews />

			<FAQ />

			<Footer />
		</>
	);
}

export default App;
