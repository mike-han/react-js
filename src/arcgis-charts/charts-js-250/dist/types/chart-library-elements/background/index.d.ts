import { XYChart, PieChart, GaugeChart } from "@amcharts/amcharts4/charts";
import { Color } from "@esri/arcgis-rest-types";
export declare function initializeChartBackground(chart: XYChart | PieChart | GaugeChart): void;
/**
 * Updates the chart background color.
 * @param chart
 * @param background
 */
export declare function updateChartBackground(chart: XYChart | PieChart | GaugeChart, background?: Color): void;
