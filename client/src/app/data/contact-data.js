import { setLang } from 'src/utils/helpers';

const getLang = localStorage.getItem('lang') ?? 'en'
const data = setLang(getLang)

export const CONTACT = Object.freeze({
    INTRO: data.CONTACT_INTRO,
    NAME_LABEL: data.CONTACT_NAME_LABEL,
    EMAIL_LABEL: data.CONTACT_EMAIL_LABEL,
    TEXT_LABEL: data.CONTACT_TEXT_LABEL,
})