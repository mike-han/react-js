import { PieChart, XYChart } from "@amcharts/amcharts4/charts";
import { WebChart, WebChartBin, WebChartDataItem, WebChartDataTransformations, WebChartDataTypes, WebChartTypes } from "@arcgis/charts-spec";
import { SortWebChartDataItemsProps } from "./interfaces";
/**
 * Checks in the data context if some extra values has been stored.
 * - `originalCategoryValue` is used for the non-aggregated bar charts in order to handle the duplicated
 *   category names. In that case the categories are replaced by a unique key, different from the original category name.
 * - `originalDateValue` is used for storing the original non formatted category when it's a date
 * @param props
 */
export declare function getXAxisValueFromContext(props: {
    value: string | number | Date;
    dataContext?: WebChartDataItem;
    specificField?: string;
}): string | number | Date;
/**
 * Sorting an array WebChartDataItem following the orderByFields instructions.
 * @param props
 */
export declare function sortWebChartDataItems(props: SortWebChartDataItemsProps): void;
/**
 * Before sending the event payload containing the data, we need to revert some changes done to process the charts:
 * - removing the formatted date used specially for the queries
 * - switching back the values of the modified dates/categories in the case of a non-aggregated bar or line chart
 * @param modifiedData
 * @param series
 */
export declare function revertNonAggregatedDataset(modifiedData: WebChartDataTypes, series: WebChart["series"]): WebChartDataTypes;
/**
 * A function to determine whether the scatter plot is aggregated.
 * It can use a map of statistics containing the number of points (computed from the data side) or
 * a data context object usually stored within each marker.
 * @param props
 */
export declare function isScatterPlotAggregated(props: {
    statsMap?: Map<string, number>;
    dataContext?: WebChartDataItem;
}): boolean;
/**
 * A function to determine whether a chart is aggregated.
 * Supports scatter plot, bar chart and pie chart. Defaults to true for the other types of chart.
 * @param props
 */
export declare function isChartAggregated(props: {
    dataContext?: WebChartDataItem | WebChartBin;
    chart: XYChart | PieChart;
}): boolean;
/**
 * From fetched data (type: WebChartDataTypes) returns the part containing the data that
 * is to be assigned to the chart (WebChartDataItem[] | WebChartBin[])
 * @param props.fetchedData
 * @param props.seriesType
 */
export declare function extractChartDataFromFetchedData(props: {
    seriesType?: WebChartTypes;
    fetchedData?: WebChartDataTypes;
}): WebChartDataItem[] | WebChartBin[] | undefined;
/**
 * Converts the field to have the transform functions applied in where clause.
 * Use by histogram.
 * @param xAxisField
 * @param type
 */
export declare function getTransformedQuery(xAxisField: string, type?: WebChartDataTransformations): string;
/**
 * Transform a date into a format that can be used for querying.
 * Ex:
 *   - 1629862814560 => "8/25/2021 3:40:14 AM"
 *   - new Date(2005, 5, 5, 5, 5, 5) => "6/5/2005 12:05:05 PM"
 * @param date
 * @returns
 */
export declare function transformDateToQueryFormat(date: Date | number): number | string;
/**
 * Returns a list containing the visible series id
 * @param chart The chart containing the series
 */
export declare function getVisibleSeriesIDs(chart?: XYChart | PieChart): string[];
/**
 * Construct an array of WebChartDataItem using every key/value pairs from the input data (of type WebChartDataItem).
 *
 * Currently only Pie chart uses this function.
 * @param data
 */
export declare function convertMultipleNumericFieldsData(data: WebChartDataItem): WebChartDataItem[];
