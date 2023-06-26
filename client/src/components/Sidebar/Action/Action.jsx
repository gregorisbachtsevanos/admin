import React from "react";

export const Action = ({
	sidebarText,
	icon,
	text,
	hasClass,
	handleSidebar,
}) => {
	return (
		<div className={`${hasClass}-container`} onClick={handleSidebar}>
			{!sidebarText ? (
				<img className={`${hasClass}-icon`} src={icon} alt={text} />
			) : (
				<span className={`${hasClass}-text`}>{text}</span>
			)}
		</div>
	);
};
