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
window.addEventListener("scroll", function () {
  const arrowUp = document.getElementById("arrowUp");
  if (window.scrollY > 100) {
    arrowUp.style.display = "block";
  } else {
    arrowUp.style.display = "none";
  }
});
//* Scroller vers le haut au clic sur la flèche
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

//? --> 1er mois de grossesse
const firstMonthInput = document.getElementById("firstMonthCaseNumber");
const generateFirstMonthButton = document.getElementById("generateFirstMonthButton");

//* Auto-complétion avec suggestions pour l'input
document.addEventListener("DOMContentLoaded", function () {
  const datalist = document.createElement("datalist");
  datalist.id = "firstMonthSuggestions";
  firstMonthInput.setAttribute("list", "firstMonthSuggestions");
  document.body.appendChild(datalist);

  firstMonthInput.addEventListener("input", function () {
    const value = firstMonthInput.value.trim();
    datalist.innerHTML = ""; // Réinitialiser les suggestions

    if (value) {
      let suggestions = [];

      if (value.includes(".")) {
        const [mainCase] = value.split(".");
        if (firstMonthCaseOptions[mainCase]) {
          suggestions = firstMonthCaseOptions[mainCase];
        }
      } else {
        const mainKeys = Object.keys(firstMonthCaseOptions);
        suggestions = mainKeys
          .filter((key) => key.startsWith(value))
          .flatMap((key) => firstMonthCaseOptions[key]);
      }

      suggestions.forEach((suggestion) => {
        const option = document.createElement("option");
        option.value = suggestion;
        datalist.appendChild(option);
      });
    }
  });
});
// Vérification de la validité du cas avant d'exécuter la génération
function isValidFirstMonthCase(inputValue) {
  return Object.values(firstMonthCaseOptions).some((subCases) => subCases.includes(inputValue));
}
// Déclencher la génération avec la touche Entrée
firstMonthInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const value = firstMonthInput.value.trim();
    if (!isValidFirstMonthCase(value)) {
      alert("Veuillez entrer le cas fourni par le labo !");
      return;
    }
    generateFirstMonthButton.click();
  }
});

// Générer l'écho du 1er mois
generateFirstMonthButton.addEventListener("click", function () {
  const selectedSubCase = firstMonthInput.value.trim();

  if (selectedSubCase.match(/^\d+\.\d+$/)) {
    const selectedMainCase = parseInt(selectedSubCase.split(".")[0]); // Extraire le chiffre avant le point

    const selectedResult = echographieResults.find((result) => result.numero == selectedMainCase);

    if (selectedResult) {
      const tableHTML = `
        <table>
          <thead>
            <tr>
              <th>Élément observé</th>
              <th>Observation</th>
              <th>Résultat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tdTitle">Sac Gestationnel</td>
              <td id="sacObs">${selectedResult.sacGestationnel.detail}</td>
              <td id="sacRes">${selectedResult.sacGestationnel.taille}</td>
            </tr>
            <tr>
              <td class="tdTitle">Vésicule Vitelline</td>
              <td id="vesObs">${selectedResult.vesiculeVitelline.detail}</td>
              <td id="vesRes">${selectedResult.vesiculeVitelline.etat}</td>
            </tr>
            <tr>
              <td class="tdTitle">Nombre d'Embryon</td>
              <td id="embObs">${selectedResult.nombreEmbryon.detail}</td>
              <td id="embRes">${selectedResult.nombreEmbryon.nombre}</td>
            </tr>
            <tr>
              <td class="tdTitle">Implantation</td>
              <td id="implObs">${selectedResult.implantation.detail}</td>
              <td id="implRes">${selectedResult.implantation.etat}</td>
            </tr>
            <tr>
              <td class="tdTitle">Anomalie Visible</td>
              <td id="anomObs">${selectedResult.anomalieVisible.detail}</td>
              <td id="anomRes">${selectedResult.anomalieVisible.etat}</td>
            </tr>
          </tbody>
        </table>
        <p id="firstMonthEvolution">${selectedResult.evolution}</p>
      `;

      const resultContainer = document.getElementById("firstMonthResult");
      resultContainer.innerHTML = tableHTML;
      resultContainer.classList.remove("hidden");
      showNextElement("generateFirstMonthButton");
      document.getElementById("firstMonthClose").classList.remove("hidden");
    } else {
      alert("Données non trouvées pour ce cas.");
    }
  } else {
    alert("Veuillez entrer un cas valide au format x.y.");
  }
});

