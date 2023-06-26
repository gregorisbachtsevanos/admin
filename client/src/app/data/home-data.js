import { setLang } from 'src/utils/helpers';

const getLang = localStorage.getItem('lang') ?? 'en'
const data = setLang(getLang)

export const HOME = Object.freeze({
    NAME: data.HOME_NAME,
    TITLE: data.HOME_TITLE,
    IMAGE: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
})