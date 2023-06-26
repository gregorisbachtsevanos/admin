import React, { useMemo, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { REACT_ENDPOINTS } from "../../../constants/routes";

import Dashboard from "../../../pages/Dashboard";
import Clients from "../../../pages/Clients";
import Emails from "../../../pages/Emails";
import ProjectControl from "../../../pages/ProjectControl";
import Settings from "../../../pages/Settings";

import "./PrivateContainer.scss";

const PrivateContainer = () => {
	const [isOpen, setIsOpen] = useState(true);
	const location = useLocation();
	const isDashboard = useMemo(
		() => location.pathname.endsWith("/dashboard"),
		[location.pathname]
	);

	const handleSidebar = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<section className="private-container">
			<Header handleSidebar={handleSidebar} isOpen={isOpen} />
			<div className={`sidebar-container ${!isOpen ? "close-sidebar" : ""}`}>
				<Sidebar isOpen={isOpen} />
			</div>
			<div
				id="main-container"
				className={`main-container ${!isOpen ? "close-sidebar" : ""}`}
			>
				{/* {isDashboard && <Dashboard />} */}
				<Routes>
					<Route path={REACT_ENDPOINTS.INDEX} element={<Dashboard />} />
					<Route path={REACT_ENDPOINTS.EMAILS} element={<Emails />} />
					<Route path={REACT_ENDPOINTS.CLIENTS} element={<Clients />} />
					<Route
						path={REACT_ENDPOINTS.PROJECTS}
						element={<ProjectControl />}
					/>
					<Route path={REACT_ENDPOINTS.SETTINGS} element={<Settings />} />
				</Routes>
			</div>
		</section>
	);
};

export default PrivateContainer;
