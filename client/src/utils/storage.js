import Cookies from 'js-cookie';

// Storing Refresh Token
// Cookies.set('refreshToken', 'your_refresh_token_here', { expires: 14, path: '/' });

export const setCookie = (name, value, expireTime) => {
    return Cookies.set(name, value, { expires: expireTime, path: '/' });
}

export const getCookie = (name) => Cookies.get(name);

export const removeCookie = (name) => Cookies.remove(name);

export const setLocalStorage = (name, value) => {
    return localStorage.setItem(name, value);
}

export const getLocalStorage = (name, parsed) => {
    if (parsed) return JSON.parse(localStorage.getItem(name));
    return localStorage.getItem(name);
}

export const removeLocalStorage = (name) => {
    return localStorage.removeItem(name);
}

export const setStorage = (lang, dispatch, type, option1, option2) => {
    let name = type.toLowerCase();
    let value = lang === option1 ? option2 : option1
    setLocalStorage(name, value);

    window.location.reload(true);
    if (lang === option1) {
        dispatch({ type: type, payload: option2 });
    } else if (lang === option2) {
        dispatch({ type: type, payload: option1 });
    }
}