// Gestion du bouton Fermer
document.getElementById("firstMonthClose").addEventListener("click", function () {
  const resultContainer = document.getElementById("firstMonthResult");
  resultContainer.classList.add("hidden");
  hideElements(["firstMonthClose"]);
});
//? 1er mois de grossesse <--

// TODO: Réparer le bouton X pour fermer l'écho "3ème mois" képétée (problème de display ?)
//? --> 3ème mois de grossesse
const thirdMonthInput = document.getElementById("thirdMonthCaseNumber");

//* Auto-complétion avec suggestions pour l'input
document.addEventListener("DOMContentLoaded", function () {
  if (thirdMonthInput) {
    const dataList = document.createElement("datalist");
    dataList.id = "thirdMonthSuggestions";
    thirdMonthInput.setAttribute("list", "thirdMonthSuggestions");
    document.body.appendChild(dataList);

    thirdMonthInput.addEventListener("input", function () {
      const value = thirdMonthInput.value.trim();
      dataList.innerHTML = ""; // Réinitialiser les suggestions

      if (value.includes(".")) {
        const [mainCase] = value.split(".");
        if (firstMonthCaseOptions[mainCase]) {
          firstMonthCaseOptions[mainCase].forEach((subCase) => {
            const option = document.createElement("option");
            option.value = subCase;
            dataList.appendChild(option);
          });
        }
      } else {
        const mainKeys = Object.keys(firstMonthCaseOptions);
        mainKeys.forEach((key) => {
          if (key.startsWith(value)) {
            firstMonthCaseOptions[key].forEach((subCase) => {
              const option = document.createElement("option");
              option.value = subCase;
              dataList.appendChild(option);
            });
          }
        });
      }
    });
  }

  // Exécuter l'eventListener du bouton lors de l'appui sur Enter
  thirdMonthInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Empêcher le formulaire de se soumettre
      generateThirdMonthButton.click(); // Simuler un clic sur le bouton
    }
  });
});

