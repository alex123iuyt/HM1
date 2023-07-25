window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".modal-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
  });
});
console.log(data);
// херь какая-то получилась из-за window.addEventListener этого что ли?