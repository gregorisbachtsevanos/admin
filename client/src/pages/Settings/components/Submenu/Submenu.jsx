import React from "react";
import { SIDEBAR_DATA } from "src/app/data/sidebar-data";
import { useContextProvider } from "src/hooks/useContextProvider";
import "./Submenu.scss";

export const Submenu = ({ handleRedirect, activeTab }) => {
	const { user } = useContextProvider();

	return (
		<div className="submenu">
			<div className="personal_info-container">
				<div className="img-container">
					<img src="https://placehold.co/400x600" alt="" />
				</div>
				<div className="info-container">
					<h2>
						{user.firstname} {user.lastname}
					</h2>
					<h3>{user.occupation}</h3>
				</div>
			</div>
			<div className="categories-container">
				<ul className="categories_submenu">
					{SIDEBAR_DATA.SUBMENU.map((el) => (
						<li
							className={`submenu-items
								${el.toLowerCase().includes(activeTab) ? "active" : ""}`}
							key={el}
							onClick={() => handleRedirect(el)}
						>
							{el}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
