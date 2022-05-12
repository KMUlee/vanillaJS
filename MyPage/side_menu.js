const side_menu = document.getElementById("side_menu");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close_menu");

const handleSideMenu = () => {
  side_menu.classList.toggle("open");
};

openButton.addEventListener("click", handleSideMenu);
closeButton.addEventListener("click", handleSideMenu);
