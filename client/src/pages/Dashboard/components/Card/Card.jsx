import React from "react";
import "./Card.scss";

export const Card = ({ title, stats, img }) => {
	return (
		<div className="stats_card-container">
			<div className="card-title">
				<h3>{title}</h3>
			</div>
			<div className="card-stats">
				<h2>{stats}</h2>
			</div>
			<div className="card-illustration">
				<img src={img} alt="" />
			</div>
		</div>
	);
};
