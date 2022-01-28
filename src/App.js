import React from "react";
import ChartElement from "./components/ChartElement/ChartElement";

const App = () => {
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
