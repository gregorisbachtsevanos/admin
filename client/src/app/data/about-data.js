import { setLang } from 'src/utils/helpers';

const getLang = localStorage.getItem('lang') ?? 'en'
const data = setLang(getLang)

export const ABOUT = Object.freeze({
    INTRO: data.ABOUT_INTRO,
    SKILLS: {
        JS_JQUERY_TS: 'images/js-jquery-ts.png',
        REACT_NEXT_DARK: 'images/react-next-dark.png',
        REACT_NEXT_LIGHT: 'images/react-next-light.png',
        NODE_EXPRESS_DARK: 'images/node-expressjs-dark.png',
        NODE_EXPRESS_LIGHT: 'images/node-expressjs-light.png',
        CSS: 'images/css.png',
        DB: 'images/db.png',
        TOOLS: 'images/tools.png',
    }
})