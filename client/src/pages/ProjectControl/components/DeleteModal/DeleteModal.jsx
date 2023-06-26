import React from "react";
import { Modal } from "src/components/Modal/";
import "./DeleteModal.scss";

export const DeleteModal = ({
	project,
	handleDeleteModalClose,
	handleDeleteProject,
	loader,
}) => {
	return (
		<div>
			<Modal
				withButtons
				withCloseIcon
				cancelCallback={handleDeleteModalClose}
				submitCallback={handleDeleteProject}
			>
				{loader && <p>loading...</p>}
				<div className="delete-modal-container">
					Are you sure you want to delete the: {project.title}
				</div>
			</Modal>
		</div>
	);
};
