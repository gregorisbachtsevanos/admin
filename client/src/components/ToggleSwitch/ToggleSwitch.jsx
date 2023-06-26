import { ProjectService } from "src/services/projectApi";
import "./ToggleSwitch.scss";

export const ToggleSwitch = ({ data, index }) => {
	const projectService = new ProjectService();

	const handleSubmit = (id) => {
		projectService.updateProjectStatus(id);
	};

	return (
		<>
			<div className="main-wrapper">
				<div className="theme-switch-wrapper">
					<label htmlFor={`theme-btn_${index}`}>
						<input type="checkbox" id={`theme-btn_${index}`} />
						<div
							className="slider-wrapper"
							onClick={() => handleSubmit(data._id)}
						>
							<div
								className={`theme-btn-slider ${
									data?.online ? "online" : "offline"
								}`}
							></div>
						</div>
					</label>
				</div>
			</div>
		</>
	);
};
