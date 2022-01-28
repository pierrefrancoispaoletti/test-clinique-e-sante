import Chart from "chart.js/auto";
import React, { useEffect } from "react";
import { datas } from "../../data";
import { getGlobalScore, scoreCalculator } from "../../utils/scoreCalculator";

const ChartElement = ({ chartType = "doughnut" }) => {
  const scores = scoreCalculator(datas);
  const globalScore = getGlobalScore(datas);

  // ici on prépare les variables intermediaires necessaires au graph
  // en les extrayant des scores utilisateurs
  const labels = scores.map(({ name }) => name);
  const backgroundColor = scores.map(({ color }, index) => color[index]);
  const data = scores.map(({ score }) => score);

  useEffect(() => {
    // ici on cible l'element canvas necessaire pour injecter le grahique
    const canvas = document
      .getElementById(`canvas-${chartType}`)
      .getContext("2d");

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
  });
  return (
    <div>
      <canvas id={`canvas-${chartType}`} width="400" height="400"></canvas>
      <div>{`Score Global : ${globalScore} %`}</div>
    </div>
  );
};

export default ChartElement;