//* Générer un compte-rendu pour le 3ème mois de grossesse
document.getElementById("generateThirdMonthButton").addEventListener("click", function () {
  const caseNumber = document.getElementById("thirdMonthCaseNumber").value.trim();
  const resultContainer = document.getElementById("thirdMonthResult");
  resultContainer.innerHTML = ""; // Réinitialisation du contenu

  if (!caseNumber.match(/^\d+\.\d+$/)) {
    alert("Veuillez entrer un numéro de cas valide au format n.x");
    return;
  }

  // Détermination du numéro principal et du sous-cas
  const [mainCase, subCase] = caseNumber.split(".");
  // Trouver les évolutions pour le sous-cas
  const caseData = evolutionResults.find((result) => result.numero === parseInt(mainCase));

  if (!caseData) {
    alert("Aucun cas trouvé pour le numéro fourni.");
    return;
  }

  // Recherche de l'évolution spécifique pour le sous-cas
  const evolutionData = caseData.evolutions.find(
    (evo) => evo.id === parseFloat(`${mainCase}.${subCase}`)
  );

  if (!evolutionData) {
    alert("Évolution non trouvée pour ce sous-cas.");
    return;
  }

  // Déterminer le nombre de fœtus
  let numberOfFetus = 1; // Par défaut, 1 fœtus
  if (mainCase === "4") numberOfFetus = 2; // Cas de grossesse multiple avec 2 fœtus
  else if (mainCase === "8") numberOfFetus = 3; // Cas de grossesse multiple avec 3 fœtus
  else if (mainCase === "9") numberOfFetus = 4; // Cas de grossesse multiple avec 4 fœtus
  else if (evolutionData.nombreFetus) numberOfFetus = evolutionData.nombreFetus;

  // Traitement des fœtus et affichage des données
  for (let i = 1; i <= numberOfFetus; i++) {
    const table = document.createElement("table");
    const caption = numberOfFetus > 1 ? `<caption>Bébé n°${i}</caption>` : "";
    let fetusData = evolutionData; // Données par défaut pour 1 fœtus

    if (numberOfFetus > 1 && evolutionData.fetus) {
      fetusData = evolutionData.fetus[`bebe${i}`]; // Récupérer les données spécifiques au bébé i
      console.log(fetusData);
    }

    table.innerHTML = `
    ${caption}
    <thead>
      <tr>
        <th>Élément observé</th>
        <th>Observation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tdTitle">Clarté nucale</td>
        <td id="clarteNucale${i}">${fetusData.clarteNucale || "-"}</td>
      </tr>
      <tr>
        <td class="tdTitle">Activité cardiaque</td>
        <td id="activiteCardiaque${i}">${fetusData.activiteCardiaque || "-"}</td>
      </tr>
      <tr>
        <td class="tdTitle">Anomalie morphologique</td>
        <td id="anomalieMorphologique${i}">${fetusData.anomalieMorphologique || "-"}</td>
      </tr>
      <tr>
        <td class="tdTitle">Quantité de liquide amniotique</td>
        <td id="quantiteLiquideAmniotique${i}">${fetusData.liquideAmniotique || "-"}</td>
      </tr>
    </tbody>
  `;
    resultContainer.appendChild(table);
  }

  // Ajouter le paragraphe d'évolution
  const evolutionParagraph = document.createElement("p");
  evolutionParagraph.className = "paragraphReport";
  evolutionParagraph.innerHTML = `Cas n°<span class="important">${evolutionData.id}</span> <br><br>${evolutionData.evolution}`;
  resultContainer.appendChild(evolutionParagraph);

  // Afficher la section des résultats
  resultContainer.classList.remove("hidden");
  document.getElementById("thirdMonthClose").classList.remove("hidden");
});

//* Gestion du bouton Fermer
document.getElementById("thirdMonthClose").addEventListener("click", function () {
  const resultContainer = document.getElementById("thirdMonthResult");
  resultContainer.classList.add("hidden");
  hideElements(["thirdMonthClose"]);
});
//? 3ème mois de grossesse <--

//? --> 5ème mois de grossesse
const fifthMonthInput = document.getElementById("fifthMonthCaseNumber");
const generateFifthMonthButton = document.getElementById("generateFifthMonthButton");

