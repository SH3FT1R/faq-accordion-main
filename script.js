const toggleBtns = document.querySelectorAll(".toggle-btn");
const toggleBtnSeconds = document.querySelectorAll(".toggle-btn-second");
const paragraphs = document.querySelectorAll(".text-toggle");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", () => {
    toggleBtns[i].classList.toggle("hidden");
    toggleBtnSeconds[i].classList.toggle("hidden");
    paragraphs[i].classList.toggle("hidden");
  });
}

for (let i = 0; i < toggleBtnSeconds.length; i++) {
  toggleBtnSeconds[i].addEventListener("click", () => {
    toggleBtns[i].classList.toggle("hidden");
    toggleBtnSeconds[i].classList.toggle("hidden");
    paragraphs[i].classList.toggle("hidden");
  });
}
