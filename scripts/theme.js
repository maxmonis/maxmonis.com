var darkModeToggle = document.createElement("button")
darkModeToggle.id = "dark-mode-toggle"
darkModeToggle.setAttribute("aria-label", "toggle dark mode")
darkModeToggle.addEventListener("click", toggleTheme)
document.querySelector(".page-footer").appendChild(darkModeToggle)

var theme = localStorage.getItem("maxmonis.com_theme")
if (!theme) {
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  theme = prefersDark ? "dark" : "light"
}
setTheme(theme)

function setTheme(newTheme) {
  theme = newTheme
  localStorage.setItem("maxmonis.com_theme", newTheme)
  if (newTheme === "dark") {
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
