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
//* Générer un compte-rendu d'échographie 1er mois
document.getElementById("generateFirstMonthButton").addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * echographieResults.length);
  const randomResult = echographieResults[randomIndex];

  document.getElementById("sacObs").textContent = randomResult.sacGestationnel.taille;
  document.getElementById("sacRes").textContent = randomResult.sacGestationnel.detail;
  document.getElementById("vesObs").textContent = randomResult.vesiculeVitelline.etat;
  document.getElementById("vesRes").textContent = randomResult.vesiculeVitelline.detail;
  document.getElementById("embObs").textContent = randomResult.nombreEmbryon.nombre;
  document.getElementById("embRes").textContent = randomResult.nombreEmbryon.detail;
  document.getElementById("implObs").textContent = randomResult.implantation.etat;
  document.getElementById("implRes").textContent = randomResult.implantation.detail;
  document.getElementById("anomObs").textContent = randomResult.anomalieVisible.etat;
  document.getElementById("anomRes").textContent = randomResult.anomalieVisible.detail;

  document.getElementById(
    "firstMonthEvolution"
  ).innerHTML = `Cas n°<span class="important">${randomResult.numero}</span><br><br>${randomResult.evolution}`;

  document.getElementById("firstMonthResult").classList.remove("hidden");
  document.getElementById("firstMonthClose").classList.remove("hidden");
  document.getElementById("firstMonthEvolution").classList.remove("hidden");
});
//? 1er mois de grossesse <--

