export const scoreCalculator = (datas) => {
  // ici on recupére les clés de la data
  const keys = Object.keys(datas);

  // ici on map les clés de l'objet datas (work, social, leisure, health)
  // pour en ressortir l'array de data qui correspond à cette clé,

  // ensuite on map la data du tableau ou l'on multiplie la valeur du choix
  // par la pondération du resultat
  // une fois ce resultat obtenu on le divise par
  // la pondération maximale du resultat
  // => (valeurChoix * ponderation) / pondération maximale
  // on obtient ainsi un résultat par réponse ex
  // work[0] => 0 * 3 / 24  = 0
  // work[1] => 1 * 6 / 24 = 0.25
  // etc ...

  // pour finir on reduit ces resultats en les additionnants
  // afin d'obtenir le score de la clé qu'on arrondit pour obtenir un chiffre rond
  // ex : work => 0 + 0.25 + 0.16 + 0 + 0.34 = 0.75 * 100
  // (pour obtrenir un resultat sur 100%)

  // ce resultat corréspond a 75% de reussite pour cette clé

  // ressource = https://sciencing.com/calculate-class-grade-7379797.html

  const computingValues = keys.map((key) => ({
    name: key,
    color: ["red", "blue", "yellow", "purple", "lightgreen"],
    score: datas[key]
      .map(
        (data) =>
          (data.valeurChoix * data.ponderation) /
          datas[key].reduce((acc, amt) => acc + amt.ponderation, 0)
      )
      .reduce((acc, amt) => acc + amt * 100, 0)
      .toFixed(0),
  }));

  return computingValues;
};

// ici on calcule le score global de l'utilisateur
// en reduisant les scores de l'utilisateur divisé par le nombre de clés

export const getGlobalScore = (datas) => {
  const scores = scoreCalculator(datas);
  const globalScore = scores
    .reduce((acc, amt) => acc + amt.score / scores.length, 0)
    .toFixed(0);
  return globalScore;
};
