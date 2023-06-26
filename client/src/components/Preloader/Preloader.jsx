import { renderOutPreloader, renderName } from "../../utils/renderAnimation";
import { PRELOADER } from "src/app/data/data";

import "./Preloader.scss";

export const Preloader = () => {
	renderOutPreloader();
	renderName();
	// useEffect(() => {
	// 	renderOutPreloader();
	// 	renderName();
	// }, []);

	return (
		<div className="precontainer">
			<div className="wr-preloader">
				<div className="items">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1050.22 599.17"
					>
						<g id="Layer_2" data-name="Layer 2">
							<g id="Layer_1-2" data-name="Layer 1">
								<path
									className="cls-1"
									d="M989,276.09H928.28v47H989a6,6,0,0,1,1.83.21c.54.56,2.39,3.87,2.39,11v70.21c0,7.34-2,10.62-2.38,11a5.5,5.5,0,0,1-1.91.22l-113-.78V334.3a58.27,58.27,0,0,0-58.21-58.21H666.17V190H919.8V143H666.17V68.22A58.28,58.28,0,0,0,608,10H12.5V57H174.65v86H68.22A58.29,58.29,0,0,0,10,201.26V398.14a58.36,58.36,0,0,0,57.82,58.22l106.83.74v85.07H12.5v47H817.7A58.27,58.27,0,0,0,875.91,531v-69l112.7.78h.4c13.71,0,25.77-4.78,34.89-13.84,10.68-10.6,16.32-25.95,16.32-44.37V334.3C1040.22,299.48,1019.63,276.09,989,276.09Zm-171.3,47a11.22,11.22,0,0,1,11.21,11.21v80.32l-607.26-4.2V323.09H817.7Zm-198.53-47H221.65V190H619.17ZM221.65,57H608a11.23,11.23,0,0,1,11.21,11.22V143H221.65ZM68.14,409.36A11.24,11.24,0,0,1,57,398.14V201.26A11.23,11.23,0,0,1,68.22,190H174.65V410.1ZM828.91,531a11.22,11.22,0,0,1-11.21,11.21H221.65V457.42l607.26,4.2Z"
								/>
							</g>
						</g>
					</svg>
					<h1 className="ml5">
						<span className="word">{PRELOADER.FIRSTNAME}</span>
						<span className="word">{PRELOADER.LASTNAME}</span>
					</h1>
				</div>
			</div>
		</div>
	);
};
