import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { queryParamsProcessing } from "src/utils/helpers";

import { Header } from "./components/Header/";
import { Table } from "./components/Table/";

import { EmailService } from "src/services/emailApi";

import "./Emails.scss";

const Emails = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [tab, setTab] = useState("all");
	const emailService = new EmailService();
	const [emails, setEmails] = useState(null);

	const handleRedirect = (param) => {
		setTab(searchParams.get("tab"));
		setSearchParams({ tab: queryParamsProcessing(param) });
	};

	useEffect(() => {
		const getEmailData = () => {
			switch (searchParams.get("tab")) {
				case "read":
					return emailService
						.getReadEmails()
						.then((data) => setEmails(data));
				case "unread":
					return emailService
						.getUnreadEmails()
						.then((data) => setEmails(data));
				default:
					return emailService
						.getAllEmails()
						.then((data) => setEmails(data));
			}
		};

		getEmailData();
	}, [searchParams.get("tab")]);

	return (
		<div id="emails_page">
			<div className="emails-container">
				<Header
					handleRedirect={handleRedirect}
					activeTab={searchParams.get("tab") ?? "all"}
				/>
				<Table emails={emails} />
			</div>
		</div>
	);
};

export default Emails;
