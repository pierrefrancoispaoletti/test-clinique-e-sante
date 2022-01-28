import React from "react";
import ChartElement from "./components/ChartElement/ChartElement";

const App = () => {
  // la props chartType sert à choisir le type de graph qu'on souhaire afficher
  // par defaut doughnut
  return (
    <div>
      <ChartElement />
      <ChartElement chartType="pie" />
      <ChartElement chartType="bar" />
      <ChartElement chartType="radar" />
    </div>
  );
};

export default App;
