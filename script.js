const ratingNumber = document.querySelectorAll(".rating-number");
const submitError = document.querySelector(".number-error");
const button = document.querySelector("#button");
const ratingContainer = document.querySelector("#container-rating");
const appreciationContainer = document.querySelector("#container-thank");
const selectedRating = document.querySelector("#card-selected");

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
      
      number.classList.toggle("selected");
      submitError.style = "display: none";

      if (number.classList.contains("selected")) {
        selectedNumber = number.textContent;
      } else {
        selectedNumber = null;
      }
      
    })
  });
}

function submitRating() {
  button.addEventListener("click", () => {
    if (selectedNumber) {
      selectedRating.textContent = selectedNumber;
      ratingContainer.style = "display: none";
      appreciationContainer.style = "display: flex";
    } else {
      submitError.style = "display: block";
    }
  })
}

selectNumber();
submitRating();