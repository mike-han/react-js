import { PieSeries, Series, XYSeries } from "@amcharts/amcharts4/charts";
import { WebChartTimeIntervalUnits, WebChartHistogramSeries, WebChartTypes } from "@arcgis/charts-spec";
/**
 * Returns true if dataTransformationType changed
 * @param oldSeries
 * @param newSeries
 */
export declare function hasTransformationTypeChanged(oldSeries: WebChartHistogramSeries[], newSeries: WebChartHistogramSeries[]): boolean;
/**
 * Returns true if a specific prop for Histogram requiring a data update has been changed
 * @param oldSeries
 * @param newSeries
 */
export declare function hasBinCountChanged(oldSeries: WebChartHistogramSeries[], newSeries: WebChartHistogramSeries[]): boolean;
/**
 * Gets x-axis field name. Honored is rotated
 * @param series
 */
export declare function getXFieldFromSeriesDataFields(series: XYSeries | PieSeries): string;
/**
 * Gets y-axis field name. Honored is rotated.
 * @param series
 */
export declare function getYFieldFromSeriesDataFields(series: XYSeries | PieSeries): string;
/**
 * Gets series type series from chart dummy data config.
 * @param series
 */
export declare function getSeriesTypeFromAMChartsSeries(series: Series, index?: number): WebChartTypes | undefined;
export declare function isTimeIntervalInfoComplete(timeIntervalUnits?: WebChartTimeIntervalUnits, timeIntervalSize?: number): boolean;
