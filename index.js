let hb = document.querySelector("#navbar-burger");
let nav = document.querySelector("#navbar-menu");

hb.addEventListener("click", onClick);

function onClick() {
  hb.classList.toggle("is-active");
  nav.classList.toggle("is-active");
}

let form = document.querySelector("form");
let sumbitButton = document.querySelector(".button");
let infoContainer = document.querySelector("table");
let infoElement = document.querySelector("tr");

function getElement(result) {
  let newElement = infoElement.cloneNode(true);

  let job = newElement.querySelector("a");
  job.textContent = result.title;
  job.href = result.url;

  let loc = newElement.querySelector(".location");
  loc.textContent = result.location;

  let company = newElement.querySelector(".company");
  company.textContent = result.company;
  company.href = result.company_url;

  let fulltime = newElement.querySelector(".fulltime");
  fulltime.textContent = result.type;

  infoContainer.appendChild(newElement);
}

function fullTimeTrue(inputValues) {
  fetch(
    `https://still-spire-37210.herokuapp.com/positions.json?description=${inputValues.description.value}&localion=${inputValues.location.value}&full_time=${inputValues.full_time.checked}`
  )
    .then((response) => response.json())
    .then((data) => {
      data.map((result) => {
        getElement(result);
      });
    });
}

function fullTimeFalse(inputValues) {
  fetch(
    `https://still-spire-37210.herokuapp.com/positions.json?description=${inputValues.description.value}&localion=${inputValues.location.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      data.map((result) => {
        getElement(result);
      });
    });
}

sumbitButton.addEventListener("click", function (e) {
  e.preventDefault();
  infoContainer.innerHTML = "";
  let inputValues = form.elements;

  if (inputValues.full_time.checked) {
    fullTimeTrue(inputValues);
  } else {
    fullTimeFalse(inputValues);
  }
});
