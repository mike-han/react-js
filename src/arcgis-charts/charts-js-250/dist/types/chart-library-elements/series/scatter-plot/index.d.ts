import { LineSeries } from "@amcharts/amcharts4/charts";
import { UpdateScatterPlotProps, InitializeScatterPlotProps } from "./interfaces";
/**
 * Function initializing the chart series. The data is set by `updateScatterPlotSeries`
 * @param props
 */
export declare function initializeScatterPlotSeries(props: InitializeScatterPlotProps): LineSeries[];
/**
 * Function updating the chart series and assigning its data.
 * @param props
 */
export declare function updateScatterPlotSeries(props: UpdateScatterPlotProps): Promise<void>;
