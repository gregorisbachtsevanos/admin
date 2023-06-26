import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { ProjectService } from "src/services/projectApi";

import { Input } from "src/components/Input/";
import { Textarea } from "src/components/Textarea";
import { Button } from "src/components/Button/Button";
import { FileUploader } from "src/components/FileUploader";

import "./Modal.scss";

export const ModalForm = ({ callback }) => {
	const [loader, setLoader] = useState(false);

	const { register, handleSubmit, control } = useForm({});
	const projectService = new ProjectService();

	const onSubmit = (data) => {
		setLoader(true);
		const formData = new FormData();
		formData.append("title", data.title);
		formData.append("link", data.link);
		formData.append("summary", data.summary);

		for (const file of data.files) formData.append("files", file);

		// formData.append("files", data.files);
		projectService.addNewProject(formData).then(() => {
			setLoader(false);
			callback();
		});
	};

	return (
		<div className="modal">
			<div className="modal-container">
				{loader && <p>loading...</p>}
				<form
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
					<div className="project_file-container item">
						<FileUploader name="files" multiple {...register("files")} />
					</div>
					<div className="project_btn-container item">
						<Button
							role="text"
							type="button"
							value="Cancel"
							callback={callback}
							customClass="cancel-btn"
						/>

						<Button role="text" value="Submit" customClass="submit-btn" />
					</div>
				</form>
			</div>
		</div>
	);
};
