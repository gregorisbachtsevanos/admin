import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { renderInElements } from "./utils/renderAnimation";
import { useContextProvider } from "./hooks/useContextProvider";
import { CLIENT_URL, SERVER_URL } from "src/app/data/data";
import { REACT_ENDPOINTS } from "./constants/routes";

import Error from "./pages/Error/";
import Admin from "./pages/Admin/Admin";

import { PrivateRouter } from "./app/routers/PrivateRouter/PrivateRouter";
import { PublicRouter } from "./app/routers/PublicRouter/PublicRouter";
import PrivateContainer from "./app/container/PrivateContainer/PrivateContainer";

import "./App.scss";
import "./assets/styles/responsive.scss";

function App() {
	const { theme } = useContextProvider();

	useEffect(() => {
		if (theme === "dark") {
			document.querySelector("body").classList.remove("light-theme");
		} else if (theme === "light") {
			document.querySelector("body").classList.add("light-theme");
		}
	}, [theme]);

	useEffect(() => {
		if (window.location.href === CLIENT_URL) renderInElements();
	}, [CLIENT_URL]);

	return (
		<div id="app-container" className="block-application">
			<BrowserRouter>
				<Routes>
					<Route element={<PublicRouter />}>
						<Route path={REACT_ENDPOINTS.ADMIN} element={<Admin />} />
					</Route>
					<Route element={<PrivateRouter />}>
						<Route
							path={REACT_ENDPOINTS.DASHBOARD}
							element={<PrivateContainer />}
						/>
					</Route>
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
