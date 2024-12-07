const lists = document.querySelectorAll(".list-with-previews");

lists.forEach((list) => {
  const current_list_id = list.id;
  const current_list = list.children;
  for (var i = 0; i < current_list.length; i++) {
    const list_element = current_list[i];
    list_element.addEventListener("mouseenter", () => {
      list_element_show_preview(list_element, current_list_id);
    });
    list_element.addEventListener("click", () => {
      list_element_show_preview(list_element, current_list_id);
    });
  }
});

function list_element_show_preview(element, list_id) {
  lists.forEach((list) => {
    if (list_id == list.id) {
      const current_list = list.children;
      for (var i = 0; i < current_list.length; i++) {
        const list_element = current_list[i];
        list_element.classList.remove("show-preview");
      }
    }
  });
  element.classList.add("show-preview");
}
