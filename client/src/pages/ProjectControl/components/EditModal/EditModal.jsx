import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Modal } from "src/components/Modal";
import { Button } from "src/components/Button/";
import { Input } from "src/components/Input/";
import { Textarea } from "src/components/Textarea";
import "./EditModal.scss";

export const EditModal = ({
	project,
	loader,
	handleEditModalClose,
	handleEditProject,
}) => {
	const { register, handleSubmit, control, reset } = useForm({});

	useEffect(() => {
		reset({
			title: project.title,
			link: project.link,
			summary: project.summary,
		});
	}, []);

	const onSubmit = (data) => {
		console.log("submit");
	};

	return (
		<div>
			<Modal
				withButtons
				withCloseIcon
				cancelCallback={handleEditModalClose}
				submitCallback={handleEditProject}
			>
				{loader && <p>loading...</p>}
				<form
					className="edit-modal-container"
					onSubmit={handleSubmit(onSubmit)}
					encType="multipart/form-data"
				>
					<div className="project_title-container item">
						<Input
							name="title"
							placeholder="title"
							{...register("title")}
						/>
					</div>
					<div className="project_link-container item">
						<Input name="link" placeholder="link" {...register("link")} />
					</div>
					<div className="project_description-container item">
						<Textarea name="summary" {...register("summary")} />
					</div>
					{/* <div className="project_file-container item">
						<FileUploader name="files" multiple {...register("files")} />
					</div> */}
				</form>
			</Modal>
		</div>
	);
};
