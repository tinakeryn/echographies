//? --> Fonctions génériques
//* Retirer la class hidden
function showNextElement(buttonId) {
  const button = document.getElementById(buttonId);
  if (button) {
    const nextElement = button.nextElementSibling;
    if (nextElement && nextElement.classList.contains("hidden")) {
      nextElement.classList.remove("hidden");
    }
  }
}
//* Ajouter la class hidden
function hideElements(elementIds) {
  elementIds.forEach(function (id) {
    const element = document.getElementById(id);
    if (element) {
      element.classList.add("hidden");
    }
  });
}
//* Remonter en haut avec la flèche
//! Faire apparaître la flèche quand on scroll vers le bas
window.addEventListener("scroll", function () {
  const arrowUp = document.getElementById("arrowUp");
  if (window.scrollY > 100) {
    arrowUp.style.display = "block";
  } else {
    arrowUp.style.display = "none";
  }
});
//! Scroller vers le haut au clic sur la flèche
document.getElementById("arrowUp").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
//* Faire défiler la fenêtre vers une section spécifique
function scrollToSection(buttonId, sectionId) {
  const button = document.getElementById(buttonId);
  const section = document.getElementById(sectionId);

  button.addEventListener("click", function () {
    section.scrollIntoView({ behavior: "smooth" });
  });
}
//? Fonctions génériques <--

//? Afficher toute la section au clic sur le bouton
scrollToSection("generateBloodTypeButton", "bloodTypeSection");
scrollToSection("generateECBUGermButton", "ecbuSection");
scrollToSection("generateECBCGermButton", "ecbcSection");
scrollToSection("generateORLGermButton", "orlSection");
scrollToSection("generateHGPOButton", "hgpoSection");
scrollToSection("generateT21Button", "t21Section");
//? Afficher toute la section au clic sur le bouton <--

//? Masquer la section au clic sur la croix
document.getElementById("ecbuClose").addEventListener("click", function () {
  hideElements(["ecbuClose", "ecbuResult", "ecbuATBResult"]);
});
document.getElementById("ecbcClose").addEventListener("click", function () {
  hideElements(["ecbcClose", "ecbcResult", "ecbcATBResult"]);
});
document.getElementById("orlClose").addEventListener("click", function () {
  hideElements(["orlClose", "orlResult", "orlATBResult"]);
});
document.getElementById("hgpoClose").addEventListener("click", function () {
  hideElements(["hgpoClose", "hgpoResult"]);
});
document.getElementById("t21Close").addEventListener("click", function () {
  hideElements(["t21Close", "t21Result"]);
});
//? Masquer la section au clic sur la croix <--
