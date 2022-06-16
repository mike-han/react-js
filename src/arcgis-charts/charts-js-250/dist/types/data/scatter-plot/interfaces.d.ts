import { WebChartScatterPlotSeries } from "@arcgis/charts-spec";
import { FetchDataProps } from "../../interfaces";
export declare const seedString = "arcgis-charts-scatter-seed";
export interface FetchScatterPlotDataProps extends FetchDataProps {
    series: WebChartScatterPlotSeries;
    statsMap?: Map<string, number>;
    sortData?: boolean;
    calculateTrendline?: boolean;
}
