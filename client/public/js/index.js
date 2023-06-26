const getCurrentTheme = () =>
    localStorage.getItem("mode")
        ? localStorage.getItem("mode")
        : window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";

document.head.insertAdjacentHTML(
    "beforeend",
    `<link rel="icon" href="/GB-${getCurrentTheme()}.svg" />
			<link rel="apple-touch-icon" href="/GB-${getCurrentTheme()}.svg" />`
);