//* Auto-complétion avec suggestions pour l'input
document.addEventListener("DOMContentLoaded", function () {
  const dataList = document.createElement("datalist");
  dataList.id = "fifthMonthSuggestions";
  fifthMonthInput.setAttribute("list", "fifthMonthSuggestions");
  document.body.appendChild(dataList);

  fifthMonthInput.addEventListener("input", function () {
    const value = fifthMonthInput.value.trim();
    dataList.innerHTML = ""; // Réinitialiser les suggestions

    if (value.includes(".")) {
      const [mainCase] = value.split(".");
      if (fifthMonthCaseOptions[mainCase]) {
        fifthMonthCaseOptions[mainCase].forEach((subCase) => {
          const option = document.createElement("option");
          option.value = subCase;
          dataList.appendChild(option);
        });
      }
    } else {
      const mainKeys = Object.keys(fifthMonthCaseOptions);
      mainKeys.forEach((key) => {
        if (key.startsWith(value)) {
          fifthMonthCaseOptions[key].forEach((subCase) => {
            const option = document.createElement("option");
            option.value = subCase;
            dataList.appendChild(option);
          });
        }
      });
    }
  });

  // Vérification de la validité du cas avant d'exécuter la génération
  function isValidFifthMonthCase(inputValue) {
    return Object.values(fifthMonthCaseOptions).some((subCases) => subCases.includes(inputValue));
  }

  // Exécuter l'eventListener du bouton lors de l'appui sur Enter
  fifthMonthInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Empêcher le formulaire de se soumettre
      const value = fifthMonthInput.value.trim();

      if (!isValidFifthMonthCase(value)) {
        alert("Ce cas est impossible au 5ème mois !");
        return;
      }

      generateFifthMonthButton.click(); // Simuler un clic sur le bouton
    }
  });

  generateFifthMonthButton.addEventListener("click", function () {
    const value = fifthMonthInput.value.trim();

    if (!isValidFifthMonthCase(value)) {
      alert("Ce cas est impossible au 5ème mois !");
      return;
    }

    const selectedData = selectRandomSubCase();
    generateFetusTables(selectedData);
  });
});
//* Fonction pour sélectionner un sous-cas aléatoire
let randomSubCaseKey;
function selectRandomSubCase() {
  const selectedCase = document.getElementById("fifthMonthCaseNumber").value;

  if (!selectedCase || !fifthMonthEvolutions[selectedCase]) {
    alert("Cas non valide ou non trouvé !");
    return;
  }

  const selectedEntry = fifthMonthEvolutions[selectedCase];

  if (!selectedEntry.evolutions || selectedEntry.evolutions.length === 0) {
    alert("Aucune évolution trouvée pour ce cas !");
    return;
  }

  const evolutionOptions = selectedEntry.evolutions[0]; // Premier objet d'évolution
  const subCaseKeys = Object.keys(evolutionOptions);

  if (subCaseKeys.length === 0) {
    alert("Aucune évolution trouvée !");
    return;
  }

  randomSubCaseKey = subCaseKeys[Math.floor(Math.random() * subCaseKeys.length)];
  const selectedData = evolutionOptions[randomSubCaseKey];

  return selectedData;
}

//* Nombre de fœtus par cas
const fetusCountByCase = (caseNumber) => {
  if (caseNumber >= 4.1 && caseNumber <= 4.5) return 2;
  if (caseNumber >= 8.1 && caseNumber <= 8.5) return 3;
  if (caseNumber >= 9.1 && caseNumber <= 9.5) return 4;
  return 1;
};

//* Fonction pour générer le sexe
function getRandomSex() {
  return Math.random() < 0.5 ? "Masculin" : "Féminin";
}

//* Fonction pour générer les tableaux
function generateFetusTables(selectedData) {
  const caseNumber = fifthMonthInput.value;
  const fetusCount = fetusCountByCase(caseNumber);
  const resultContainer = document.getElementById("fifthMonthResult");
  resultContainer.innerHTML = "";

  // Récupérer les données des bébés sous forme de tableau
  const bebes = Object.keys(selectedData)
    .filter((key) => key.startsWith("bebe"))
    .map((key) => selectedData[key]);

  for (let i = 1; i <= fetusCount; i++) {
    const bebeData = bebes[i - 1] || {}; // Éviter les erreurs si le bébé n'existe pas
    const gender = getRandomSex();

    const caption = fetusCount > 1 ? `<caption>Bébé n°${i}</caption>` : "";
    const tableHTML = `
      <table id="fetusTable${i}">
        ${caption}
        <thead>
          <tr>
            <th>Élément observé</th>
            <th>Observation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tdTitle">Morphologie cérébrale</td>
            <td id="morphologieCerebrale${i}">${
      bebeData.morphologieCerebrale || selectedData?.morphologieCerebrale
    }</td>
          </tr>
          <tr>
            <td class="tdTitle">Colonne vertébrale</td>
            <td id="colonneVertebrale${i}">${
      bebeData.colonneVertebrale || selectedData?.colonneVertebrale
    }</td>
          </tr>
          <tr>
            <td class="tdTitle">Membres</td>
            <td id="membres${i}">${bebeData.membres || selectedData?.membres}</td>
          </tr>
          <tr>
            <td class="tdTitle">Placenta</td>
            <td id="placenta${i}">${bebeData.placenta || selectedData?.placenta}</td>
          </tr>
          <tr>
            <td class="tdTitle">Interprétation</td>
            <td id="interpretation${i}">${
      bebeData.interpretation || selectedData?.interpretation
    }</td>
          </tr>
          <tr>
            <td class="tdTitle">Sexe</td>
            <td id="sexe${i}">${gender}</td>
          </tr>
        </tbody>
      </table>
    `;
    resultContainer.innerHTML += `${tableHTML}`;
  }

  // Ajouter le paragraphe d'évolution
  const evolutionParagraph = document.createElement("p");
  evolutionParagraph.id = "fifthMonthEvolution";
  evolutionParagraph.className = "paragraphReport";
  evolutionParagraph.innerHTML = `Cas n°<span class="important">${randomSubCaseKey}</span> <br><br>${selectedData?.conclusion}`;

  resultContainer.appendChild(evolutionParagraph);

  resultContainer.classList.remove("hidden");
  showNextElement("generateFifthMonthButton");
}

