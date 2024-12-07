const panels = document.getElementsByClassName("panel");

const panel_title = [];
panel_title[0] = document.getElementById("nav_about");
panel_title[1] = document.getElementById("nav_projects");
panel_title[2] = document.getElementById("nav_blog");
panel_title[3] = document.getElementById("nav_contact");

const desktop_breakpoint = 768;

var panel_scroll_position = [];
panel_scroll_position[0] = 0;
var current_panel = 0;

var is_resizing = false;

const panel_count = panels.length;

get_panel_scroll_position();

const url = new URL(document.URL);
if (url.hash) {
  set_current_panel_based_on_name(url.hash.slice(1));
}

const resizeObserver = new ResizeObserver(on_window_resize);
resizeObserver.observe(document.body);

var window_resize_timeout = 300;
var window_resize_timeout_function;

function on_window_resize() {
  is_resizing = true;

  clearTimeout(window_resize_timeout_function);
  window_resize_timeout_function = setTimeout(
    on_window_resize_end,
    window_resize_timeout
  );
}

function on_window_resize_end() {
  get_panel_scroll_position();
  if (window.innerWidth >= desktop_breakpoint) {
    jump_to_current_panel();
  }
  is_resizing = false;
}

function jump_to_current_panel() {
  window.scroll({
    top: panel_scroll_position[current_panel],
    left: window.scrollX,
    behavior: "smooth",
  });
}

function get_panel_scroll_position() {
  const current_scroll_position = window.scrollY;
  var i;
  for (i = 0; i < panel_count; i++) {
    panel_scroll_position[i] =
      panels[i].getBoundingClientRect().top + current_scroll_position;
  }
}

function change_current_panel(new_panel) {
  panel_title[current_panel].classList.remove("text-emerald-300");
  panel_title[new_panel].classList.add("text-emerald-300");
  current_panel = new_panel;
}
change_current_panel(current_panel);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        panel_intersection(entry);
      }
    });
  },
  { rootMargin: "-35% -30% -64% -30%", threshold: 0 }
);

for (var i = 0; i < panel_count; i++) {
  observer.observe(panels[i]);
}

function panel_intersection(entry) {
  if (is_resizing) return;
  var name = entry.target.id;
  set_current_panel_based_on_name(name);
}

function set_current_panel_based_on_name(name) {
  switch (name) {
    case "about":
      change_current_panel(0);
      break;
    case "projects":
      change_current_panel(1);
      break;
    case "blog":
      change_current_panel(2);
      break;
    case "contact":
      change_current_panel(3);
      break;
  }
}
