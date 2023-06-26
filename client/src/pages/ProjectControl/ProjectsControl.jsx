import React, { useEffect, useMemo, useState } from "react";

import { Table } from "./components/Table/Table";
import { UploadContainer } from "./components/UploadContainer/UploadContainer";
import { Header } from "./components/Header/Header";
import { ModalForm } from "./components/Modal/Modal";

import "./ProjectsControl.scss";
import { useSearchParams } from "react-router-dom";
import { queryParamsProcessing } from "src/utils/helpers";
import { ProjectService } from "src/services/projectApi";

const ProjectsControl = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [allProjects, setAllProjects] = useState([]);
	const [loader, setLoader] = useState(true);

	const projectService = new ProjectService();

	useEffect(() => {
		projectService.fetchAllProjects().then((data) => {
			setAllProjects(data);
			setLoader(false);
		});
	}, []);

	const handleRedirect = (param) => {
		setSearchParams({ category: queryParamsProcessing(param) });
	};

	const selectedTab = useMemo(() => {
		switch (searchParams.get("category")) {
			case "all":
				return;
			case "online":
				return;
			case "offline":
				return;
			default:
				break;
		}
	}, [searchParams]);

	return (
		<div id="project_page">
			<div className="projects-container">
				<Header handleRedirect={handleRedirect} />
				<div className="projects">
					{loader && "loading..."}
					{allProjects.map((project, index) => (
						<Table data={project} key={project._id} index={index} />
					))}
				</div>
			</div>
			<UploadContainer />
		</div>
	);
};

export default ProjectsControl;
