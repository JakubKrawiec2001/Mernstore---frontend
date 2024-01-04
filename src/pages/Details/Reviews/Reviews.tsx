import React, { useState } from "react";
import "./Reviews.scss";
import StarRatings from "react-star-ratings";
import { MdAccountCircle } from "react-icons/md";

const Reviews = () => {
	const addLeadingZero = (value) => {
		return value < 10 ? "0" + value : value;
	};
	const today = new Date();
	const month = addLeadingZero(today.getMonth() + 1);
	const year = today.getFullYear();
	const date = addLeadingZero(today.getDate());
	const currentDate = "-" + date + "." + month + "." + year;

	const initialState = {
		id: 0,
		name: "",
		email: "",
		desc: "",
		date: "",
	};
	const [form, setForm] = useState(initialState);
	const [reviews, setReviews] = useState([
		{
			id: 1,
			rate: 3,
			name: "Kevin Brown",
			desc: "Great quality, I recommend it to everyone",
			date: "- 21.05.2023",
		},
		{
			id: 2,
			rate: 5,
			name: "Martin Trend",
			desc: "AWESOME!!!",
			date: "- 13.07.2023",
		},
	]);
	const [rating, setRating] = useState(0);

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setReviews((prev) => [
			...prev,
			{
				id: form.id,
				rate: rating,
				name: form.name,
				desc: form.desc,
				date: form.date,
			},
		]);
		setForm(initialState);
		setRating(0);
	};
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
			id: reviews.length + 1,
			date: currentDate,
		});
	};

	const handleRatingChange = (newRating) => {
		setRating(newRating);
	};

	return (
		<div className="wrapper reviews-container">
			<div className="reviews-l">
				<p className="reviews-section-heading">All Reviews:</p>
				{reviews.map((review) => {
					return (
						<div className="reviews-item">
							<MdAccountCircle className="reviews-avatar" />
							<div className="reviews-body">
								<StarRatings
									rating={review.rate}
									starRatedColor="#ffc915"
									numberOfStars={5}
									starSpacing="2px"
									name={`rating-${review.id}`}
									isSelectable={false}
									isAggregateRating={false}
									starDimension="35px"
								/>
								<p className="reviews-name">
									{review.name}
									<span className="date-span"> {review.date}</span>
								</p>
								<p className="reviews-desc">{review.desc}</p>
							</div>
						</div>
					);
				})}
			</div>
			<div className="reviews-r">
				<p className="reviews-section-heading">Add Review:</p>
				<form className="reviews-form-container">
					<div className="reviews-input-box">
						<StarRatings
							rating={rating}
							starRatedColor="#ffc915"
							changeRating={handleRatingChange}
							numberOfStars={5}
							name="rating"
							starSpacing="2px"
							starDimension="40px"
						/>
						<label htmlFor="desc" className="reviews-form-text">
							Your review:
						</label>
						<textarea
							name="desc"
							id="desc"
							value={form.desc}
							className="reviews-textarea"
							onChange={handleChange}></textarea>
					</div>
					<div className="reviews-input-box">
						<label htmlFor="name" className="reviews-form-text">
							Name:
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={form.name}
							className="reviews-input"
							onChange={handleChange}
						/>
					</div>
					<div className="reviews-input-box">
						<label htmlFor="email" className="reviews-form-text">
							Email:
						</label>
						<input
							type="text"
							id="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							className="reviews-input"
						/>
					</div>
					<button onClick={handleSubmit} className="reviews-btn">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Reviews;
