import React, { useEffect, useState } from "react";
import { Notification } from "src/components/Notification/Notification";
import { UserService } from "src/services/userApi";

import { useContextProvider } from "src/hooks/useContextProvider";
import { setLocalStorage } from "src/utils/storage";
import { Card } from "./components/Card/Card";
import chart1 from "src/assets/images/png/chart1.png";
import chart4 from "src/assets/images/png/chart4.png";
import chart3 from "src/assets/images/png/chart3.png";

import "./Dashboard.scss";

const DashBoard = () => {
	const { user, dispatch } = useContextProvider();
	const userService = new UserService();

	useEffect(() => {
		userService.getUserInfo(user._id).then((data) => {
			setLocalStorage("user", JSON.stringify(data));
			dispatch({ type: "USER", payload: data });
		});
	}, []);

	return (
		<div id="dashboard">
			<div className="statistics-cards">
				<Card title="Clients" stats={10} img={chart1} />
				<Card title="Emails" stats={32} img={chart4} />
				<Card title="Traffic" stats={124} img={chart3} />
			</div>
			<Notification />
		</div>
	);
};

export default DashBoard;
