import { LineSeries } from "@amcharts/amcharts4/charts";
import { InitializeLineSeriesProps, UpdateLineSeriesProps } from "./interfaces";
/**
 * Function initializing the line chart series. Set only the properties that are not going to be modified
 * through a chart update. See updateLineChartSeries for other properties.
 * @param props
 */
export declare function initializeLineChartSeries(props: InitializeLineSeriesProps): LineSeries;
/**
 * Function updating a line series properties without having to recreate the whole series.
 * @param props
 */
export declare function updateLineChartSeries(props: UpdateLineSeriesProps): Promise<void>;
