const largeCard = document.querySelector(".large-card");
const swapButtons = document.querySelectorAll(".card--button");
const signSection = document.querySelector(".signs");

// Initially attach event listeners
document.addEventListener("DOMContentLoaded", () => {
  swapButtons.forEach((button) => {
    button.addEventListener("click", swapContent);
  });
});

function swapContent() {
  const smallCard = this.closest(".small-card");
  const screenWidth = window.innerWidth;

  if (screenWidth > 650) {
    document.startViewTransition(() => {
      const tempContent = largeCard.innerHTML;
      largeCard.innerHTML = smallCard.innerHTML;
      smallCard.innerHTML = tempContent;
      largeCard.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    });
  } else {
    const cardList = smallCard.querySelector(".card--list");
    cardList.style.display = "block";
  }
}

function resetCards() {
  swapButtons.forEach((button) => {
    button.removeEventListener("click", swapContent);
    button.addEventListener("click", swapContent);
  });
}
