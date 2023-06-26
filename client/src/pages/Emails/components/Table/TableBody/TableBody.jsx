import React from "react";
import remove from "src/assets/images/icons/delete.png";

import "./TableBody.scss";

export const TableBody = ({ name, email, date, content, hasBeenRead }) => {
	return (
		<tbody className="table-body_email table">
			<tr className={`table_data-container ${!hasBeenRead ? "unread" : ""}`}>
				<td className="table_data name">{name}</td>
				<td className="table_data email">{email}</td>
				<td className="table_data date">{date}</td>
				<td className="table_data content">{content}</td>
				<td className="table_data remove">
					<div className="remove_icon-container">
						<img src={remove} alt="remove" />
					</div>
				</td>
			</tr>
		</tbody>
	);
};
