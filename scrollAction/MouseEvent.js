const appBar = document.getElementById("AppBar");
const bar_height = appBar.clientHeight;
const fixedBar = document.getElementById("fixedBar");
let save_cur = 0;

document.addEventListener("scroll", () => {
  let cur = document.body.scrollTop;

  if (cur - save_cur > 0 || bar_height > cur) {
    fixedBar.classList.remove("scrollUp");
  } else {
    fixedBar.classList.add("scrollUp");
  }

  save_cur = cur.valueOf();
});
