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

var checkbox = document.querySelector(".page-nav input");
var links = document.querySelectorAll(".page-nav a");

initListeners();

function initListeners() {
	window.addEventListener("resize", function () {
		if (window.innerWidth > 499) {
			checkbox.checked = false;
		}
	});
	document.addEventListener("click", function (event) {
		if (!document.querySelector(".page-nav").contains(event.target)) {
			checkbox.checked = false;
		}
	});
	document.addEventListener("keyup", function (event) {
		switch (event.key) {
			case "Escape": {
				checkbox.checked = false;
				break;
			}
			case "Tab": {
				if (checkbox.contains(event.target)) {
					checkbox.checked = !checkbox.checked;
					if (checkbox.checked) {
						links[0].focus();
					} else {
						document.querySelector("a").focus();
					}
					break;
				}
				var focused = false;
				for (var i = 0; i < links.length; i++) {
					if (links[i].contains(event.target)) {
						focused = true;
					}
				}
				checkbox.checked = focused;
				break;
			}
		}
	});
}
