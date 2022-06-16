import { LineSeries, ColumnSeries } from "@amcharts/amcharts4/charts";
import { UpdateHistogramSeriesProps, InitializeHistogramSeriesProps } from "./interfaces";
/**
 * Initializes the chart series
 * @param props
 */
export declare function initializeHistogramSeries(props: InitializeHistogramSeriesProps): (LineSeries | ColumnSeries)[];
/**
 * Updates the chart series
 * @param props
 */
export declare function updateHistogramSeries(props: UpdateHistogramSeriesProps): Promise<void>;
