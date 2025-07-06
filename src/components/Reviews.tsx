const Reviews = () => {
	const reviews = [
		{
			id: 1,
			name: 'Winda',
			comment: 'Parfumnya wangi bangett',
			rating: 5,
			avatar: './user.png',
		},
		{
			id: 2,
			name: 'Risma',
			comment: 'suka bangget sama parfumnya',
			rating: 5,
			avatar: './user.png',
		},
		{
			id: 3,
			name: 'Sari',
			comment: 'Kualitas parfum sangat bagus dan tahan lama',
			rating: 5,
			avatar: './user.png',
		},
		{
			id: 4,
			name: 'Dina',
			comment: 'Wanginya elegan dan tidak menyengat',
			rating: 4,
			avatar: './user.png',
		},
		{
			id: 5,
			name: 'Maya',
			comment: 'Packaging cantik dan wangi sesuai ekspektasi',
			rating: 5,
			avatar: './user.png',
		},
		{
			id: 6,
			name: 'Lina',
			comment: 'Recommended banget untuk hadiah',
			rating: 5,
			avatar: './user.png',
		},
	];

	const renderStars = (rating: number) => {
		return Array.from({ length: 5 }, (_, index) => (
			<span
				key={index}
				className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
			>
				★
			</span>
		));
	};

	return (
		<div className=' bg-pink-200 py-6 px-4'>
			{/* Header */}
			<div className='bg-pink-600 text-black text-center py-3 mb-6'>
				<h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Review</h1>
			</div>

			{/* Reviews */}
			<div className='max-w-6xl mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
					{reviews.map((review) => (
						<div key={review.id} className='bg-white p-4 md:p-6 flex items-start gap-4'>
							{/* Avatar Section */}
							<div className='flex flex-col items-center gap-2'>
								<div className='w-16 h-16 md:w-20 md:h-20 bg-pink-200 rounded-full flex items-center justify-center overflow-hidden'>
									<img
										src={review.avatar}
										alt={review.name}
										className='w-full h-full object-cover'
									/>
								</div>
								<span className='text-sm md:text-base font-medium text-black text-center'>
									{review.name}
								</span>
							</div>

							{/* Review Content */}
							<div className='flex-1'>
								{/* Stars */}
								<div className='flex gap-1 mb-2'>{renderStars(review.rating)}</div>

								{/* Comment */}
								<p className='text-black text-sm md:text-base font-medium leading-relaxed'>
									{review.comment}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Reviews;
