import { setLang } from 'src/utils/helpers';

const getLang = localStorage.getItem('lang') ?? 'en'
const data = setLang(getLang)

export const CLIENTS_MENU_TITLE =
    [
        data.CLIENTS_SUBMENU_ALL,
        data.CLIENTS_SUBMENU_READ,
        data.CLIENTS_SUBMENU_UNREAD
    ]


export const CLIENTS_MENU_INFO = [
    data.CLIENTS_SUBMENU_INFO_NAME,
    data.CLIENTS_SUBMENU_INFO_EMAIL,
    data.CLIENTS_SUBMENU_INFO_DATE,
    data.CLIENTS_SUBMENU_INFO_CONTENT,
    data.CLIENTS_SUBMENU_INFO_ACTIONS,
]