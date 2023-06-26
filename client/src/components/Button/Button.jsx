import React, { useMemo } from "react";
import "./Button.scss";

export const Button = ({
	role,
	value,
	type = "submit",
	callback,
	customClass,
}) => {
	const action = useMemo(() => {
		switch (role) {
			case "login":
				return <span>{value}</span>;
			case "contact":
				return <img src={value} />;
			case "text":
				return <span>{value}</span>;
			default:
				return <span>error</span>;
		}
	}, []);

	return (
		<div className="btn-container" onClick={callback}>
			<button type={type} className={customClass}>
				{action}
			</button>
		</div>
	);
};
