//* Dictionnaire des résultats d'échographie 1er mois
const firstMonthCaseOptions = {
  1: ["1.1", "1.2", "1.3", "1.4"],
  2: ["2.1", "2.2", "2.3"],
  3: ["3.1", "3.2"],
  4: ["4.1", "4.2", "4.3", "4.4", "4.5"],
  5: ["5.1", "5.2"],
  6: ["6.1", "6.2"],
  7: ["7.1"],
  8: ["8.1", "8.2", "8.3", "8.4", "8.5"],
  9: ["9.1", "9.2", "9.3", "9.4", "9.5"],
  10: ["10.1"],
};

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
