const Footer = () => {
	return (
		<footer className='bg-pink-400 text-white'>
			{/* Email Section */}
			<div className='bg-pink-400 py-8 text-center'>
				<p className='text-lg md:text-xl font-medium'>Hello@windsy.com</p>
			</div>

			{/* Contact Info Section */}
			<div className='bg-gray-100 text-black py-6'>
				<div className='max-w-4xl mx-auto px-4'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
						{/* Kontak */}
						<div>
							<h3 className='text-lg md:text-xl font-bold mb-2'>Kontak</h3>
							<p className='text-sm md:text-base'>18002659656</p>
						</div>

						{/* Instagram */}
						<div>
							<h3 className='text-lg md:text-xl font-bold mb-2'>Instagram</h3>
							<p className='text-sm md:text-base'>@windsy_parfume</p>
						</div>

						{/* Facebook */}
						<div>
							<h3 className='text-lg md:text-xl font-bold mb-2'>Facebook</h3>
							<p className='text-sm md:text-base'>Windsyyy</p>
						</div>
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className='bg-gray-200 text-black py-3 text-center'>
				<p className='text-xs md:text-sm'>
					&copy; {new Date().getFullYear()} Wisdy Parfume. All rights reserved.
				</p>
			</div>
		</footer>
	);
};
export default Footer;
