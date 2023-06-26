import React from "react";
import { Button } from "../Button/Button";
import Close from "src/assets/images/icons/close.png";
import "./Modal.scss";

export const Modal = ({
	withButtons,
	withoutCancel,
	withoutConfirm,
	withCloseIcon,
	cancelCallback,
	submitCallback,
	children,
}) => {
	return (
		<div className="modal-container">
			{withCloseIcon && (
				<div className="close-icon-container" onClick={cancelCallback}>
					<img src={Close} alt={Close} />
				</div>
			)}

			{children}

			{withButtons && (
				<div className="buttons-container">
					{!withoutCancel && (
						<div onClick={cancelCallback}>
							<Button
								role="text"
								value="Cancel"
								customClass="cancel-btn"
							/>
						</div>
					)}

					{!withoutConfirm && (
						<div onClick={submitCallback}>
							<Button
								role="text"
								value="Confirm"
								customClass="submit-btn"
							/>
						</div>
					)}
				</div>
			)}
		</div>
	);
};
