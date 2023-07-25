window.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modalka");
  const overlay = document.querySelector(".overlay");
  const openModalBtn = document.querySelector(".f-l-button");
  const closeModalBtn = document.querySelector(".close-btn");
  const burger = document.querySelector(".hamburger");
  const mobileNavigation = document.querySelector(".mobile-navigation");
  const closeBurgerBtn = document.querySelector(".close-icon");

  const openModal = () => {
    modal.style.display = "block";
    overlay.style.visibility = "visible";
  };

  const closeModal = () => {
    modal.style.display = "none";
    overlay.style.visibility = "hidden";
  };

  const openBurger = () => {
    mobileNavigation.style.visibility = "visible";
    overlay.style.visibility = "visible";
  };

  const closeBurger = () => {
    mobileNavigation.style.visibility = "hidden";
    overlay.style.visibility = "hidden";
  };
  const closeModalsAndBurger = (event) => {
    if (event.target.classList.contains("overlay")) {
      closeModal();
      closeBurger();
    }
  };

  overlay.addEventListener("click", closeModalsAndBurger);
  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
  burger.addEventListener("click", openBurger);
  closeBurgerBtn.addEventListener("click", closeBurger);
});
