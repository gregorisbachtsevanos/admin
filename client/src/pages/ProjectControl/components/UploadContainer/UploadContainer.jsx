import React, { useState } from "react";

import add from "src/assets/images/icons/add.png";
import { ModalForm } from "../Modal/Modal";

import "./UploadContainer.scss";

export const UploadContainer = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const toggleForm = () => {
		setModalIsOpen((prev) => !prev);
	};

	return (
		<div className="upload-container">
			<div className="upload-control" onClick={toggleForm}>
				<div className="title-container">
					<span className="title-item">Upload</span>
				</div>
				<div className="img-container">
					{/* <Logo fill="#0ab7bd" stroke="#0ab7bd" /> */}
					<img className="img-item" src={add} alt="" />
				</div>
			</div>
			{modalIsOpen && <ModalForm callback={toggleForm} />}
		</div>
	);
};
