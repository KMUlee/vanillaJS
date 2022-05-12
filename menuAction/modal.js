const modal = document.getElementById("modal");
const modal_overay = document.getElementById("overay");
const modal_content = document.getElementById("content");
const closemodal = modal_content.querySelector("button");

const handlemodal = () => {
  modal.classList.toggle("open");
  modal_overay.classList.toggle("open");
  modal_content.classList.toggle("open");
};

modal_overay.addEventListener("click", handlemodal);
closemodal.addEventListener("click", handlemodal);
