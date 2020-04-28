let hb = document.querySelector("#navbar-burger");
let nav = document.querySelector("#navbar-menu");

hb.addEventListener("click", onClick);

function onClick() {
  hb.classList.toggle("is-active");
  nav.classList.toggle("is-active");
}

let form = document.querySelector("form");
let sumbitButton = document.querySelector(".button");

sumbitButton.addEventListener("click", function (e) {
  e.preventDefault();
  let inputValues = form.elements;
  fetch(
    `https://still-spire-37210.herokuapp.com/positions.json?description=${inputValues.description.value}&localion=${inputValues.location.value}&full_time=${inputValues.full_time.checked}`
  )
    .then((response) => response.json())
    .then((data) => {
      data.map((result) => {
        console.log(result);
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
