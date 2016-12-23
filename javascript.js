console.log("DOM ready!")

// SCROLLING COMMANDS
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;


function triggerBlock1() {

  let projectBlockOne = document.querySelector('.project-block-one');
  let projectBlockTwo = document.querySelector('.project-block-two');
  let projectBlockThree = document.querySelector('.project-block-three');
  let projectBlockFour = document.querySelector('.project-block-four');
  let projectBlockFive = document.querySelector('.project-block-five');
  let projectBlockSix = document.querySelector('.project-block-six');

  let skillsBlockOne = document.querySelector('.skills-block-one');
  let skillsBlockTwo = document.querySelector('.skills-block-two');
  let skillsBlockThree = document.querySelector('.skills-block-three');
  let skillsBlockFour = document.querySelector('.skills-block-four');
  let skillsBlockFive = document.querySelector('.skills-block-five');
  let skillsBlockSix = document.querySelector('.skills-block-six');

  let aboutmeBlockOne = document.querySelector('.aboutme-block-one');
  let aboutmeBlockTwo = document.querySelector('.aboutme-block-two');
  let aboutmeBlockThree = document.querySelector('.aboutme-block-three');
  let aboutmeBlockFour = document.querySelector('.aboutme-block-four');
  let aboutmeBlockFive = document.querySelector('.aboutme-block-five');
  let aboutmeBlockSix = document.querySelector('.aboutme-block-six');

  let contactBlockOne = document.querySelector('.contact-block-one');
  let contactBlockTwo = document.querySelector('.contact-block-two');
  let contactBlockThree = document.querySelector('.contact-block-three');
  let contactBlockFour = document.querySelector('.contact-block-four');
  let contactBlockFive = document.querySelector('.contact-block-five');
  let contactBlockSix = document.querySelector('.contact-block-six');

  if (window.pageYOffset  > 600  && window.pageYOffset < 850) {
    if (counter1 < 1) {
      console.log("Scroll event listening!");
      projectBlockOne.setAttribute('class', 'block one moving-one');
      projectBlockTwo.setAttribute('class', 'block two moving-two');
      projectBlockThree.setAttribute('class', 'block three moving-three');
      projectBlockFour.setAttribute('class', 'block four moving-four');
      projectBlockFive.setAttribute('class', 'block five moving-five');
      projectBlockSix.setAttribute('class', 'block six moving-six');
      counter1 += 1;
    }
  }

  else if (window.pageYOffset > 1400 && window.pageYOffset < 1650) {
    if (counter2 < 1) {
      console.log("Circle scroll event listening!");
      skillsBlockOne.setAttribute('class', 'block one skills-moving');
      skillsBlockTwo.setAttribute('class', 'block two skills-moving');
      skillsBlockThree.setAttribute('class', 'block three skills-moving');
      skillsBlockFour.setAttribute('class', 'block four skills-moving');
      skillsBlockFive.setAttribute('class', 'block five skills-moving');
      skillsBlockSix.setAttribute('class', 'block six skills-moving');
      counter2 += 1;
    }
  }

  else if (window.pageYOffset > 2100 && window.pageYOffset < 2350) {
    if (counter3 < 1) {
      console.log("change colors!");
      aboutmeBlockOne.setAttribute('class', 'block aboutme-change-one');
      aboutmeBlockTwo.setAttribute('class', 'block aboutme-change-two');
      aboutmeBlockThree.setAttribute('class', 'block aboutme-change-three');
      aboutmeBlockFour.setAttribute('class', 'block aboutme-change-four');
      aboutmeBlockFive.setAttribute('class', 'block aboutme-change-five');
      aboutmeBlockSix.setAttribute('class', 'block aboutme-change-six');
      counter3 ++;
    }
  }

  else if (window.pageYOffset > 2800 && window.pageYOffset < 3050) {
    if (counter4 < 1) {
      console.log("spin blocks!");
      contactBlockOne.setAttribute('class', 'block one contact-change');
      contactBlockTwo.setAttribute('class', 'block two contact-change');
      contactBlockThree.setAttribute('class', 'block three contact-change');
      contactBlockFour.setAttribute('class', 'block four contact-change');
      contactBlockFive.setAttribute('class', 'block five contact-change');
      contactBlockSix.setAttribute('class', 'block six contact-change');
      counter4 ++;
    }
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
