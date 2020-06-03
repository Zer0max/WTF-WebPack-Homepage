import '../scss/main.scss';

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
  console.log(hammburegerElement);

  hammburegerElement.addEventListener("click", () => {
    const navigationElement = document.querySelector(".page-nav-header--js");
    console.log(navigationElement);
    navigationElement.classList.toggle("page-nav-header--open");
  });
}

this.printHackerNoteInConsole();
this.setCopyritheInformationIntoElement(".footer-copyright--js");
this.initHammburgerMenu();
