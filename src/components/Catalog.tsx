const Catalog = () => {
	const products = [
		{
			id: 1,
			name: 'WINDSY - Blooming Grace',
			image: './Blooming.png',
		},
		{
			id: 2,
			name: 'WINDSY - Royal Dusk',
			image: './Royal.png',
		},
		{
			id: 3,
			name: 'WINDSY - Sakura Muse',
			image: './Sakura.png',
		},
		{
			id: 4,
			name: 'WINDSY - Ocean Blush',
			image: './Ocean.png',
		},
		{
			id: 5,
			name: 'WINDSY - Cherry Crush',
			image: './Cherry.png',
		},
		{
			id: 6,
			name: 'WINDSY - Crystal Breeze',
			image: './Crystal.png',
		},
	];

	return (
		<div className='min-h-screen bg-pink-300 py-6 px-4'>
			{/* Header */}
			<div className='bg-pink-600 text-black text-center py-3 mb-6'>
				<h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Katalog Produk</h1>
			</div>

			{/* Product Grid */}
			<div className='max-w-4xl mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
					{products.map((product) => (
						<div key={product.id} className='p-4 md:p-6 flex items-center justify-center flex-col'>
							{/* Product Image */}
							<div className='bg-white mb-3 flex items-center justify-center h-48 md:h-56 lg:h-64 w-full max-w-[20rem] overflow-hidden'>
								<img
									src={product.image}
									alt={product.name}
									className='w-full h-full object-cover'
								/>
							</div>

							{/* Product Name */}
							<h3 className='text-base md:text-lg lg:text-xl font-bold text-black text-center mb-3'>
								{product.name}
							</h3>

							{/* Buy Button */}
							<button className='bg-white text-black px-6 py-2 md:px-8 md:py-3 text-center font-bold text-sm md:text-base w-full max-w-[10rem] rounded-md hover:bg-gray-100 transition-colors'>
								Beli
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Catalog;
