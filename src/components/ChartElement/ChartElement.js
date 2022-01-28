import React from "react";
import { useCreateGraph } from "../../customHooks/useCreateGraph";
import { datas } from "../../data";
import { getGlobalScore, scoreCalculator } from "../../utils/scoreCalculator";

const ChartElement = ({ chartType = "doughnut" }) => {
  const scores = scoreCalculator(datas);
  const globalScore = getGlobalScore(datas);

  // par soucis de clarté on utilise un hook custom qui va se charger
  // de créer le graph et de l'injecter au dom
  useCreateGraph(scores, chartType);
  return (
    datas && (
      <div>
        <canvas id={`canvas-${chartType}`} width="400" height="400"></canvas>
        <div>{`Score Global : ${globalScore} %`}</div>
      </div>
    )
  );
};

export default ChartElement;
