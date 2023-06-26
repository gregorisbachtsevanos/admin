import React, { useEffect, useState } from "react";
import { NAVBAR } from "../../constants/variables";
import { useContextProvider } from "../../hooks/useContextProvider";
import { setLocalStorage, setStorage } from "src/utils/storage";

import "./Dropdown.scss";

export const Dropdown = () => {
	const [supportedLang, setSupportedLang] = useState(null);
	const [selectedLangIcon, setSelectedLangIcon] = useState(null);
	const { lang, dispatch } = useContextProvider();

	useEffect(() => {
		setSelectedLangIcon(lang === "en" ? NAVBAR.LANG.EN : NAVBAR.LANG.EL);
		setSupportedLang(lang === "en" ? NAVBAR.LANG.EL : NAVBAR.LANG.EN);
	}, [lang]);

	const changeLang = () => {
		setLocalStorage("hideLoader", true);
		setStorage(lang, dispatch, "LANG", "en", "el");
	};

	return (
		<div className="dropdown-container">
			<div className="dropdown">
				<img src={selectedLangIcon} className="dropdown-btn" alt="lang" />
				<div className="dropdown-content">
					<img
						src={supportedLang}
						className="dropdown-btn"
						onClick={changeLang}
						alt="lang"
					/>
				</div>
			</div>
		</div>
	);
};
