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

//? --> 1er mois de grossesse
//* Dictionnaire des résultats d'échographie
const echographieResults = [
  {
    numero: 1,
    sacGestationnel: {
      taille: "Normale",
      detail: "10mm, 6 semaines",
    },
    vesiculeVitelline: {
      etat: "Présente",
      detail: "Présence confirmée",
    },
    nombreEmbryon: {
      nombre: 1,
      detail: "1 embryon visible",
    },
    implantation: {
      etat: "Implanté correctement",
      detail: "Pas d'anomalie",
    },
    anomalieVisible: {
      etat: "Aucune",
      detail: "Aucune",
    },
    evolution:
      "La grossesse se déroule normalement avec un seul embryon. Des échographies de suivi sont recommandées pour surveiller le développement embryonnaire.",
  },
  {
    numero: 2,
    sacGestationnel: {
      taille: "Normale",
      detail: "8mm, 6 semaines",
    },
    vesiculeVitelline: {
      etat: "Présente",
      detail: "Présence confirmée",
    },
    nombreEmbryon: {
      nombre: 1,
      detail: "1 embryon visible",
    },
    implantation: {
      etat: "Implanté correctement",
      detail: "Pas d'anomalie",
    },
    anomalieVisible: {
      etat: "Aucune",
      detail: "Aucune",
    },
    evolution:
      "Le sac gestationnel et l'embryon se développent bien. Il est important de continuer les visites prénatales.",
  },
  {
    numero: 3,
    sacGestationnel: {
      taille: "Trop petit",
      detail: "5mm, 5 semaines",
    },
    vesiculeVitelline: {
      etat: "Absente",
      detail: "Absente, à surveiller",
    },
    nombreEmbryon: {
      nombre: 1,
      detail: "1 embryon visible",
    },
    implantation: {
      etat: "Implanté correctement",
      detail: "Pas d'anomalie",
    },
    anomalieVisible: {
      etat: "Aucune",
      detail: "Aucune",
    },
    evolution:
      "Le sac gestationnel est plus petit que prévu. Une surveillance attentive est recommandée pour évaluer la progression de la grossesse.",
  },
  {
    numero: 4,
    sacGestationnel: {
      taille: "Trop grand",
      detail: "15mm, 7 semaines",
    },
    vesiculeVitelline: {
      etat: "Présente",
      detail: "Présence confirmée",
    },
    nombreEmbryon: {
      nombre: 2,
      detail: "2 embryons visibles",
    },
    implantation: {
      etat: "Implanté correctement",
      detail: "Pas d'anomalie",
    },
    anomalieVisible: {
      etat: "Aucune",
      detail: "Aucune",
    },
    evolution:
      "Deux embryons sont visibles, indiquant une grossesse gémellaire. Un suivi régulier est crucial pour assurer le bien-être des deux fœtus.",
  },
  {
    numero: 5,
    sacGestationnel: {
      taille: "Normale",
      detail: "12mm, 6 semaines",
    },
    vesiculeVitelline: {
      etat: "Présente",
      detail: "Présence confirmée",
    },
    nombreEmbryon: {
      nombre: 1,
      detail: "1 embryon visible",
    },
    implantation: {
      etat: "Implanté correctement",
      detail: "Pas d'anomalie",
    },
    anomalieVisible: {
      etat: "Anomalie mineure",
      detail: "À surveiller",
    },
    evolution:
      "La grossesse semble normale malgré une anomalie mineure. Un suivi régulier est conseillé pour surveiller l'évolution.",
  },
  {
    numero: 6,
    sacGestationnel: {
      taille: "Normale",
      detail: "9mm, 6 semaines",
    },
    vesiculeVitelline: {
      etat: "Absente",
      detail: "À surveiller de près",
    },
    nombreEmbryon: {
      nombre: 1,
      detail: "1 embryon visible",
    },
    implantation: {
      etat: "Implanté correctement",
      detail: "Pas d'anomalie",
    },
    anomalieVisible: {
      etat: "Aucune",
      detail: "Aucune",
    },
    evolution:
      "Le développement est normal, mais l'absence de vésicule vitelline nécessite une surveillance attentive lors des prochaines échographies.",
  },
  {
    numero: 7,
    sacGestationnel: {
      taille: "Anormal",
      detail: "Non mesurable",
    },
    vesiculeVitelline: {
      etat: "Absente",
      detail: "Absente, possible grossesse extra-utérine",
    },
    nombreEmbryon: {
      nombre: 0,
      detail: "Pas d'embryon visible",
    },
    implantation: {
      etat: "Non déterminé",
      detail: "Nécessite une investigation",
    },
    anomalieVisible: {
      etat: "Présente",
      detail: "À confirmer lors des prochaines échographies",
    },
    evolution:
      "L'absence d'embryon et la non-mesurabilité du sac nécessitent une investigation immédiate pour exclure une grossesse extra-utérine.",
  },
  {
    numero: 8,
    sacGestationnel: {
      taille: "Normale",
      detail: "25mm, 8 semaines",
    },
    vesiculeVitelline: {
      etat: "Présente",
      detail: "Présence confirmée",
    },
    nombreEmbryon: {
      nombre: 3,
      detail: "3 embryons visibles",
    },
    implantation: {
      etat: "Implanté correctement",
      detail: "Pas d'anomalie",
    },
    anomalieVisible: {
      etat: "Aucune",
      detail: "Aucune",
    },
    evolution:
      "La grossesse est avancée avec trois embryons. Un suivi régulier est essentiel pour surveiller le développement de chaque fœtus.",
  },
  {
    numero: 9,
    sacGestationnel: {
      taille: "Normale",
      detail: "30mm, 8 semaines",
    },
    vesiculeVitelline: {
      etat: "Présente",
      detail: "Présence confirmée",
    },
    nombreEmbryon: {
      nombre: 4,
      detail: "4 embryrons visibles",
    },
    implantation: {
      etat: "Implanté correctement",
      detail: "Pas d'anomalie",
    },
    anomalieVisible: {
      etat: "Aucune",
      detail: "Aucune",
    },
    evolution:
      "La grossesse multiple est confirmée avec quatre embryons. Un suivi très attentif est recommandé en raison du risque accru de complications.",
  },
  {
    numero: 10,
    sacGestationnel: {
      taille: "Anormal",
      detail: "Non mesurable",
    },
    vesiculeVitelline: {
      etat: "Absente",
      detail: "Absente, grossesse molaire suspectée",
    },
    nombreEmbryon: {
      nombre: 0,
      detail: "Pas d'embryon visible",
    },
    implantation: {
      etat: "Non déterminé",
      detail: "Nécessite une investigation",
    },
    anomalieVisible: {
      etat: "Présente",
      detail: "Grossesse molaire suspectée",
    },
    evolution:
      "Une grossesse molaire est suspectée. Des investigations immédiates sont nécessaires pour évaluer l'état de la grossesse.",
  },
];
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
  ).innerHTML = `Cas n°${randomResult.numero} <br>${randomResult.evolution}`;

  const firstMonthResult = document.getElementById("firstMonthResult");
  firstMonthResult.classList.remove("hidden");

  document.getElementById("firstMonthClose").classList.remove("hidden");
});
//? 1er mois de grossesse <--

