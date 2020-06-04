import "../scss/main.scss";

/* place your code below */

function printHackerNoteInConsole() {
  console.log("Oj ty niegrzeczny tutaj się nie zalgąda - ty hakierze 🚀");
}

function setCopyritheInformationIntoElement(fotterSelector) {
  const copyritheElement = document.querySelector(".footer-copyright--js");
  const year = new Date().getFullYear();

  copyritheElement.innerHTML = `Copyright © ${year} Mateusz Suberlak - `;
}

function initHammburgerMenu() {
  const hammburegerElement = document.querySelector(".hammburger--js");

  if (hammburegerElement) {
    hammburegerElement.addEventListener("click", () => {
      const navigationElement = document.querySelector(".page-nav-header--js");
      console.log(navigationElement);
      navigationElement.classList.toggle("page-nav-header--open");
    });
  }
}

function initDarkmode() {
  let isDarkModeOn = false;
  const darkModeTriggerElement = document.querySelector(
    ".dark-mode-trigger--js"
  );
  if (darkModeTriggerElement) {
    darkModeTriggerElement.addEventListener("click", () => {
      if (isDarkModeOn) {
        document.documentElement.style.setProperty(
          "--background-color",
          "#9fb8ad"
        );
        document.documentElement.style.setProperty(
          "--background-image",
          "linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)"
        );
        document.documentElement.style.setProperty("--text-color", "black");
      } else {
        document.documentElement.style.setProperty(
          "--background-color",
          "#485461"
        );
        document.documentElement.style.setProperty(
          "--background-image",
          "linear-gradient(315deg, #485461 0%, #28313b 74%)"
        );
        document.documentElement.style.setProperty("--text-color", "white");
      }
      isDarkModeOn = !isDarkModeOn;
    });
  }
}

initDarkmode();
printHackerNoteInConsole();
setCopyritheInformationIntoElement(".footer-copyright--js");
initHammburgerMenu();
