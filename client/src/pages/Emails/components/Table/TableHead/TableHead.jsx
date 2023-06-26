import React from "react";
import { CLIENTS_MENU_INFO } from "src/app/data/clients_menu-data";

import "./TableHead.scss";

export const TableHead = () => {
	return (
		<thead className="table-head_email table">
			<tr>
				{CLIENTS_MENU_INFO.map((el) => (
					<th key={el}>{el}</th>
				))}
			</tr>
		</thead>
	);
};
