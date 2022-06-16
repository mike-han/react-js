import { XYChart, PieChart } from "@amcharts/amcharts4/charts";
import { WebChartDataItem, WebChartDataSources } from "@arcgis/charts-spec";
import { QueryObject } from "@arcgis/charts-shared-utils";
import { ChartOptions } from "../interfaces";
/**
 * Add a listener on the chart for range and hit selection.
 * Add an event listener on the chart's event "up".
 * @param chart
 */
export declare function addRangeSelectionOnChart(chart: XYChart): void;
/**
 * Add an event listener on Hit and Double Hit on the chart.
 * It handles the ctrl/cmd key to select multiple elements.
 * @param chart
 */
export declare function addHitSelectionOnChart(chart: XYChart): void;
/**
 * Inverses all the selected elements on a chart
 * @param chart
 */
export declare function switchChartSelection(chart: XYChart | PieChart): Promise<void>;
/**
 * Disables all selection features on a chart and the cursor
 * @param chart
 */
export declare function removeSelectionEvents(chart: XYChart | PieChart): void;
/**
 * Enables all selection features on a chart and the cursor
 * @param chart
 */
export declare function addSelectionEvents(chart: XYChart | PieChart): void;
export declare function filterDataBySelection(props: {
    chart?: XYChart | PieChart;
    options?: ChartOptions;
    dataSource: WebChartDataSources;
    queryObject?: QueryObject;
}): Promise<{
    filterQuery: string | undefined;
    filteredData: WebChartDataItem[];
}>;
