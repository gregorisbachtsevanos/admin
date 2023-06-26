import React, { forwardRef } from "react";
import "./Input.scss";

export const Input = forwardRef(
	({ name, label, placeholder = "", type = "text", ...rest }, ref) => {
		return (
			<>
				{label && (
					<label htmlFor={name} className="label-container">
						{label}
					</label>
				)}
				<input
					autoComplete="off"
					className="input-container"
					name={name}
					type={type}
					placeholder={placeholder}
					{...rest}
					ref={ref}
				/>
			</>
		);
	}
);
