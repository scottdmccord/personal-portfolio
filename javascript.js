console.log("DOM ready!")

// SCROLLING COMMANDS

function triggerBlock1() {
  if (window.pageYOffset > 500) {
    alert ('scrolled!');
  }
}

window.onscroll = triggerBlock1


// ABOUT ME LINK
aboutMeClick = document.querySelector(".nav-about");
aboutMeDiv = document.querySelector(".aboutMeDiv");

aboutMeClick.addEventListener('click', () => {
  console.log("Clicked!");
  aboutMeDiv.scrollIntoView({
    behaviour: 'smooth'
  })
})

// SKILLS LINK
skillsClick = document.querySelector(".nav-skills");
skillsDiv = document.querySelector(".skillsDiv");

skillsClick.addEventListener('click', () => {
  console.log("Clicked!");
  skillsDiv.scrollIntoView({
    behaviour: 'smooth'
  })
})

// PROJECTS LINK
projectsClick = document.querySelector(".nav-projects");
projectsDiv = document.querySelector(".projectsDiv");

projectsClick.addEventListener('click', () => {
  console.log("Clicked!");
  projectsDiv.scrollIntoView({
    behaviour: 'smooth'
  })
})

// CONTACT LINK
contactClick = document.querySelector(".nav-contact");
contactDiv = document.querySelector(".contactDiv");

contactClick.addEventListener('click', () => {
  console.log("Clicked!");
  contactDiv.scrollIntoView({
    behaviour: 'smooth'
  })
})


// Event listener to open and close the puzzle-d modal
puzzledTitle = document.querySelector(".puzzled-link");
puzzledModal = document.querySelector(".puzzled-display");
puzzleClose = document.querySelector(".puzzle-close")

puzzledTitle.addEventListener('click', () => {
  puzzledModal.style.display = "block"
});

puzzleClose.addEventListener('click', () => {
  puzzledModal.style.display = "none"
});

// Event listener to open and close the neighborhood eats modal
neighborhoodTitle = document.querySelector(".neighborhood-link");
neighborhoodModal = document.querySelector(".neighborhood-display");
neighborhoodClose = document.querySelector(".neighborhood-close");

neighborhoodTitle.addEventListener('click', () => {
  neighborhoodModal.style.display = "block"
});

neighborhoodClose.addEventListener('click', () => {
  neighborhoodModal.style.display = "none"
});

// Event listener to open and close the robot rivalry modal
robotTitle = document.querySelector(".robot-link");
robotModal = document.querySelector(".robot-display");
robotClose = document.querySelector(".robot-close");

robotTitle.addEventListener('click', () => {
  robotModal.style.display = "block"
});

robotClose.addEventListener('click', () => {
  robotModal.style.display = "none"
});
