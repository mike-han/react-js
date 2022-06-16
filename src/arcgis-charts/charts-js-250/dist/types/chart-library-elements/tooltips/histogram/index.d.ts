import { ColumnSeries } from "@amcharts/amcharts4/charts";
import { HistogramTooltipProps } from "./interfaces";
import { HistogramLabelFormatCallback } from "../../../interfaces";
/**
 * Initializes the tooltip associated to the columns on a histogram
 * @param series The Series containing the columns template on which to add the tooltip text adapter
 * @param tooltipFormatter A callback function passed down by the consumer to format the tooltip as they want
 */
export declare function initializeHistogramTooltip(series: ColumnSeries, tooltipFormatter?: HistogramLabelFormatCallback): void;
/**
 * Updates/initializes a tooltip for a column. Will display different information according to the chart type.
 * @param props
 */
export declare function updateHistogramTooltip(props: HistogramTooltipProps): void;
