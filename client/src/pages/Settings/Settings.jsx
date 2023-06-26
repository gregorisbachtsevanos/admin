import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { queryParamsProcessing } from "src/utils/helpers";
import { Submenu } from "./components/Submenu/";
import { Profile } from "./components/Profile";
import { ContactInfo } from "./components/ContactInfo/ContactInfo";
import { Language } from "./components/Language/Language";
import "./Settings.scss";

const Settings = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [tab, setTab] = useState("");

	const handleRedirect = (param) => {
		setSearchParams({ tab: queryParamsProcessing(param) });
	};

	const selectedTab = useMemo(() => {
		setTab(searchParams.get("tab") ?? "profile");

		switch (searchParams.get("tab")) {
			case "contact":
				return <ContactInfo />;
			case "language":
				return <Language />;
			default:
				return <Profile />;
		}
	}, [searchParams]);
	return (
		<div id="settings">
			<Submenu handleRedirect={handleRedirect} activeTab={tab} />
			<div className="settings_main-container">{selectedTab}</div>
		</div>
	);
};

export default Settings;
