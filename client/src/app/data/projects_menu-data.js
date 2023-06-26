import { setLang } from 'src/utils/helpers';

const getLang = localStorage.getItem('lang') ?? 'en'
const data = setLang(getLang)

export const PROJECT_MENU_TITLE =
    [
        data.PROJECT_SUBMENU_ALL,
        data.PROJECT_SUBMENU_ONLINE,
        data.PROJECT_SUBMENU_OFFLINE
    ]
