import home from 'src/assets/images/icons/home.png'
import handshake from 'src/assets/images/icons/handshake.png'
import mail from 'src/assets/images/icons/mail.png'
import projects from 'src/assets/images/icons/projects.png'
import view from 'src/assets/images/icons/view.png'
import settings from 'src/assets/images/icons/setting.png'
import logout from 'src/assets/images/icons/logout.png'
import menu from 'src/assets/images/icons/menu.png'

import { LINKS } from "src/constants/variables";

import { setLang } from 'src/utils/helpers';

const getLang = localStorage.getItem('lang') ?? 'en'
const data = setLang(getLang)

//* Admin Sidebar

export const SIDEBAR_DATA = {
    COLLAPSE_BTN: menu,
    LOGOUT: logout,
    ADMIN: [{
        name: "General",
        path: LINKS.DASHBOARD,
        icon: home,
    },
    {
        name: "Emails",
        path: LINKS.EMAILS,
        icon: mail,
    },
    {
        name: "Clients",
        path: LINKS.CLIENTS,
        icon: handshake,
    },
    {
        name: "Projects",
        path: LINKS.PROJECTS,
        icon: projects,
    },
    {
        name: "Go live",
        path: LINKS.LIVE,
        icon: view,
        live: true
    },
    {
        name: "Settings",
        path: LINKS.SETTINGS,
        icon: settings,
    },],
    SUBMENU: ['Profile', 'Contact Info', 'Language'],
    HOME: data.SIDEBAR_HOME,
    PROJECTS: data.SIDEBAR_PROJECTS,
    ABOUT: data.SIDEBAR_ABOUT,
    CONTACT: data.SIDEBAR_CONTACT,

}