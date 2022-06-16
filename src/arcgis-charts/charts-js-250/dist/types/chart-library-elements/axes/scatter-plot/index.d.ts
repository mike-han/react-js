import { XYChart } from "@amcharts/amcharts4/charts";
import { WebChartAxis } from "@arcgis/charts-spec";
export declare function initializeScatterPlotAxes(chart: XYChart, axesTypes: [WebChartAxis["valueFormat"], WebChartAxis["valueFormat"]]): void;
export declare function updateScatterPlotAxes(props: {
    chart: XYChart;
    axes: [WebChartAxis, WebChartAxis];
    axisLabelsBehaviorChanged?: [boolean, boolean];
}): void;
