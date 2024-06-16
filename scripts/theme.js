var theme = localStorage.getItem("maxmonis.com_theme");
if (theme !== "dark" && theme !== "light") {
	theme = window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

createToggle();
applyTheme();

function applyTheme() {
	if (theme === "dark") {
		document.body.classList.add("dark");
		document.querySelector(".dark-mode-toggle").innerText = "🌛";
	} else {
		document.body.classList.remove("dark");
		document.querySelector(".dark-mode-toggle").innerText = "🌞";
	}
}

function createToggle() {
	var toggle = document.createElement("button");
	toggle.classList.add("dark-mode-toggle");
	toggle.setAttribute("aria-label", "toggle dark mode");
	toggle.addEventListener("click", function () {
		theme = theme === "light" ? "dark" : "light";
		localStorage.setItem("maxmonis.com_theme", theme);
		applyTheme();
	});
	document.querySelector(".page-footer").appendChild(toggle);
}
