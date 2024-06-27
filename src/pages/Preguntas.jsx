import { useEffect, useState } from 'react';

export default function Preguntas() {
	const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;
	const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
	const request = `https://places.googleapis.com/v1/places/${placeId}?fields=id,displayName,rating,reviews&languageCode=es-419&key=${apiKey}`;

	const [reviews, setreviews] = useState([]);
	const [rating, setRating] = useState();
	const [name, setName] = useState();
	const [err, setErr] = useState();

	useEffect(() => {
		const checkReviews = async () => {
			try {
				const res = await fetch(request);
				const data = await res.json();
				setreviews(data.reviews);
				setRating(data.rating);
				setName(data.displayName.text);
			} catch (error) {
				setErr(error.message);
			}
		};
		checkReviews();
	}, []);

	if (err) {
		return <p>{err}</p>;
	}

	return (
		<>
			<h1> {name}</h1>
			<h2>Customer Reviews: {rating}</h2>
			{reviews.length > 0 ? (
				reviews.map((review, index) => (
					<div key={index} className='review'>
						<div className='review-header'>
							<h4>{review.authorAttribution.displayName}</h4>
							<div className='rating'>
								{'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
							</div>
						</div>
						<p>{review.originalText.text}</p>
						<p>{review.publishTime}</p>
					</div>
				))
			) : (
				<p>No reviews available.</p>
			)}
		</>
	);
}
