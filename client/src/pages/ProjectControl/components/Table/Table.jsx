import React, { useState } from "react";

import { ProjectService } from "src/services/projectApi";

import Remove from "src/assets/images/icons/delete.png";
import Edit from "src/assets/images/icons/edit.png";

import { ToggleSwitch } from "src/components/ToggleSwitch/";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { EditModal } from "../EditModal/EditModal";

import "./Table.scss";

export const Table = ({ data, index }) => {
	const [deleteModal, setDeleteModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [loader, setLoader] = useState(false);

	const projectService = new ProjectService();

	const handleDeleteModal = () => setDeleteModal((prev) => !prev);

	const handleEditModal = () => setEditModal((prev) => !prev);

	const handleDeleteProject = () => {
		setLoader(true);

		projectService.deleteProject(data._id).then(() => {
			setLoader(false);
			setDeleteModal(false);
		});
	};

	const handleEditProject = () => {
		setLoader(true);

		console.log("edit");
	};

	return (
		<>
			<div className="project-table">
				<div className="upper_level">
					<h3 className="project-info">{data.title}</h3>
					<span className="title-separator">|</span>
					<h3 className="project-info">{data.summary}</h3>
					<span className="title-separator">|</span>
					<h3 className="project-info">{data.link}</h3>
					<span className="title-separator">|</span>
				</div>
				<div className="middle_level">
					{data.images.map((image) => (
						<img
							src={image.path}
							key={image.originalname}
							alt={image.originalname}
						/>
					))}
				</div>
				<div className="bottom_level">
					<div className="edit" onClick={handleEditModal}>
						<img src={Edit} alt="edit" />
					</div>
					<ToggleSwitch data={data} index={index} />
					<div className="remove" onClick={handleDeleteModal}>
						<img src={Remove} alt="remove" />
					</div>
				</div>
			</div>
			{deleteModal && (
				<DeleteModal
					project={data}
					handleDeleteModalClose={handleDeleteModal}
					handleDeleteProject={handleDeleteProject}
					loader={loader}
				/>
			)}
			{editModal && (
				<EditModal
					project={data}
					handleEditModalClose={handleEditModal}
					handleEditProject={handleEditProject}
					loader={loader}
				/>
			)}
		</>
	);
};
