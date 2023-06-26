import React from "react";

import Scroll from "react-scroll";
import { LINKS } from "../../../constants/variables";
import { SIDEBAR_DATA } from "src/app/data/sidebar-data";
const SmoothLink = Scroll.Link;

export const Links = () => {
	return (
		<>
			<li className="link">
				<SmoothLink to={LINKS.HOME} spy={true} smooth={true} duration={0}>
					{SIDEBAR_DATA.HOME}
				</SmoothLink>
			</li>
			<li className="link">
				<SmoothLink
					to={LINKS.PROJECTS}
					spy={true}
					smooth={true}
					duration={0}
				>
					{SIDEBAR_DATA.PROJECTS}
				</SmoothLink>
			</li>
			<li className="link">
				<SmoothLink to={LINKS.ABOUT} spy={true} smooth={true} duration={0}>
					{SIDEBAR_DATA.ABOUT}
				</SmoothLink>
			</li>
			<li className="link">
				<SmoothLink
					to={LINKS.CONTACT}
					spy={true}
					smooth={true}
					duration={0}
				>
					{SIDEBAR_DATA.CONTACT}
				</SmoothLink>
			</li>
		</>
	);
};
