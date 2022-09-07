const newspaperSpinning = [
  { transform: " scale(0)" },
  { transform: " scale(1)" },
];

const newspaperTiming = {
  duration: 100,
  iterations: 1,
};

const newspaper = document.querySelector(".newspaper");

newspaper.addEventListener("click", () => {
  newspaper.animate(newspaperSpinning, newspaperTiming);
});
