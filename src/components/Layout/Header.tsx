import { useState } from 'react';

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<div className='relative'>
			<header className='bg-white shadow rounded-b-xl flex items-center justify-between overflow-hidden px-3 py-2 lg:px-0 lg:py-0'>
				{/* Mobile & Tablet Layout */}
				<div className='flex lg:hidden items-center justify-between w-full'>
					<div className='flex items-center gap-2'>
						<img src='/headerLogo.png' alt='Wisdy Parfume Logo' className='h-8 w-auto' />
					</div>

					<div className='flex items-center gap-2'>
						<button className='bg-[#B00058] py-2 px-4 text-white font-semibold text-sm rounded'>
							Get Quote
						</button>
						<button
							className='p-2 text-[#935116F7] hover:bg-gray-100 rounded'
							onClick={toggleMobileMenu}
						>
							<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Desktop Layout - Preserved Original */}
				<span className='hidden lg:flex items-center justify-start gap-2'>
					<img src='/headerLogo.png' alt='Wisdy Parfume Logo' className='h-10 w-auto ml-4' />
					<nav className='flex items-center gap-4 text-[#935116F7] font-semibold'>
						<a href='' className='hover:underline '>
							How It Work
						</a>
						<a href='' className='hover:underline '>
							Services
						</a>
						<a href='' className='hover:underline '>
							Contractor
						</a>
						<a href='' className='hover:underline '>
							Gallery
						</a>
					</nav>
				</span>

				<span className='hidden lg:flex items-center justify-end gap-4'>
					<button className='font-semibold text-[#4A22EAC7]'>Masuk</button>
					<button className='bg-[#B00058] py-4 px-5 text-white font-semibold'>
						Get Your Estimate
					</button>
				</span>
			</header>

			{/* Mobile Navigation Menu */}
			{isMobileMenuOpen && (
				<div className='bg-white shadow-lg border-t lg:hidden z-50 rounded-b-xl'>
					<nav className='flex flex-col p-4 space-y-3'>
						<a
							href=''
							className='text-[#935116F7] font-semibold py-2 hover:bg-gray-50 px-2 rounded'
							onClick={() => setIsMobileMenuOpen(false)}
						>
							How It Work
						</a>
						<a
							href=''
							className='text-[#935116F7] font-semibold py-2 hover:bg-gray-50 px-2 rounded'
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Services
						</a>
						<a
							href=''
							className='text-[#935116F7] font-semibold py-2 hover:bg-gray-50 px-2 rounded'
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Contractor
						</a>
						<a
							href=''
							className='text-[#935116F7] font-semibold py-2 hover:bg-gray-50 px-2 rounded'
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Gallery
						</a>
						<hr className='my-2' />
						<button
							className='text-[#4A22EAC7] font-semibold py-2 text-left hover:bg-gray-50 px-2 rounded'
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Masuk
						</button>
					</nav>
				</div>
			)}
		</div>
	);
};

export default Header;
