import React from "react";
import { SIDEBAR_DATA } from "src/app/data/sidebar-data";
import { Action } from "../Sidebar/Action";
import { useContextProvider } from "../../hooks/useContextProvider";

import "./Header.scss";

export const Header = ({ handleSidebar, isOpen }) => {
	const { user } = useContextProvider();

	return (
		<div className={`header-container ${!isOpen ? "close-sidebar" : ""}`}>
			<div className="header">
				<Action
					icon={SIDEBAR_DATA.COLLAPSE_BTN}
					hasClass={"collapse_btn"}
					handleSidebar={handleSidebar}
				/>
				<p>
					Status:
					<span
						className={`site-status ${
							!user?.extra_info?.status && "offline-status"
						}`}
					></span>
				</p>
			</div>
		</div>
	);
};
