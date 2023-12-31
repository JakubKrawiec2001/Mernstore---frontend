import React, { useState } from "react";
import "./Reviews.scss";
import { FaStar } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

const Reviews = () => {
	const today = new Date();
	const month = today.getMonth() + 1;
	const year = today.getFullYear();
	const date = today.getDate();
	const currentDate = "-" + date + "." + month + "." + year;

	const initialState = {
		id: 0,
		name: "",
		desc: "",
		date: "",
	};
	const [form, setForm] = useState(initialState);
	const [reviews, setReviews] = useState([
		{
			id: 1,
			name: "Kevin Brown",
			desc: "Great quality, I recommend it to everyone",
			date: "- 21.05.2023",
		},
		{
			id: 2,
			name: "Martin Trend",
			desc: "AWESOME!!!",
			date: "- 13.07.2023",
		},
	]);

	const stars = [
		<FaStar className="star" />,
		<FaStar className="star" />,
		<FaStar className="star" />,
		<FaStar className="star" />,
		<FaStar className="star" />,
	];

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setReviews((prev) => [
			...prev,
			{
				id: form.id,
				name: form.name,
				desc: form.desc,
				date: form.date,
			},
		]);
		setForm(initialState);
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

	return (
		<div className="wrapper reviews-container">
			<div className="reviews-l">
				<p className="reviews-section-heading">All Reviews:</p>
				{reviews.map((review) => {
					return (
						<div className="reviews-item">
							<MdAccountCircle className="reviews-avatar" />
							<div className="reviews-body">
								<div className="stars-box">
									{stars.map((star) => {
										return star;
									})}
								</div>
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
						<input type="text" id="email" className="reviews-input" />
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
