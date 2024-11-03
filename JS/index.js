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
    evolution: `<span class="rapport">Observation</span> : La grossesse se déroule de façon normale avec un sac gestationnel de taille adéquate et un embryon unique implanté correctement.<br>
<span class="rapport">Conduite à tenir</span> : Continuer les échographies de suivi pour surveiller le développement sain de l'embryon. Encourager les visites prénatales régulières pour garantir le bien-être de la mère et de l'embryon.`,
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
    evolution: `<span class="rapport">Observation</span> :Le développement du sac gestationnel et de l'embryon est normal à ce stade, avec une implantation adéquate observée.<br>
<span class="rapport">Conduite à tenir</span> : Il est essentiel de poursuivre les visites prénatales et de prévoir des échographies régulières pour garantir la progression continue et saine de la grossesse. `,
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
    evolution: `<span class="rapport">Observation</span> : Le sac gestationnel est plus petit que prévu. Une surveillance attentive est recommandée pour évaluer la progression de la grossesse.<br>
<span class="rapport">Interprétation</span> : La taille réduite du sac gestationnel et l'absence de la vésicule vitelline pourraient suggérer une implantation retardée ou un risque potentiel de complications. Ces signes nécessitent un suivi régulier pour écarter un potentiel arrêt du développement embryonnaire.<br>
<span class="rapport">Conduite à tenir</span> : Planifier des échographies de suivi rapprochées pour observer l'évolution de la grossesse et confirmer l'apparition de la vésicule vitelline. Une surveillance particulière est conseillée pour s'assurer que le développement progresse de manière satisfaisante.
`,
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
    evolution: `<span class="rapport">Observation</span> : Deux embryons sont visibles, indiquant une grossesse gémellaire. Un suivi régulier est crucial pour assurer le bien-être des deux fœtus.<br>
<span class="rapport">Conduite à tenir</span> : Étant donné la présence de deux embryons, surveiller les deux développement foetaux est essentiel. Planifier des échographies régulières pour suivre la grossesse gémellaire et vérifier que chaque embryon continue de se développer de manière saine et égale. Porter une attention particulière à des signes d'anomalies ou de complications spécifiques aux grossesses multiples.
`,
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
    evolution: `<span class="rapport">Observation</span> : La grossesse semble normale malgré une anomalie mineure. Un suivi régulier est conseillé pour surveiller l'évolution.<br>
<span class="rapport">Interprétation</span> : L'anomalie mineure détectée pourrait être de nature transitoire ou indiquer un début de complication mineure. La surveillance visera à clarifier son impact potentiel.<br>
<span class="rapport">Conduite à tenir</span> : Planifier des visites prénatales régulières pour réévaluer cette anomalie mineure. Une attention particulière devrait être accordée aux signes de développement qui dévient de la normale, avec des ajustements dans le plan de soins si nécessaire.
`,
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
    evolution: `<span class="rapport">Observation</span> : Le développement est normal, mais l'absence de vésicule vitelline nécessite une surveillance attentive lors des prochaines échographies.<br>
<span class="rapport">Interprétation</span> : L'absence de vésicule vitelline à ce stade pourrait indiquer un retard de développement ou une variation physiologique normale, mais doit être surveillée pour exclure toute autre complication.<br>
<span class="rapport">Conduite à tenir</span> : Des échographies de suivi rapprochées sont recommandées pour confirmer l'apparition de la vésicule vitelline et surveiller le développement général de l'embryon, avec une attention particulière à toute évolution anormale.
`,
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
    evolution: `<span class="rapport">Observation</span> : L'absence d'embryon et la non-mesurabilité du sac nécessitent une investigation immédiate pour exclure une grossesse extra-utérine.<br>
<span class="rapport">Interprétation</span> : Les observations actuelles suggèrent une possible grossesse extra-utérine. D'autres investigations, notamment des échographies complémentaires et tests hormonaux, sont cruciales pour confirmer ou écarter cette hypothèse.<br>
<span class="rapport">Conduite à tenir</span> : Procéder à des examens immédiats, incluant un suivi par échographie et éventuellement une intervention médicale, pour clarifier le diagnostic et déterminer la présence d'une grossesse extra-utérine. Une prise en charge rapide est essentielle pour garantir la sécurité de la patiente.
`,
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
    evolution: `<span class="rapport">Observation</span> : La grossesse est avancée avec trois embryons. Un suivi régulier est essentiel pour surveiller le développement de chaque fœtus.<br>
<span class="rapport">Conduite à tenir</span> : Planifier des échographies fréquentes pour observer le développement de chaque embryon dans cette grossesse multiple. Assurez un suivi particulier pour détecter les complications potentielles fréquentes dans les grossesses triples, telles que la restriction de croissance fœtale et les anomalies liées à la prématurité.`,
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
    evolution: `<span class="rapport">Observation</span> : La grossesse multiple est confirmée avec quatre embryons. Un suivi très attentif est recommandé en raison du risque accru de complications.<br>
<span class="rapport">Conduite à tenir</span> : Établir un programme de surveillance étroitement planifié, incluant des échographies fréquentes, pour évaluer individuellement le développement de chaque embryon. Prévoir des consultations spécialisées pour aborder les défis potentiels des grossesses quadruples, tels que le risque de prématurité, de restriction de croissance intra-utérine, et d'autres complications possibles.
`,
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
    evolution: `<span class="rapport">Observation</span> : Une grossesse molaire est suspectée. Des investigations immédiates sont nécessaires pour évaluer l'état de la grossesse.<br>
<span class="rapport">Interprétation</span> : Les résultats suggèrent une grossesse molaire, qui nécessite une confirmation par des méthodes diagnostiques complémentaires telles que des tests sanguins (bêta-hCG) et une éventuelle analyse tissulaire après curetage.<br>
<span class="rapport">Conduite à tenir</span> : Il est impératif de procéder rapidement à des examens supplémentaires pour évaluer la nature exacte de la grossesse. Un suivi spécialisé en cas de confirmation d'une grossesse molaire est essentiel pour surveiller et traiter toute complication potentielle. La consultation avec un obstétricien peut être nécessaire pour planifier les prochaines étapes.
`,
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
  ).innerHTML = `Cas n°<span class="important">${randomResult.numero}</span><br><br>${randomResult.evolution}`;

  document.getElementById("firstMonthResult").classList.remove("hidden");
  document.getElementById("firstMonthClose").classList.remove("hidden");
  document.getElementById("firstMonthEvolution").classList.remove("hidden");
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
        evolution: `<span class="rapport">Évolution</span> : La grossesse continue de bien progresser avec une clarté nucale de 1.5 mm, qui se situe dans les limites normales, et un cœur fœtal actif. Ces signes sont encourageants pour le développement en cours.<br>
<span class="rapport">Conduite à tenir</span> : Maintenir le suivi régulier par échographies pour assurer que le développement fœtal reste sur la bonne voie et pour surveiller d'éventuelles évolutions. Il est conseillé de continuer les visites prénatales de routine pour confirmer que les paramètres fœtaux demeurent positifs et dans la norme.
`,
      },
      {
        id: 1.2,
        clarteNucale: "2 mm",
        activiteCardiaque: "Présente",
        nombreFetus: 1,
        anomalieMorphologique: "Mineure (à surveiller)",
        liquideAmniotique: "Normale",
        evolution: `<span class="rapport">Évolution</span> : Bien que la clarté nucale soit légèrement augmentée à 2 mm, l'activité cardiaque est présente et rassurante. Ces indicateurs sont globalement positifs, mais nécessitent une attention continue par précaution.<br>
<span class="rapport">Diagnostic différentiel</span> : L'augmentation de la clarté nucale pourrait indiquer un risque potentiel de dévelopement anormal. Un suivi régulier permettra de surveiller toute évolution de l'anomalie morphologique mineure.<br>
<span class="rapport">Conduite à tenir</span> : Renforcer les suivis réguliers afin de réévaluer les paramètres fœtaux lors des échographies. Un dépistage prénatal non invasif supplémentaire peut être envisagé pour exclure des anomalies chromosomiques et garantir la tranquillité d'esprit.
`,
      },
      {
        id: 1.3,
        clarteNucale: "3 mm",
        activiteCardiaque: "Présente",
        nombreFetus: 1,
        anomalieMorphologique: "Possible anomalie cardiaque",
        liquideAmniotique: "Normale",
        evolution: `<span class="rapport">Évolution</span> : La grossesse progresse avec une clarté nucale de 3 mm, et l'activité cardiaque du fœtus est présente. Cependant, des préoccupations au sujet d'une possible anomalie cardiaque nécessitent une évaluation prudente.<br>
<span class="rapport">Diagnostic différentiel</span> : La clarté nucale augmentée associée à une possible anomalie cardiaque peut suggérer un risque accru de malformations congénitales ou de troubles chromosomiques, nécessitant un diagnostic plus approfondi.<br>
<span class="rapport">Conduite à tenir</span> : Programmez des échographies de suivi détaillées et envisagez une échocardiographie fœtale pour examiner en détail tout problème cardiaque potentiel. Un test de dépistage prénatal ou d'autres diagnostics génétiques pourraient être nécessaires pour explorer les causes sous-jacentes de l'anomalie présumée.
`,
      },
      {
        id: 1.4,
        clarteNucale: "1.8 mm",
        activiteCardiaque: "Faible",
        nombreFetus: 1,
        anomalieMorphologique: "Aucune",
        liquideAmniotique: "Faible",
        evolution: `<span class="rapport">Évolution</span> : La grossesse présente des signes de vulnérabilité avec une activité cardiaque faible et une quantité de liquide amniotique réduite. Ces éléments nécessitent une attention et un suivi rigoureux.<br>
<span class="rapport">Diagnostic différentiel</span> : La faible activité cardiaque et la réduction de liquide amniotique pourraient indiquer un potentiel de retard de croissance intra-utérin ou d'insuffisance placentaire. Ces conditions requièrent un examen approfondi.<br>
<span class="rapport">Conduite à tenir</span> : Un plan de surveillance intensifiée est recommandé, incluant des échographies fréquentes pour surveiller le développement fœtal. Évaluer la possibilité d'interventions médicales pour améliorer l'apport en liquide amniotique et surveiller la fonction placentaire. La consultation avec une équipe de médecine fœto-maternelle peut apporter des recommandations supplémentaires.
`,
      },
      {
        id: 1.5,
        clarteNucale: "3.5 mm",
        activiteCardiaque: "Absente (mort in-utero)",
        nombreFetus: 1,
        anomalieMorphologique: "Non applicable",
        liquideAmniotique: "Non applicable",
        evolution: `<span class="rapport">Évolution</span> : La grossesse a malheureusement abouti à une perte fœtale, marquée par l'absence d'activité cardiaque.<br>
<span class="rapport">Conduite à tenir</span> : Il est essentiel de fournir un soutien émotionnel et médical à la patiente. Une intervention médicale peut être nécessaire pour gérer la suite du processus, notamment pour prévenir les complications liées à une rétention éventuelle du fœtus. Une consultation avec un obstétricien est recommandée pour discuter des options, et un suivi psychologique peut être bénéfique pour faire face à cette perte.
`,
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
        evolution: `<span class="rapport">Évolution</span> : La grossesse est en bonne voie, avec une clarté nucale de 2.5 mm considérée comme normale, et un cœur fœtal actif. Cela reflète une progression positive du développement fœtal.<br>
<span class="rapport">Conduite à tenir</span> : Continuer les suivis prénataux réguliers pour maintenir la surveillance du développement fœtal. Il est important de s'assurer que tous les paramètres demeurent conformes aux attentes pour cette période de la grossesse. Encourager la patiente à continuer les soins de santé prénataux habituels pour optimiser les outcomes positifs de la grossesse.
`,
      },
      {
        id: 2.2,
        clarteNucale: "2 mm",
        activiteCardiaque: "Présente",
        nombreFetus: 1,
        anomalieMorphologique: "Suspicion d'hydrocéphalie",
        liquideAmniotique: "Normale",
        evolution: `<span class="rapport">Évolution</span> : Bien que le cœur fœtal soit actif et que la clarté nucale soit de 2 mm, une suspicion d'hydrocéphalie a été notée, nécessitant une attention particulière.<br>
<span class="rapport">Diagnostic différentiel</span> : La suspicion d'hydrocéphalie pourrait indiquer des anomalies dans le développement cérébral. Un diagnostic différentiel est nécessaire pour exclure d'autres conditions neurologiques possibles et évaluer la progression.<br>
<span class="rapport">Conduite à tenir</span> : Il est essentiel de prévoir des examens plus approfondis, notamment une échographie de contrôle spécialisée pour évaluer l'anatomie cérébrale. Des consultations avec un spécialiste en médecine fœto-maternelle sont recommandées pour discuter des implications potentielles et explorer les options de prise en charge appropriées.
`,
      },
      {
        id: 2.3,
        clarteNucale: "4 mm",
        activiteCardiaque: "Absente (mort in-utero)",
        nombreFetus: 1,
        anomalieMorphologique: "Non applicable",
        liquideAmniotique: "Non applicable",
        evolution: `<span class="rapport">Évolution</span> : La grossesse a abouti à une perte fœtale, signalée par l'absence d'activité cardiaque.<br>
<span class="rapport">Conduite à tenir</span> : Il est crucial de fournir un soutien médical et psychologique à la patiente après cette perte. Des consultations avec des professionnels de santé sont nécessaires pour discuter des étapes suivantes, qui peuvent inclure un curetage pour éviter toute complication liée à la rétention du fœtus. Un suivi émotionnel avec un psychologue peut également être recommandé pour aider à la gestion de cette épreuve difficile.
`,
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
        evolution: `<span class="rapport">Évolution</span> : La clarté nucale est de 3.8 mm avec une activité cardiaque faible. Des déformations faciales, telles qu'un profil facial plat, un petit menton et l'absence d'os nasal, ont été observées, ce qui nécessite une vigilance accrue.<br>
<span class="rapport">Diagnostic différentiel</span> : Les caractéristiques observées peuvent indiquer un risque de syndrome génétique, tel que la Trisomie 21 ou d'autres anomalies chromosomiques. Un diagnostic génétique est recommandé pour clarifier la situation.<br>
<span class="rapport">Conduite à tenir</span> : Envisager des tests prénataux supplémentaires, tels qu'une amniocentèse ou un test de dépistage non invasif, pour obtenir un diagnostic précis. Une consultation avec un spécialiste en génétique est conseillée pour discuter des résultats et des implications potentielles. Un plan de suivi renforcé doit être mis en place pour surveiller le développement fœtal et conseiller les parents sur les options disponibles.
`,
      },
      {
        id: 3.2,
        clarteNucale: "1.5 mm",
        activiteCardiaque: "Présente",
        nombreFetus: 1,
        anomalieMorphologique: "Aucune",
        liquideAmniotique: "Normale",
        evolution: `<span class="rapport">Évolution</span> : Le développement fœtal est normal, avec une clarté nucale de 1.5 mm jugée satisfaisante et une activité cardiaque présente. Ces signes indiquent un progrès rassurant depuis la dernière échographie.<br>
<span class="rapport">Conduite à tenir</span> : Continuer les échographies de suivi programmées et les consultations prénatales régulières pour surveiller le développement continu du fœtus. Maintenir un régime de soins prénataux sain pour encourager des résultats positifs tout au long de la grossesse.
`,
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
        evolution: `<span class="rapport">Évolution</span> : Les deux fœtus présentent une bonne activité cardiaque. Bébé 1 a une clarté nucale de 2 mm sans anomalies morphologiques, tandis que Bébé 2 présente une clarté nucale de 2.5 mm avec une suspicion de cardiopathie nécessitant une attention particulière.<br>
<span class="rapport">Diagnostic différentiel</span> : La suspicion de cardiopathie chez Bébé 2 suggère la nécessité d'examens approfondis pour exclure ou confirmer une anomalie cardiaque potentielle pouvant nécessiter une intervention.<br>
<span class="rapport">Conduite à tenir</span> : Planifier des échographies spécialisées pour évaluer les structures cardiaques de Bébé 2. Une échocardiographie fœtale peut être envisagée pour obtenir un diagnostic précis. Assurez-vous que les suivis prénataux incluent une surveillance étroite du développement cardiovasculaire de Bébé 2, tout en continuant le suivi de routine pour Bébé 1.
`,
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
        evolution: `<span class="rapport">Évolution</span> : Malheureusement, l'un des fœtus a été perdu, marqué par l'absence d'activité cardiaque, tandis que le deuxième fœtus continue de montrer des signes de développement normal avec une clarté nucale de 1.5 mm et une activité cardiaque présente.<br>
<span class="rapport">Conduite à tenir</span> : Fournir un soutien émotionnel à la patiente tout en maintenant un suivi régulier pour le fœtus survivant. Des échographies fréquentes sont nécessaires pour surveiller le développement de bebe2. Il est essentiel de surveiller d'éventuelles complications chez le fœtus restant, en collaboration avec une équipe de soins prénataux, pour une surveillance attentive et continue de cette grossesse gémellaire partiellement avortée.
`,
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
        evolution: `<span class="rapport">Évolution</span> : Les deux fœtus sont en bonne santé, affichant des clartés nucales de 1.2 mm et 1.3 mm, respectivement, avec des activités cardiaques normales. Ces signes sont très prometteurs pour un développement sain.<br>
<span class="rapport">Conduite à tenir</span> : Continuer les suivis réguliers par échographies pour surveiller l'évolution des deux fœtus. Maintenir un régime de soins prénataux standard est recommandé pour assurer la poursuite du développement sain de la grossesse gémellaire. Encouragez également la patiente à participer à tous les rendez-vous prénataux et à suivre les conseils médicaux afin de maximiser les chances de résultats positifs.
`,
      },
      {
        id: 4.4,
        fetus: {
          bebe1: {
            clarteNucale: "1.4 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe2: {
            clarteNucale: "1.5 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
        },
        evolution: `<span class="rapport">Évolution</span> : Les deux fœtus continuent de bien évoluer, avec des clartés nucales de 1.4 mm et 1.5 mm, respectivement, et des activités cardiaques normales. Les indicateurs de santé sont positives.<br>
<span class="rapport">Conduite à tenir</span> : Poursuivre les suivis prénataux de routine et les contrôles échographiques pour observer le développement continu des fœtus. Il est conseillé de continuer à encourager des soins de santé prénataux adaptés pour maintenir cette trajectoire positive.
`,
      },
      {
        id: 4.5,
        fetus: {
          bebe1: {
            clarteNucale: "1.6 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
          bebe2: {
            clarteNucale: "1.4 mm",
            activiteCardiaque: "Présente",
            anomalieMorphologique: "Aucune",
            liquideAmniotique: "Normale",
          },
        },
        evolution: `<span class="rapport">Évolution</span> : Les évaluations montrent une croissance saine et régulière des deux fœtus, avec des clartés nucales de 1.6 mm et 1.4 mm et des activités cardiaques normales, assurant des paramètres rassurants.<br>
<span class="rapport">Conduite à tenir</span> : Continuer à effectuer des échographies régulières pour suivre la progression constante des deux fœtus, en respectant les calendriers prénataux. Souligner l'importance de maintenir des soins prénataux réguliers et d'encourager des pratiques saines pour un bien-être optimal de la grossesse.
`,
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
        evolution: `<span class="rapport">Évolution</span> : L'évolution est préoccupante avec une clarté nucale de 3 mm, une activité cardiaque faible, et une anomalie morphologique détectée. De plus, le liquide amniotique est réduit, ce qui requiert une attention particulière.<br>
<span class="rapport">Diagnostic différentiel</span> : La combinaison d'une activité cardiaque faible, d'une clarté nucale élevée, et d'une anomalie morphologique suggère un risque accru de complications chromosomiques ou cardiaques. Un diagnostic plus approfondi, incluant une échocardiographie fœtale et des tests génétiques, est recommandé.<br>
<span class="rapport">Conduite à tenir</span> : Mettre en place un protocole de surveillance intensifiée incluant des échographies régulières pour évaluer la viabilité et le développement du fœtus. Consulter un spécialiste en médecine fœto-maternelle pour explorer les options de gestion, y compris le soutien médical ou des interventions possibles pour améliorer les conditions du liquide amniotique et surveiller les paramètres de développement fœtal.
`,
      },
      {
        id: 5.2,
        clarteNucale: "2 mm",
        activiteCardiaque: "Présente",
        nombreFetus: 1,
        anomalieMorphologique: "Aucune",
        liquideAmniotique: "Normale",
        evolution: `<span class="rapport">Évolution</span> : Le fœtus montre une évolution positive avec une clarté nucale de 2 mm et une activité cardiaque bien présente, sans anomalies morphologiques décelées.<br>
<span class="rapport">Conduite à tenir</span> : Continuer les suivis prénataux réguliers et les échographies de routine pour garantir que le développement fœtal se poursuit normalement. Encourager la patiente à maintenir son régime de santé prénatal et à respecter les conseils médicaux afin d'assurer un environnement optimal pour la suite de la grossesse.
`,
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
        evolution: `<span class="rapport">Évolution</span> : La grossesse évolue normalement avec des résultats satisfaisants au niveau de la clarté nucale, mesurée à 2 mm, et une activité cardiaque présente.<br>
<span class="rapport">Conduite à tenir</span> : Poursuivre les échographies de suivi et les consultations prénatales régulières pour surveiller le développement du fœtus. Il est recommandé de maintenir un régime de soins prénataux de qualité pour assurer la continuité de cette trajectoire positive dans la grossesse.
`,
      },
      {
        id: 6.2,
        clarteNucale: "3 mm",
        activiteCardiaque: "Absente (mort in-utero)",
        nombreFetus: 0,
        anomalieMorphologique: "Non applicable",
        liquideAmniotique: "Non applicable",
        evolution: `html
<span class="rapport">Évolution</span> : Malheureusementt, la grossesse a abouti à une perte fœtale, marquée par l'absence d'activité cardiaque.<br>
<span class="rapport">Conduite à tenir</span> : Il est crucial de proposer un soutien émotionnel et médical à la patiente après cette perte. Des consultations avec des professionnels de santé sont nécessaires pour gérer la suite du processus, potentiellement avec un curetage. Un suivi psychologique peut également être recommandé pour aider la patiente dans sa convalescence émotionnelle.
`,
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
        nombreFetus: 1,
        anomalieMorphologique: "Non applicable",
        liquideAmniotique: "Non applicable",
        evolution: `<span class="rapport">Évolution</span> : Il n'y a eu aucune évolution significative dans cette grossesse, la grossesse extra-utérine est avérée. Une interruption médicale de grossesse (IMG) est indispensable.<br>
<span class="rapport">Conduite à tenir</span> : Une intervention médicale immédiate est nécessaire pour gérer la grossesse extra-utérine et éviter des complications pour la santé de la patiente. Un suivi médical étroit est crucial pour surveiller le rétablissement post-IMG. Un soutien psychologique peut également être bénéfique pour la patiente, afin de l'accompagner durant ce moment difficile.
`,
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
        evolution: `<span class="rapport">Évolution</span> : Bien que le premier et le troisième fœtus soient en bonne santé, le deuxième fœtus montre une activité cardiaque faible et une suspicion de cardiopathie.<br>
<span class="rapport">Diagnostic différentiel</span> : La suspicion de cardiopathie chez le deuxième fœtus peut indiquer une anomalie cardiaque à explorer plus avant avec une échocardiographie fœtale détaillée.<br>
<span class="rapport">Conduite à tenir</span> : Prévoir des échographies spécialisées pour surveiller spécifiquement le développement cardiaque du deuxième fœtus, tout en poursuivant les suivis réguliers pour les trois fœtus. Travailler avec une équipe médicale pour établir des plans en cas de diagnostic confirmé de cardiopathie.
`,
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
        evolution: `
<span class="rapport">Évolution</span> : Tous les fœtus montrent une bonne santé avec des clartés nucales normales et une activité cardiaque présente.<br>
<span class="rapport">Conduite à tenir</span> : Continuer les échographies régulières et les suivis prénataux pour s'assurer que chaque fœtus continue de se développer sainement. Maintenir une attention normale des soins prénataux et redoubler d’efforts pour garantir des conditions optimales pour la croissance.
`,
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
        evolution: `
<span class="rapport">Évolution</span> : Le premier et le troisième fœtus sont en bonne santé, mais le deuxième fœtus est décédé in-utero, nécessitant une surveillance accrue.<br>
<span class="rapport">Conduite à tenir</span> : Un suivi intensifié est nécessaire pour surveiller les deux fœtus restants. Assurez-vous que la patiente reçoit un soutien adéquat pour la gestion émotionnelle de la perte, et planifier des échographies régulières pour surveiller tous changements qui pourraient affecter la santé des autres fœtus restants.
`,
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
        evolution: ` <span class="rapport">Évolution</span> : Tous les fœtus se portent bien, avec une activité cardiaque normale et des clartés nucales dans la norme.<br>
<span class="rapport">Conduite à tenir</span> : Continuer les échographies régulières pour surveiller la progression saine des trois fœtus. Veiller à ce que chaque consultation contribue à la gestion optimale de la santé prénatale globale, assurant que tous les indicateurs restent dans la bonne direction.
`,
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
        evolution: `
<span class="rapport">Évolution</span> : Le premier et le troisième fœtus sont en bonne santé, tandis que le deuxième présente une activité cardiaque faible avec une suspicion d'anomalie.<br>
<span class="rapport">Diagnostic différentiel</span> : La faible activité cardiaque et la suspicion d'anomalie chez le deuxième fœtus nécessitent une investigation plus approfondie, potentiellement en lien avec des anomalies structurelles ou fonctionnelles nécessitant des diagnostics complémentaires.<br>
<span class="rapport">Conduite à tenir</span> : Organiser des échocardiographies fœtales spécialisées pour évaluer l'état du deuxième fœtus, tout en poursuivant un suivi régulier des trois fœtus. Envisager un accompagnement multidisciplinaire pour planifier des interventions appropriées, si nécessaire.
`,
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
        evolution: `<span class="rapport">Évolution</span> : La grossesse progresse normalement avec des signes de santé fœtale satisfaisants pour tous les fœtus. Chaque fœtus montre une activité cardiaque normale et des clartés nucales bien dans la norme.<br>
<span class="rapport">Conduite à tenir</span> : Continuer les échographies régulières pour assurer que le développement de tous les fœtus reste optimal. Encourager la poursuite des soins prénataux habituels, en maintenant un regard attentif aux éventuels changements pour chaque fœtus.
`,
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
        evolution: `<span class="rapport">Évolution</span> : Le premier, le deuxième, et le quatrième fœtus se portent bien, tandis que le troisième montre une activité cardiaque faible et une suspicion de malformation.<br>
<span class="rapport">Diagnostic différentiel</span> : La suspicion de malformation et l'activité cardiaque faible du troisième fœtus nécessitent une investigation plus poussée, potentiellement avec des échocardiographies ou des examens structurels détaillés.<br>
<span class="rapport">Conduite à tenir</span> : Prévoir une surveillance accrue pour le troisième fœtus, avec des échographies spécialisées afin d'évaluer et de confirmer toute anomalie. Veiller à ce que le suivi prénatal pour tous les fœtus reste rigoureux.
`,
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
        evolution: `<span class="rapport">Évolution</span> : Trois fœtus sont en bonne santé, tandis que le quatrième est décédé in-utero, nécessitant un suivi attentif.<br>
<span class="rapport">Conduite à tenir</span> : Mettre en place un suivi régulier et détaillé pour les trois fœtus restants afin de surveiller leur évolution. Accompagner la patiente sur le plan émotionnel et médical après la perte, en assurant un soutien psychologique si nécessaire.
`,
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
        evolution: `<span class="rapport">Évolution</span> : Les trois premiers fœtus présentent des signes de santé normaux, tandis que le quatrième montre une activité cardiaque faible avec une suspicion d'anomalie.<br>
<span class="rapport">Diagnostic différentiel</span> : La faible activité cardiaque et la suspicion d'anomalie du quatrième fœtus nécessitent une évaluation spécialisée pour identifier des interventions médicales possibles.<br>
<span class="rapport">Conduite à tenir</span> : Planifier des examens complémentaires pour le quatrième fœtus, en concomitance avec des échographies standard pour le développement général de tous les fœtus.
`,
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
        evolution: `<span class="rapport">Évolution</span> : Tous les fœtus se portent bien, avec des signes de santé normaux et une activité cardiaque présente.<br>
<span class="rapport">Conduite à tenir</span> : Consolider les soins prénataux de routine, avec des consultations régulières pour surveiller le développement de tous les fœtus. Assurez-vous que chaque fœtus maintienne un bon développement au fil des échographies.
`,
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
        nombreFetus: 1,
        anomalieMorphologique: "Non applicable",
        liquideAmniotique: "Non applicable",
        evolution: `<span class="rapport">Évolution</span> : Il n'y a eu aucune évolution significative dans cette grossesse, et une grossesse molaire est avérée. Une interruption médicale de grossesse (IMG) est indispensable.<br>
<span class="rapport">Conduite à tenir</span> : Procéder immédiatement à une consultation spécialisée pour confirmer le diagnostic et organiser l'IMG, en vue de prévenir les complications associées à une grossesse molaire. Un suivi post-IMG est nécessaire pour surveiller le retour à la normale des niveaux hormonaux. Un soutien psychologique peut également être fortement bénéfique pour accompagner la patiente dans cette épreuve, en lui offrant l'assistance nécessaire vers un rétablissement émotionnel.
`,
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
//* Dictionnaires des résultats déchographie 5ème mois
const fifthMonthCaseOne = {
  "1.1.1": {
    morphologieCerebrale: "Développement normal",
    colonneVertebrale: "Alignement correct",
    membres: "Symétriques, sans anomalie",
    placenta: "Localisation antérieure",
    interpretation: "Le développement se poursuit normalement sans anomalies visibles.",
    conclusion: `<span class="rapport">Conclusion</span> : Depuis la première échographie, le fœtus a montré un développement constant et conforme avec des paramètres normaux à chaque étape. Aucun signe d'alerte n'a été relevé.<br>
<span class="rapport">Conduite à tenir</span> : Maintenir les suivis prénataux de routine afin de surveiller d'éventuels changements au fur et à mesure que la grossesse progresse vers le 7ème mois. Il est conseillé à la patiente de continuer son régime de soins prénataux et de respecter les rendez-vous médicaux pour assurer cet épanouissement sain.`,
  },
  "1.1.2": {
    morphologieCerebrale: "Forme et taille conformes",
    colonneVertebrale: "Structure correcte",
    membres: "Mouvements actifs",
    placenta: "Position postérieure",
    interpretation: "Les observations sont rassurantes, évolution normale.",
    conclusion: `
<span class="rapport">Conclusion</span> : Depuis la première échographie, la progression de la grossesse a été régulière et sans incidents. Les paramètres actuels suggèrent un développement sain et stable jusqu'à présent avec des indicateurs positifs.<br>
<span class="rapport">Conduite à tenir</span> : Continuer les échographies et les suivis prénataux réguliers pour confirmer que le fœtus continue de se développer dans des conditions optimales jusqu'à la prochaine échographie prévue au 7ème mois. Renforcer l'importance d'un suivi médical constant pour garantir le maintien de ce développement sain.
`,
  },
  "1.1.3": {
    morphologieCerebrale: "Croissance adéquate",
    colonneVertebrale: "Pas de malformations",
    membres: "Développement harmonieux",
    placenta: "Insertion correcte",
    interpretation: "Aucune anomalie détectée, évolution favorable.",
    conclusion: `
<span class="rapport">Conclusion</span> : Depuis les premières échographies, le développement du fœtus s'est montré régulier et satisfaisant. Aucun signe d'anomalie ou de préoccupation n'a été relevé au cours des examens.<br>
<span class="rapport">Conduite à tenir</span> : Continuer les suivis prénataux et échographiques à intervalles réguliers pour garantir la progression normale du fœtus jusqu'à la prochaine échographie prévue au 7ème mois. Assurer l'accompagnement constant de la patiente pour préserver la trajectoire de cette évolution positive.
`,
  },
  "1.2.1": {
    morphologieCerebrale: "Structure à surveiller",
    colonneVertebrale: "Position et alignement normaux",
    membres: "Légère asymétrie, à suivre",
    placenta: "Localisation antérieure",
    interpretation: "Structure à surveiller, légère asymétrie des membres.",
    conclusion: `<span class="rapport">Conclusion</span> : Depuis la première échographie, la croissance du fœtus a été généralement bonne, malgré une structure cérébrale qui nécessite une attention particulière et une asymétrie légère des membres.
<br><span class="rapport">Diagnostic différentiel</span> : La légère asymétrie des membres pourrait indiquer un possible développement inégal qui mérite d'être surveillé. La structure cérébrale à surveiller nécessite une observation continue pour écarter des anomalies plus sérieuses.
<br><span class="rapport">Conduite à tenir</span> : Prévoir des échographies plus fréquentes pour évaluer l'évolution de la structure cérébrale et l'asymétrie des membres. Une consultation avec un spécialiste pourrait être envisagée pour obtenir des avis supplémentaires et adapter les soins prénataux en fonction des besoins spécifiques constatés.
`,
  },
  "1.2.2": {
    morphologieCerebrale: "Aspect général normal",
    colonneVertebrale: "Développement standard",
    membres: "Légère réduction des mouvements",
    placenta: "Position postérieure",
    interpretation: "Aspect cérébral normal, légère réduction des mouvements des membres.",
    conclusion: `<span class="rapport">Conclusion</span> : Depuis le début de la grossesse, le fœtus a montré des signes de développement essentiellement conforme, bien que nous observions maintenant une légère réduction des mouvements des membres qui nécessite une surveillance.
<br><span class="rapport">Diagnostic différentiel</span> : La réduction des mouvements pourrait indiquer une limitation temporaire liée à l'espace ou d'autres causes mécaniques, mais pourrait également signaler des problèmes neuromusculaires nécessitant une enquête plus poussée.
<br><span class="rapport">Conduite à tenir</span> : Mettre en place des échographies de suivi rapprochées pour observer les mouvements fœtaux et discerner toute progression vers une norme ou résolution spontanée. Le recours à un avis spécialisé pourrait être prudent pour examiner les causes potentielles et ajuster les soins prénataux en conséquence.
`,
  },
  "1.2.3": {
    morphologieCerebrale: "Taille conforme",
    colonneVertebrale: "Sans particularité",
    membres: "Mobilité modérée",
    placenta: "Fixation correcte",
    interpretation: "Les données sont rassurantes mais une surveillance s'impose.",
    conclusion: `<span class="rapport">Conclusion</span> : Depuis la première échographie, la croissance du fœtus a été stable avec des paramètres principaux dans les normes. Toutefois, une mobilité modérée des membres est désormais observée.
<br><span class="rapport">Diagnostic différentiel</span> : La mobilité modérée des membres pourrait être transitoire ou indiquer une entrave au développement neuromusculaire, nécessitant une observation proactive pour exclure tout problème sous-jacent.
<br><span class="rapport">Conduite à tenir</span> : Continuer les échographies régulières pour surveiller la mobilité fœtale et évaluer d'éventuels changements. Une consultation avec un spécialiste renforce l'effort de détection précoce et l'élaboration de stratégies d'intervention adaptées aux besoins du fœtus.
`,
  },
  "1.3.1": {
    morphologieCerebrale: "Structure suspecte",
    colonneVertebrale: "Forme correcte",
    membres: "Bonne activité",
    placenta: "Fixation antérieure",
    interpretation: "Une anomalie cardiaque est toujours suspectée.",
    conclusion: `<span class="rapport">Conclusion</span> : Depuis le début de la grossesse, le développement du fœtus a été marqué par des observations préoccupantes liées à la structure cérébrale, avec une anomalie cardiaque toujours suspectée.
<br>- <span class="rapport">Diagnostic différentiel</span> : La suspicion d'anomalie cardiaque et la structure cérébrale suspecte indiquent un risque potentiel d'anomalie congénitale nécessitant des examens plus poussés.
<br>- <span class="rapport">Conduite à tenir</span> : Planifier des échographies ciblées et consulter un cardiologue fœtal pour évaluer pleinement l'état cardiaque du fœtus. Les soins prénataux doivent inclure une surveillance étroite et des ajustements pour inclure d'éventuelles interventions médicales requises.
`,
  },
  "1.3.2": {
    morphologieCerebrale: "Possible anomalie",
    colonneVertebrale: "Alignement vérifié",
    membres: "Bonne flexion des articulations",
    placenta: "Position postérieure",
    interpretation: "Anomalie cardiaque possible, suivi recommandé.",
    conclusion: `<span class="rapport">Conclusion</span> : Depuis le début de la grossesse, bien que le développement ait été généralement satisfaisant, une possible anomalie cérébrale a été identifiée nécessitant un suivi attentif.
<br><span class="rapport">Diagnostic différentiel</span> : La possible anomalie cérébrale peut indiquer un risque de malformation neurologique, nécessitant une exploration plus approfondie et une évaluation approfondie.
<br><span class="rapport">Conduite à tenir</span> : Prévoir une imagerie cérébrale spécialisée pour évaluer les structures cérébrales plus en détail. Inclure dans les soins prénataux des consultations avec un spécialiste en neurologie fœtale pour déterminer les interventions nécessaires et ajuster la surveillance de la grossesse en fonction des résultats obtenus.
`,
  },
  "1.3.3": {
    morphologieCerebrale: "Présence d'une anomalie mineure",
    colonneVertebrale: "Croissance normale",
    membres: "Activité restreinte",
    placenta: "Position correcte",
    interpretation: "Signes d'anomalies mineures, à surveiller.",
    conclusion: `<span class="rapport">Conclusion</span> : Depuis la première échographie, le développement du fœtus a globalement progressé, mais une anomalie mineure cérébrale est présente, avec des signes d'une anomalie cardiaque légère qui nécessitent un suivi.<br>
<span class="rapport">Diagnostic différentiel</span> : Les anomalies identifiées peuvent suggérer des problèmes neurologiques ou cardiaques sous-jacents qui devraient faire l'objet d'une investigation approfondie pour évaluer leur portée et impact potentiel.<br>
<span class="rapport">Conduite à tenir</span> : Programmer des échographies spécialisées pour surveiller les progrès neurologiques et cardiaques. Collaborer avec un cardiologue fœtal et un spécialiste en neurologie fœtale pour élaborer un plan de soins approprié et ajuster les soins prénataux afin de prendre en compte toute intervention nécessaire.
`,
  },
  "1.4.1": {
    morphologieCerebrale: "Légère anomalie dans la structure",
    colonneVertebrale: "Normale",
    membres: "Mobilité réduite",
    placenta: "Position basse",
    interpretation: "État général à surveiller de près, faible activité cardiaque.",
    conclusion: `
<span class="rapport">Conclusion</span> : Depuis le début de la grossesse, le fœtus a montré général un développement stable, mais la dernière échographie révèle une légère anomalie structurelle cérébrale et une faible activité cardiaque qui nécessitent surveillance.<br>
<span class="rapport">Diagnostic différentiel</span> : Les résultats actuels soulèvent des préoccupations possibles concernant des troubles neurologiques ou cardiaques qui devraient être évalués plus en détail.<br>
<span class="rapport">Conduite à tenir</span> : Renforcer le protocole échographique pour inclure des analyses cardiaques et cérébrales plus ciblées. Un suivi par des spécialistes en cardiologie et en neurologie fœtale est recommandé pour déterminer de potentiels besoins d'intervention.
`,
  },
  "1.4.2": {
    morphologieCerebrale: "Petite anomalie détectée",
    colonneVertebrale: "Forme adéquate",
    membres: "Croissance correcte",
    placenta: "Position postérieure",
    interpretation: "Petite anomalie cérébrale détectée, cardiopathie suspectée.",
    conclusion: `
<span class="rapport">Conclusion</span> : Bien que le développement général ait été conforme jusqu'ici, cette échographie indique une petite anomalie cérébrale et la suspicion d'une cardiopathie, justifiant des examens complémentaires.<br>
<span class="rapport">Diagnostic différentiel</span> : Ces anomalies pourraient refléter des problèmes distincts ou interconnectés affectant le fonctionnement cardiaque et neurologique du fœtus.<br>
<span class="rapport">Conduite à tenir</span> : Des tests cardiaques prénataux supplémentaires et des évaluations neurologiques précises doivent être entrepris. Une planification prénatale ciblée avec un cardiologue et un neurologue fœtal est essentielle pour guider les interventions futures.
`,
  },
  "1.4.3": {
    morphologieCerebrale: "Développement atypique",
    colonneVertebrale: "Alignement normal",
    membres: "Mobilité réduite",
    placenta: "Insertion basse",
    interpretation: "Signes de faiblesse cardiaque, une surveillance accrue est préconisée.",
    conclusion: `
<span class="rapport">Conclusion</span> : Les échographies antérieures montraient un bon développement, mais les signes actuels de développement cérébral atypique et de faiblesse cardiaque nécessitent une réévaluation.<br>
<span class="rapport">Diagnostic différentiel</span> : Il est crucial d'explorer plus en détails les anomalies neurologiques possibles, ainsi que les faiblesses cardiaques pour déterminer leur lien potentiel.<br>
<span class="rapport">Conduite à tenir</span> : Procéder à des échographies spécialisées en cardiologie fœtale et en imagerie cérébrale pour évaluer ces signes en profondeur. Inclure ces résultats dans les discussions avec une équipe périnatale pour affiner les choix de prise en charge alimentaire et médicale.`,
  },
};
const fifthMonthCaseTwo = {
  "2.1.1": {
    morphologieCerebrale: "Développement conforme",
    colonneVertebrale: "Sans anomalie",
    membres: "Symétriques et mobiles",
    placenta: "Localisation antérieure",
    interpretation: "Évolution normale, aucune anomalie détectée.",
    conclusion: `<span class="rapport">Conclusion</span> : Depuis la première échographie, le fœtus a présenté un développement stable et conforme aux attentes, avec des résultats positifs aux échographies successives.
<br><span class="rapport">Conduite à tenir</span> : Maintenir les visites prénatales de routine et les échographies de suivi jusqu'au 7ème mois pour garantir le bon déroulement de la grossesse. Encourager la patiente à continuer les soins prénataux pour maintenir cette trajectoire positive.`,
  },
  "2.1.2": {
    morphologieCerebrale: "Forme et structure normales",
    colonneVertebrale: "Bonne courbure",
    membres: "Mobilité active",
    placenta: "Fixation correcte",
    interpretation: "Développement harmonieux, bilan rassurant.",
    conclusion: `<span class="rapport">Conclusion</span> : Le fœtus a montré une évolution harmonieuse depuis la première échographie, avec une croissance continue et des paramètres rassurants jusqu'à présent.
<br><span class="rapport">Conduite à tenir</span> : Continuer les échographies régulières pour suivre l'évolution du fœtus jusqu'à la prochaine échographie au 7ème mois. Renforcer le suivi prénatal pour s'assurer du maintien des progrès positifs.`,
  },
  "2.1.3": {
    morphologieCerebrale: "Taille dans la norme",
    colonneVertebrale: "Alignement adéquat",
    membres: "Activité modérée",
    placenta: "Position postérieure",
    interpretation: "Évolution sans particularité, bon pronostic.",
    conclusion: `<span class="rapport">Conclusion</span> : Le développement du fœtus a été régulier et en ligne avec les attentes depuis la première échographie, sans particularité préoccupante.
<br><span class="rapport">Conduite à tenir</span> : Poursuivre les contrôles échographiques programmés pour assurer le bon déroulement de la grossesse jusqu'à la prochaine échographie au 7ème mois. Maintenir un suivi soutenu des soins prénataux pour garantir la santé du fœtus.`,
  },
  "2.2.1": {
    morphologieCerebrale: "Ventricules légèrement dilatés",
    colonneVertebrale: "Forme correcte",
    membres: "Légère raideur",
    placenta: "Fixation antérieure",
    interpretation: "Suspicion d'hydrocéphalie à surveiller de près.",
    conclusion: `<span class="rapport">Conclusion</span> : La grossesse a progressé sans incidents majeurs initialement, mais la suspicion d'hydrocéphalie nécessite une attention particulière.
<br><span class="rapport">Diagnostic différentiel</span> : La dilatation légère des ventricules peut indiquer une hydrocéphalie naissante, requérant un suivi étroit et des examens approfondis.
<br><span class="rapport">Conduite à tenir</span> : Initier un programme de suivi échographique spécialisé pour surveiller étroitement la progression de la dilatation ventriculaire. Consulter un neurologue fœtal pour évaluer et planifier les interventions nécessaires.`,
  },
  "2.2.2": {
    morphologieCerebrale: "Présence de ventricules dilatés",
    colonneVertebrale: "Alignement sans anomalie",
    membres: "Activité réduite",
    placenta: "Position postérieure",
    interpretation: "Hydrocéphalie suspectée, suivi échographique requis.",
    conclusion: `<span class="rapport">Conclusion</span> : Alors que les premiers mois montraient un bon développement, la suspicion actuelle d'hydrocéphalie exige une surveillance renforcée.
<br><span class="rapport">Diagnostic différentiel</span> : La présence de ventricules dilatés peut être indicatrice d'une hydrocéphalie en développement, nécessitant une évaluation détaillée.
<br><span class="rapport">Conduite à tenir</span> : Effectuer des suivis échographiques fréquents et une consultation spécialisée pour évaluer les changements potentiels. Collaborer avec un neurologue pour déterminer les interventions possibles.`,
  },
  "2.2.3": {
    morphologieCerebrale: "Signes de dilatation ventriculaire",
    colonneVertebrale: "Aspect normal",
    membres: "Mouvements restreints",
    placenta: "Position antérieure",
    interpretation: "Dilatation ventriculaire détectée, nécessitant des examens complémentaires.",
    conclusion: `<span class="rapport">Conclusion</span> : Bien que le développement ait été positif jusqu'ici, les dernières observations de dilatation ventriculaire apportent de nouvelles préoccupations.
<br><span class="rapport">Diagnostic différentiel</span> : La dilatation ventriculaire suggère un risque accru d'hydrocéphalie, nécessitant des examens supplémentaires pour mieux comprendre et traiter.
<br><span class="rapport">Conduite à tenir</span> : Organiser un programme de surveillance échographique intensifié et solliciter des consultations spécialisées pour prévoir des actions en fonction des évolutions. Les résultats doivent être partagés avec les experts pour l'option des interventions les mieux adaptées.`,
  },
};
const fifthMonthCaseThree = {
  "3.1.1": {
    morphologieCerebrale: "Asymétrie ventriculaire",
    colonneVertebrale: "Légèrement incurvée",
    membres: "Mains fermées fréquemment",
    placenta: "Insertion basse",
    interpretation: "Présence de signes dysmorphiques, un suivi rapproché est recommandé.",
    conclusion: `<span class="rapport">Conclusion</span> : Depuis la première échographie, l'évolution a montré des signes de dysmorphisme nécessitant un suivi attentif, avec des anomalies détectées lors des échographies successives.
<br><span class="rapport">Diagnostic différentiel</span> : Ces anomalies peuvent indiquer des syndromes génétiques potentiels et nécessitent une évaluation génétique approfondie.
<br><span class="rapport">Conduite à tenir</span> : Des examens génétiques et un suivi échographique rapproché sont essentiels, ainsi que des consultations spécialisées pour élaborer un plan de prise en charge adapté.`,
  },
  "3.1.2": {
    morphologieCerebrale: "Petite cavité ventriculaire",
    colonneVertebrale: "Présence de légère courbure",
    membres: "Mouvements limités",
    placenta: "Fixation antérieure",
    interpretation:
      "Profil facial et anomalies cérébrales qui suggèrent une anomalie génétique possible.",
    conclusion: `<span class="rapport">Conclusion</span> : Depuis le début de la grossesse, l'évolution du fœtus a révélé des anomalies cérébrales et faciales possiblement génétiques.
<br><span class="rapport">Diagnostic différentiel</span> : Les signes observés suggèrent des anomalies génétiques possibles, nécessitant une investigation approfondie.
<br><span class="rapport">Conduite à tenir</span> : Procéder à des tests génétiques et maintenir un programme de suivi échographique intensif. Consulter un généticien pour informer les parents des options disponibles et de toute intervention future possible.`,
  },
  "3.1.3": {
    morphologieCerebrale: "Développement irrégulier",
    colonneVertebrale: "Légère déviation",
    membres: "Développement incomplet des doigts",
    placenta: "Position normale",
    interpretation: "Anomalies morphologiques persistantes, examens génétiques recommandés.",
    conclusion: `<span class="rapport">Conclusion</span> : Bien que le développement ait présenté des signes positifs initialement, des anomalies morphologiques persistantes sont maintenant évidentes.
<br><span class="rapport">Diagnostic différentiel</span> : Les anomalies observées peuvent indiquer des conditions génétiques sous-jacentes qui doivent être examinées en profondeur.
<br><span class="rapport">Conduite à tenir</span> : Des examens génétiques et un suivi échographique spécialisé sont prioritaires. Des consultations avec des experts en morphologie fœtale sont nécessaires pour planifier les interventions possibles.`,
  },
  "3.2.1": {
    morphologieCerebrale: "Conforme pour l'âge gestationnel",
    colonneVertebrale: "Structure régulière",
    membres: "Mouvements normaux",
    placenta: "Localisation antérieure",
    interpretation:
      "Développement cérébral et morphologique dans les normes, surveillance standard.",
    conclusion: `
<span class="rapport">Conclusion</span> : Depuis le début de la grossesse, le développement du fœtus a été régulier et conforme aux attentes, sans signe d'anomalie détecté.<br>
<span class="rapport">Conduite à tenir</span> : Maintenir les échographies et le suivi prénatal de routine jusqu'à la prochaine échographie prévue au 7ème mois pour continuer à surveiller le développement et s'assurer du bien-être du fœtus.`,
  },
  "3.2.2": {
    morphologieCerebrale: "Morphologie symétrique",
    colonneVertebrale: "Alignement adéquat",
    membres: "Bonne activité motrice",
    placenta: "Position postérieure",
    interpretation: "Croissance normale sans anomalie détectée.",
    conclusion: `<span class="rapport">Conclusion</span> : Le fœtus a montré un développement normal avec une croissance continue stable et rassurante.
<br><span class="rapport">Conduite à tenir</span> : Continuer à bien respecter le calendrier de visite prénatale, avec un suivi des échographies programmées pour s'assurer d'une progression sans complications jusque-là prévue pour le 7ème mois.`,
  },
  "3.2.3": {
    morphologieCerebrale: "Ventricules de taille normale",
    colonneVertebrale: "Aspect sain",
    membres: "Symétriques et actifs",
    placenta: "Localisation correcte",
    interpretation: "Pas d’anomalie morphologique significative, pronostic favorable.",
    conclusion: `<span class="rapport">Conclusion</span> : Depuis la première échographie, le fœtus a montré un bon développement sans anomalie morphologique significative, et son pronostic reste favorable.
<br><span class="rapport">Conduite à tenir</span> : Poursuivre les suivis échographiques et les examens prénataux de routine tout en observant les soins prénataux recommandés pour continuer à encourager ce développement positif jusqu'à la prochaine échographie de contrôle au 7ème mois.`,
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
    conclusion: `
<span class="rapport">Conclusion</span> : Depuis la première échographie, le développement des fœtus montre des résultats contrastés. Le premier fœtus présente un développement sain, tandis que le deuxième exhibe des signes préoccupants nécessitant surveillance.<br>
<span class="rapport">Diagnostic différentiel</span> : La dilatation ventriculaire et la cardiopathie suspectée chez le deuxième fœtus exigent une investigation pour des anomalies cardiaques potentielles.<br>
<span class="rapport">Conduite à tenir</span> : Un suivi prénatal rigoureux avec échographies fréquentes pour le deuxième fœtus est recommandé, ainsi que des consultations en cardiologie fœtale pour évaluer et planifier des interventions nécessaires.`,
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
    conclusion: `
<span class="rapport">Conclusion</span> : Durant la grossesse, les échographies ont montré une divergence d'évolution entre les deux fœtus. Le premier évolue normalement, mais le second présente des signes suggestifs d'une anomalie cardiaque persistante.<br>
<span class="rapport">Diagnostic différentiel</span> : Les anomalies observées pourraient indiquer une affection cardiaque que le fœtus n'a pas surmontée, nécessitant une action complémentaire.<br>
<span class="rapport">Conduite à tenir</span> : Poursuivre l'examen échographique direct pour le deuxième fœtus et consulter un cardiologue fœtal pour évaluer toute intervention potentielle. Maintenir le rythme des visites prénatales traduites en suivi personnalisé.`,
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
    conclusion: `
<span class="rapport">Conclusion</span> : La grossesse a montré un bon développement du premier fœtus, mais des préoccupations avec le second en raison d'asymétries ventriculaires détectées.<br>
<span class="rapport">Diagnostic différentiel</span> : Les signes présents sur l'axe cérébral et cardiaque nécessitent d'explorer toute possibilité de malformations structurales ou fonctionnelles chez le deuxième fœtus.<br>
<span class="rapport">Conduite à tenir</span> : Recommander une évaluation échographique spécialisée et, potentiellement, des investigations cliniques supplémentaires pour le deuxième fœtus. Maintenir des discussions ouvertes avec les parents pour aligner le plan de soin sur les découvertes et recommandations médicales.`,
  },
  // Les autres sous-sous-cas suivent le même modèle avec des conclusions adaptées à chaque interprétation déjà listée
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
    conclusion: `
<span class="rapport">Conclusion</span> : Malheureusement, la grossesse a impliqué une perte fœtale pour le premier bébé, mais le deuxième montre une progression saine et conforme.<br>
<span class="rapport">Conduite à tenir</span> : Mettre en place un suivi intensif pour continuer à surveiller le deuxième fœtus. Un soutien émotionnel pour les parents est fortement recommandé pour aider à traverser la perte et focaliser sur le bien-être du fœtus restant.`,
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
    conclusion: `
<span class="rapport">Conclusion</span> : Après la perte du premier fœtus, le deuxième poursuit son développement sans complications.<br>
<span class="rapport">Conduite à tenir</span> : Maintenir les échographies prénatales standard pour surveiller continuellement la santé du deuxième fœtus et fournir un accompagnement psychologique pour les parents.`,
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
    conclusion: `
<span class="rapport">Conclusion</span> : Malheureusement, la grossesse présente la perte du premier fœtus, tandis que le deuxième montre une croissance satisfaisante, remplissant les normes attendues pour une évolution positive.<br>
<span class="rapport">Conduite à tenir</span> : Continuer un suivi prénatal régulier pour surveiller le développement du deuxième fœtus. Un soutien psychologique pour les parents est recommandé pour les accompagner dans la gestion de la perte et le suivi du fœtus viable.`,
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
    conclusion: `
<span class="rapport">Conclusion</span> : Les deux fœtus continuent de se développer dans des conditions optimales. Bébé 1 présente un développement cérébral normal, un alignement correct de la colonne vertébrale et des mouvements spontanés avec un placenta positionné postérieurement. Bébé 2 affiche une structure cérébrale homogène, un alignement adéquat de la colonne vertébrale et des mouvements amples avec un placenta en position antérieure. Aucun signe d'anomalies n'est détecté, confortant les observations positives antérieures au cours de ce suivi.<br>
<span class="rapport">Conduite à tenir</span> : Maintenir un suivi échographique régulier jusqu'au 7ème mois pour garantir la surveillance continue du développement de Bébé 1 et Bébé 2. Recommander à la patiente de suivre attentivement les conseils de soins prénataux afin de maximiser les chances d'une grossesse sans complications. Assurer un suivi nutritionnel et de santé adéquat, tout en continuant l'éducation prénatale pour préparer au mieux la future mère aux étapes à venir.
`,
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
    conclusion: `
<span class="rapport">Conclusion</span> : Bébé 1 montre une croissance normale avec une morphologie cérébrale normale, un aspect harmonieux de la colonne vertébrale et une activité régulière des membres. Le placenta est en position postérieure. Bébé 2 présente une symétrie ventriculaire, avec une position correcte de la colonne vertébrale et une réponse motrice normale. Le placenta est positionné antérieurement. Les résultats indiquent une évolution morphologique normale pour les deux bébés, sans aucune anomalie détectée.<br>
<span class="rapport">Conduite à tenir</span> : Continuer le suivi échographique régulier jusqu'au 7ème mois pour surveiller le développement de Bébé 1 et Bébé 2. Encourager la patiente à poursuivre les rendez-vous prénataux et à suivre les recommandations de soins prénataux afin d'optimiser la santé de la grossesse. Maintenir l'attention sur les pratiques de santé maternelle, tout en s'assurant qu'une préparation adéquate est en place pour les dernières étapes de la grossesse.
`,
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
    conclusion: `
<span class="rapport">Conclusion</span> : Bébé 1 démontre un développement cérébral régulier, une colonne vertébrale sans déviation, et des mouvements harmonieux. Le placenta est positionné postérieurement. Bébé 2 présente une morphologie cérébrale proportionnelle, une structure normale de la colonne vertébrale, et des mouvements actifs, avec le placenta en position antérieure. Ces observations sont cohérentes avec une première évolution sans anomalie, et aucune intervention n'est requise.<br>
<span class="rapport">Conduite à tenir</span> : Continuer à effectuer des échographies régulières jusqu'au 7ème mois pour suivre le développement continu de Bébé 1 et Bébé 2. Encourager la patiente à maintenir ses soins prénataux, en suivant les conseils médicaux pour assurer un suivi optimal de la grossesse. La préparation à l'accouchement doit également être amorcée, en s'assurant que tous les aspects de santé maternelle sont pris en charge de manière adéquate.
`,
  },
  "4.4.1": {
    bebe1: {
      morphologieCerebrale: "Développement normal",
      colonneVertebrale: "Structure alignée",
      membres: "Bonne coordination",
      placenta: "Postérieur",
      interpretation: "Développement harmonieux pour le premier fœtus.",
    },
    bebe2: {
      morphologieCerebrale: "Normale",
      colonneVertebrale: "Alignement adéquat",
      membres: "Mouvements fluides",
      placenta: "Antérieur",
      interpretation: "Réponses motrices appropriées pour le deuxième fœtus.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Les examens montrent un développement harmonieux et sans anomalies pour Bébé 1 et Bébé 2, avec des positions placentaires postérieure et antérieure respectivement.<br>
<span class="rapport">Conduite à tenir</span> : Encourager la patiente à maintenir ses soins prénataux et à suivre les recommandations médicales pour assurer une progression saine de la grossesse.
`,
  },
  "4.4.2": {
    bebe1: {
      morphologieCerebrale: "Équilibre parfait",
      colonneVertebrale: "Sans déviation",
      membres: "Activité normale",
      placenta: "Postérieur",
      interpretation: "État stable sans anomalies détectées pour le premier fœtus.",
    },
    bebe2: {
      morphologieCerebrale: "Symétrie observée",
      colonneVertebrale: "Aucune malformation",
      membres: "Tonus normal",
      placenta: "Antérieur",
      interpretation: "Développement conforme aux attentes pour le deuxième fœtus.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Bébé 1 et Bébé 2 se développent conformément aux attentes, sans anomalies détectées, avec des placentas postérieur et antérieur.<br>
<span class="rapport">Conduite à tenir</span> : La patiente doit suivre les soins prénataux conseillés et se préparer pour les étapes suivantes de la grossesse.
`,
  },
  "4.4.3": {
    bebe1: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Alignement standard",
      membres: "Réactivité normale",
      placenta: "Postérieur",
      interpretation: "Aucun signe d'inquiétude détecté pour le premier fœtus.",
    },
    bebe2: {
      morphologieCerebrale: "Proportionnelle",
      colonneVertebrale: "Aspect correct",
      membres: "Bonne activité",
      placenta: "Antérieur",
      interpretation: "Croissance et développement normaux pour le deuxième fœtus.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Observations normales pour Bébé 1 et Bébé 2, sans signes d'inquiétude, avec des positions postérieure et antérieure pour les placentas.<br>
<span class="rapport">Conduite à tenir</span> : Insister sur le respect des soins prénataux et l'éducation prénatale pour préparer efficacement la mère pour les étapes finales de la grossesse.
`,
  },
  "4.5.1": {
    bebe1: {
      morphologieCerebrale: "Développement équilibré",
      colonneVertebrale: "Alignement régulier",
      membres: "Mouvements actifs",
      placenta: "Postérieur",
      interpretation: "Pas d'anomalies évidentes pour le premier fœtus.",
    },
    bebe2: {
      morphologieCerebrale: "Structure correcte",
      colonneVertebrale: "Harmonieuse",
      membres: "Ton normal",
      placenta: "Antérieur",
      interpretation: "État sain observé pour le deuxième fœtus.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Bébé 1 et Bébé 2 présentent des développements sains sans anomalies, avec des positions placentaires postérieure et antérieure.<br>
<span class="rapport">Conduite à tenir</span> : Assurer un maintien correct des soins prénataux pour garantir le bon déroulement de la grossesse.
`,
  },
  "4.5.2": {
    bebe1: {
      morphologieCerebrale: "Normale",
      colonneVertebrale: "Axe central",
      membres: "Flexibilité adaptée",
      placenta: "Postérieur",
      interpretation: "Développement sans complications pour le premier fœtus.",
    },
    bebe2: {
      morphologieCerebrale: "Homogène",
      colonneVertebrale: "Rectiligne",
      membres: "Mouvements synchronisés",
      placenta: "Antérieur",
      interpretation: "Évolution conforme aux standards attendus pour le deuxième fœtus.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Développement sans complications pour Bébé 1 et Bébé 2, avec les placentas situés postérieurement et antérieurement.<br>
<span class="rapport">Conduite à tenir</span> : Assurer que la patiente suit les recommandations de soins prénataux et prépare correctement l'environnement familial pour l'arrivée des bébés.
`,
  },
  "4.5.3": {
    bebe1: {
      morphologieCerebrale: "Forme constante",
      colonneVertebrale: "Normale",
      membres: "Agilité observée",
      placenta: "Postérieur",
      interpretation: "Progression naturelle sans anomalies pour le premier fœtus.",
    },
    bebe2: {
      morphologieCerebrale: "Structurellement cohérente",
      colonneVertebrale: "Aucun désalignement",
      membres: "Excellente motricité",
      placenta: "Antérieur",
      interpretation: "Développement sain et conforme aux attentes pour le deuxième fœtus.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Bébé 1 et Bébé 2 continuent un développement sain et conforme, avec des positions placentaires postérieure et antérieure.<br>
<span class="rapport">Conduite à tenir</span> : Encourager la mère à suivre les soins prénataux attentivement pour contribuer à la santé continue des fœtus et à la préparation prénatale.
`,
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
    conclusion: `
<span class="rapport">Conclusion</span> : Depuis le début de la grossesse, des signes préoccupants sont apparus, notamment des anomalies neurologiques et orthopédiques.<br>
<span class="rapport">Diagnostic différentiel</span> : Les dilatations ventriculaires et la courbure vertébrale peuvent indiquer des problèmes neurologiques sérieux qui nécessitent une enquête approfondie.<br>
<span class="rapport">Conduite à tenir</span> : Mettre en place un programme de suivi échographique intensif pour surveiller la progression cérébrale et cardiaque. Consulter un expert en neurologie fœtale pour définir un plan d'intervention approprié.`,
  },
  "5.1.2": {
    morphologieCerebrale: "Dilatation ventriculaire",
    colonneVertebrale: "Légère déviation",
    membres: "Faible activité motrice",
    placenta: "Antérieur",
    interpretation:
      "Les anomalies détectées nécessitent un suivi intensif, avec des signes de développement neuro-musculaire impacté.",
    conclusion: `
<span class="rapport">Conclusion</span> : Le développement fœtal montre de multiples préoccupations depuis le début de la grossesse, avec des anomalies ventriculaires et motrices détectées.<br>
<span class="rapport">Diagnostic différentiel</span> : Ces anomalies pourraient être liées à des troubles du développement neurologique ou une mauvaise coordination neuromusculaire.<br>
<span class="rapport">Conduite à tenir</span> : Des tests approfondis en neurologie et en orthopédie doivent être envisagés. Maintenir un lien étroit avec les spécialistes pour aligner les stratégies de traitement et de suivi.`,
  },
  "5.1.3": {
    morphologieCerebrale: "Asymétrie ventriculaire",
    colonneVertebrale: "Alignement compromis",
    membres: "Mouvements restreints",
    placenta: "Marginal",
    interpretation:
      "L'ensemble des observations suggère des risques neurologiques et orthopédiques potentiels.",
    conclusion: `
<span class="rapport">Conclusion</span> : Les observations depuis la première échographie montrent des anomalies continues dans le développement du fœtus, particulièrement au niveau neurologique et orthopédique.<br>
<span class="rapport">Diagnostic différentiel</span> : L'asymétrie des ventricules suggère des atteintes potentiellement évolutives au niveau neurologique, augmentant le risque de complications.<br>
<span class="rapport">Conduite à tenir</span> : Organiser des consultations ciblées avec des neurologues pédiatriques et des experts en chirurgie orthopédique. Une surveillance étroite et des suivis échographiques fréquents sont cruciaux pour ajuster les mesures d'intervention.`,
  },
  "5.2.1": {
    morphologieCerebrale: "Normale",
    colonneVertebrale: "Alignement normal",
    membres: "Bonne tonicité",
    placenta: "Postérieur",
    interpretation:
      "Le développement du fœtus est normal avec aucune anomalie morphologique détectée.",
    conclusion: `
<span class="rapport">Conclusion</span> : Depuis la première échographie, le fœtus présente une trajectoire de développement positive, sans anomalie notable.<br>
<span class="rapport">Conduite à tenir</span> : Continuer les visites prénatales régulières et les échographies pour surveiller la progression du fœtus jusqu'à la prochaine évaluation au 7ème mois. Les soins prénataux doivent rester conformes pour maintenir cette évolution saine.`,
  },
  "5.2.2": {
    morphologieCerebrale: "Développement normal",
    colonneVertebrale: "Structure correcte",
    membres: "Mouvements actifs",
    placenta: "Position supérieure",
    interpretation:
      "L'absence d'anomalies est rassurante ; l'évolution du fœtus se poursuit normalement.",
    conclusion: `
<span class="rapport">Conclusion</span> : Le fœtus évolue de manière régulière, avec des indicateurs de croissance sains et cohérents depuis le début de la grossesse.<br>
<span class="rapport">Conduite à tenir</span> : Poursuivre les échographies prénatales et suivis de routine pour garantir que la grossesse évolue sans problème jusqu'à la prochaine échographie au 7ème mois. Renforcer l'importance d'un suivi prénatal convenable.`,
  },
  "5.2.3": {
    morphologieCerebrale: "Symétrie parfaite",
    colonneVertebrale: "Aspect harmonieux",
    membres: "Motricité adéquate",
    placenta: "Positionnement favorable",
    interpretation: "Aucune anomalie décelée ; croissance conforme aux attentes.",
    conclusion: `
<span class="rapport">Conclusion</span> : Le développement du fœtus a été suivi de manière positive depuis la première échographie avec une symétrie parfaite et un pronostic rassurant.<br>
<span class="rapport">Conduite à tenir</span> : Continuer les pratiques prénatales habituelles et les échographies régulières jusqu'à l'évaluation prévue au 7ème mois pour s'assurer du bien-être et de la bonne progression du fœtus.`,
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
    conclusion: `
<span class="rapport">Conclusion</span> : Depuis la première échographie, le développement fœtal s'est révélé normal sans l'apparition de nouvelles anomalies.<br>
<span class="rapport">Conduite à tenir</span> : Poursuivre les consultations et échographies prénatales de routine pour s'assurer de la continuité de ce développement positif jusqu'à la prochaine échographie prévue au 7ème mois. Assurer un suivi prénatal standard pour maintenir la santé du fœtus.`,
  },
  "6.1.2": {
    morphologieCerebrale: "Normale avec structures visibles",
    colonneVertebrale: "Alignement harmonieux",
    membres: "Activité régulière",
    placenta: "Positionnement favorable",
    interpretation:
      "Croissance sans complication ; développement harmonieux et absence de toute anomalie morphologique.",
    conclusion: `
<span class="rapport">Conclusion</span> : Le développement du fœtus est stable avec une croissance régulière et sans complications détectées depuis le début de la grossesse.<br>
<span class="rapport">Conduite à tenir</span> : Continuer les visites prénatales et les échographies régulières pour confirmer que le développement reste normal jusqu'à l'examen du 7ème mois. Renforcer les soins prénataux pour préserver cette trajectoire harmonieuse.`,
  },
  "6.1.3": {
    morphologieCerebrale: "Symétrique",
    colonneVertebrale: "Forme et courbure conformes",
    membres: "Bonne motricité",
    placenta: "Position antérieure",
    interpretation:
      "Tous les paramètres de croissance sont satisfaisants ; l'évolution est rassurante pour la suite de la grossesse.",
    conclusion: `
<span class="rapport">Conclusion</span> : Depuis le début de la grossesse, tous les paramètres de croissance du fœtus ont été encourageants et conformes aux attentes.<br>
<span class="rapport">Conduite à tenir</span> : Maintenir un suivi prénatal régulier et des échographies de routine afin de garantir la bonne santé continue du fœtus jusqu'à la prochaine échographie au 7ème mois.`,
  },
};
const fifthMonthCaseEight = {
  "8.1.1": {
    bebe1: {
      morphologieCerebrale: "Développement harmonieux",
      colonneVertebrale: "Alignement correct",
      membres: "Tonicité normale",
      placenta: "Position antérieure",
      interpretation: "Le développement est sans souci pour Bébé 1.",
    },
    bebe2: {
      morphologieCerebrale: "Asymétrie détectée",
      colonneVertebrale: "Certaine courbure anormale",
      membres: "Mouvement réduit",
      placenta: "Position postérieure",
      interpretation: "Les anomalies neurologiques et cardiaques nécessitent une surveillance.",
    },
    bebe3: {
      morphologieCerebrale: "Conformation normale",
      colonneVertebrale: "Alignement régulier",
      membres: "Bonne mobilité",
      placenta: "Position antérieure",
      interpretation: "Développement sans problème pour Bébé 3.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Bébé 1 et Bébé 3 montrent une évolution positive, tandis que Bébé 2 nécessite un suivi spécialisé en raison de signes préoccupants.<br>
<span class="rapport">Diagnostic différentiel</span> : Les anomalies constatées chez Bébé 2 peuvent indiquer des problèmes neurologiques potentiels.<br>
<span class="rapport">Conduite à tenir</span> : Réaliser des suivis cardiologiques et neurologiques étroits pour Bébé 2 et poursuivre les échographies standards pour les autres.`,
  },
  "8.1.2": {
    bebe1: {
      morphologieCerebrale: "Symétrie parfaite",
      colonneVertebrale: "Conforme aux attentes",
      membres: "Actifs",
      placenta: "Latéral gauche",
      interpretation: "Développement conforme pour Bébé 1.",
    },
    bebe2: {
      morphologieCerebrale: "Dilatation ventriculaire",
      colonneVertebrale: "Anomalie légère",
      membres: "Mouvement faible",
      placenta: "Postérieur",
      interpretation: "Des anomalies nécessitent un suivi spécialisé pour Bébé 2.",
    },
    bebe3: {
      morphologieCerebrale: "Régulière",
      colonneVertebrale: "Développement en cours",
      membres: "Actifs",
      placenta: "Latéral droit",
      interpretation: "Pas d'anomalies notables détectées pour Bébé 3.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Bébé 1 et Bébé 3 progressent normalement, tandis que Bébé 2 présente des signes nécessitant une observation intensive.<br>
<span class="rapport">Diagnostic différentiel</span> : Les dilatations ventriculaires et anomalies légères du bébé 2 nécessitent enquête pour des potentiels neurologiques.<br>
<span class="rapport">Conduite à tenir</span> : Poursuivre les examens neurologiques pour Bébé 2 et effectuer des échographies périodiques pour tous.`,
  },
  "8.1.3": {
    bebe1: {
      morphologieCerebrale: "Développement en cours",
      colonneVertebrale: "Aucune anomalie détectée",
      membres: "Tonicité normale",
      placenta: "Positionnement favorable",
      interpretation: "Bébé 1 montre un développement normal.",
    },
    bebe2: {
      morphologieCerebrale: "Déformation mineure",
      colonneVertebrale: "Déviation latérale",
      membres: "Rétrécissement observable",
      placenta: "Antérieur",
      interpretation: "Bébé 2 requiert attention pour les anomalies détectées.",
    },
    bebe3: {
      morphologieCerebrale: "Forme typique",
      colonneVertebrale: "Alignement correct",
      membres: "Bonne amplitude",
      placenta: "Postérieur",
      interpretation: "Bébé 3 est dans la norme de développement.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Les développements des Bébés 1 et 3 évoluent normalement. Bébé 2 présente des signes inquiétants et demande une attention proactive.<br>
<span class="rapport">Diagnostic différentiel</span> : Les déformations mineures observées chez Bébé 2 pourraient affecter le développement global nécessitant des tests.<br>
<span class="rapport">Conduite à tenir</span> : Mettre l'accent sur le dépistage orthopédique et neurologique pour Bébé 2 et garantir des visites prénatales régulières pour les autres.`,
  },
  "8.2.1": {
    bebe1: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Alignement correct",
      membres: "Mobilité normale",
      placenta: "Position postérieure",
      interpretation: "Rien à signaler pour Bébé 1.",
    },
    bebe2: {
      morphologieCerebrale: "Forme régulière",
      colonneVertebrale: "Bonne structure",
      membres: "Actifs",
      placenta: "Position antérieure",
      interpretation: "Développement normal pour Bébé 2.",
    },
    bebe3: {
      morphologieCerebrale: "Développement harmonieux",
      colonneVertebrale: "Alignement normal",
      membres: "Bonne motricité",
      placenta: "Latéral gauche",
      interpretation: "Bébé 3 évolue dans des normes parfaites.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : L’évaluation montre une croissance normale et équilibrée pour tous les bébés, sans complications majeures.<br>
<span class="rapport">Conduite à tenir</span> : Continuer les suivis de routine et les échographies pour s’assurer de la bonne santé des bébés jusqu'à la prochaine période d'analyse.`,
  },
  "8.2.2": {
    bebe1: {
      morphologieCerebrale: "Symétrique",
      colonneVertebrale: "Alignement correct",
      membres: "Bonne activité",
      placenta: "Position antérieure",
      interpretation: "Développement conforme pour Bébé 1.",
    },
    bebe2: {
      morphologieCerebrale: "Régulière",
      colonneVertebrale: "Structure stable",
      membres: "Bonne motricité",
      placenta: "Position postérieure",
      interpretation: "Aucune anomalie détectée pour Bébé 2.",
    },
    bebe3: {
      morphologieCerebrale: "Développement harmonieux",
      colonneVertebrale: "Alignement correct",
      membres: "Bonne activité",
      placenta: "Positionnement favorable",
      interpretation: "Bébé 3 suit un développement satisfaisant.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Fructueuse croissance des trois bébés, avec un bon bilan sanitaire et une stabilité promettante.<br>
<span class="rapport">Conduite à tenir</span> : Placer la priorité sur les examens prénataux fréquents jusqu'à la prochaine échographie pour maintenir une vue sûre et normale du développement des bébés.`,
  },
  "8.2.3": {
    bebe1: {
      morphologieCerebrale: "Développement conforme",
      colonneVertebrale: "Bonne structure",
      membres: "Mobilité normale",
      placenta: "Latéral gauche",
      interpretation: "Rien à signaler pour Bébé 1.",
    },
    bebe2: {
      morphologieCerebrale: "Régulière",
      colonneVertebrale: "Forme adéquate",
      membres: "Tonicité correcte",
      placenta: "Postérieur",
      interpretation: "Développement normal pour Bébé 2.",
    },
    bebe3: {
      morphologieCerebrale: "Développement homogène",
      colonneVertebrale: "Structure régulière",
      membres: "Activité satisfaisante",
      placenta: "Antérieur",
      interpretation: "Bébé 3 progresse sans souci.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Développement sain des trois fœtus, sans déviation ni complication détectée jusqu'à présent.<br>
<span class="rapport">Conduite à tenir</span> : Adopter une approche continue des suivis prénataux complets pour garantir la bonne santé de chaque fœtus jusque lors du suivi échographique suivant.`,
  },
  "8.3.1": {
    bebe1: {
      morphologieCerebrale: "Symétrique",
      colonneVertebrale: "Développement normal",
      membres: "Mobilité normale",
      placenta: "Position postérieure",
      interpretation: "Bébé 1 évolue bien dans les attentes.",
    },
    bebe2: {
      morphologieCerebrale: "Non applicable",
      colonneVertebrale: "Non applicable",
      membres: "Non applicable",
      placenta: "Non applicable",
      interpretation: "Décès in-utero, pas d'activité cardiaque.",
    },
    bebe3: {
      morphologieCerebrale: "Forme correcte",
      colonneVertebrale: "Alignement régulier",
      membres: "Bonne tonicité",
      placenta: "Latéral droit",
      interpretation: "Bébé 3 montre une évolution normale.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Les Bébés 1 et 3 poursuivent une évolution normale, malgré la perte du Bébé 2.<br>
<span class="rapport">Conduite à tenir</span> : Maintenir un suivi rigoureux pour les Bébés 1 et 3 pour assurer leur développement et fournir un soutien émotionnel aux parents après cette perte.`,
  },
  "8.3.2": {
    bebe1: {
      morphologieCerebrale: "Développement harmonieux",
      colonneVertebrale: "Aucune anomalie",
      membres: "Mobilité active",
      placenta: "Positionnement favorable",
      interpretation: "Bébé 1 suit un développement adéquat.",
    },
    bebe2: {
      morphologieCerebrale: "Non applicable",
      colonneVertebrale: "Non applicable",
      membres: "Non applicable",
      placenta: "Non applicable",
      interpretation: "Décès in-utero, arrêt de développement.",
    },
    bebe3: {
      morphologieCerebrale: "Symétrique",
      colonneVertebrale: "Alignement correct",
      membres: "Bonne activité",
      placenta: "Latéral gauche",
      interpretation: "Bébé 3 présente une progression positive.",
    },
    conclusion: `<span class="rapport">Conclusion</span> : Avec la progression normale de Bébés 1 et 3, la situation reste complexe suite à la perte de Bébé 2.<br>
<span class="rapport">Conduite à tenir</span> : Continuer un suivi serré des deux fœtus restant, avec un support psychologique pour la famille impactée par cet arrêt de développement.`,
  },
  "8.3.3": {
    bebe1: {
      morphologieCerebrale: "Normale",
      colonneVertebrale: "Forme correcte",
      membres: "Mobilité adéquate",
      placenta: "Antérieur",
      interpretation: "Rien à noter pour Bébé 1.",
    },
    bebe2: {
      morphologieCerebrale: "Non applicable",
      colonneVertebrale: "Non applicable",
      membres: "Non applicable",
      placenta: "Non applicable",
      interpretation: "Décès in-utero, arrêt cardiaque.",
    },
    bebe3: {
      morphologieCerebrale: "Développement symétrique",
      colonneVertebrale: "Alignement normal",
      membres: "Activité régulière",
      placenta: "Postérieur",
      interpretation: "Tout est normal pour Bébé 3.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : La progression pour Bébés 1 et 3 reste prometteuse malgré l'arrêt cardiaque du Bébé 2.<br>
<span class="rapport">Conduite à tenir</span> : Fournir un accompagnement continu pour les deux fœtus restants et un soutien approprié pour les parents confrontés à la perte.`,
  },
  "8.4.1": {
    bebe1: {
      morphologieCerebrale: "Forme régulière",
      colonneVertebrale: "Alignement normal",
      membres: "Activité harmonieuse",
      placenta: "Latéral droit",
      interpretation: "Développement bien aligné pour Bébé 1.",
    },
    bebe2: {
      morphologieCerebrale: "Symétrie correcte",
      colonneVertebrale: "Développement normal",
      membres: "Bonne motricité",
      placenta: "Postérieur",
      interpretation: "Bébé 2 montrant une évolution stable.",
    },
    bebe3: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Bonne structure",
      membres: "Mobilité normale",
      placenta: "Antérieur",
      interpretation: "Rien à signaler pour Bébé 3.",
    },
    conclusion: `<span class="rapport">Conclusion</span> : Les trois bébés continuent leur croissance de manière stable et en bonne santé, aucun problème majeur n'a été observé.<br>
<span class="rapport">Conduite à tenir</span> : Continuer les suivis prénataux réguliers et les échographies pour garantir que le développement des trois bébés continue dans cette direction positive.`,
  },
  "8.4.2": {
    bebe1: {
      morphologieCerebrale: "Développement harmonieux",
      colonneVertebrale: "Aucune anomalie",
      membres: "Actifs",
      placenta: "Positionnement favorable",
      interpretation: "Développement sain et conforme pour Bébé 1.",
    },
    bebe2: {
      morphologieCerebrale: "Forme typique",
      colonneVertebrale: "Bonne formation",
      membres: "Mobilité correcte",
      placenta: "Latéral gauche",
      interpretation: "Évolution plaisante pour Bébé 2.",
    },
    bebe3: {
      morphologieCerebrale: "Symétrie parfaite",
      colonneVertebrale: "Alignement régulier",
      membres: "Activité satisfaisante",
      placenta: "Postérieur",
      interpretation: "Développement adéquat pour Bébé 3.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Les trois fœtus progressent harmonieusement sans aucune complication, ce qui promet un bon pronostic.<br>
<span class="rapport">Conduite à tenir</span> : Assurer les échographies et les suivis prénataux continus pour préserver cette dynamique positive de croissance.`,
  },
  "8.4.3": {
    bebe1: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Alignement adéquat",
      membres: "Tonicité correcte",
      placenta: "Latéral droit",
      interpretation: "Bébé 1 évolue normalement, aucun souci à indiquer.",
    },
    bebe2: {
      morphologieCerebrale: "Régulière",
      colonneVertebrale: "Structure stable",
      membres: "Actifs",
      placenta: "Positionnement favorable",
      interpretation: "Croissance normale rapportée pour Bébé 2.",
    },
    bebe3: {
      morphologieCerebrale: "Développement homogène",
      colonneVertebrale: "Bonne structure",
      membres: "Bonne mobilité",
      placenta: "Latéral gauche",
      interpretation: "Bon développement observé pour Bébé 3.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Les trois bébés poursuivent une croissance régulière avec des paramètres de développement dans la norme.<br>
<span class="rapport">Conduite à tenir</span> : Maintenir les soins prénataux solides et les échographies régulières pour garantir une surveillance continue de la santé de chaque bébé.`,
  },
  "8.5.1": {
    bebe1: {
      morphologieCerebrale: "Symétrie parfaite",
      colonneVertebrale: "Structure correcte",
      membres: "Activité normale",
      placenta: "Latéral gauche",
      interpretation: "Stable et conforme aux standards pour Bébé 1.",
    },
    bebe2: {
      morphologieCerebrale: "Légère asymétrie",
      colonneVertebrale: "Déviation légère",
      membres: "Mobilité réduite",
      placenta: "Antérieur",
      interpretation: "Suivi requis pour anomalies légères de Bébé 2.",
    },
    bebe3: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Alignement normal",
      membres: "Mobilité normale",
      placenta: "Postérieur",
      interpretation: "Bébé 3 est conforme aux attentes prénatales.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Bébés 1 et 3 continuent de croître sans obstacle apparent, bien que Bébé 2 présente des anomalies qui nécessitent un suivi attentif.<br>
<span class="rapport">Diagnostic différentiel</span> : L'asymétrie légère et la mobilité réduite chez Bébé 2 pourraient signaler de futures complications qui doivent être explorées plus en profondeur.<br>
<span class="rapport">Conduite à tenir</span> : Effectuer des échographies supplémentaires et fixer des consultations avec des spécialistes pour Bébé 2, tout en poursuivant un suivi régulier pour les Bébés 1 et 3 pour assurer leur santé continue.`,
  },
  "8.5.2": {
    bebe1: {
      morphologieCerebrale: "Développement régulier",
      colonneVertebrale: "Alignement correct",
      membres: "Bonne tonicité",
      placenta: "Postérieur",
      interpretation: "Rien à signaler pour Bébé 1, développement régulier.",
    },
    bebe2: {
      morphologieCerebrale: "Dilatation ventriculaire légère",
      colonneVertebrale: "Anomalie mineure",
      membres: "Activité réduite",
      placenta: "Latéral droit",
      interpretation: "Anomalies modérées chez Bébé 2, nécessitant des suivis.",
    },
    bebe3: {
      morphologieCerebrale: "Symétrie correcte",
      colonneVertebrale: "Développement harmonieux",
      membres: "Mobilité normale",
      placenta: "Positionnement favorable",
      interpretation: "Bébé 3 présente une symétrie normée.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Un développement satisfaisant est observé pour Bébés 1 et 3, cependant Bébé 2 montre une dilatation ventriculaire qui appelle à des investigations supplémentaires.<br>
<span class="rapport">Diagnostic différentiel</span> : Les légères anomalies observées chez Bébé 2 peuvent devoir être explorées pour éliminer des risques neurologiques.<br>
<span class="rapport">Conduite à tenir</span> : Suivre des analyses précises, en collaboration avec des experts médicaux, pour Bébé 2. Continuer les soins ordinaires pour les autres bébés.`,
  },
  "8.5.3": {
    bebe1: {
      morphologieCerebrale: "Structure homogène",
      colonneVertebrale: "Structure conforme",
      membres: "Actifs",
      placenta: "Antérieur",
      interpretation: "Développement stable et régulier pour Bébé 1.",
    },
    bebe2: {
      morphologieCerebrale: "Déformation mineure",
      colonneVertebrale: "Légère courbure",
      membres: "Tonicité faible",
      placenta: "Postérieur",
      interpretation: "Besoin d'une surveillance accrue pour Bébé 2 en raison des déformations.",
    },
    bebe3: {
      morphologieCerebrale: "Développement homogène",
      colonneVertebrale: "Alignement régulier",
      membres: "Bonne tonicité",
      placenta: "Latéral gauche",
      interpretation: "Développement conforme pour Bébé 3.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Les analyses indiquent que Bébés 1 et 3 évoluent sans difficultés, tandis que des déformations détectées chez Bébé 2 nécessitent des soins spécialisés.<br>
<span class="rapport">Diagnostic différentiel</span> : La courbure et la faible tonicité chez Bébé 2 pourraient indiquer des complications orthopédiques nécessitant une analyse approfondie.<br>
<span class="rapport">Conduite à tenir</span> : Programmer des évaluations spécialisées pour Bébé 2 et établir un suivi prénatal standard pour les Bébés 1 et 3.`,
  },
};
const fifthMonthCaseNine = {
  "9.1.1": {
    bebe1: {
      morphologieCerebrale: "Normale",
      colonneVertebrale: "Alignement correct",
      membres: "Mobilité active",
      placenta: "Antérieur",
      interpretation: "Développement fœtal approprié sans anomalies.",
    },
    bebe2: {
      morphologieCerebrale: "Symétrique",
      colonneVertebrale: "Structure normale",
      membres: "Activité normale",
      placenta: "Latéral gauche",
      interpretation: "Croissance saine avec bonne symétrie.",
    },
    bebe3: {
      morphologieCerebrale: "Développement conforme",
      colonneVertebrale: "Aucune anomalie",
      membres: "Tonicité normale",
      placenta: "Postérieur",
      interpretation: "Tous les paramètres sont dans les normes.",
    },
    bebe4: {
      morphologieCerebrale: "Normale",
      colonneVertebrale: "Développement correct",
      membres: "Mobilité satisfaisante",
      placenta: "Latéral droit",
      interpretation: "Évolution standard et satisfaisante.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Tous les bébés présentent un développement normal, sans anomalie détectée, tout au long de la grossesse.<br>
<span class="rapport">Conduite à tenir</span> : Maintenir les soins prénataux de routine pour assurer la continuité de ce développement sain jusqu'à la prochaine échographie au 7ème mois.`,
  },
  "9.1.2": {
    bebe1: {
      morphologieCerebrale: "Forme régulière",
      colonneVertebrale: "Développement normal",
      membres: "Bonne tonicité",
      placenta: "Latéral droit",
      interpretation: "Performances de croissance alignées aux attentes.",
    },
    bebe2: {
      morphologieCerebrale: "Symétrie correcte",
      colonneVertebrale: "Alignement normal",
      membres: "Activité correcte",
      placenta: "Antérieur",
      interpretation: "Symétrie et alignement satisfaisants.",
    },
    bebe3: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Aucune anomalie",
      membres: "Activité normale",
      placenta: "Positionnement favorable",
      interpretation: "Développement normalement observé.",
    },
    bebe4: {
      morphologieCerebrale: "Développement homogène",
      colonneVertebrale: "Alignement adéquat",
      membres: "Tonicité satisfaisante",
      placenta: "Latéral gauche",
      interpretation: "Développement unifié et conforme.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Le développement harmonieux des quatre fœtus reste constant et sans complication apparente depuis le début de la grossesse.<br>
<span class="rapport">Conduite à tenir</span> : Continuer le suivi prénatal et les échographies régulières pour s'assurer de la bonne évolution des fœtus jusqu'à la prochaine évaluation au 7ème mois.`,
  },
  "9.1.3": {
    bebe1: {
      morphologieCerebrale: "Symétrie parfaite",
      colonneVertebrale: "Aucune anomalie",
      membres: "Mobilité normale",
      placenta: "Postérieur",
      interpretation: "Paramètres de croissance sans défaut notable.",
    },
    bebe2: {
      morphologieCerebrale: "Développement normal",
      colonneVertebrale: "Structure régulière",
      membres: "Activité correcte",
      placenta: "Antérieur",
      interpretation: "Croissance conforme et stable.",
    },
    bebe3: {
      morphologieCerebrale: "Forme typique",
      colonneVertebrale: "Bonne structure",
      membres: "Tonicité correcte",
      placenta: "Latéral gauche",
      interpretation: "Développement régulier bien établi.",
    },
    bebe4: {
      morphologieCerebrale: "Développement conforme",
      colonneVertebrale: "Alignement normal",
      membres: "Activité harmonieuse",
      placenta: "Positionnement favorable",
      interpretation: "Évolution dans les normes de santé.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Les quatre fœtus se développent normalement, sans anomalies détectées à ce jour.<br>
<span class="rapport">Conduite à tenir</span> : Maintenir des soins prénataux réguliers et continuer les échographies programmées pour s'assurer de maintenir ce progrès jusqu'à la prochaine échographie au 7ème mois.`,
  },
  "9.2.1": {
    bebe1: {
      morphologieCerebrale: "Légère asymétrie",
      colonneVertebrale: "Normale",
      membres: "Activité correcte",
      placenta: "Antérieur",
      interpretation: "Suivi recommandé pour légère asymétrie détectée.",
    },
    bebe2: {
      morphologieCerebrale: "Développement harmonieux",
      colonneVertebrale: "Structure normale",
      membres: "Mobilité normale",
      placenta: "Postérieur",
      interpretation: "Évolution sans anomalie détectée.",
    },
    bebe3: {
      morphologieCerebrale: "Forme régulière",
      colonneVertebrale: "Déviation mineure",
      membres: "Mobilité correcte",
      placenta: "Latéral gauche",
      interpretation: "Suivi conseillé pour déviation mineure observée.",
    },
    bebe4: {
      morphologieCerebrale: "Développement normal",
      colonneVertebrale: "Alignement adéquat",
      membres: "Tonicité normale",
      placenta: "Positionnement favorable",
      interpretation: "Aucun signe de préoccupation.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Depuis la première échographie, la grossesse multiple montre un développement globalement positif. Bébé 1 présente une légère asymétrie nécessitant un suivi rapproché, tandis que les autres fœtus évoluent normalement.<br>
<span class="rapport">Diagnostic différentiel</span> : L'asymétrie de Bébé 1 pourrait indiquer une altération structurelle portant sur l'équilibre cérébral, qui doit être examinée.<br>
<span class="rapport">Conduite à tenir</span> : Proposer un examen échographique approfondi pour Bébé 1 avec des consultations régulières. Assurer une surveillance continue pour les autres bébés pour garantir la meilleure issue possible jusqu'à l'accouchement.`,
  },
  "9.2.2": {
    bebe1: {
      morphologieCerebrale: "Développement homogène",
      colonneVertebrale: "Structure correcte",
      membres: "Tonicité adéquate",
      placenta: "Latéral gauche",
      interpretation: "Croissance harmonieuse observée.",
    },
    bebe2: {
      morphologieCerebrale: "Symétrie normale",
      colonneVertebrale: "Développement régulier",
      membres: "Activité normale",
      placenta: "Antérieur",
      interpretation: "Norme de développement conforme.",
    },
    bebe3: {
      morphologieCerebrale: "Régulière",
      colonneVertebrale: "Alignement normal",
      membres: "Mobilité active",
      placenta: "Postérieur",
      interpretation: "Progression normale des fœtus.",
    },
    bebe4: {
      morphologieCerebrale: "Normale",
      colonneVertebrale: "Aucune anomalie",
      membres: "Activité satisfaisante",
      placenta: "Latéral droit",
      interpretation: "Bon développement constaté.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Les échographies depuis le début de la grossesse indiquent un développement stable avec toutes les normes respectées par les fœtus.<br>
<span class="rapport">Conduite à tenir</span> : Poursuivre les échographies de routine pour surveiller la croissance collective des fœtus jusqu'à la période prénatale finale, en garantissant ainsi les soins optimums.`,
  },
  "9.2.3": {
    bebe1: {
      morphologieCerebrale: "Forme régulière",
      colonneVertebrale: "Alignement adéquat",
      membres: "Activité satisfaisante",
      placenta: "Positionnement favorable",
      interpretation: "Développement conforme aux attentes.",
    },
    bebe2: {
      morphologieCerebrale: "Développement homogène",
      colonneVertebrale: "Structure correcte",
      membres: "Mobilité normale",
      placenta: "Latéral gauche",
      interpretation: "Progrès de développement sans failles.",
    },
    bebe3: {
      morphologieCerebrale: "Normale",
      colonneVertebrale: "Développement normal",
      membres: "Tonicité normale",
      placenta: "Antérieur",
      interpretation: "Paramètres de croissance normatifs.",
    },
    bebe4: {
      morphologieCerebrale: "Régulière",
      colonneVertebrale: "Alignement adéquat",
      membres: "Activité correcte",
      placenta: "Postérieur",
      interpretation: "Bonne santé prénatale observée.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Le suivi depuis le début de la grossesse confirme une croissance harmonieuse des quatre bébés, tous les indicateurs étant dans les normes attendues.<br>
<span class="rapport">Conduite à tenir</span> : Continuer avec une surveillance prénatale standard, complétée par des échographies régulières pour suivre la progression vers la naissance, afin d'assurer le bien-être des bébés.`,
  },
  "9.3.1": {
    bebe1: {
      morphologieCerebrale: "Symétrique",
      colonneVertebrale: "Alignement normal",
      membres: "Activité normale",
      placenta: "Antérieur",
      interpretation: "Développement normal sans anomalies.",
    },
    bebe2: {
      morphologieCerebrale: "Développement normal",
      colonneVertebrale: "Aucune anomalie",
      membres: "Mobilité active",
      placenta: "Latéral droit",
      interpretation: "Progression saine conforme aux normes.",
    },
    bebe3: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Alignement normal",
      membres: "Tonicité normale",
      placenta: "Postérieur",
      interpretation: "Évolution stable sans complications.",
    },
    bebe4: {
      morphologieCerebrale: "Développement homogène",
      colonneVertebrale: "Structure normale",
      membres: "Activité satisfaisante",
      placenta: "Positionnement favorable",
      interpretation: "Croissance appropriée aux stades prénataux.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Depuis la première échographie, tous les fœtus démontrent un développement positif, chaque examen successif confirmant des normes de croissance attendues sans anomalie.<br>
<span class="rapport">Conduite à tenir</span> : Maintenir les échographies et ressources attendues dans la routine prénatale pour assurer une progression continue jusqu'à la naissance, maintenant la stabilité observée dans ces contrôles.`,
  },
  "9.3.2": {
    bebe1: {
      morphologieCerebrale: "Légère déformation",
      colonneVertebrale: "Structure stable",
      membres: "Mobilité normale",
      placenta: "Latéral gauche",
      interpretation: "Surveillance requise en raison de déformation détectée.",
    },
    bebe2: {
      morphologieCerebrale: "Forme correcte",
      colonneVertebrale: "Alignement adéquat",
      membres: "Activité normale",
      placenta: "Antérieur",
      interpretation: "Croissance normale au niveau morphologique.",
    },
    bebe3: {
      morphologieCerebrale: "Développement conforme",
      colonneVertebrale: "Aucune anomalie",
      membres: "Mobilité normale",
      placenta: "Postérieur",
      interpretation: "Progression fœtale adéquate.",
    },
    bebe4: {
      morphologieCerebrale: "Normale",
      colonneVertebrale: "Développement adéquat",
      membres: "Activité satisfaisante",
      placenta: "Positionnement favorable",
      interpretation: "Bon suivi prénatal observé.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Bébé 1 nécessite une attention supplémentaire pour une déformation légère, bien que les autres fœtus montrent un développement sain.<br>
<span class="rapport">Diagnostic différentiel</span> : La légère déformation cérébrale de Bébé 1 pourrait justifier des investigations approfondies pour exclure des troubles fondamentaux potentiels.<br>
<span class="rapport">Conduite à tenir</span> : Engager une surveillance étroite pour Bébé 1 par échographie approfondie et consultations spécialisées, tout en maintenant la vigilance sur l'évolution normale des fœtus restants.`,
  },
  "9.3.3": {
    bebe1: {
      morphologieCerebrale: "Développement homogène",
      colonneVertebrale: "Alignement normal",
      membres: "Activité correcte",
      placenta: "Antérieur",
      interpretation: "Croissance continue sans anomalies.",
    },
    bebe2: {
      morphologieCerebrale: "Régulière",
      colonneVertebrale: "Structure normale",
      membres: "Mobilité active",
      placenta: "Latéral droit",
      interpretation: "Paramètres de développement conformes aux attentes.",
    },
    bebe3: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Développement normal",
      membres: "Tonicité adéquate",
      placenta: "Postérieur",
      interpretation: "Stabilité prénatale prouvée.",
    },
    bebe4: {
      morphologieCerebrale: "Symétrique",
      colonneVertebrale: "Aucune anomalie",
      membres: "Activité satisfaisante",
      placenta: "Positionnement favorable",
      interpretation: "Progrès harmonieux au cours des étapes prénatales.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Durant la durée de la grossesse prénatale, les quatre fœtus n'ont manifesté aucune complication notée, se développant selon les paramètres projetés.<br>
<span class="rapport">Conduite à tenir</span> : Continuer la surveillance systémique et les services prénataux réguliers pour maintenir des résultats similaires à travers les stades de la grossesse et jusqu'à l'accouchement.`,
  },
  "9.4.1": {
    bebe1: {
      morphologieCerebrale: "Normale",
      colonneVertebrale: "Alignement correct",
      membres: "Mobilité active",
      placenta: "Antérieur",
      interpretation: "Développement conforme aux attentes.",
    },
    bebe2: {
      morphologieCerebrale: "Symétrique",
      colonneVertebrale: "Structure normale",
      membres: "Activité normale",
      placenta: "Latéral gauche",
      interpretation: "Évolution harmonieuse et sans complications.",
    },
    bebe3: {
      morphologieCerebrale: "Développement conforme",
      colonneVertebrale: "Aucune anomalie",
      membres: "Tonicité normale",
      placenta: "Postérieur",
      interpretation: "Normes de croissance respectées.",
    },
    bebe4: {
      morphologieCerebrale: "Légère anomalie détectée",
      colonneVertebrale: "Observations à confirmer",
      membres: "Mobilité limitée",
      placenta: "Latéral droit",
      interpretation: "Anomalie potentielle nécessitant évaluation plus approfondie.",
    },
    conclusion: `<span class="rapport">Conclusion</span> : Depuis la première échographie, les trois premiers fœtus continuent de montrer des signes de bon développement, tandis que Bébé 4 présente quelques anomalies détectées à surveiller.<br><span class="rapport">Diagnostic différentiel</span> : L’anomalie chez Bébé 4 pourrait représenter un risque sous-jacent nécessitant une enquête neurologique et orthopédique approfondie.<br>
<span class="rapport">Conduite à tenir</span> : Suggérer une série d'examens pour mieux comprendre l'état de Bébé 4 et permettre une intervention anticipée si nécessaire. Poursuivre la surveillance standard pour les autres fœtus.`,
  },
  "9.4.2": {
    bebe1: {
      morphologieCerebrale: "Forme régulière",
      colonneVertebrale: "Développement normal",
      membres: "Bonne tonicité",
      placenta: "Latéral droit",
      interpretation: "Développement sain constaté.",
    },
    bebe2: {
      morphologieCerebrale: "Symétrie correcte",
      colonneVertebrale: "Alignement normal",
      membres: "Activité correcte",
      placenta: "Antérieur",
      interpretation: "Paramètres conformes.",
    },
    bebe3: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Aucune anomalie",
      membres: "Activité normale",
      placenta: "Positionnement favorable",
      interpretation: "État prénatal stable et rassurant.",
    },
    bebe4: {
      morphologieCerebrale: "Développement homogène",
      colonneVertebrale: "Alignement adéquat",
      membres: "Tonicité limitée",
      placenta: "Latéral gauche",
      interpretation: "Progrès à surveiller, nécessitant quelques investigations.",
    },
    conclusion: `<span class="rapport">Conclusion</span> : Avec un développement sans incident majeur pour trois bébés, Bébé 4 exige une attention accrue pour certaines anomalies observées.<br><span class="rapport">Diagnostic différentiel</span> : Bébé 4 pourrait souffrir de problèmes musculaires ou structurels qui doivent être suivis pour minimiser les risques.<br><span class="rapport">Conduite à tenir</span> : Des recherches diagnostiques ciblées pour Bébé 4 seront utiles pour prévenir toute complication future, alors que les échographies standard suffisent actuellement pour les autres.`,
  },
  "9.4.3": {
    bebe1: {
      morphologieCerebrale: "Symétrique",
      colonneVertebrale: "Alignement normal",
      membres: "Activité normale",
      placenta: "Antérieur",
      interpretation: "Très bon ajustement aux normes prénatales.",
    },
    bebe2: {
      morphologieCerebrale: "Développement normal",
      colonneVertebrale: "Structure régulière",
      membres: "Mobilité active",
      placenta: "Postérieur",
      interpretation: "Croissance conforme aux attentes médicales.",
    },
    bebe3: {
      morphologieCerebrale: "Régulière",
      colonneVertebrale: "Aucune anomalie",
      membres: "Tonicité correcte",
      placenta: "Latéral gauche",
      interpretation: "Développement sain garanti.",
    },
    bebe4: {
      morphologieCerebrale: "Observations à confirmer",
      colonneVertebrale: "Déviation mineure",
      membres: "Mobilité faible",
      placenta: "Positionnement favorable",
      interpretation: "Signes non rassurants appelant à plus de supervision.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : L'alignement du développement est satisfaisant pour trois bébés, tandis que Bébé 4 montre des alertes potentielles qui méritent un suivi rigoureux.<br><span class="rapport">Diagnostic différentiel</span> : Le suivi de Bébé 4 pourrait nécessiter des tests neurologiques et musculaires supplémentaires pour identifier la nature exacte des deviations possibles.<br><span class="rapport">Conduite à tenir</span> : Continuer à chercher des explications diagnostiques sur les signes d'anomalies de Bébé 4, tout en garantissant que les autres continuent à atteindre des étapes de développement normales.`,
  },
  "9.5.1": {
    bebe1: {
      morphologieCerebrale: "Normale",
      colonneVertebrale: "Structure correcte",
      membres: "Tonicité adéquate",
      placenta: "Latéral gauche",
      interpretation: "Aucun problème détecté.",
    },
    bebe2: {
      morphologieCerebrale: "Développement harmonieux",
      colonneVertebrale: "Aucune anomalie",
      membres: "Mobilité normale",
      placenta: "Antérieur",
      interpretation: "Pas d'anomalies apparentes.",
    },
    bebe3: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Alignement normal",
      membres: "Activité correcte",
      placenta: "Postérieur",
      interpretation: "Croissance conforme aux normes.",
    },
    bebe4: {
      morphologieCerebrale: "Développement limité",
      colonneVertebrale: "Observations à confirmer",
      membres: "Mobilité très faible",
      placenta: "Positionnement favorable",
      interpretation: "Développement limité nécessitant un suivi approfondi.",
    },
    conclusion: `<span class="rapport">Conclusion</span> : Parmi les quatre fœtus, le développement de Bébé 4 nécessite une attention particulière due à des signes de croissance limitée.<br><span class="rapport">Diagnostic différentiel</span> : Le développement limité chez Bébé 4 pourrait indiquer un trouble de croissance ou une anomalie structurelle, nécessitant plus d'investigations.<br><span class="rapport">Conduite à tenir</span> : Des échographies ciblées et un suivi médical spécialisé sont conseillés pour Bébé 4 afin d'anticiper d'éventuelles interventions. Poursuivre les contrôles prénataux standards pour les autres bébés et surveiller leur progression régulière.`,
  },
  "9.5.2": {
    bebe1: {
      morphologieCerebrale: "Développement homogène",
      colonneVertebrale: "Alignement normal",
      membres: "Activité correcte",
      placenta: "Antérieur",
      interpretation: "Stable et conforme.",
    },
    bebe2: {
      morphologieCerebrale: "Régulière",
      colonneVertebrale: "Structure normale",
      membres: "Mobilité active",
      placenta: "Latéral droit",
      interpretation: "Pas d'anomalie identifiée.",
    },
    bebe3: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Aucune anomalie",
      membres: "Tonicité normale",
      placenta: "Postérieur",
      interpretation: "Développement sans particularités.",
    },
    bebe4: {
      morphologieCerebrale: "Observations nécessaires",
      colonneVertebrale: "Légère déviation",
      membres: "Mobilité très limitée",
      placenta: "Latéral gauche",
      interpretation: "Évaluation spécifiquement requise.",
    },
    conclusion: `
<span class="rapport">Conclusion</span> : Les trois premiers bébés atteignent les jalons développementaux attendus, mais Bébé 4 doit être évalué plus en détail.<br>
<span class="rapport">Diagnostic différentiel</span> : Le manque de mobilité chez Bébé 4 pourrait signaler un trouble neuromusculaire qui nécessite des examens supplémentaires.<br>
<span class="rapport">Conduite à tenir</span> : Impliquer des spécialistes pour évaluer Bébé 4, et poursuivre les échographies de routine pour s'assurer du bien-être des trois autres. Renégocier les soins prénataux si nécessaire.`,
  },
  "9.5.3": {
    bebe1: {
      morphologieCerebrale: "Symétrique",
      colonneVertebrale: "Alignement normal",
      membres: "Activité normale",
      placenta: "Antérieur",
      interpretation: "Rien à signaler.",
    },
    bebe2: {
      morphologieCerebrale: "Développement normal",
      colonneVertebrale: "Aucune anomalie",
      membres: "Mobilité active",
      placenta: "Latéral gauche",
      interpretation: "Sans complications.",
    },
    bebe3: {
      morphologieCerebrale: "Conforme aux attentes",
      colonneVertebrale: "Structure normale",
      membres: "Tonicité correcte",
      placenta: "Postérieur",
      interpretation: "Aucun problème détecté.",
    },
    bebe4: {
      morphologieCerebrale: "Anomalie détectée",
      colonneVertebrale: "Observations à confirmer",
      membres: "Mobilité très limitée",
      placenta: "Positionnement favorable",
      interpretation: "Présence d'anomalies nécessitant des examens approfondis.",
    },
    conclusion: `<span class="rapport">Conclusion</span> : Alors que trois des fœtus maintiennent un développement normal, Bébé 4 présente des anomalies qui nécessitent une évaluation attentive.<br>
<span class="rapport">Diagnostic différentiel</span> : Les anomalies chez Bébé 4 peuvent indiquer un développement atypique nécessitant une intervention potentielle.<br>
<span class="rapport">Conduite à tenir</span> : Conduire des enquêtes cliniques approfondies sur Bébé 4. Continuer un soutien prénatal constant et des contrôles réguliers pour les autres bébés avec des visites échographiques régulières.`,
  },
};
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
    evolutionParagraph.innerHTML = `Evolution n°<span class="important">${selectedSubCase}</span> :<br>${selectedData.conclusion}`;
  } else {
    console.log(`Aucune conclusion trouvée pour le sous-cas ${selectedSubCase}.`);
  }

  return selectedData;
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
//TODO: Placer correctement le paragraphe de la conclusion
//TODO: Ajouter la détermination du sexe du fœtus
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
  hideElements(["thirdMonthClose", "thirdMonthResult", "thirdMonthEvolution"]); // Cela masque les deux éléments
  document.getElementById("thirdMonthClose").classList.add("hidden"); // Ajoutez la classe hidden à l'icône de fermeture
});
document.getElementById("fifthMonthClose").addEventListener("click", function () {
  hideElements(["fifthMonthClose", "fifthMonthResult", "fifthMonthEvolution"]); // Cela masque les deux éléments
  document.getElementById("fifthMonthClose").classList.add("hidden"); // Ajoutez la classe hidden à l'icône de fermeture
});
//? Masquer la section au clic sur la croix <--
