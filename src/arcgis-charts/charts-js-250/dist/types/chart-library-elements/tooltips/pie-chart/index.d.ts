import { PieSeries } from "@amcharts/amcharts4/charts";
import { WebChartPieChartSeries } from "@arcgis/charts-spec";
import { PieChartLabelFormatCallback } from "../../../interfaces";
/**
 * Initializes the tooltip associated to the slices on a pie chart
 * @param pieSeries The series containing the slices on which to add a tooltip text adapter
 * @param tooltipFormatter A callback function passed down by the consumer to format the label as they want
 */
export declare function initializePieChartTooltip(pieSeries: PieSeries, tooltipFormatter?: PieChartLabelFormatCallback): void;
/**
 * Handles how the tooltip is rendered on a pie chart.
 * Uses from the configuration:
 *   - the numeric value format defined at the series level
 *   - the percentage value format defined at the series level
 * If a format callback is passed, we'll use it over the default tooltip formatting.
 * @param props.pieSeries The series containing the data label
 * @param props.seriesConfig The config for the series
 * @param props.tooltipFormatter A callback function passed down by the consumer to format the label as they want
 */
export declare function updatePieChartTooltip(props: {
    pieSeries: PieSeries;
    seriesConfig: WebChartPieChartSeries;
    tooltipFormatter?: PieChartLabelFormatCallback;
}): void;
