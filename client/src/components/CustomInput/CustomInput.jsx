import React from "react";
import "./CustomInput.scss";

export const CustomInput = React.forwardRef(
	({ type, name, placeholder, autoComplete, required, label }, ref) => {
		return (
			<div className="custom_input-container">
				<input
					type={type}
					name={name}
					placeholder={placeholder}
					autoComplete={autoComplete}
					required={required}
					ref={ref}
				/>
				{label && (
					<label htmlFor={name} className="label-container">
						<span className="content-container">{label}</span>
					</label>
				)}
			</div>
		);
	}
);
