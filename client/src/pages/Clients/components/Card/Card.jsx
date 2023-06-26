import React from "react";
import "./Card.scss";

export const Card = () => {
	return (
		<div className="client_card-container">
			<div className="client_info-container">
				<h3>Full Name</h3>
				<span>Email</span>
				<h3>Date</h3>
			</div>
			<div className="client_img-container">
				<img src="https://placehold.co/200" alt="" />
				<span className="client_name">Full Name</span>
			</div>
		</div>
	);
};
