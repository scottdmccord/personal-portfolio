console.log("DOM ready!")

// SCROLLING COMMANDS


function triggerBlock1() {

  let projectBlockOne = document.querySelector('.project-block-one');
  let projectBlockTwo = document.querySelector('.project-block-two');
  let projectBlockThree = document.querySelector('.project-block-three');
  let projectBlockFour = document.querySelector('.project-block-four');
  let projectBlockFive = document.querySelector('.project-block-five');
  let projectBlockSix = document.querySelector('.project-block-six');

  if (window.pageYOffset  > 600  && window.pageYOffset < 850) {
    console.log("Scroll event listening!");
    projectBlockOne.setAttribute('class', 'block one moving-one');
    projectBlockTwo.setAttribute('class', 'block two moving-two');
    projectBlockThree.setAttribute('class', 'block three moving-three');
    projectBlockFour.setAttribute('class', 'block four moving-four');
    projectBlockFive.setAttribute('class', 'block five moving-five');
    projectBlockSix.setAttribute('class', 'block six moving-six');
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
