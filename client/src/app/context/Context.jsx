import { createContext, useReducer } from "react";
import { useThemeDetector } from "../../hooks/useThemeDetector";
import { getLocalStorage } from "src/utils/storage";

export const Context = createContext();

export const Reducer = (state, action) => {
	switch (action.type) {
		case "THEME":
			return { ...state, theme: action.payload };
		case "LANG":
			return { ...state, lang: action.payload };
		case "USER":
			return { ...state, user: action.payload };
		default:
			return state;
	}
};

export const ContextProvider = ({ children }) => {
	const { isDarkTheme } = useThemeDetector();

	const pcTheme = isDarkTheme ? "dark" : "light";

	const [state, dispatch] = useReducer(Reducer, {
		theme: getLocalStorage("theme") ?? pcTheme ?? "dark",
		lang: getLocalStorage("lang") ?? "en",
		user: getLocalStorage("user", true) ?? null,
	});

	console.log(state);
	return (
		<Context.Provider value={{ ...state, dispatch }}>
			{children}
		</Context.Provider>
	);
};
