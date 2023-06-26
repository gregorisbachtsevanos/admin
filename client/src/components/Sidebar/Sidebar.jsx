import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { NAVBAR } from "../../constants/variables";
import { SIDEBAR_DATA } from "src/app/data/sidebar-data";
import { Links } from "./Links";

import { useContextProvider } from "../../hooks/useContextProvider";
import { Action } from "./Action";
import { Item } from "./Menu";

import "./Sidebar.scss";

export const Sidebar = ({ isOpen }) => {
	const ref = useRef(null);
	const location = useLocation();
	const { theme } = useContextProvider();
	const [sidebarText, setSidebarText] = useState(isOpen);

	const isDashboard = useMemo(
		() => location.pathname.includes("dashboard"),
		[location.pathname]
	);

	const logoPath = useMemo(
		() => (theme === "dark" ? NAVBAR.LOGO.DARK : NAVBAR.LOGO.LIGHT),
		[theme]
	);

	useEffect(() => {
		setSidebarText((prev) => !prev);
	}, [isOpen]);

	if (isDashboard) {
		return (
			<div className={`menu-container`}>
				<div className="sidebar" ref={ref}>
					<Action
						icon={logoPath}
						hasClass={`${!isOpen ? "close-Sidebar" : ""} logo`}
						text="logo"
					/>
					<div className="menu">
						{/* change key (index) with el.id when db is connected */}
						{SIDEBAR_DATA.ADMIN.map((el, index) => (
							<Item item={el} key={index} sidebarText={sidebarText} />
						))}
					</div>
					<Action
						sidebarText={sidebarText}
						icon={SIDEBAR_DATA.LOGOUT}
						text="Logout"
						hasClass="logout"
					/>
				</div>
			</div>
		);
	}

	return (
		<>
			<nav
				id="sidebar-container"
				className={`sidebar-container min-h-screen ${
					isDashboard ? "admin" : ""
				}`}
			>
				<ul>
					<Links isDashboard={isDashboard} />
				</ul>
			</nav>
		</>
	);
};
