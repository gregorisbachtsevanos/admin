import { Outlet, Navigate } from "react-router-dom";
import { getCookie } from "src/utils/storage";

export const PublicRouter = () => {
	const accessToken = getCookie("accessToken");
	console.log(accessToken);
	return !accessToken ? <Outlet /> : <Navigate to="/dashboard" />;
};
