console.log("DOM ready!")


// Event listener to open and close the puzzle-d
puzzledTitle = document.querySelector(".puzzled-link");
puzzledModal = document.querySelector(".puzzled-display");
modalClose = document.querySelector(".close-modal")

puzzledTitle.addEventListener('click', () => {
  puzzledModal.style.display = "block"
});

modalClose.addEventListener('click', () => {
  puzzledModal.style.display = "none"
});