//? --> 3ème mois de grossesse
const evolutionResults = [
  {
    numero: 1,
    evolutions: [
      {
        clarteNucale: "1.5 mm",
        activiteCardiaque: "Présente",
        nombreFetus: 1,
        anomalieMorphologique: "Aucune",
        liquideAmniotique: "Normale",
        evolution:
          "La grossesse se déroule normalement avec une clarté nucale dans les limites acceptables et un cœur fœtal actif.",
      },
      {
        clarteNucale: "2 mm",
        activiteCardiaque: "Présente",
        nombreFetus: 1,
        anomalieMorphologique: "Mineure (à surveiller)",
        liquideAmniotique: "Normale",
        evolution:
          "Bien que la clarté nucale soit légèrement augmentée, l'activité cardiaque est présente. Continuer la surveillance.",
      },
      {
        clarteNucale: "3 mm",
        activiteCardiaque: "Présente",
        nombreFetus: 1,
        anomalieMorphologique: "Possible anomalie cardiaque",
        liquideAmniotique: "Normale",
        evolution:
          "Des préoccupations émergent concernant une possible anomalie cardiaque, bien que le fœtus soit encore viable.",
      },
      {
        clarteNucale: "1.8 mm",
        activiteCardiaque: "Faible",
        nombreFetus: 1,
        anomalieMorphologique: "Aucune",
        liquideAmniotique: "Faible",
        evolution:
          "La grossesse présente des signes de vulnérabilité avec une activité cardiaque faible et un liquide amniotique réduit.",
      },
      {
        clarteNucale: "3.5 mm",
        activiteCardiaque: "Absente (mort in-utero)",
        nombreFetus: 0,
        anomalieMorphologique: "Non applicable",
        liquideAmniotique: "Non applicable",
        evolution:
          "La grossesse a malheureusement abouti à une perte fœtale, marquée par l'absence d'activité cardiaque.",
      },
    ],
  },
  {
    numero: 2,
    evolutions: [
      {
        clarteNucale: "2.5 mm",
        activiteCardiaque: "Présente",
        nombreFetus: 1,
        anomalieMorphologique: "Aucune",
        liquideAmniotique: "Normale",
        evolution:
          "La grossesse est en bonne voie, avec une clarté nucale normale et un cœur fœtal actif.",
      },
      {
        clarteNucale: "2 mm",
        activiteCardiaque: "Présente",
        nombreFetus: 1,
        anomalieMorphologique: "Suspicion d'hydrocéphalie",
        liquideAmniotique: "Normale",
        evolution:
          "Bien que le cœur fœtal soit actif, une suspicion d'hydrocéphalie nécessite une attention particulière.",
      },
      {
        clarteNucale: "4 mm",
        activiteCardiaque: "Absente (mort in-utero)",
        nombreFetus: 0,
        anomalieMorphologique: "Non applicable",
        liquideAmniotique: "Non applicable",
        evolution:
          "La grossesse a abouti à une perte fœtale, signalée par l'absence d'activité cardiaque.",
      },
    ],
  },
  {
    numero: 3,
    evolutions: [
      {
        clarteNucale: "3.8 mm",
        activiteCardiaque: "Faible",
        nombreFetus: 1,
        anomalieMorphologique:
          "Déformations faciales (profil facial plat, petit menton, absence d'os nasal)",
        liquideAmniotique: "Normale",
        evolution:
          "Le fœtus présente une clarté nucale élevée, des déformations faciales et une activité cardiaque faible. Un dépistage de la Trisomie 21 est indispensable.",
      },
      {
        clarteNucale: "1.5 mm",
        activiteCardiaque: "Présente",
        nombreFetus: 1,
        anomalieMorphologique: "Aucune",
        liquideAmniotique: "Normale",
        evolution:
          "Le développement fœtal est normal, avec une clarté nucale satisfaisante et une activité cardiaque présente.",
      },
    ],
  },
  {
    numero: 4,
    evolutions: [
      {
        fetus: {
          bebe1: {
            clarteNucale: "2 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe2: {
            clarteNucale: "2.5 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Suspicion de cardiopathie",
            liquideAmniotique: "Normale",
          },
        },
        evolution:
          "Les deux fœtus montrent une bonne activité cardiaque, bien qu'une suspicion de cardiopathie nécessite un suivi.",
      },
      {
        fetus: {
          bebe1: {
            clarteNucale: "3 mm",
            activiteCardiaque: "Absente (mort in-utero)",
            anomalieMorphologique: "Non applicable",
            liquideAmniotique: "Non applicable",
          },
          bebe2: {
            clarteNucale: "1.5 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
        },
        evolution:
          "Malheureusement, l'un des fœtus a été perdu, tandis que l'autre continue de montrer des signes de développement normal.",
      },
      {
        fetus: {
          bebe1: {
            clarteNucale: "1.2 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe2: {
            clarteNucale: "1.3 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
        },
        evolution:
          "Les deux fœtus sont en bonne santé, avec des clartés nucales et des activités cardiaques normales.",
      },
    ],
  },
  {
    numero: 5,
    evolutions: [
      {
        clarteNucale: "3 mm",
        activiteCardiaque: "Faible",
        nombreFetus: 1,
        anomalieMorphologique: "Anomalie détectée",
        liquideAmniotique: "Réduit",
        evolution:
          "L'évolution est préoccupante avec une activité cardiaque faible et une anomalie détectée, ce qui nécessite une surveillance accrue.",
      },
      {
        clarteNucale: "2 mm",
        activiteCardiaque: "Présente",
        nombreFetus: 1,
        anomalieMorphologique: "Aucune",
        liquideAmniotique: "Normale",
        evolution:
          "Le fœtus montre une évolution positive avec une clarté nucale normale et une bonne activité cardiaque.",
      },
    ],
  },
  {
    numero: 6,
    evolutions: [
      {
        clarteNucale: "2 mm",
        activiteCardiaque: "Présente",
        nombreFetus: 1,
        anomalieMorphologique: "Aucune",
        liquideAmniotique: "Normale",
        evolution:
          "La grossesse évolue normalement avec des résultats satisfaisants au niveau de la clarté nucale et de l'activité cardiaque.",
      },
      {
        clarteNucale: "3 mm",
        activiteCardiaque: "Absente (mort in-utero)",
        nombreFetus: 0,
        anomalieMorphologique: "Non applicable",
        liquideAmniotique: "Non applicable",
        evolution:
          "Tristement, la grossesse a abouti à une perte fœtale, marquée par l'absence d'activité cardiaque.",
      },
    ],
  },
  {
    numero: 7,
    evolutions: [
      {
        clarteNucale: "Non applicable",
        activiteCardiaque: "Aucune",
        nombreFetus: 0,
        anomalieMorphologique: "Non applicable",
        liquideAmniotique: "Non applicable",
        evolution:
          "Il n'y a eu aucune évolution significative dans cette grossesse, la grossesse extra-utérine est avérée. Une IMG est indispensable.",
      },
    ],
  },
  {
    numero: 8,
    evolutions: [
      {
        fetus: {
          bebe1: {
            clarteNucale: "1.8 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe2: {
            clarteNucale: "2.5 mm",
            activiteCardiaque: "Faible",
            anomalieMorphologique: "Suspicion de cardiopathie",
            liquideAmniotique: "Normale",
          },
          bebe3: {
            clarteNucale: "1.6 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
        },
        evolution:
          "Bien que le premier et le troisième fœtus soient en bonne santé, le deuxième présente une activité cardiaque faible et une suspicion de cardiopathie.",
      },
      {
        fetus: {
          bebe1: {
            clarteNucale: "1.7 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe2: {
            clarteNucale: "2.8 mm",
            activiteCardiaque: "Absente",
            anomalieMorphologique: "Défaillance cardiaque",
            liquideAmniotique: "Réduit",
          },
          bebe3: {
            clarteNucale: "1.5 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
        },
        evolution:
          "Le deuxième fœtus est décédé in utero, tandis que les autres poursuivent leur développement normalement.",
      },
      {
        fetus: {
          bebe1: {
            clarteNucale: "2.1 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe2: {
            clarteNucale: "2.3 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe3: {
            clarteNucale: "1.9 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
        },
        evolution: "Tous les fœtus progressent normalement avec des signes de bonne santé.",
      },
    ],
  },
  {
    numero: 9,
    evolutions: [
      {
        fetus: {
          bebe1: {
            clarteNucale: "1.9 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe2: {
            clarteNucale: "2.6 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Suspicion de dysplasie pulmonaire",
            liquideAmniotique: "Légèrement réduit",
          },
          bebe3: {
            clarteNucale: "2.3 mm",
            activiteCardiaque: "Absente",
            anomalieMorphologique: "Anomalie cardiaque",
            liquideAmniotique: "Très réduit",
          },
          bebe4: {
            clarteNucale: "1.8 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
        },
        evolution:
          "Le troisième fœtus est décédé in utero, tandis que les autres présentent une évolution correcte avec quelques anomalies légères.",
      },
      {
        fetus: {
          bebe1: {
            clarteNucale: "2.0 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe2: {
            clarteNucale: "1.7 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe3: {
            clarteNucale: "1.9 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe4: {
            clarteNucale: "2.2 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
        },
        evolution: "Les quatre fœtus évoluent normalement sans signe de complication.",
      },
      {
        fetus: {
          bebe1: {
            clarteNucale: "2.1 mm",
            activiteCardiaque: "Absente",
            anomalieMorphologique: "Anomalie cardiaque",
            liquideAmniotique: "Réduit",
          },
          bebe2: {
            clarteNucale: "1.8 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe3: {
            clarteNucale: "2.4 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Suspicion de malformation pulmonaire",
            liquideAmniotique: "Légèrement réduit",
          },
          bebe4: {
            clarteNucale: "2.0 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
        },
        evolution:
          "Le premier fœtus est décédé in utero, les autres continuent leur développement malgré quelques signes d’anomalie légère chez le troisième fœtus.",
      },
    ],
  },
  {
    numero: 10,
    evolutions: [
      {
        clarteNucale: "Non applicable",
        activiteCardiaque: "Aucune",
        nombreFetus: 0,
        anomalieMorphologique: "Non applicable",
        liquideAmniotique: "Non applicable",
        evolution:
          "Il n'y a eu aucune évolution significative dans cette grossesse, la grossesse molaire est avérée. Une IMG est indispensable.",
      },
    ],
  },
];
// Générer un compte-rendu pour le 3ème mois de grossesse

// Ajouter un événement au bouton de génération
document.getElementById("generateThirdMonthButton").addEventListener("click", function () {
  const numberOfFetus = parseInt(document.getElementById("numberOfFetus").value);
  const resultContainer = document.getElementById("thirdMonthResult");
  const evolutionParagraph = document.getElementById("thirdMonthEvolution");

  // Vérifier que le nombre de fœtus est valide
  if (numberOfFetus < 0 || numberOfFetus > 4) {
    alert("Nombre de fœtus invalide. Veuillez entrer un nombre entre 0 et 4.");
    return;
  }

  // Récupérer le numéro de cas
  const caseNumber = parseInt(document.getElementById("caseNumber").value);

  if (caseNumber < 1 || caseNumber > evolutionResults.length) {
    alert(
      "Numéro de cas invalide. Veuillez entrer un numéro entre 1 et " + evolutionResults.length
    );
    return;
  }

  resultContainer.innerHTML = "";

  const evolutionsForCase = evolutionResults.find(
    (result) => result.numero === caseNumber
  ).evolutions;

  const randomEvolution = evolutionsForCase[Math.floor(Math.random() * evolutionsForCase.length)];

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

    if (randomEvolution) {
      if (randomEvolution.fetus) {
        for (const [key, fetus] of Object.entries(randomEvolution.fetus)) {
          if (i === parseInt(key.slice(-1))) {
            document.getElementById(`clarteNucale${i}`).innerText = fetus.clarteNucale;
            document.getElementById(`activiteCardiaque${i}`).innerText = fetus.activiteCardiaque;
            document.getElementById(`anomalieMorphologique${i}`).innerText =
              fetus.anomalieMorphologique;
            document.getElementById(`quantiteLiquideAmniotique${i}`).innerText =
              fetus.liquideAmniotique;
          }
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

  // Ajouter la valeur de la clé "evolution" au paragraphe
  if (randomEvolution && randomEvolution.evolution) {
    evolutionParagraph.innerText = randomEvolution.evolution;
  }

  resultContainer.classList.remove("hidden");
});
//? 3ème mois de grossesse <--

//? Masquer la section au clic sur la croix
document.getElementById("firstMonthClose").addEventListener("click", function () {
  hideElements(["firstMonthClose", "firstMonthResult"]);
});
document.getElementById("thirdMonthClose").addEventListener("click", function () {
  hideElements(["thirdMonthClose", "thirdMonthResult"]);
});

//? Afficher toute la section au clic sur le bouton
scrollToSection("generateFirstMonthButton", "firstMonthSection");
scrollToSection("generateThirdMonthButton", "thirdMonthSection");
//? Afficher toute la section au clic sur le bouton <--

//? Masquer la section au clic sur la croix
document.getElementById("firstMonthClose").addEventListener("click", function () {
  hideElements(["firstMonthClose", "firstMonthResult"]); // Cela masque les deux éléments
  document.getElementById("firstMonthClose").classList.add("hidden"); // Ajoutez la classe hidden à l'icône de fermeture
});
//? Masquer la section au clic sur la croix <--
