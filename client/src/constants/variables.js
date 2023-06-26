import { setLang } from '../utils/helpers';

const getLang = localStorage.getItem('lang') ?? 'en'
const data = setLang(getLang)

export const NAVBAR = Object.freeze({
    LOGO: {
        DARK: '/images/svg/GB-dark.svg',
        LIGHT: '/images/svg/GB-light.svg'
    },
    LANG: {
        EL: '/images/flags/flag-el.png',
        EN: '/images/flags/flag-en.png'
    }
})

export const LINKS = Object.freeze({
    HOME: 'home',
    PROJECTS: "projects",
    ABOUT: "about",
    CONTACT: "contact",
    DASHBOARD: "/dashboard",
    EMAILS: "emails",
    CLIENTS: "clients",
    PROJECTS: 'projects',
    SETTINGS: "settings",
    LIVE: "/"
})

export const ABOUT_INFO = 'About Form'

export const CONTACT_INFO = 'Contact Form'

export const themeOptions = ["System", "Light", "Dark"];
export const projectStatus = ["Online", "Offline"];
export const languageOptions = ["System", "English", "Greeks"];