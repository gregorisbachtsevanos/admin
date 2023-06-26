import { Outlet, Navigate } from "react-router-dom";
import { getCookie } from "src/utils/storage";

export const PrivateRouter = () => {
	const accessToken = getCookie("accessToken");
	console.log(accessToken);
	return accessToken ? <Outlet /> : <Navigate to="/admin" />;
};
