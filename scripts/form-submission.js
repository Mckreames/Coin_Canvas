`use strict`;

// Stop the submit button from reloading the page
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });

// Modal window functionality

// Modal Window
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClosedModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

// Open Modal
const openModal = function () {
  console.log("open Modal called");
  modal.classList.remove(`hidden`);
  modal.classList.add(`d-flex`);
  overlay.classList.remove(`hidden`);
};

// Close Modal
const closeModal = function () {
  console.log("close Modal called");
  modal.classList.remove(`d-flex`);
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(`click`, openModal);
  //   modal.style.display = `block`;
}

btnClosedModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (e) {
  console.log(e.key);

  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});
