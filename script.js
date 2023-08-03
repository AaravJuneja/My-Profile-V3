// Function to handle smooth scrolling on navigation links
function smoothScroll(target) {
  const element = document.querySelector(target);
  const headerHeight = document.querySelector('header').offsetHeight;
  const elementPosition = element.offsetTop - headerHeight;

  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: elementPosition,
  });
}

// Function to update the text above "About Me"
function updateWelcomeText() {
  const welcomeSection = document.getElementById('home');
  const welcomeText = welcomeSection.querySelector('p');
  welcomeText.textContent = "Welcome to my profile. I'm Aarav, a passionate web developer and student currently studying in Class 9 J at Amity International School, Sector 46, Gurgaon.";
}

// Function to show Discord username
function showDiscordUsername() {
  const discordButton = document.querySelector("#discord-button");
  discordButton.textContent = "notaarav09";
}

// Function to redirect to GitHub profile
function redirectToGitHub() {
  window.location.href = "https://github.com/AaravJuneja";
}

// Function to redirect to email address
function redirectToEmail() {
  window.location.href = "mailto:aarav.juneja2044@gmail.com";
}

// Add smooth scroll functionality to navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href');
    smoothScroll(target);
  });
});

// Call the function to update the welcome text
updateWelcomeText();