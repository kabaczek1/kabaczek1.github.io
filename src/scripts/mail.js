const mail_href = document.getElementsByClassName("mail-href-element");
const mail_display = document.getElementsByClassName("mail-display-element");
const mail_icon = document.getElementsByClassName("mail-icon-element");

const part_1 = "bm93YWtvd3NraQ==";
const part_2 = "a3J5c3RpYW4=";
const part_3 = "QHByb3Rvbg==";
const part_4 = "Lm1l";

if (mail_href.length == 0) {
  setTimeout(iconPage, 350);
} else {
  setTimeout(mainPage, 350);
}

function iconPage() {
  console.log("iconpage");
  console.log("mail_icon: ", mail_icon);
  mail_icon[0].style.display = "block";
  mail_icon[0].href = `mailto:${getEmail()}`;
}

function mainPage() {
  console.log("mainpage");
  console.log("mail_href: ", mail_href);
  console.log("mail_display: ", mail_display);
  mail_href[0].href = `mailto:${getEmail()}`;
  mail_href[0].style["pointer-events"] = "auto";
  mail_display[0].innerHTML = `${getEmail()}`;
}

function getEmail() {
  return `${atob(part_1)}${atob(part_2)}${atob(part_3)}${atob(part_4)}`;
}
