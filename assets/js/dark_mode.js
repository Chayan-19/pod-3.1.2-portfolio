let body = document.getElementsByTagName("body")[0];
let checkbox = document.getElementById("toggle-theme");

const darkTheme = "darkmode";

window.addEventListener("load", () => {
  if (
    localStorage.getItem("theme") == null &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    localStorage.setItem("theme", darkTheme);
  }
  set_theme();
});

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    body.classList.add(darkTheme);
    localStorage.setItem("theme", darkTheme);
  } else {
    body.classList.remove(darkTheme);
    localStorage.setItem("theme", "default");
  }
});

set_theme = () => {
  var theme = localStorage.getItem("theme");
  if (theme == darkTheme) {
    document.body.classList.add(darkTheme);
    checkbox.checked = true;
  }
};
