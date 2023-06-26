import { setLang } from 'src/utils/helpers';

const getLang = localStorage.getItem('lang') ?? 'en'
const data = setLang(getLang)

export const SERVER_URL = import.meta.env.VITE_SERVER_URL

export const CLIENT_URL = import.meta.env.VITE_CLIENT_URL

export const PRELOADER = Object.freeze({
    FIRSTNAME: data.PRELOADER_FIRSTNAME,
    LASTNAME: data.PRELOADER_LASTNAME
})