const ratingNumber = document.querySelectorAll(".rating-number");
const numberError = document.querySelector(".number-error");
const button = document.querySelector("#button");
const containerRating = document.querySelector("#container-rating");
const containerThank = document.querySelector("#container-thank");
const cardSelected = document.querySelector("#card-selected");

let selectedNumber = "";

function selectNumber() {
  ratingNumber.forEach(number => {
    number.addEventListener("click", () => {
      for (let i = 0; i < ratingNumber.length; i++) {
        if (ratingNumber[i].classList.contains("selected") 
        && !(number.classList.contains("selected"))) {
          ratingNumber[i].classList.remove("selected");
        }
      }

      if (number.classList.contains("selected")) {
        selectedNumber = number.textContent;
      } else {
        selectedNumber = null;
      }
      
      number.classList.toggle("selected");
      numberError.style = "display: none";
    })
  });
}

function sendRating() {
  button.addEventListener("click", () => {
    if (selectedNumber) {
      cardSelected.textContent = selectedNumber;
      containerRating.style = "display: none";
      containerThank.style = "display: flex";
    } else {
      numberError.style = "display: block";
    }
  })
}



selectNumber();
sendRating();