//* Gestion du bouton Fermer
document.getElementById("fifthMonthClose").addEventListener("click", function () {
  const resultContainer = document.getElementById("fifthMonthResult");
  resultContainer.classList.add("hidden");
  hideElements(["fifthMonthClose"]);
});
//? 5ème mois de grossesse <--

// TODO : Passer à la V2 du 7ème mois
//? --> 7ème mois de grossesse
function updateSelectors() {
  const caseNumber = document.getElementById("firstMonthCaseNumber").value;
  const container = document.getElementById("additionalSelectors");
  container.innerHTML = ""; // Efface les sélecteurs précédents

  // Définition du nombre de bébés en fonction du cas sélectionné
  let numberOfBabies = 1;
  if (caseNumber === "4") numberOfBabies = 2;
  else if (caseNumber === "8") numberOfBabies = 3;
  else if (caseNumber === "9") numberOfBabies = 4;

  // Affiche ou cache le conteneur en fonction du cas sélectionné
  if (caseNumber && numberOfBabies > 0) {
    container.style.display = "block"; // Rendre le conteneur visible si des sélecteurs doivent être ajoutés
  } else {
    container.style.display = "none"; // Cacher si aucun sélecteur supplémentaire
  }

  // Ajout des sélecteurs pour le sexe des bébés
  for (let i = 1; i <= numberOfBabies; i++) {
    const label = document.createElement("label");
    label.setAttribute("for", `babySex${i}`);
    label.textContent = numberOfBabies === 1 ? "Sexe du Bébé " : `Sexe de Bébé ${i}`;

    const select = document.createElement("select");
    select.setAttribute("id", `babySex${i}`);
    select.innerHTML = `
      <option value="" disabled selected>Sélectionnez le sexe</option>
      <option value="Féminin">Féminin</option>
      <option value="Masculin">Masculin</option>
    `;

    container.appendChild(label);
    container.appendChild(select);
    container.appendChild(document.createElement("br"));
  }

  // Ajout du sélecteur pour les sous-cas
  const subCaseSelect = document.createElement("select");
  subCaseSelect.setAttribute("id", "subCaseSelector");
  const options = getSubCaseOptions(caseNumber);

  options.forEach((optionValue) => {
    const option = document.createElement("option");
    option.value = optionValue;
    option.textContent = optionValue;
    subCaseSelect.appendChild(option);
  });

  const subCaseLabel = document.createElement("label");
  subCaseLabel.setAttribute("for", "subCaseSelector");
  subCaseLabel.textContent = "Cas obtenu à l'écho du 5ème mois ";

  container.appendChild(subCaseLabel);
  container.appendChild(subCaseSelect);
}
//* Fonction pour récupérer les options de sous-cas en fonction du cas sélectionné
function getSubCaseOptions(caseNumber) {
  const subCaseOptions = {
    1: [
      "1.1.1",
      "1.1.2",
      "1.1.3",
      "1.2.1",
      "1.2.2",
      "1.2.3",
      "1.3.1",
      "1.3.2",
      "1.3.3",
      "1.4.1",
      "1.4.2",
      "1.4.3",
    ],
    2: ["2.1.1", "2.1.2", "2.1.3", "2.2.1", "2.2.2", "2.2.3"],
    3: ["3.1.1", "3.1.2", "3.1.3", "3.2.1", "3.2.2", "3.2.3"],
    4: [
      "4.1.1",
      "4.1.2",
      "4.1.3",
      "4.2.1",
      "4.2.2",
      "4.2.3",
      "4.3.1",
      "4.3.2",
      "4.3.3",
      "4.4.1",
      "4.4.2",
      "4.4.3",
      "4.5.1",
      "4.5.2",
      "4.5.3",
    ],
    5: ["5.1.1", "5.1.2", "5.1.3", "5.2.1", "5.2.2", "5.2.3"],
    6: ["6.1.1", "6.1.2", "6.1.3"],
    8: [
      "8.1.1",
      "8.1.2",
      "8.1.3",
      "8.2.1",
      "8.2.2",
      "8.2.3",
      "8.3.1",
      "8.3.2",
      "8.3.3",
      "8.4.1",
      "8.4.2",
      "8.4.3",
      "8.5.1",
      "8.5.2",
      "8.5.3",
    ],
    9: [
      "9.1.1",
      "9.1.2",
      "9.1.3",
      "9.2.1",
      "9.2.2",
      "9.2.3",
      "9.3.1",
      "9.3.2",
      "9.3.3",
      "9.4.1",
      "9.4.2",
      "9.4.3",
      "9.5.1",
      "9.5.2",
      "9.5.3",
    ],
  };
  return subCaseOptions[caseNumber] || [];
}

