var dark_mode_toggle = document.createElement("button")
dark_mode_toggle.id = "dark-mode-toggle"
dark_mode_toggle.setAttribute("aria-label", "toggle dark mode")
dark_mode_toggle.addEventListener("click", toggleTheme)
document.querySelector(".page-footer").appendChild(dark_mode_toggle)

var theme = localStorage.getItem("maxmonis.com_theme")
if (theme !== "dark" && theme !== "light") {
  var prefers_dark = window.matchMedia("(prefers-color-scheme: dark)").matches
  theme = prefers_dark ? "dark" : "light"
}
setTheme(theme)

function setTheme(new_theme) {
  theme = new_theme
  localStorage.setItem("maxmonis.com_theme", new_theme)
  if (new_theme === "dark") {
    document.body.classList.add("dark")
    document.querySelector("#dark-mode-toggle").innerText = "🌛"
  } else {
    document.body.classList.remove("dark")
    document.querySelector("#dark-mode-toggle").innerText = "🌞"
  }
}

function toggleTheme() {
  setTheme(theme === "light" ? "dark" : "light")
}
