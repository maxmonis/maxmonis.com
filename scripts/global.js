document.body.classList.remove("noscript");

var theme = localStorage.getItem("maxmonis.com_theme");
if (theme !== "dark" && theme !== "light")
	theme = window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";

var toggle = document.createElement("button");
toggle.classList.add("dark-mode-toggle");
toggle.setAttribute("aria-label", "toggle dark mode");
toggle.addEventListener("click", function () {
	theme = theme === "light" ? "dark" : "light";
	localStorage.setItem("maxmonis.com_theme", theme);
	applyTheme();
});
document.querySelector(".page-footer").appendChild(toggle);

applyTheme();

function applyTheme() {
	document.body.classList.toggle("dark", theme === "dark");
	toggle.innerText = theme === "dark" ? "🌛" : "🌞";
}

var checkbox = document.querySelector("#menu-toggle");
window.addEventListener("resize", function () {
	if (window.innerWidth > 699) checkbox.checked = false;
});
document.addEventListener("click", function (event) {
	if (!document.querySelector(".page-nav").contains(event.target))
		checkbox.checked = false;
});
document.addEventListener("keyup", function (event) {
	if (event.key === "Escape") checkbox.checked = false;
	else if (event.key === "Tab")
		checkbox.checked = document.querySelector(".page-nav a:focus") !== null;
});

var observer = new IntersectionObserver(function (entries) {
	for (var i = 0; i < entries.length; i++)
		entries[i].target.classList.toggle("show", entries[i].isIntersecting);
});
var sections = document.querySelectorAll(".slide-in");
for (var i = 0; i < sections.length; i++) observer.observe(sections[i]);

var oldScrollY = window.scrollY;
window.addEventListener(
	"scroll",
	function () {
		var newScrollY = window.scrollY;
		var hidden = newScrollY > 10 && newScrollY > oldScrollY;
		if (hidden) checkbox.checked = false;
		document.querySelector(".page-header").classList.toggle("hidden", hidden);
		oldScrollY = newScrollY;
	},
	{ passive: true }
);
