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
//* Dictionnaire des résultats d'échographie 1er mois
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
  ).innerHTML = `Cas n°<span class="important">${randomResult.numero}</span><br>${randomResult.evolution}`;

  const firstMonthResult = document.getElementById("firstMonthResult");
  firstMonthResult.classList.remove("hidden");

  document.getElementById("firstMonthClose").classList.remove("hidden");
});
//? 1er mois de grossesse <--

//? --> 3ème mois de grossesse
//* Dictionnaire des résultats déchographie 3ème mois
const evolutionResults = [
  {
    numero: 1,
    evolutions: [
      {
        id: 1.1,
        clarteNucale: "1.5 mm",
        activiteCardiaque: "Présente",
        nombreFetus: 1,
        anomalieMorphologique: "Aucune",
        liquideAmniotique: "Normale",
        evolution:
          "La grossesse se déroule normalement avec une clarté nucale dans les limites acceptables et un cœur fœtal actif.",
      },
      {
        id: 1.2,
        clarteNucale: "2 mm",
        activiteCardiaque: "Présente",
        nombreFetus: 1,
        anomalieMorphologique: "Mineure (à surveiller)",
        liquideAmniotique: "Normale",
        evolution:
          "Bien que la clarté nucale soit légèrement augmentée, l'activité cardiaque est présente. Continuer la surveillance.",
      },
      {
        id: 1.3,
        clarteNucale: "3 mm",
        activiteCardiaque: "Présente",
        nombreFetus: 1,
        anomalieMorphologique: "Possible anomalie cardiaque",
        liquideAmniotique: "Normale",
        evolution:
          "Des préoccupations émergent concernant une possible anomalie cardiaque, bien que le fœtus soit encore viable.",
      },
      {
        id: 1.4,
        clarteNucale: "1.8 mm",
        activiteCardiaque: "Faible",
        nombreFetus: 1,
        anomalieMorphologique: "Aucune",
        liquideAmniotique: "Faible",
        evolution:
          "La grossesse présente des signes de vulnérabilité avec une activité cardiaque faible et un liquide amniotique réduit.",
      },
      {
        id: 1.5,
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
        id: 2.1,
        clarteNucale: "2.5 mm",
        activiteCardiaque: "Présente",
        nombreFetus: 1,
        anomalieMorphologique: "Aucune",
        liquideAmniotique: "Normale",
        evolution:
          "La grossesse est en bonne voie, avec une clarté nucale normale et un cœur fœtal actif.",
      },
      {
        id: 2.2,
        clarteNucale: "2 mm",
        activiteCardiaque: "Présente",
        nombreFetus: 1,
        anomalieMorphologique: "Suspicion d'hydrocéphalie",
        liquideAmniotique: "Normale",
        evolution:
          "Bien que le cœur fœtal soit actif, une suspicion d'hydrocéphalie nécessite une attention particulière.",
      },
      {
        id: 2.3,
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
        id: 3.1,
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
        id: 3.2,
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
        id: 4.1,
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
        id: 4.2,
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
        id: 4.3,
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
        id: 5.1,
        clarteNucale: "3 mm",
        activiteCardiaque: "Faible",
        nombreFetus: 1,
        anomalieMorphologique: "Anomalie détectée",
        liquideAmniotique: "Réduit",
        evolution:
          "L'évolution est préoccupante avec une activité cardiaque faible et une anomalie détectée, ce qui nécessite une surveillance accrue.",
      },
      {
        id: 5.2,
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
        id: 6.1,
        clarteNucale: "2 mm",
        activiteCardiaque: "Présente",
        nombreFetus: 1,
        anomalieMorphologique: "Aucune",
        liquideAmniotique: "Normale",
        evolution:
          "La grossesse évolue normalement avec des résultats satisfaisants au niveau de la clarté nucale et de l'activité cardiaque.",
      },
      {
        id: 6.2,
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
        id: 7.1,
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
        id: 8.1,
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
          "Bien que le premier et le troisième fœtus présentent une bonne santé, le deuxième montre une activité cardiaque faible et une suspicion de cardiopathie.",
      },
      {
        id: 8.2,
        fetus: {
          bebe1: {
            clarteNucale: "1.9 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe2: {
            clarteNucale: "2.1 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe3: {
            clarteNucale: "2.0 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
        },
        evolution:
          "Tous les fœtus montrent une bonne santé avec des clartés nucales normales et une activité cardiaque présente.",
      },
      {
        id: 8.3,
        fetus: {
          bebe1: {
            clarteNucale: "1.7 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe2: {
            clarteNucale: "2.4 mm",
            activiteCardiaque: "Absent",
            anomalieMorphologique: "Mort in-utero",
            liquideAmniotique: "Normale",
          },
          bebe3: {
            clarteNucale: "1.5 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
        },
        evolution:
          "Le premier et le troisième fœtus sont en bonne santé, tandis que le deuxième est décédé in-utero, ce qui nécessite une surveillance accrue.",
      },
      {
        id: 8.4,
        fetus: {
          bebe1: {
            clarteNucale: "1.6 mm",
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
            clarteNucale: "2.1 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
        },
        evolution:
          "Tous les fœtus se portent bien, avec une activité cardiaque normale et des clartés nucales dans la norme.",
      },
      {
        id: 8.5,
        fetus: {
          bebe1: {
            clarteNucale: "2.0 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe2: {
            clarteNucale: "2.7 mm",
            activiteCardiaque: "Faible",
            anomalieMorphologique: "Suspicion d'anomalie",
            liquideAmniotique: "Normale",
          },
          bebe3: {
            clarteNucale: "1.8 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
        },
        evolution:
          "Le premier et le troisième fœtus sont en bonne santé, tandis que le deuxième présente une activité cardiaque faible avec une suspicion d'anomalie.",
      },
    ],
  },
  {
    numero: 9,
    evolutions: [
      {
        id: 9.1,
        fetus: {
          bebe1: {
            clarteNucale: "2 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe2: {
            clarteNucale: "2.1 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe3: {
            clarteNucale: "2.2 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe4: {
            clarteNucale: "2.3 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
        },
        evolution:
          "La grossesse progresse normalement avec des signes de santé fœtale satisfaisants pour tous les fœtus.",
      },
      {
        id: 9.2,
        fetus: {
          bebe1: {
            clarteNucale: "2.5 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe2: {
            clarteNucale: "2.4 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe3: {
            clarteNucale: "2.3 mm",
            activiteCardiaque: "Faible",
            anomalieMorphologique: "Suspicion de malformation",
            liquideAmniotique: "Normale",
          },
          bebe4: {
            clarteNucale: "2.2 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
        },
        evolution:
          "Le premier, le deuxième et le quatrième fœtus se portent bien, tandis que le troisième montre une activité cardiaque faible et une suspicion de malformation.",
      },
      {
        id: 9.3,
        fetus: {
          bebe1: {
            clarteNucale: "2.8 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe2: {
            clarteNucale: "3.0 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe3: {
            clarteNucale: "2.6 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe4: {
            clarteNucale: "2.9 mm",
            activiteCardiaque: "Absent",
            anomalieMorphologique: "Mort in-utero",
            liquideAmniotique: "Normale",
          },
        },
        evolution:
          "Trois fœtus sont en bonne santé, tandis que le quatrième est décédé in-utero, nécessitant un suivi attentif.",
      },
      {
        id: 9.4,
        fetus: {
          bebe1: {
            clarteNucale: "2.4 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe2: {
            clarteNucale: "2.6 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe3: {
            clarteNucale: "2.5 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe4: {
            clarteNucale: "2.3 mm",
            activiteCardiaque: "Faible",
            anomalieMorphologique: "Suspicion d'anomalie",
            liquideAmniotique: "Normale",
          },
        },
        evolution:
          "Les trois premiers fœtus présentent des signes de santé normaux, tandis que le quatrième montre une activité cardiaque faible avec une suspicion d'anomalie.",
      },
      {
        id: 9.5,
        fetus: {
          bebe1: {
            clarteNucale: "2.7 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe2: {
            clarteNucale: "2.8 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe3: {
            clarteNucale: "2.6 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe4: {
            clarteNucale: "2.5 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
        },
        evolution:
          "Tous les fœtus se portent bien, avec des signes de santé normaux et une activité cardiaque présente.",
      },
    ],
  },
  {
    numero: 10,
    evolutions: [
      {
        id: 10.1,
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
//* Générer un compte-rendu pour le 3ème mois de grossesse
document.getElementById("generateThirdMonthButton").addEventListener("click", function () {
  const caseNumber = parseInt(document.getElementById("caseNumber").value);
  if (isNaN(caseNumber) || caseNumber < 1 || caseNumber > 10) {
    alert("Veuillez sélectionner un numéro de cas valide (entre 1 et 10).");
    return;
  }
  const resultContainer = document.getElementById("thirdMonthResult");
  const evolutionParagraph = document.getElementById("thirdMonthEvolution");
  resultContainer.innerHTML = "";
  const evolutionsForCase = evolutionResults.find(
    (result) => result.numero === caseNumber
  ).evolutions;
  const randomEvolution = evolutionsForCase[Math.floor(Math.random() * evolutionsForCase.length)];
  let numberOfFetus = 1;
  if (randomEvolution.fetus) {
    numberOfFetus = Object.keys(randomEvolution.fetus).length;
  } else if (randomEvolution.nombreFetus !== undefined) {
    numberOfFetus = randomEvolution.nombreFetus;
  }
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
  if (randomEvolution && randomEvolution.evolution) {
    evolutionParagraph.innerHTML = `Évolution: ${randomEvolution.evolution}<br>Il s'agit de l'évolution n°<span class="important">${randomEvolution.id}</span>`;
  }
  resultContainer.classList.remove("hidden");
  document.getElementById("thirdMonthEvolution").classList.remove("hidden");
  document.getElementById("thirdMonthClose").classList.remove("hidden");
});
//? 3ème mois de grossesse <--

//? --> 5ème mois de grossesse
//* Dictionnaires des résultats déchographie 5ème mois
const fifthMonthCaseOne = {
  "1.1.1": {
    morphologieCerebrale: "Développement normal",
    colonneVertebrale: "Alignement correct",
    membres: "Symétriques, sans anomalie",
    placenta: "Localisation antérieure",
    interpretation: "Le développement se poursuit normalement sans anomalies visibles.",
    conclusion: "bloublou 1.1.1",
  },
  "1.1.2": {
    morphologieCerebrale: "Forme et taille conformes",
    colonneVertebrale: "Structure correcte",
    membres: "Mouvements actifs",
    placenta: "Position postérieure",
    interpretation: "Les observations sont rassurantes, évolution normale.",
    conclusion: "bloublou 1.1.2",
  },
  "1.1.3": {
    morphologieCerebrale: "Croissance adéquate",
    colonneVertebrale: "Pas de malformations",
    membres: "Développement harmonieux",
    placenta: "Insertion correcte",
    interpretation: "Aucune anomalie détectée, évolution favorable.",
    conclusion: "bloublou 1.1.3",
  },
  "1.2.1": {
    morphologieCerebrale: "Structure à surveiller",
    colonneVertebrale: "Position et alignement normaux",
    membres: "Légère asymétrie, à suivre",
    placenta: "Localisation antérieure",
    interpretation: "Petite anomalie détectée au niveau des membres, sans urgence.",
    conclusion: "bloublou 1.2.1",
  },
  "1.2.2": {
    morphologieCerebrale: "Aspect général normal",
    colonneVertebrale: "Développement standard",
    membres: "Légère réduction des mouvements",
    placenta: "Position postérieure",
    interpretation: "Surveillance recommandée pour une possible anomalie mineure.",
    conclusion: "bloublou 1.2.2",
  },
  "1.2.3": {
    morphologieCerebrale: "Taille conforme",
    colonneVertebrale: "Sans particularité",
    membres: "Mobilité modérée",
    placenta: "Fixation correcte",
    interpretation: "Les données sont rassurantes mais une surveillance s'impose.",
    conclusion: "bloublou 1.2.3",
  },
  "1.3.1": {
    morphologieCerebrale: "Structure suspecte",
    colonneVertebrale: "Forme correcte",
    membres: "Bonne activité",
    placenta: "Fixation antérieure",
    interpretation: "Une anomalie cardiaque est toujours suspectée.",
    conclusion: "bloublou 1.3.1",
  },
  "1.3.2": {
    morphologieCerebrale: "Possible anomalie",
    colonneVertebrale: "Alignement vérifié",
    membres: "Bonne flexion des articulations",
    placenta: "Position postérieure",
    interpretation: "Anomalie cardiaque possible, suivi recommandé.",
    conclusion: "bloublou 1.3.2",
  },
  "1.3.3": {
    morphologieCerebrale: "Présence d'une anomalie mineure",
    colonneVertebrale: "Croissance normale",
    membres: "Activité restreinte",
    placenta: "Position correcte",
    interpretation: "Signes d'une anomalie cardiaque légère, à surveiller.",
    conclusion: "bloublou 1.3.3",
  },
  "1.4.1": {
    morphologieCerebrale: "Légère anomalie dans la structure",
    colonneVertebrale: "Normale",
    membres: "Mobilité réduite",
    placenta: "Position basse",
    interpretation: "État général à surveiller de près, faible activité cardiaque.",
    conclusion: "bloublou 1.4.1",
  },
  "1.4.2": {
    morphologieCerebrale: "Petite anomalie détectée",
    colonneVertebrale: "Forme adéquate",
    membres: "Croissance correcte",
    placenta: "Position postérieure",
    interpretation: "Cardiopathie suspectée, une surveillance accrue est nécessaire.",
    conclusion: "bloublou 1.4.2",
  },
  "1.4.3": {
    morphologieCerebrale: "Développement atypique",
    colonneVertebrale: "Alignement normal",
    membres: "Mobilité réduite",
    placenta: "Insertion basse",
    interpretation: "Signes de faiblesse cardiaque, une surveillance accrue est préconisée.",
    conclusion: "bloublou 1.4.3",
  },
};
const fifthMonthCaseTwo = {
  "2.1.1": {
    morphologieCerebrale: "Développement conforme",
    colonneVertebrale: "Sans anomalie",
    membres: "Symétriques et mobiles",
    placenta: "Localisation antérieure",
    interpretation: "Évolution normale, aucune anomalie détectée.",
    conclusion: "bloublou 2.1.1",
  },
  "2.1.2": {
    morphologieCerebrale: "Forme et structure normales",
    colonneVertebrale: "Bonne courbure",
    membres: "Mobilité active",
    placenta: "Fixation correcte",
    interpretation: "Développement harmonieux, bilan rassurant.",
    conclusion: "bloublou 2.1.2",
  },
  "2.1.3": {
    morphologieCerebrale: "Taille dans la norme",
    colonneVertebrale: "Alignement adéquat",
    membres: "Activité modérée",
    placenta: "Position postérieure",
    interpretation: "Évolution sans particularité, bon pronostic.",
    conclusion: "bloublou 2.1.3",
  },
  "2.2.1": {
    morphologieCerebrale: "Ventricules légèrement dilatés",
    colonneVertebrale: "Forme correcte",
    membres: "Légère raideur",
    placenta: "Fixation antérieure",
    interpretation: "Suspicion d'hydrocéphalie à surveiller de près.",
    conclusion: "bloublou 2.2.1",
  },
  "2.2.2": {
    morphologieCerebrale: "Présence de ventricules dilatés",
    colonneVertebrale: "Alignement sans anomalie",
    membres: "Activité réduite",
    placenta: "Position postérieure",
    interpretation: "Hydrocéphalie suspectée, suivi échographique requis.",
    conclusion: "bloublou 2.2.2",
  },
  "2.2.3": {
    morphologieCerebrale: "Signes de dilatation ventriculaire",
    colonneVertebrale: "Aspect normal",
    membres: "Mouvements restreints",
    placenta: "Position antérieure",
    interpretation: "Dilatation ventriculaire détectée, nécessitant des examens complémentaires.",
    conclusion: "bloublou 2.2.3",
  },
};
const fifthMonthCaseThree = {
  "3.1.1": {
    morphologieCerebrale: "Asymétrie ventriculaire",
    colonneVertebrale: "Légèrement incurvée",
    membres: "Mains fermées fréquemment",
    placenta: "Insertion basse",
    interpretation: "Présence de signes dysmorphiques, un suivi rapproché est recommandé.",
    conclusion: "bloublou 3.1.1",
  },
  "3.1.2": {
    morphologieCerebrale: "Petite cavité ventriculaire",
    colonneVertebrale: "Présence de légère courbure",
    membres: "Mouvements limités",
    placenta: "Fixation antérieure",
    interpretation:
      "Profil facial et anomalies cérébrales suggèrent une anomalie génétique possible.",
    conclusion: "bloublou 3.1.2",
  },
  "3.1.3": {
    morphologieCerebrale: "Développement irrégulier",
    colonneVertebrale: "Légère déviation",
    membres: "Développement incomplet des doigts",
    placenta: "Position normale",
    interpretation: "Anomalies morphologiques persistantes, examens génétiques recommandés.",
    conclusion: "bloublou 3.1.3",
  },
  "3.2.1": {
    morphologieCerebrale: "Conforme pour l'âge gestationnel",
    colonneVertebrale: "Structure régulière",
    membres: "Mouvements normaux",
    placenta: "Localisation antérieure",
    interpretation:
      "Développement cérébral et morphologique dans les normes, surveillance standard.",
    conclusion: "bloublou 3.2.1",
  },
  "3.2.2": {
    morphologieCerebrale: "Morphologie symétrique",
    colonneVertebrale: "Alignement adéquat",
    membres: "Bonne activité motrice",
    placenta: "Position postérieure",
    interpretation: "Croissance normale sans anomalie détectée.",
    conclusion: "bloublou 3.2.2",
  },
  "3.2.3": {
    morphologieCerebrale: "Ventricules de taille normale",
    colonneVertebrale: "Aspect sain",
    membres: "Symétriques et actifs",
    placenta: "Localisation correcte",
    interpretation: "Pas d’anomalie morphologique significative, pronostic favorable.",
    conclusion: "bloublou 3.2.3",
  },
};
const fifthMonthCaseFour = {
  "4.1.1": {
    bebe1: {
      morphologieCerebrale: "Développement normal",
      colonneVertebrale: "Alignement correct",
      membres: "Bonne motricité",
      placenta: "Postérieur",
      interpretation: "Développement sain pour le premier fœtus, sans anomalies détectées.",
    },
    bebe2: {
      morphologieCerebrale: "Signes de dilatation ventriculaire",
      colonneVertebrale: "Alignement normal",
      membres: "Activité motrice réduite",
      placenta: "Antérieur",
      interpretation: "Présence d'une suspicion de cardiopathie, surveillance accrue recommandée.",
    },
    conclusion: "bloublou 4.1.1",
  },
  "4.1.2": {
    bebe1: {
      morphologieCerebrale: "Normale",
      colonneVertebrale: "Structure régulière",
      membres: "Tonus normal",
      placenta: "Postérieur",
      interpretation: "Bonne évolution morphologique pour le premier fœtus.",
    },
    bebe2: {
      morphologieCerebrale: "Anomalies cardiaques possibles",
      colonneVertebrale: "Aspect régulier",
      membres: "Mouvements limités",
      placenta: "Antérieur",
      interpretation:
        "Les signes de cardiopathie persistent, consultation en cardiologie fœtale recommandée.",
    },
    conclusion: "bloublou 4.1.2",
  },
  "4.1.3": {
    bebe1: {
      morphologieCerebrale: "Développement adéquat",
      colonneVertebrale: "Alignement correct",
      membres: "Symétriques",
      placenta: "Postérieur",
      interpretation: "Pas d'anomalie détectée pour le premier fœtus.",
    },
    bebe2: {
      morphologieCerebrale: "Asymétrie ventriculaire",
      colonneVertebrale: "Légère courbure",
      membres: "Ton modéré",
      placenta: "Antérieur",
      interpretation: "Suivi régulier conseillé en raison de la suspicion de cardiopathie.",
    },
    conclusion: "bloublou 4.1.3",
  },
  "4.2.1": {
    bebe1: {
      morphologieCerebrale: "Non applicable",
      colonneVertebrale: "Non applicable",
      membres: "Non applicable",
      placenta: "Non applicable",
      interpretation: "Premier fœtus décédé, absence d'activité cardiaque.",
    },
    bebe2: {
      morphologieCerebrale: "Symétrie parfaite",
      colonneVertebrale: "Conforme",
      membres: "Bonne tonicité",
      placenta: "Postérieur",
      interpretation: "Croissance normale, sans anomalies détectées.",
    },
    conclusion: "bloublou 4.2.1",
  },
  "4.2.2": {
    bebe1: {
      morphologieCerebrale: "Non applicable",
      colonneVertebrale: "Non applicable",
      membres: "Non applicable",
      placenta: "Non applicable",
      interpretation: "Décès in-utero confirmé pour le premier fœtus.",
    },
    bebe2: {
      morphologieCerebrale: "Développement normal",
      colonneVertebrale: "Sans particularité",
      membres: "Actifs",
      placenta: "Antérieur",
      interpretation: "Deuxième fœtus en développement normal, suivi de routine recommandé.",
    },
    conclusion: "bloublou 4.2.2",
  },
  "4.2.3": {
    bebe1: {
      morphologieCerebrale: "Non applicable",
      colonneVertebrale: "Non applicable",
      membres: "Non applicable",
      placenta: "Non applicable",
      interpretation: "Absence de signes vitaux pour le premier fœtus.",
    },
    bebe2: {
      morphologieCerebrale: "Forme normale",
      colonneVertebrale: "Normale",
      membres: "Réponse active",
      placenta: "Postérieur",
      interpretation: "Évolution satisfaisante pour le deuxième fœtus, pronostic favorable.",
    },
    conclusion: "bloublou 4.2.3",
  },
  "4.3.1": {
    bebe1: {
      morphologieCerebrale: "Développement normal",
      colonneVertebrale: "Alignement correct",
      membres: "Mouvements spontanés",
      placenta: "Postérieur",
      interpretation: "État global sans anomalie pour le premier fœtus.",
    },
    bebe2: {
      morphologieCerebrale: "Structure homogène",
      colonneVertebrale: "Alignement adéquat",
      membres: "Mouvements amples",
      placenta: "Antérieur",
      interpretation: "Bonne croissance pour le deuxième fœtus, aucun signe d'anomalie.",
    },
    conclusion: "bloublou 4.3.1",
  },
  "4.3.2": {
    bebe1: {
      morphologieCerebrale: "Normale",
      colonneVertebrale: "Aspect harmonieux",
      membres: "Activité régulière",
      placenta: "Postérieur",
      interpretation: "Croissance normale pour le premier fœtus.",
    },
    bebe2: {
      morphologieCerebrale: "Symétrie ventriculaire",
      colonneVertebrale: "Position correcte",
      membres: "Réponse motrice normale",
      placenta: "Antérieur",
      interpretation: "Évolution morphologique normale pour le deuxième fœtus.",
    },
    conclusion: "bloublou 4.3.2",
  },
  "4.3.3": {
    bebe1: {
      morphologieCerebrale: "Développement régulier",
      colonneVertebrale: "Sans déviation",
      membres: "Mouvements harmonieux",
      placenta: "Postérieur",
      interpretation: "Première évolution sans anomalie.",
    },
    bebe2: {
      morphologieCerebrale: "Proportionnelle",
      colonneVertebrale: "Structure normale",
      membres: "Mouvements actifs",
      placenta: "Antérieur",
      interpretation: "Croissance en ligne avec les attentes, aucune intervention requise.",
    },
    conclusion: "bloublou 4.3.3",
  },
};
const fifthMonthCaseFive = {
  "5.1.1": {
    morphologieCerebrale: "Ventricules légèrement dilatés",
    colonneVertebrale: "Courbure visible",
    membres: "Mouvements limités",
    placenta: "Position basse",
    interpretation:
      "Anomalies neurologiques à surveiller en raison de l'activité cardiaque faible et du liquide amniotique réduit.",
    conclusion: "bloublou 5.1.1",
  },
  "5.1.2": {
    morphologieCerebrale: "Dilatation ventriculaire",
    colonneVertebrale: "Légère déviation",
    membres: "Faible activité motrice",
    placenta: "Antérieur",
    interpretation:
      "Les anomalies détectées nécessitent un suivi intensif, avec des signes de développement neuro-musculaire impacté.",
    conclusion: "bloublou 5.1.2",
  },
  "5.1.3": {
    morphologieCerebrale: "Asymétrie ventriculaire",
    colonneVertebrale: "Alignement compromis",
    membres: "Mouvements restreints",
    placenta: "Marginal",
    interpretation:
      "L'ensemble des observations suggère des risques neurologiques et orthopédiques potentiels.",
    conclusion: "bloublou 5.1.3",
  },
  "5.2.1": {
    morphologieCerebrale: "Normale",
    colonneVertebrale: "Alignement normal",
    membres: "Bonne tonicité",
    placenta: "Postérieur",
    interpretation:
      "Le développement du fœtus est normal avec aucune anomalie morphologique détectée.",
    conclusion: "bloublou 5.2.1",
  },
  "5.2.2": {
    morphologieCerebrale: "Développement normal",
    colonneVertebrale: "Structure correcte",
    membres: "Mouvements actifs",
    placenta: "Position supérieure",
    interpretation:
      "L'absence d'anomalies est rassurante ; l'évolution du fœtus se poursuit normalement.",
    conclusion: "bloublou 5.2.2",
  },
  "5.2.3": {
    morphologieCerebrale: "Symétrie parfaite",
    colonneVertebrale: "Aspect harmonieux",
    membres: "Motricité adéquate",
    placenta: "Positionnement favorable",
    interpretation: "Aucune anomalie décelée ; croissance conforme aux attentes.",
    conclusion: "bloublou 5.2.3",
  },
};
const fifthMonthCaseSix = {
  "6.1.1": {
    morphologieCerebrale: "Développement normal",
    colonneVertebrale: "Alignement correct",
    membres: "Tonicité et motricité normales",
    placenta: "Position postérieure",
    interpretation:
      "Évolution fœtale normale ; aucun signe d'anomalie malgré la surveillance initiale.",
    conclusion: "bloublou 6.1.1",
  },
  "6.1.2": {
    morphologieCerebrale: "Normale avec structures visibles",
    colonneVertebrale: "Alignement harmonieux",
    membres: "Activité régulière",
    placenta: "Positionnement favorable",
    interpretation:
      "Croissance sans complication ; développement harmonieux et absence de toute anomalie morphologique.",
    conclusion: "bloublou 6.1.2",
  },
  "6.1.3": {
    morphologieCerebrale: "Symétrique",
    colonneVertebrale: "Forme et courbure conformes",
    membres: "Bonne motricité",
    placenta: "Position antérieure",
    interpretation:
      "Tous les paramètres de croissance sont satisfaisants ; l'évolution est rassurante pour la suite de la grossesse.",
    conclusion: "bloublou 6.1.3",
  },
};
const fifthMonthCaseEight = {
  "8.1.1": {
    bebe1: {
      morphologieCerebrale: "Développement harmonieux",
      colonneVertebrale: "Alignement correct",
      membres: "Tonicité normale",
      placenta: "Position antérieure",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Asymétrie détectée",
      colonneVertebrale: "Certaine courbure anormale",
      membres: "Mouvement réduit",
      placenta: "Position postérieure",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Conformation normale",
      colonneVertebrale: "Alignement régulier",
      membres: "Bonne mobilité",
      placenta: "Position antérieure",
      interpretation: "",
    },
    conclusion:
      "Évolution généralement positive pour Bébés 1 et 3, mais un suivi cardiologique reste requis pour Bébé 2.",
  },
  "8.1.2": {
    bebe1: {
      morphologieCerebrale: "Symétrie parfaite",
      colonneVertebrale: "Conforme aux attentes",
      membres: "Actifs",
      placenta: "Latéral gauche",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Dilatation ventriculaire",
      colonneVertebrale: "Anomalie légère",
      membres: "Mouvement faible",
      placenta: "Postérieur",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Régulière",
      colonneVertebrale: "Développement en cours",
      membres: "Actifs",
      placenta: "Latéral droit",
      interpretation: "",
    },
    conclusion:
      "Bébé 1 et Bébé 3 progressent normalement, Bébé 2 présente des signes d’une cardiopathie potentielle.",
  },
  "8.1.3": {
    bebe1: {
      morphologieCerebrale: "Développement en cours",
      colonneVertebrale: "Aucune anomalie détectée",
      membres: "Tonicité normale",
      placenta: "Positionnement favorable",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Déformation mineure",
      colonneVertebrale: "Déviation latérale",
      membres: "Rétrécissement observable",
      placenta: "Antérieur",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Forme typique",
      colonneVertebrale: "Alignement correct",
      membres: "Bonne amplitude",
      placenta: "Postérieur",
      interpretation: "",
    },
    conclusion:
      "Progression fœtale stable, bien que Bébé 2 montre des signes nécessitant une évaluation plus poussée.",
  },
  "8.2.1": {
    bebe1: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Alignement correct",
      membres: "Mobilité normale",
      placenta: "Position postérieure",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Forme régulière",
      colonneVertebrale: "Bonne structure",
      membres: "Actifs",
      placenta: "Position antérieure",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Développement harmonieux",
      colonneVertebrale: "Alignement normal",
      membres: "Bonne motricité",
      placenta: "Latéral gauche",
      interpretation: "",
    },
    conclusion:
      "Les trois fœtus montrent une croissance normale et équilibrée, sans complications majeures observées.",
  },
  "8.2.2": {
    bebe1: {
      morphologieCerebrale: "Symétrique",
      colonneVertebrale: "Alignement correct",
      membres: "Bonne activité",
      placenta: "Position antérieure",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Régulière",
      colonneVertebrale: "Structure stable",
      membres: "Bonne motricité",
      placenta: "Position postérieure",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Développement harmonieux",
      colonneVertebrale: "Alignement correct",
      membres: "Bonne activité",
      placenta: "Positionnement favorable",
      interpretation: "",
    },
    conclusion: "Développement uniforme et en bonne santé des trois bébés, sans anomalie décelée.",
  },
  "8.2.3": {
    bebe1: {
      morphologieCerebrale: "Développement conforme",
      colonneVertebrale: "Bonne structure",
      membres: "Mobilité normale",
      placenta: "Latéral gauche",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Régulière",
      colonneVertebrale: "Forme adéquate",
      membres: "Tonicité correcte",
      placenta: "Postérieur",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Développement homogène",
      colonneVertebrale: "Structure régulière",
      membres: "Activité satisfaisante",
      placenta: "Antérieur",
      interpretation: "",
    },
    conclusion:
      "Les trois bébés présentent une croissance homogène, avec tous les paramètres dans la normale.",
  },
  "8.3.1": {
    bebe1: {
      morphologieCerebrale: "Symétrique",
      colonneVertebrale: "Développement normal",
      membres: "Mobilité normale",
      placenta: "Position postérieure",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Non applicable",
      colonneVertebrale: "Non applicable",
      membres: "Non applicable",
      placenta: "Non applicable",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Forme correcte",
      colonneVertebrale: "Alignement régulier",
      membres: "Bonne tonicité",
      placenta: "Latéral droit",
      interpretation: "",
    },
    conclusion:
      "Les bébés 1 et 3 poursuivent leur développement normalement. Bébé 2 montre une absence d'activité cardiaque.",
  },
  "8.3.2": {
    bebe1: {
      morphologieCerebrale: "Développement harmonieux",
      colonneVertebrale: "Aucune anomalie",
      membres: "Mobilité active",
      placenta: "Positionnement favorable",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Non applicable",
      colonneVertebrale: "Non applicable",
      membres: "Non applicable",
      placenta: "Non applicable",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Symétrique",
      colonneVertebrale: "Alignement correct",
      membres: "Bonne activité",
      placenta: "Latéral gauche",
      interpretation: "",
    },
    conclusion:
      "Croissance fœtale satisfaisante pour les Bébés 1 et 3 ; Bébé 2 présente un arrêt du développement.",
  },
  "8.3.3": {
    bebe1: {
      morphologieCerebrale: "Normale",
      colonneVertebrale: "Forme correcte",
      membres: "Mobilité adéquate",
      placenta: "Antérieur",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Non applicable",
      colonneVertebrale: "Non applicable",
      membres: "Non applicable",
      placenta: "Non applicable",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Développement symétrique",
      colonneVertebrale: "Alignement normal",
      membres: "Activité régulière",
      placenta: "Postérieur",
      interpretation: "",
    },
    conclusion:
      "Les paramètres de Bébés 1 et 3 restent normaux. Bébé 2 ne montre plus de signes vitaux.",
  },
  "8.4.1": {
    bebe1: {
      morphologieCerebrale: "Forme régulière",
      colonneVertebrale: "Alignement normal",
      membres: "Activité harmonieuse",
      placenta: "Latéral droit",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Symétrie correcte",
      colonneVertebrale: "Développement normal",
      membres: "Bonne motricité",
      placenta: "Postérieur",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Bonne structure",
      membres: "Mobilité normale",
      placenta: "Antérieur",
      interpretation: "",
    },
    conclusion:
      "Les trois bébés montrent un développement stable et sans complications apparentes.",
  },
  "8.4.2": {
    bebe1: {
      morphologieCerebrale: "Développement harmonieux",
      colonneVertebrale: "Aucune anomalie",
      membres: "Actifs",
      placenta: "Positionnement favorable",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Forme typique",
      colonneVertebrale: "Bonne formation",
      membres: "Mobilité correcte",
      placenta: "Latéral gauche",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Symétrie parfaite",
      colonneVertebrale: "Alignement régulier",
      membres: "Activité satisfaisante",
      placenta: "Postérieur",
      interpretation: "",
    },
    conclusion: "Développement régulier des trois fœtus, sans anomalies notables observées.",
  },
  "8.4.3": {
    bebe1: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Alignement adéquat",
      membres: "Tonicité correcte",
      placenta: "Latéral droit",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Régulière",
      colonneVertebrale: "Structure stable",
      membres: "Actifs",
      placenta: "Positionnement favorable",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Développement homogène",
      colonneVertebrale: "Bonne structure",
      membres: "Bonne mobilité",
      placenta: "Latéral gauche",
      interpretation: "",
    },
    conclusion:
      "Les trois bébés poursuivent leur croissance dans des paramètres de normalité, sans complications notées.",
  },
  "8.5.1": {
    bebe1: {
      morphologieCerebrale: "Symétrie parfaite",
      colonneVertebrale: "Structure correcte",
      membres: "Activité normale",
      placenta: "Latéral gauche",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Légère asymétrie",
      colonneVertebrale: "Déviation légère",
      membres: "Mobilité réduite",
      placenta: "Antérieur",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Alignement normal",
      membres: "Mobilité normale",
      placenta: "Postérieur",
      interpretation: "",
    },
    conclusion:
      "Bébé 1 et Bébé 3 se développent sans problème, suivi recommandé pour Bébé 2 suite à une activité cardiaque faible.",
  },
  "8.5.2": {
    bebe1: {
      morphologieCerebrale: "Développement régulier",
      colonneVertebrale: "Alignement correct",
      membres: "Bonne tonicité",
      placenta: "Postérieur",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Dilatation ventriculaire légère",
      colonneVertebrale: "Anomalie mineure",
      membres: "Activité réduite",
      placenta: "Latéral droit",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Symétrie correcte",
      colonneVertebrale: "Développement harmonieux",
      membres: "Mobilité normale",
      placenta: "Positionnement favorable",
      interpretation: "",
    },
    conclusion:
      "Évolution satisfaisante pour Bébés 1 et 3, un contrôle supplémentaire recommandé pour Bébé 2.",
  },
  "8.5.3": {
    bebe1: {
      morphologieCerebrale: "Structure homogène",
      colonneVertebrale: "Structure conforme",
      membres: "Actifs",
      placenta: "Antérieur",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Déformation mineure",
      colonneVertebrale: "Légère courbure",
      membres: "Tonicité faible",
      placenta: "Postérieur",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Développement homogène",
      colonneVertebrale: "Alignement régulier",
      membres: "Bonne tonicité",
      placenta: "Latéral gauche",
      interpretation: "",
    },
    conclusion:
      "Croissance normale pour Bébés 1 et 3 ; Bébé 2 présente des signes nécessitant un suivi spécialisé.",
  },
};
const fifthMonthCaseNine = {
  "9.1.1": {
    bebe1: {
      morphologieCerebrale: "Normale",
      colonneVertebrale: "Alignement correct",
      membres: "Mobilité active",
      placenta: "Antérieur",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Symétrique",
      colonneVertebrale: "Structure normale",
      membres: "Activité normale",
      placenta: "Latéral gauche",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Développement conforme",
      colonneVertebrale: "Aucune anomalie",
      membres: "Tonicité normale",
      placenta: "Postérieur",
      interpretation: "",
    },
    bebe4: {
      morphologieCerebrale: "Normale",
      colonneVertebrale: "Développement correct",
      membres: "Mobilité satisfaisante",
      placenta: "Latéral droit",
      interpretation: "",
    },
    conclusion: "Tous les bébés présentent un développement normal, sans anomalies détectées.",
  },
  "9.1.2": {
    bebe1: {
      morphologieCerebrale: "Forme régulière",
      colonneVertebrale: "Développement normal",
      membres: "Bonne tonicité",
      placenta: "Latéral droit",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Symétrie correcte",
      colonneVertebrale: "Alignement normal",
      membres: "Activité correcte",
      placenta: "Antérieur",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Aucune anomalie",
      membres: "Activité normale",
      placenta: "Positionnement favorable",
      interpretation: "",
    },
    bebe4: {
      morphologieCerebrale: "Développement homogène",
      colonneVertebrale: "Alignement adéquat",
      membres: "Tonicité satisfaisante",
      placenta: "Latéral gauche",
      interpretation: "",
    },
    conclusion: "Développement harmonieux des quatre fœtus, sans complications apparentes.",
  },
  "9.1.3": {
    bebe1: {
      morphologieCerebrale: "Symétrie parfaite",
      colonneVertebrale: "Aucune anomalie",
      membres: "Mobilité normale",
      placenta: "Postérieur",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Développement normal",
      colonneVertebrale: "Structure régulière",
      membres: "Activité correcte",
      placenta: "Antérieur",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Forme typique",
      colonneVertebrale: "Bonne structure",
      membres: "Tonicité correcte",
      placenta: "Latéral gauche",
      interpretation: "",
    },
    bebe4: {
      morphologieCerebrale: "Développement conforme",
      colonneVertebrale: "Alignement normal",
      membres: "Activité harmonieuse",
      placenta: "Positionnement favorable",
      interpretation: "",
    },
    conclusion: "Les quatre fœtus se développent normalement sans anomalies.",
  },
  "9.2.1": {
    bebe1: {
      morphologieCerebrale: "Légère asymétrie",
      colonneVertebrale: "Normale",
      membres: "Activité correcte",
      placenta: "Antérieur",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Développement harmonieux",
      colonneVertebrale: "Structure normale",
      membres: "Mobilité normale",
      placenta: "Postérieur",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Forme régulière",
      colonneVertebrale: "Déviation mineure",
      membres: "Mobilité correcte",
      placenta: "Latéral gauche",
      interpretation: "",
    },
    bebe4: {
      morphologieCerebrale: "Développement normal",
      colonneVertebrale: "Alignement adéquat",
      membres: "Tonicité normale",
      placenta: "Positionnement favorable",
      interpretation: "",
    },
    conclusion: "Suivi recommandé pour le Bébé 1, les autres présentent un développement normal.",
  },
  "9.2.2": {
    bebe1: {
      morphologieCerebrale: "Développement homogène",
      colonneVertebrale: "Structure correcte",
      membres: "Tonicité adéquate",
      placenta: "Latéral gauche",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Symétrie normale",
      colonneVertebrale: "Développement régulier",
      membres: "Activité normale",
      placenta: "Antérieur",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Régulière",
      colonneVertebrale: "Alignement normal",
      membres: "Mobilité active",
      placenta: "Postérieur",
      interpretation: "",
    },
    bebe4: {
      morphologieCerebrale: "Normale",
      colonneVertebrale: "Aucune anomalie",
      membres: "Activité satisfaisante",
      placenta: "Latéral droit",
      interpretation: "",
    },
    conclusion:
      "Tous les fœtus, à l'exception de Bébé 1, montrent un développement sans anomalies.",
  },
  "9.2.3": {
    bebe1: {
      morphologieCerebrale: "Forme régulière",
      colonneVertebrale: "Alignement adéquat",
      membres: "Activité satisfaisante",
      placenta: "Positionnement favorable",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Développement homogène",
      colonneVertebrale: "Structure correcte",
      membres: "Mobilité normale",
      placenta: "Latéral gauche",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Normale",
      colonneVertebrale: "Développement normal",
      membres: "Tonicité normale",
      placenta: "Antérieur",
      interpretation: "",
    },
    bebe4: {
      morphologieCerebrale: "Régulière",
      colonneVertebrale: "Alignement adéquat",
      membres: "Activité correcte",
      placenta: "Postérieur",
      interpretation: "",
    },
    conclusion: "Développement stable pour les quatre bébés, sans complications.",
  },
  "9.3.1": {
    bebe1: {
      morphologieCerebrale: "Symétrique",
      colonneVertebrale: "Alignement normal",
      membres: "Activité normale",
      placenta: "Antérieur",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Développement normal",
      colonneVertebrale: "Aucune anomalie",
      membres: "Mobilité active",
      placenta: "Latéral droit",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Alignement normal",
      membres: "Tonicité normale",
      placenta: "Postérieur",
      interpretation: "",
    },
    bebe4: {
      morphologieCerebrale: "Développement homogène",
      colonneVertebrale: "Structure normale",
      membres: "Activité satisfaisante",
      placenta: "Positionnement favorable",
      interpretation: "",
    },
    conclusion: "Tous les fœtus se développent normalement sans anomalies détectées.",
  },
  "9.3.2": {
    bebe1: {
      morphologieCerebrale: "Légère déformation",
      colonneVertebrale: "Structure stable",
      membres: "Mobilité normale",
      placenta: "Latéral gauche",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Forme correcte",
      colonneVertebrale: "Alignement adéquat",
      membres: "Activité normale",
      placenta: "Antérieur",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Développement conforme",
      colonneVertebrale: "Aucune anomalie",
      membres: "Mobilité normale",
      placenta: "Postérieur",
      interpretation: "",
    },
    bebe4: {
      morphologieCerebrale: "Normale",
      colonneVertebrale: "Développement adéquat",
      membres: "Activité satisfaisante",
      placenta: "Positionnement favorable",
      interpretation: "",
    },
    conclusion: "Bébé 1 nécessite une surveillance accrue, les autres bébés sont en bonne santé.",
  },
  "9.3.3": {
    bebe1: {
      morphologieCerebrale: "Développement homogène",
      colonneVertebrale: "Alignement normal",
      membres: "Activité correcte",
      placenta: "Antérieur",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Régulière",
      colonneVertebrale: "Structure normale",
      membres: "Mobilité active",
      placenta: "Latéral droit",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Développement normal",
      membres: "Tonicité adéquate",
      placenta: "Postérieur",
      interpretation: "",
    },
    bebe4: {
      morphologieCerebrale: "Symétrique",
      colonneVertebrale: "Aucune anomalie",
      membres: "Activité satisfaisante",
      placenta: "Positionnement favorable",
      interpretation: "",
    },
    conclusion: "Développement normal des quatre fœtus, aucune anomalie notée.",
  },
  "9.4.1": {
    bebe1: {
      morphologieCerebrale: "Normale",
      colonneVertebrale: "Alignement correct",
      membres: "Mobilité active",
      placenta: "Antérieur",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Symétrique",
      colonneVertebrale: "Structure normale",
      membres: "Activité normale",
      placenta: "Latéral gauche",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Développement conforme",
      colonneVertebrale: "Aucune anomalie",
      membres: "Tonicité normale",
      placenta: "Postérieur",
      interpretation: "",
    },
    bebe4: {
      morphologieCerebrale: "Légère anomalie détectée",
      colonneVertebrale: "Observations à confirmer",
      membres: "Mobilité limitée",
      placenta: "Latéral droit",
      interpretation: "",
    },
    conclusion:
      "Trois bébés se développent normalement, tandis que Bébé 4 nécessite une surveillance accrue.",
  },
  "9.4.2": {
    bebe1: {
      morphologieCerebrale: "Forme régulière",
      colonneVertebrale: "Développement normal",
      membres: "Bonne tonicité",
      placenta: "Latéral droit",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Symétrie correcte",
      colonneVertebrale: "Alignement normal",
      membres: "Activité correcte",
      placenta: "Antérieur",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Aucune anomalie",
      membres: "Activité normale",
      placenta: "Positionnement favorable",
      interpretation: "",
    },
    bebe4: {
      morphologieCerebrale: "Développement homogène",
      colonneVertebrale: "Alignement adéquat",
      membres: "Tonicité limitée",
      placenta: "Latéral gauche",
      interpretation: "",
    },
    conclusion: "Développement harmonieux des trois fœtus, surveillance nécessaire pour Bébé 4.",
  },
  "9.4.3": {
    bebe1: {
      morphologieCerebrale: "Symétrique",
      colonneVertebrale: "Alignement normal",
      membres: "Activité normale",
      placenta: "Antérieur",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Développement normal",
      colonneVertebrale: "Structure régulière",
      membres: "Mobilité active",
      placenta: "Postérieur",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Régulière",
      colonneVertebrale: "Aucune anomalie",
      membres: "Tonicité correcte",
      placenta: "Latéral gauche",
      interpretation: "",
    },
    bebe4: {
      morphologieCerebrale: "Observations à confirmer",
      colonneVertebrale: "Déviation mineure",
      membres: "Mobilité faible",
      placenta: "Positionnement favorable",
      interpretation: "",
    },
    conclusion: "Trois bébés sont en bonne santé, Bébé 4 doit être suivi de près.",
  },
  "9.5.1": {
    bebe1: {
      morphologieCerebrale: "Normale",
      colonneVertebrale: "Structure correcte",
      membres: "Tonicité adéquate",
      placenta: "Latéral gauche",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Développement harmonieux",
      colonneVertebrale: "Aucune anomalie",
      membres: "Mobilité normale",
      placenta: "Antérieur",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Alignement normal",
      membres: "Activité correcte",
      placenta: "Postérieur",
      interpretation: "",
    },
    bebe4: {
      morphologieCerebrale: "Développement limité",
      colonneVertebrale: "Observations à confirmer",
      membres: "Mobilité très faible",
      placenta: "Positionnement favorable",
      interpretation: "",
    },
    conclusion:
      "Bébé 4 nécessite une attention particulière, les autres bébés se développent normalement.",
  },
  "9.5.2": {
    bebe1: {
      morphologieCerebrale: "Développement homogène",
      colonneVertebrale: "Alignement normal",
      membres: "Activité correcte",
      placenta: "Antérieur",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Régulière",
      colonneVertebrale: "Structure normale",
      membres: "Mobilité active",
      placenta: "Latéral droit",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Aucune anomalie",
      membres: "Tonicité normale",
      placenta: "Postérieur",
      interpretation: "",
    },
    bebe4: {
      morphologieCerebrale: "Observations nécessaires",
      colonneVertebrale: "Légère déviation",
      membres: "Mobilité très limitée",
      placenta: "Latéral gauche",
      interpretation: "",
    },
    conclusion:
      "Les trois fœtus se développent bien, Bébé 4 requiert une évaluation plus approfondie.",
  },
  "9.5.3": {
    bebe1: {
      morphologieCerebrale: "Symétrique",
      colonneVertebrale: "Alignement normal",
      membres: "Activité normale",
      placenta: "Antérieur",
      interpretation: "",
    },
    bebe2: {
      morphologieCerebrale: "Développement normal",
      colonneVertebrale: "Aucune anomalie",
      membres: "Mobilité active",
      placenta: "Latéral gauche",
      interpretation: "",
    },
    bebe3: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Structure normale",
      membres: "Tonicité correcte",
      placenta: "Postérieur",
      interpretation: "",
    },
    bebe4: {
      morphologieCerebrale: "Anomalie détectée",
      colonneVertebrale: "Observations à confirmer",
      membres: "Mobilité très limitée",
      placenta: "Positionnement favorable",
      interpretation: "",
    },
    conclusion: "Bébé 4 a des anomalies à surveiller, les autres bébés sont en bonne santé.",
  },
};
//* Objet contenant le nombre de fœtus par cas
const fetusCountByCase = {
  4.1: 2,
  4.2: 2,
  4.3: 2,
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
    const table = document.createElement("table");
    const caption = fetusCount > 1 ? `<caption>Bébé n°${i}</caption>` : "";
    table.innerHTML = `
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
        </tbody>
      </table>
    `;
    resultContainer.appendChild(table);
  }
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
  5.1: fifthMonthCaseFive,
  5.2: fifthMonthCaseFive,
  6.1: fifthMonthCaseSix,
  8.1: fifthMonthCaseEight,
  8.2: fifthMonthCaseEight,
  8.3: fifthMonthCaseEight,
  8.4: fifthMonthCaseEight,
  8.5: fifthMonthCaseEight,
  9.1: fifthMonthCaseNine,
  9.2: fifthMonthCaseNine,
  9.3: fifthMonthCaseNine,
  9.4: fifthMonthCaseNine,
  9.5: fifthMonthCaseNine,
};
//* Fonction pour sélectionner un sous-cas aléatoire
function selectRandomSubCase() {
  const selectedCase = document.getElementById("thirdMonthCaseNumber").value;
  console.log(selectedCase);
  const selectedDictionary = caseMapping[selectedCase];
  if (!selectedDictionary) {
    alert("Cas non valide ou non trouvé !");
    return;
  }
  const subCaseNumber = Math.floor(Math.random() * 3) + 1;
  const selectedSubCase = `${selectedCase}.${subCaseNumber}`;
  return selectedDictionary[selectedSubCase];
}
//* Fonction pour insérer les données dans les tableaux
function fillTableWithData(data, fetusIndex) {
  const table = document.querySelector(`#fetusTable${fetusIndex}`);
  if (!table) {
    console.error(`Tableau pour le fœtus n°${fetusIndex} non trouvé.`);
    return;
  }
  if (`bebe${fetusIndex}` in data) {
    console.log(`Insertion des données pour le fœtus n°${fetusIndex}:`, data[`bebe${fetusIndex}`]);
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
    console.log(`Insertion des données pour le fœtus n°${fetusIndex}:`, data);
    table.querySelector(`#morphologieCerebrale${fetusIndex}`).textContent =
      data.morphologieCerebrale || "Non disponible";
    table.querySelector(`#colonneVertebrale${fetusIndex}`).textContent =
      data.colonneVertebrale || "Non disponible";
    table.querySelector(`#membres${fetusIndex}`).textContent = data.membres || "Non disponible";
    table.querySelector(`#placenta${fetusIndex}`).textContent = data.placenta || "Non disponible";
    table.querySelector(`#interpretation${fetusIndex}`).textContent =
      data.interpretation || "Non disponible";
  }
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

//? Afficher toute la section au clic sur le bouton
scrollToSection("generateFirstMonthButton", "firstMonthSection");
scrollToSection("generateThirdMonthButton", "thirdMonthSection");
scrollToSection("generateFifthMonthButton", "fifthMonthSection");
//? Afficher toute la section au clic sur le bouton <--

//? Masquer la section au clic sur la croix
document.getElementById("firstMonthClose").addEventListener("click", function () {
  hideElements(["firstMonthClose", "firstMonthResult"]); // Cela masque les deux éléments
  document.getElementById("firstMonthClose").classList.add("hidden"); // Ajoutez la classe hidden à l'icône de fermeture
});
document.getElementById("thirdMonthClose").addEventListener("click", function () {
  hideElements(["thirdMonthClose", "thirdMonthResult"]); // Cela masque les deux éléments
  document.getElementById("thirdMonthClose").classList.add("hidden"); // Ajoutez la classe hidden à l'icône de fermeture
});
document.getElementById("fifthMonthClose").addEventListener("click", function () {
  hideElements(["fifthMonthClose", "fifthMonthResult"]); // Cela masque les deux éléments
  document.getElementById("fifthMonthClose").classList.add("hidden"); // Ajoutez la classe hidden à l'icône de fermeture
});
//? Masquer la section au clic sur la croix <--