//? --> 3ème mois de grossesse
//* Générer un compte-rendu pour le 3ème mois de grossesse
document.getElementById("generateThirdMonthButton").addEventListener("click", function () {
  const caseNumber = parseInt(document.getElementById("caseNumber").value);
  if (isNaN(caseNumber) || caseNumber < 1 || caseNumber > 10) {
    alert("Veuillez sélectionner un numéro de cas valide (entre 1 et 10).");
    return;
  }

  const resultContainer = document.getElementById("thirdMonthResult");
  resultContainer.innerHTML = ""; // Réinitialisation du contenu

  // Sélectionner l'évolution pour le cas
  const evolutionsForCase = evolutionResults.find(
    (result) => result.numero === caseNumber
  ).evolutions;
  const randomEvolution = evolutionsForCase[Math.floor(Math.random() * evolutionsForCase.length)];

  // Déterminer le nombre de fœtus
  let numberOfFetus = 1;
  if (randomEvolution.fetus) {
    numberOfFetus = Object.keys(randomEvolution.fetus).length;
  } else if (randomEvolution.nombreFetus !== undefined) {
    numberOfFetus = randomEvolution.nombreFetus;
  }

  // Générer les tableaux pour chaque fœtus
  for (let i = 1; i <= numberOfFetus; i++) {
    const table = document.createElement("table");
    const caption = numberOfFetus > 1 ? `<caption>Bébé n°${i}</caption>` : "";
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
  <td id="clarteNucale${i}"></td>
</tr>
<tr>
  <td class="tdTitle">Activité cardiaque</td>
  <td id="activiteCardiaque${i}"></td>
</tr>
<tr>
  <td class="tdTitle">Anomalie morphologique</td>
  <td id="anomalieMorphologique${i}"></td>
</tr>
<tr>
  <td class="tdTitle">Quantité de liquide amniotique</td>
  <td id="quantiteLiquideAmniotique${i}"></td>
</tr>
  </tbody>
`;
    resultContainer.appendChild(table);

    // Remplissage des données dans les cellules
    if (randomEvolution) {
      if (randomEvolution.fetus) {
        const fetusKey = `bebe${i}`;
        const fetusData = randomEvolution.fetus[fetusKey];
        if (fetusData) {
          document.getElementById(`clarteNucale${i}`).innerText = fetusData.clarteNucale;
          document.getElementById(`activiteCardiaque${i}`).innerText = fetusData.activiteCardiaque;
          document.getElementById(`anomalieMorphologique${i}`).innerText =
            fetusData.anomalieMorphologique;
          document.getElementById(`quantiteLiquideAmniotique${i}`).innerText =
            fetusData.liquideAmniotique;
        }
      } else {
        document.getElementById(`clarteNucale${i}`).innerText = randomEvolution.clarteNucale;
        document.getElementById(`activiteCardiaque${i}`).innerText =
          randomEvolution.activiteCardiaque;
        document.getElementById(`anomalieMorphologique${i}`).innerText =
          randomEvolution.anomalieMorphologique;
        document.getElementById(`quantiteLiquideAmniotique${i}`).innerText =
          randomEvolution.liquideAmniotique;
      }
    }
  }

  // Créer et insérer dynamiquement le paragraphe d'évolution
  if (randomEvolution && randomEvolution.evolution) {
    const evolutionParagraph = document.createElement("p");
    evolutionParagraph.className = "paragraphReport";
    evolutionParagraph.innerHTML = `Cas n°<span class="important">${randomEvolution.id}</span> <br><br>${randomEvolution.evolution}`;
    resultContainer.appendChild(evolutionParagraph);
  }

  // Afficher les éléments masqués
  resultContainer.classList.remove("hidden");
  document.getElementById("thirdMonthClose").classList.remove("hidden");
});
//? 3ème mois de grossesse <--

//? --> 5ème mois de grossesse
const mainCaseSelector = document.getElementById("mainCaseSelector");
const thirdMonthCaseContainer = document.getElementById("thirdMonthCaseContainer");
const thirdMonthCaseNumber = document.getElementById("thirdMonthCaseNumber");

//* Mapping of main cases to their respective third-month options
const caseOptions = {
  1: ["1.1", "1.2", "1.3", "1.4"],
  2: ["2.1", "2.2"],
  3: ["3.1", "3.2"],
  4: ["4.1", "4.2", "4.3", "4.4", "4.5"],
  5: ["5.1", "5.2"],
  6: ["6.1"],
  8: ["8.1", "8.2", "8.3", "8.4", "8.5"],
  9: ["9.1", "9.2", "9.3", "9.4", "9.5"],
};

//* Mise à jour dynamique des options du second sélecteur en fonction du cas principal sélectionné
mainCaseSelector.addEventListener("change", function () {
  const selectedMainCase = mainCaseSelector.value;

  // Clear previous options in thirdMonthCaseNumber
  thirdMonthCaseNumber.innerHTML = `<option value="" disabled selected>N° du sous-cas</option>`;

  // Populate thirdMonthCaseNumber with relevant options based on the selected main case
  if (selectedMainCase && caseOptions[selectedMainCase]) {
    caseOptions[selectedMainCase].forEach((option) => {
      const newOption = document.createElement("option");
      newOption.value = option;
      newOption.textContent = option;
      thirdMonthCaseNumber.appendChild(newOption);
    });

    // Show the thirdMonthCaseContainer once options are populated
    thirdMonthCaseContainer.style.display = "block";
  } else {
    // Hide the thirdMonthCaseContainer if no valid case is selected
    thirdMonthCaseContainer.style.display = "none";
  }
});

//* Objet contenant le nombre de fœtus par cas
const fetusCountByCase = {
  4.1: 2,
  4.2: 2,
  4.3: 2,
  4.4: 2,
  4.5: 2,
  8.1: 3,
  8.2: 3,
  8.3: 3,
  8.4: 3,
  8.5: 3,
  9.1: 4,
  9.2: 4,
  9.3: 4,
  9.4: 4,
  9.5: 4,
  1.1: 1,
  1.2: 1,
  1.3: 1,
  1.4: 1,
  2.1: 1,
  2.2: 1,
  5.1: 1,
  5.2: 1,
  6.1: 1,
};
//* Fonction pour générer les tableaux
function generateFetusTables() {
  const caseNumber = document.getElementById("thirdMonthCaseNumber").value;
  const fetusCount = fetusCountByCase[caseNumber] || 1;
  const resultContainer = document.getElementById("fifthMonthResult");
  resultContainer.innerHTML = "";

  for (let i = 1; i <= fetusCount; i++) {
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
          <td id="morphologieCerebrale${i}"></td>
        </tr>
        <tr>
          <td class="tdTitle">Colonne vertébrale</td>
          <td id="colonneVertebrale${i}"></td>
        </tr>
        <tr>
          <td class="tdTitle">Membres</td>
          <td id="membres${i}"></td>
        </tr>
        <tr>
          <td class="tdTitle">Placenta</td>
          <td id="placenta${i}"></td>
        </tr>
        <tr>
          <td class="tdTitle">Interprétation</td>
          <td id="interpretation${i}"></td>
        </tr>
        <tr>
          <td class="tdTitle">Sexe</td>
          <td id="sexe${i}"></td>
        </tr>
      </tbody>
    </table>
  `;
    resultContainer.innerHTML += `${tableHTML}`;
  }
  const evolutionParagraph = document.createElement("p");
  evolutionParagraph.id = "fifthMonthEvolution";
  evolutionParagraph.className = "paragraphReport";
  resultContainer.appendChild(evolutionParagraph);
}

//* Objet de mappage entre les valeurs thirdMonthCaseNumber et les dictionnaires correspondants
const caseMapping = {
  1.1: fifthMonthCaseOne,
  1.2: fifthMonthCaseOne,
  1.3: fifthMonthCaseOne,
  1.4: fifthMonthCaseOne,
  2.1: fifthMonthCaseTwo,
  2.2: fifthMonthCaseTwo,
  3.1: fifthMonthCaseThree,
  3.2: fifthMonthCaseThree,
  4.1: fifthMonthCaseFour,
  4.2: fifthMonthCaseFour,
  4.3: fifthMonthCaseFour,
  4.4: fifthMonthCaseFour,
  4.5: fifthMonthCaseFour,
  5.1: fifthMonthCaseFive,
  5.2: fifthMonthCaseFive,
  6.1: fifthMonthCaseSix,
  8.1: fifthMonthCaseEight,
  8.2: fifthMonthCaseEight,
  8.3: fifthMonthCaseEight,
  8.5: fifthMonthCaseEight,
  9.1: fifthMonthCaseNine,
  9.3: fifthMonthCaseNine,
  9.4: fifthMonthCaseNine,
  9.5: fifthMonthCaseNine,
};
//* Fonction pour sélectionner un sous-cas aléatoire
function selectRandomSubCase() {
  const selectedCase = document.getElementById("thirdMonthCaseNumber").value;
  const selectedDictionary = caseMapping[selectedCase];
  if (!selectedDictionary) {
    alert("Cas non valide ou non trouvé !");
    return;
  }
  const subCaseNumber = Math.floor(Math.random() * 3) + 1;
  const selectedSubCase = `${selectedCase}.${subCaseNumber}`;
  const selectedData = selectedDictionary[selectedSubCase];
  const evolutionParagraph = document.getElementById("fifthMonthEvolution");

  if (selectedData && selectedData.conclusion) {
    evolutionParagraph.innerHTML = `Cas n°<span class="important">${selectedSubCase}</span><br>${selectedData.conclusion}`;
  } else {
    console.log(`Aucune conclusion trouvée pour le sous-cas ${selectedSubCase}.`);
  }

  return selectedData;
}
//* Fonction pour générer le sexe
function getRandomSex() {
  return Math.random() < 0.5 ? "Masculin" : "Féminin";
}
//* Fonction pour insérer les données dans les tableaux
function fillTableWithData(data, fetusIndex) {
  const table = document.querySelector(`#fetusTable${fetusIndex}`);
  if (!table) {
    console.error(`Tableau pour le fœtus n°${fetusIndex} non trouvé.`);
    return;
  }
  if (`bebe${fetusIndex}` in data) {
    table.querySelector(`#morphologieCerebrale${fetusIndex}`).textContent =
      data[`bebe${fetusIndex}`].morphologieCerebrale || "Non disponible";
    table.querySelector(`#colonneVertebrale${fetusIndex}`).textContent =
      data[`bebe${fetusIndex}`].colonneVertebrale || "Non disponible";
    table.querySelector(`#membres${fetusIndex}`).textContent =
      data[`bebe${fetusIndex}`].membres || "Non disponible";
    table.querySelector(`#placenta${fetusIndex}`).textContent =
      data[`bebe${fetusIndex}`].placenta || "Non disponible";
    table.querySelector(`#interpretation${fetusIndex}`).textContent =
      data[`bebe${fetusIndex}`].interpretation || "Non disponible";
  } else {
    table.querySelector(`#morphologieCerebrale${fetusIndex}`).textContent =
      data.morphologieCerebrale || "Non disponible";
    table.querySelector(`#colonneVertebrale${fetusIndex}`).textContent =
      data.colonneVertebrale || "Non disponible";
    table.querySelector(`#membres${fetusIndex}`).textContent = data.membres || "Non disponible";
    table.querySelector(`#placenta${fetusIndex}`).textContent = data.placenta || "Non disponible";
    table.querySelector(`#interpretation${fetusIndex}`).textContent =
      data.interpretation || "Non disponible";
  }
  table.querySelector(`#sexe${fetusIndex}`).textContent = getRandomSex();
}
//* Écouteur pour déclencher la génération des tableaux au clic sur le bouton
document.getElementById("generateFifthMonthButton").addEventListener("click", function () {
  generateFetusTables();
  const selectedData = selectRandomSubCase();
  if (selectedData) {
    const fetusCount = fetusCountByCase[document.getElementById("thirdMonthCaseNumber").value] || 1;
    for (let i = 1; i <= fetusCount; i++) {
      fillTableWithData(selectedData, i);
    }
  } else {
    console.error("Aucune donnée de sous-cas trouvée pour le cas sélectionné.");
  }
  document.getElementById("fifthMonthResult").classList.remove("hidden");
  document.getElementById("fifthMonthEvolution").classList.remove("hidden");
  document.getElementById("fifthMonthClose").classList.remove("hidden");
});
//? 5ème mois de grossesse <--

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
