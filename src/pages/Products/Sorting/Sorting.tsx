import React from "react";
import "./Sorting.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { categoriesData } from "../../../data/categoriesData";

const Sorting = (props: {
	setView: any;
	view: string;
	setSortOrder: (string) => void;
	setSearchParams: (string) => void;
	categoryParam: string;
	colorParam: string;
	sortOrder: string;
}) => {
	const {
		setView,
		view,
		setSortOrder,
		setSearchParams,
		colorParam,
		categoryParam,
	} = props;

	const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchParams((prev) => {
			prev.set("color", e.target.value);
			return prev;
		});
		if (colorParam === e.target.value) {
			setSearchParams((prev) => {
				prev.set("color", "");
				return prev;
			});
		}
	};
	const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortOrder(e.target.value);
	};

	return (
		<div className="sorting-container">
			<div className="sorting-by-box">
				<div className="sorting-by-icons-box">
					<AiOutlineMenu
						className={
							view === "vertical"
								? "sorting-by-icon sorting-by-icon-active"
								: "sorting-by-icon"
						}
						onClick={() => setView("vertical")}></AiOutlineMenu>
					<AiOutlineMenu
						className={
							view === "horizontal"
								? "sorting-by-icon sorting-by-icon-active"
								: "sorting-by-icon"
						}
						onClick={() => setView("horizontal")}></AiOutlineMenu>
				</div>
				<select
					name="sorting"
					className="sorting-by-select"
					onChange={handleSort}>
					<option disabled selected hidden>
						--SORT BY--
					</option>
					<option value="higher">Higher</option>
					<option value="lower">Lower</option>
				</select>
			</div>
			<div className="sorting-category-box">
				<p className="sorting-category-heading">Categories</p>
				<p
					className={
						categoryParam === "All"
							? "sorting-category-item sorting-category-item-active"
							: "sorting-category-item"
					}
					onClick={() => {
						setSearchParams((prev) => {
							prev.set("category", "All");
							return prev;
						});
					}}>
					All
				</p>
				{categoriesData.map((category) => {
					return (
						<p
							className={
								categoryParam === category.name
									? "sorting-category-item sorting-category-item-active"
									: "sorting-category-item"
							}
							onClick={() => {
								setSearchParams((prev) => {
									prev.set("category", category.name);
									return prev;
								});
							}}
							key={category.id}>
							{category.name}
						</p>
					);
				})}
			</div>
			<div className="sorting-tags-box">
				<p className="sorting-tags-heading">Product Tags</p>
				<div className="sorting-tags-container">
					<p
						className={
							categoryParam === "Bestsellers"
								? "sorting-tag sorting-tag-active"
								: "sorting-tag"
						}
						onClick={() => {
							setSearchParams((prev) => {
								prev.set("category", "Bestsellers");
								return prev;
							});
						}}>
						Bestsellers
					</p>
					<p
						className={
							categoryParam === "Sale"
								? "sorting-tag sorting-tag-active"
								: "sorting-tag"
						}
						onClick={() => {
							setSearchParams((prev) => {
								prev.set("category", "Sale");
								return prev;
							});
						}}>
						Sale products
					</p>
				</div>
			</div>
			<div className="sorting-colors-box">
				<p className="sorting-colors-heading">Filter By Colors</p>
				<div className="sorting-colors-item">
					<label htmlFor="gray" className="sorting-colors-text">
						Gray
					</label>
					<input
						type="checkbox"
						className="sorting-colors-input"
						id="gray"
						value="gray"
						checked={colorParam === "gray"}
						onChange={handleChangeColor}
					/>
				</div>
				<div className="sorting-colors-item">
					<label htmlFor="blue" className="sorting-colors-text">
						Blue
					</label>
					<input
						type="checkbox"
						className="sorting-colors-input"
						id="blue"
						value="blue"
						checked={colorParam === "blue"}
						onChange={handleChangeColor}
					/>
				</div>
				<div className="sorting-colors-item">
					<label htmlFor="white" className="sorting-colors-text">
						White
					</label>
					<input
						type="checkbox"
						className="sorting-colors-input"
						id="white"
						value="white"
						checked={colorParam === "white"}
						onChange={handleChangeColor}
					/>
				</div>
				<div className="sorting-colors-item">
					<label htmlFor="black" className="sorting-colors-text">
						Black
					</label>
					<input
						type="checkbox"
						className="sorting-colors-input"
						id="black"
						value="black"
						checked={colorParam === "black"}
						onChange={handleChangeColor}
					/>
				</div>
				<div className="sorting-colors-item">
					<label htmlFor="pink" className="sorting-colors-text">
						Pink
					</label>
					<input
						type="checkbox"
						className="sorting-colors-input"
						id="pink"
						value="pink"
						checked={colorParam === "pink"}
						onChange={handleChangeColor}
					/>
				</div>
				<div className="sorting-colors-item">
					<label htmlFor="silver" className="sorting-colors-text">
						Silver
					</label>
					<input
						type="checkbox"
						className="sorting-colors-input"
						id="silver"
						value="silver"
						checked={colorParam === "silver"}
						onChange={handleChangeColor}
					/>
				</div>
				<div className="sorting-colors-item">
					<label htmlFor="gold" className="sorting-colors-text">
						Gold
					</label>
					<input
						type="checkbox"
						className="sorting-colors-input"
						id="gold"
						value="gold"
						checked={colorParam === "gold"}
						onChange={handleChangeColor}
					/>
				</div>
				<div className="sorting-colors-item">
					<label htmlFor="light-silver" className="sorting-colors-text">
						Light silver
					</label>
					<input
						type="checkbox"
						className="sorting-colors-input"
						id="light-silver"
						value="light-silver"
						checked={colorParam === "light-silver"}
						onChange={handleChangeColor}
					/>
				</div>
				<div className="sorting-colors-item">
					<label htmlFor="green" className="sorting-colors-text">
						Green
					</label>
					<input
						type="checkbox"
						className="sorting-colors-input"
						id="green"
						value="green"
						checked={colorParam === "green"}
						onChange={handleChangeColor}
					/>
				</div>
				<div className="sorting-colors-item">
					<label htmlFor="red" className="sorting-colors-text">
						Red
					</label>
					<input
						type="checkbox"
						className="sorting-colors-input"
						id="red"
						value="red"
						checked={colorParam === "red"}
						onChange={handleChangeColor}
					/>
				</div>
			</div>
		</div>
	);
};

export default Sorting;
