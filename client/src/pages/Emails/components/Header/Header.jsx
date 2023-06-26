import { CLIENTS_MENU_TITLE } from "src/app/data/clients_menu-data";

import "./Header.scss";

export const Header = ({ handleRedirect, activeTab }) => (
	<div className="emails_header-container">
		<ul className="emails_submenu-container">
			{CLIENTS_MENU_TITLE.map((el) => (
				<li
					className={`emails-tabs ${
						activeTab === el.toLowerCase() ? "active" : ""
					}`}
					key={el}
					onClick={() => handleRedirect(el)}
				>
					{el}
				</li>
			))}
		</ul>
	</div>
);
