import React, { forwardRef } from "react";
import "./Textarea.scss";

export const Textarea = forwardRef(
	({ name, placeholder = "", rows = 10, label, ...rest }, ref) => {
		return (
			<div className="textarea-container">
				{label && (
					<label htmlFor={name} className="label-container">
						<span className="content-container">{label}</span>
					</label>
				)}
				<textarea
					name={name}
					placeholder={name}
					rows={rows}
					{...rest}
					ref={ref}
				></textarea>
			</div>
		);
	}
);
