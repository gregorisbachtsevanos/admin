import { NavLink } from "react-router-dom";
import "./Item.scss";

export const Item = ({ item, sidebarText }) => {
	return (
		<NavLink
			className={({ isActive }) => (isActive ? "active" : "")}
			to={item.path}
			target={item.live ? "_blank" : "_self"}
		>
			{!sidebarText ? (
				<img className="nav-icon" src={item.icon} alt="" />
			) : (
				<span className="nav-text">{item.name}</span>
			)}
		</NavLink>
	);
};
