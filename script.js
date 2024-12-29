const ratingNumber = document.querySelectorAll(".rating-number");
let selectNumber = "";



ratingNumber.forEach(number => {

  number.addEventListener("click", (event) => {
    for (let i = 0; i < ratingNumber.length; i++) {
      if (ratingNumber[i].classList.contains("selected")) {
        ratingNumber[i].classList.remove("selected");
      }
    }
    
    number.classList.toggle("selected")
    selectNumber = number.textContent;
  })
});
