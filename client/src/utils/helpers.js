import { el } from '../assets/languages/el';
import { en } from '../assets/languages/en';

export const setLang = (lang) => {
    switch (lang) {
        case 'en':
            return en;
        case 'el':
            return el;
        default:
            break;
    }
}

export const queryParamsProcessing = (query) => {
    return query.toLowerCase().split(' ')[0]
}

export const pageReload = () => window.location.reload();