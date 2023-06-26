import React, { forwardRef } from "react";
import "./Select.scss";

export const Select = forwardRef(({ title, options, ...rest }, ref) => {
	return (
		<div className="settings_selection-container">
			<label className="selection_label">{title}</label>
			<select className="selection_select" ref={ref} {...rest}>
				{options.map((option) => (
					<option className="selection_option" key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
});
