const burger = document.querySelector(".hamburger");
const mobileNavigation = document.querySelector(".mobile-navigation");

const openBurger = () => {
  mobileNavigation.style.visibility = "visible";
  overlay.style.visibility = "visible";
};

const closeModalsAndBurger = (event) => {
  if (!event.target.closest(".modalka")) {
    closeModal();
  }
};
// отдельно делал бургер