// Fonction pour récupérer les sexes des bébés

function generateSeventhMonthReport() {
  const subCaseSelector = document.getElementById("subCaseSelector");
  const selectedSubCase = String(subCaseSelector.value);
  if (!selectedSubCase) {
    alert("Veuillez sélectionner un sous-cas.");
    return;
  }

  // Correspondances des sous-cas avec les dictionnaires (les objets de 7e mois)
  const caseMappings = {
    "1.1.1": sevenOneDotOneA,
    "1.1.2": sevenOneDotOneB,
    "1.1.3": sevenOneDotOneC,
    "1.2.1": sevenOneDotTwoA,
    "1.2.2": sevenOneDotTwoB,
    "1.2.3": sevenOneDotTwoC,
    "1.3.1": sevenOneDotThreeA,
    "1.3.2": sevenOneDotThreeB,
    "1.3.3": sevenOneDotThreeC,
    "1.4.1": sevenOneDotFourA,
    "1.4.2": sevenOneDotFourB,
    "1.4.3": sevenOneDotFourC,
    "2.1.1": sevenTwoDotOneA,
    "2.1.2": sevenTwoDotOneB,
    "2.1.3": sevenTwoDotOneC,
    "2.2.1": sevenTwoDotTwoA,
    "2.2.2": sevenTwoDotTwoB,
    "2.2.3": sevenTwoDotTwoC,
    "3.1.1": sevenThreeDotOneA,
    "3.1.2": sevenThreeDotOneB,
    "3.1.3": sevenThreeDotOneC,
    "3.2.1": sevenThreeDotTwoA,
    "3.2.2": sevenThreeDotTwoB,
    "3.2.3": sevenThreeDotTwoC,
    "4.1.1": sevenFourDotOneA,
    "4.1.2": sevenFourDotOneB,
    "4.1.3": sevenFourDotOneC,
    "4.2.1": sevenFourDotTwoA,
    "4.2.2": sevenFourDotTwoB,
    "4.2.3": sevenFourDotTwoC,
    "4.3.1": sevenFourDotThreeA,
    "4.3.2": sevenFourDotThreeB,
    "4.3.3": sevenFourDotThreeC,
    "4.4.1": sevenFourDotFourA,
    "4.4.2": sevenFourDotFourB,
    "4.4.3": sevenFourDotFourC,
    "4.5.1": sevenFourDotFiveA,
    "4.5.2": sevenFourDotFiveB,
    "4.5.3": sevenFourDotFiveC,
    "5.1.1": sevenFiveDotOneA,
    "5.1.2": sevenFiveDotOneB,
    "5.1.3": sevenFiveDotOneC,
    "5.2.1": sevenFiveDotTwoA,
    "5.2.2": sevenFiveDotTwoB,
    "5.2.3": sevenFiveDotTwoC,
    "6.1.1": sevenSixDotOneA,
    "6.1.2": sevenSixDotOneB,
    "6.1.3": sevenSixDotOneC,
    "8.1.1": sevenEightDotOneA,
    "8.1.2": sevenEightDotOneB,
    "8.1.3": sevenEightDotOneC,
    "8.2.1": sevenEightDotTwoA,
    "8.2.2": sevenEightDotTwoB,
    "8.2.3": sevenEightDotTwoC,
    "8.3.1": sevenEightDotThreeA,
    "8.3.2": sevenEightDotThreeB,
    "8.3.3": sevenEightDotThreeC,
    "8.4.1": sevenEightDotFourA,
    "8.4.2": sevenEightDotFourB,
    "8.4.3": sevenEightDotFourC,
    "8.5.1": sevenEightDotFiveA,
    "8.5.2": sevenEightDotFiveB,
    "8.5.3": sevenEightDotFiveC,
    "9.1.1": sevenNineDotOneA,
    "9.1.2": sevenNineDotOneB,
    "9.1.3": sevenNineDotOneC,
    "9.2.1": sevenNineDotTwoA,
    "9.2.2": sevenNineDotTwoB,
    "9.2.3": sevenNineDotTwoC,
    "9.3.1": sevenNineDotThreeA,
    "9.3.2": sevenNineDotThreeB,
    "9.3.3": sevenNineDotThreeC,
    "9.4.1": sevenNineDotFourA,
    "9.4.2": sevenNineDotFourB,
    "9.4.3": sevenNineDotFourC,
    "9.5.1": sevenNineDotFiveA,
    "9.5.2": sevenNineDotFiveB,
    "9.5.3": sevenNineDotFiveC,
  };

  // Dictionnaire du nombre de bébés par sous-cas
  const babyCounts = {
    // Cas avec 2 bébés
    "4.1.1": 2,
    "4.1.2": 2,
    "4.1.3": 2,
    "4.2.1": 2,
    "4.2.2": 2,
    "4.2.3": 2,
    "4.3.1": 2,
    "4.3.2": 2,
    "4.3.3": 2,
    "4.4.1": 2,
    "4.4.2": 2,
    "4.4.3": 2,
    "4.5.1": 2,
    "4.5.2": 2,
    "4.5.3": 2,
    // Cas avec 3 bébés
    "8.1.1": 3,
    "8.1.2": 3,
    "8.1.3": 3,
    "8.2.1": 3,
    "8.2.2": 3,
    "8.2.3": 3,
    "8.3.1": 3,
    "8.3.2": 3,
    "8.3.3": 3,
    "8.4.1": 3,
    "8.4.2": 3,
    "8.4.3": 3,
    "8.5.1": 3,
    "8.5.2": 3,
    "8.5.3": 3,
    // Cas avec 4 bébés
    "9.1.1": 4,
    "9.1.2": 4,
    "9.1.3": 4,
    "9.2.1": 4,
    "9.2.2": 4,
    "9.2.3": 4,
    "9.3.1": 4,
    "9.3.2": 4,
    "9.3.3": 4,
    "9.4.1": 4,
    "9.4.2": 4,
    "9.4.3": 4,
    "9.5.1": 4,
    "9.5.2": 4,
    "9.5.3": 4,
    // Tous les autres cas ont 1 bébé
  };

  // Vérifie si le sous-cas sélectionné existe dans les correspondances
  if (caseMappings[selectedSubCase]) {
    const selectedCase = caseMappings[selectedSubCase];
    const keys = Object.keys(selectedCase);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const randomObject = selectedCase[randomKey];
    const numberOfBabies = babyCounts[selectedSubCase] || 1;

    const resultContainer = document.getElementById("seventhMonthResult");
    resultContainer.innerHTML = "";

    const conclusion = randomObject.conclusion;

    for (let i = 1; i <= numberOfBabies; i++) {
      const babyData = randomObject[`bebe${i}`];
      const babySex = document.getElementById(`babySex${i}`).value;
      if (babySex === "Féminin") {
        babyGender = "Fille";
      } else if (babySex === "Masculin") {
        babyGender = "Garçon";
      } else {
        alert("Veuillez remplir tous les champs");
        return;
      }

      // const caption = numberOfBabies > 1 ? `<caption>Bébé ${babyGender} n°${i}</caption>` : "";
      const caption =
        numberOfBabies > 1
          ? `<caption>Bébé ${babyGender} n°${i}</caption>`
          : `<caption>Bébé ${babyGender}</caption>`;
      const tableHTML = `
        <table id="babyTable${i}">
          ${caption}
          <thead>
            <tr>
              <th>Élément observé</th>
              <th>Observation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tdTitle">Position du fœtus</td>
              <td>${babyData ? babyData.positionFoetus : ""}</td>
            </tr>
            <tr>
              <td class="tdTitle">Taille estimée</td>
              <td>${babyData ? babyData.tailleFoetus : ""}</td>
            </tr>
            <tr>
              <td class="tdTitle">Placenta</td>
              <td>${babyData ? babyData.placenta : ""}</td>
            </tr>
            <tr>
              <td class="tdTitle">Interprétation</td>
              <td>${babyData ? babyData.interpretation : ""}</td>
            </tr>
          </tbody>
        </table>
      `;
      resultContainer.innerHTML += tableHTML;
    }
    document.getElementById("seventhMonthResult").classList.remove("hidden");
    document.getElementById("seventhMonthClose").classList.remove("hidden");
    const conclusionParagraph = document.createElement("p");

    conclusionParagraph.innerHTML = `Cas n°<span class="important">${randomKey}</span><br><span class="rapport">Conclusion : </span>${conclusion}`;
    resultContainer.appendChild(conclusionParagraph);
  } else {
    alert("Le sous-cas sélectionné est invalide.");
  }
}

