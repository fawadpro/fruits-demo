import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import { StaticData } from "../../utils/static-data";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Statistics = ({ nutrition }) => {
  let chartConfigs = StaticData.renderNutritionalProperty(nutrition);
  return <ReactFC {...chartConfigs} />;
};

export default Statistics;
