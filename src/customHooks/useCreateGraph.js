import Chart from "chart.js/auto";
import { useEffect } from "react";

export const useCreateGraph = (scores, elementId, chartType) => {
  useEffect(() => {
    // ici on prépare les variables intermediaires necessaires au graph
    // en les extrayant des scores utilisateurs
    const labels = scores.map(({ name }) => name);
    const backgroundColor = scores.map(({ color }, index) => color[index]);
    const data = scores.map(({ score }) => score);
    // ici on cible l'element canvas necessaire pour injecter le grahique
    const canvas = document.getElementById(elementId).getContext("2d");

    // ici on crée le graphique en recupérant les valeurs necessaires
    new Chart(canvas, {
      type: chartType,
      data: {
        labels,
        datasets: [
          {
            label: "Resultats",
            backgroundColor,
            borderColor: "black",
            data,
          },
        ],
      },
    });
  }, [chartType, elementId, scores]);
};
