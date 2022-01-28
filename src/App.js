import React from "react";
import ChartElement from "./components/ChartElement/ChartElement";
import { datas } from "./data";

const App = () => {
  // la props chartType sert à choisir le type de graph qu'on souhaire afficher
  // par defaut doughnut
  return (
    <div>
      <ChartElement datas={datas} />
      <ChartElement datas={datas} chartType="pie" />
      <ChartElement datas={datas} chartType="bar" />
      <ChartElement datas={datas} chartType="radar" />
    </div>
  );
};

export default App;
