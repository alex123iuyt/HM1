const modal = document.querySelector(".modalka");
const overlay = document.querySelector(".overlay");

const openModal = () => {
  modal.style.display = "block";
  overlay.style.visibility = "visible";
};

const closeModal = () => {
  modal.style.display = "none";
  overlay.style.visibility = "hidden";
};
// отдельно делал модалку