import { WebChartScatterPlotDataItem } from "@arcgis/charts-spec";
import { FetchScatterPlotDataProps } from "./interfaces";
/**
 * Creates a WebChartScatterPlotDataItem object with default values for r2 and trendLinePoints.
 * Those values will be calculated later by the regression plugin.
 *
 * Note: This function will be used in the workflows for data source of type Feature Layer and Inline Raw.
 * @param props
 */
export declare function fetchFinishedScatterPlotData(props: FetchScatterPlotDataProps): Promise<WebChartScatterPlotDataItem>;
