import { PROJECT_MENU_TITLE } from "src/app/data/projects_menu-data";
import orderBy from "src/assets/images/icons/swap.png";
import grid from "src/assets/images/icons/menu-grid.png";
import "./Header.scss";

export const Header = () => {
	return (
		<div className="project_header-container">
			<ul className="projects_submenu-container">
				{PROJECT_MENU_TITLE.map((el) => (
					<li className="project-info" key={el}>
						{el}
					</li>
				))}
			</ul>
			<div className="projects_action-container">
				<div className="order-by">
					<button>
						<img src={orderBy} alt="order-by" /> order by
					</button>
				</div>
				<div className="display-projects">
					<img src={grid} alt="projects-display" />
				</div>
			</div>
		</div>
	);
};
