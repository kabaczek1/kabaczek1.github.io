const toggle_button = document.getElementById("menu-toggle");
const nav_panel = document.getElementById("nav-panel");
const main_content = document.getElementById("main-content");
const icon_x = document.getElementById("icon-x");
const icon_menu = document.getElementById("icon-menu");

toggle_button.addEventListener("click", toggle_menu);
nav_panel.addEventListener("click", hide_menu);

function toggle_menu() {
  if (nav_panel.classList.contains("-translate-x-full")) {
    show_menu();
  } else {
    hide_menu();
  }
}

function show_menu() {
  nav_panel.classList.remove("-translate-x-full");
  icon_x.classList.remove("hidden");
  icon_menu.classList.add("hidden");
}

function hide_menu() {
  nav_panel.classList.add("-translate-x-full");
  icon_x.classList.add("hidden");
  icon_menu.classList.remove("hidden");
}