document
  .getElementById("generateSeventhMonthButton")
  .addEventListener("click", generateSeventhMonthReport);
//? 7ème mois de grossesse <--

//? Afficher toute la section au clic sur le bouton
scrollToSection("generateFirstMonthButton", "firstMonthSection");
scrollToSection("generateThirdMonthButton", "thirdMonthSection");
scrollToSection("generateFifthMonthButton", "fifthMonthSection");
scrollToSection("generateSeventhMonthButton", "seventhMonthSection");
//? Afficher toute la section au clic sur le bouton <--

//? Masquer la section au clic sur la croix
document.getElementById("firstMonthClose").addEventListener("click", function () {
  hideElements(["firstMonthClose", "firstMonthResult"]);
  document.getElementById("firstMonthClose").classList.add("hidden");
});
document.getElementById("thirdMonthClose").addEventListener("click", function () {
  hideElements(["thirdMonthClose", "thirdMonthResult", "thirdMonthEvolution"]);
  document.getElementById("thirdMonthClose").classList.add("hidden");
});
document.getElementById("fifthMonthClose").addEventListener("click", function () {
  hideElements(["fifthMonthClose", "fifthMonthResult", "fifthMonthEvolution"]);
  document.getElementById("fifthMonthClose").classList.add("hidden");
});
document.getElementById("seventhMonthClose").addEventListener("click", function () {
  hideElements(["seventhMonthClose", "seventhMonthResult", "seventhMonthEvolution"]);
  document.getElementById("seventhMonthClose").classList.add("hidden");
});
//? Masquer la section au clic sur la croix <--
