import React from "react";
import { useCreateGraph } from "../../customHooks/useCreateGraph";
import { getGlobalScore, scoreCalculator } from "../../utils/scoreCalculator";

const ChartElement = ({ datas, chartType = "doughnut" }) => {
  const scores = scoreCalculator(datas);
  const globalScore = getGlobalScore(datas);

  // on prepare l'id de l'element canvas ou va se faire injecter le graph
  // de sorte a pouvoir ajouter l'id utilisateur au cas ou...
  const id = `canvas-${chartType}`;

  // par soucis de clarté on utilise un hook custom qui va se charger
  // de créer le graph et de l'injecter au dom
  useCreateGraph(scores, id, chartType);

  return (
    datas && (
      <div>
        <canvas id={id} width="400" height="400"></canvas>
        {/* <ul style={{ backgroundColor: "black" }}>
          {scores.map(({ name, color, score }, index) => (
            <li style={{ color: color[index] }}>
              {name} = {score} %
            </li>
          ))}
        </ul> */}
        <div>{`Score Global : ${globalScore} %`}</div>
      </div>
    )
  );
};

export default ChartElement;
