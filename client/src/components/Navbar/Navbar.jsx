import { useMemo } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useContextProvider } from "../../hooks/useContextProvider";

import { NAVBAR } from "../../constants/variables";

import "./Navbar.scss";
import { Dropdown } from "../Dropdown";
import { setStorage, setLocalStorage } from "src/utils/storage";

export const Navbar = () => {
	const { mode, dispatch } = useContextProvider();

	const changeTheme = () => {
		setLocalStorage("hideLoader", false);
		setStorage(mode, dispatch, "MODE", "dark", "light");
	};

	const logoPath = useMemo(
		() => (mode === "dark" ? NAVBAR.LOGO.DARK : NAVBAR.LOGO.LIGHT),
		[mode]
	);

	const themeChangeIcon = useMemo(
		() => (mode === "dark" ? <BsFillSunFill /> : <BsFillMoonStarsFill />),
		[mode]
	);

	return (
		<nav className="nav-container">
			<ul>
				<li>
					<img src={logoPath} alt="logo" />
				</li>
				<li>
					<button onClick={changeTheme}>{themeChangeIcon}</button>
				</li>
				<li>
					<Dropdown />
					{/* <div className="lang-icon">
						<img src={NAVBAR.LANG.EL} alt="flag" />
					</div> */}
				</li>
			</ul>
		</nav>
	);
};
