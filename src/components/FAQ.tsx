import { useState } from 'react';

const FAQ = () => {
	const [openItems, setOpenItems] = useState<number[]>([]);

	const faqData = [
		{
			id: 1,
			question: 'Bagaimana cara memesan',
			answer:
				"Anda dapat memesan produk kami melalui website ini dengan mengklik tombol 'Beli' pada produk yang diinginkan. Kami akan memandu Anda melalui proses pemesanan yang mudah dan aman.",
		},
		{
			id: 2,
			question: 'Apakah Bisa Cod?',
			answer:
				'Ya, kami menyediakan layanan Cash on Delivery (COD) untuk area tertentu. Anda dapat membayar langsung saat produk diterima. Silakan cek ketersediaan COD di area Anda saat melakukan pemesanan.',
		},
		{
			id: 3,
			question: 'Berapa lama pengiriman?',
			answer:
				'Waktu pengiriman bervariasi tergantung lokasi Anda. Untuk dalam kota 1-2 hari kerja, luar kota 2-4 hari kerja, dan luar pulau 3-7 hari kerja.',
		},
		{
			id: 4,
			question: 'Apakah ada garansi produk?',
			answer:
				'Ya, semua produk parfum kami bergaransi kualitas. Jika ada masalah dengan produk yang diterima, Anda dapat menghubungi customer service kami dalam 7 hari setelah penerimaan.',
		},
	];

	const toggleItem = (id: number) => {
		setOpenItems((prev) =>
			prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
		);
	};

	return (
		<div className='bg-white py-6 px-4'>
			{/* Header */}
			<div className='text-black text-center py-3 mb-6'>
				<h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>FAQ</h1>
			</div>

			{/* FAQ Items */}
			<div className='max-w-4xl mx-auto'>
				<div className='space-y-1'>
					{faqData.map((item) => (
						<div key={item.id} className='border border-gray-200'>
							{/* Question */}
							<button
								onClick={() => toggleItem(item.id)}
								className='w-full px-4 py-4 bg-gray-50 text-left flex items-center justify-between hover:bg-gray-100 transition-colors'
							>
								<span className='text-sm md:text-base font-medium text-gray-800'>
									{item.question}
								</span>
								<span className='text-xl text-gray-600 ml-2'>
									{openItems.includes(item.id) ? '−' : '+'}
								</span>
							</button>

							{/* Answer */}
							{openItems.includes(item.id) && (
								<div className='px-4 py-4 bg-white border-t border-gray-200'>
									<p className='text-sm md:text-base text-gray-700 leading-relaxed'>
										{item.answer}
									</p>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FAQ;
