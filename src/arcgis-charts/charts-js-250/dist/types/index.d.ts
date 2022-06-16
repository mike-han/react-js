import { QueryObject } from "@arcgis/charts-shared-utils";
import { WebChart, WebGaugeChart, LegendItemVisibility } from "@arcgis/charts-spec";
import { ChartInstance, ChartResult, CreateChartProps, NotifyOptions, ChartOptions, GlobalOptions, PieChartLabelFormatCallback, HistogramLabelFormatCallback, ScatterPlotLabelFormatCallback, BarAndLineTooltipFormatCallback, BarAndLineDataLabelFormatCallback } from "./interfaces";
import { ChartEvents } from "./utils/events/interfaces";
export declare function createXYChart(props: CreateChartProps): Promise<ChartResult>;
/**
 * Creates and returns an instance of PieChart
 * @param props
 */
export declare function createPieChart(props: {
    chartContainer?: HTMLElement;
    chartConfig?: WebChart;
    queryObject?: QueryObject;
    options?: ChartOptions;
    globalOptions?: GlobalOptions;
}): Promise<ChartResult>;
/**
 * Creates and returns n instance of GaugeChart
 * @param props
 */
export declare function createGaugeChart(props: {
    chartContainer?: HTMLElement;
    chartConfig?: WebGaugeChart;
    queryObject?: QueryObject;
    options?: ChartOptions;
    globalOptions?: GlobalOptions;
}): Promise<ChartResult>;
/**
 * Creates a chart and returns an object of type `ChartInstance` containing a set of functions
 * in relation with the created chart.
 * @param props
 */
export declare function createChart(createChartProps: CreateChartProps): Promise<ChartInstance>;
export { ChartEvents };
export type { ChartInstance, LegendItemVisibility, NotifyOptions, ChartOptions, PieChartLabelFormatCallback, HistogramLabelFormatCallback, ScatterPlotLabelFormatCallback, BarAndLineTooltipFormatCallback, BarAndLineDataLabelFormatCallback };
