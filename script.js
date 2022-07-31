const main = document.querySelector(".main");
const btnSubmit = document.querySelector(".btn_submit");
const imgStar = document.querySelector(".img_star");
const title = document.querySelector(".title");
const desc = document.querySelector(".desc");
const ratingContainer = document.querySelector(".rating_container");
const imgThankYou = document.querySelector(".img_thank-you");
const selected = document.querySelector(".selected");
const thankYou = document.querySelector(".thank_you");
const thankDesc = document.querySelector(".thank_desc");
const defaultRating = document.querySelector(".myRating").textContent;
let newRating;

ratingContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".rating");
  if (!clicked) return;

  // remove active classes
  [...clicked.parentElement.children].forEach((click) => {
    if (click != clicked) click.classList.remove("rating--active");
  });

  clicked.classList.add("rating--active");
});

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  imgStar.classList.add("hidden");
  title.classList.add("hidden");
  desc.classList.add("hidden");
  ratingContainer.classList.add("hidden");
  btnSubmit.classList.add("hidden");
  main.classList.add("center");

  imgThankYou.classList.remove("hidden");
  selected.classList.remove("hidden");
  thankYou.classList.remove("hidden");
  thankDesc.classList.remove("hidden");

  const active = document.querySelectorAll(".rating");

  active.forEach((d, i) => {
    if (d.classList.contains("rating--active")) {
      newRating = i + 1;
      document.querySelector(".myRating").textContent = newRating;
    }
  });
});
