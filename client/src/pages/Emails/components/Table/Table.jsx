import React from "react";

import { TableHead } from "./TableHead/";
import { TableBody } from "./TableBody/TableBody";

import "./Table.scss";

export const Table = ({ emails }) => {
	return (
		<table className="emails-table">
			<TableHead />
			{emails?.map((email) => (
				<TableBody
					key={email._id}
					name={email.name}
					email={email.email}
					date={email.createdAt}
					content={email.content}
					hasBeenRead={email.hasBeenRead}
				/>
			))}
		</table>
	);
};
