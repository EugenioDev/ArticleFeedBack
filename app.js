const tags = document.querySelectorAll("small");
const container = document.querySelector(".container");
const popUp = document.querySelector(".pop-up-like");
const buttons = document.querySelectorAll(".icons img");

//Loop buttons and add a click event
tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    popUp.style.opacity = 1;
    selectlikes();
  });
});

function selectlikes() {
  buttons.forEach((button) => {

    let text = document.querySelector('.feed')
    
    button.addEventListener("click", () => {
      if (button.classList.contains("like")) {
        text.innerHTML = 'Grazie per il feedback'
        popUp.style.opacity = 0;
      }

      if (button.classList.contains("dislike")) {
        popUp.style.opacity = 0;
        text.innerHTML = 'Ci dispiace del tuo feedback'
      }
    });
  });
}

