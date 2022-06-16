import { Sprite } from "@amcharts/amcharts4/core";
import { LineSeries } from "@amcharts/amcharts4/charts";
import { ScatterPlotTooltipProps } from "./interfaces";
import { ScatterPlotLabelFormatCallback } from "../../../interfaces";
/**
 * Initializes the tooltip associated to the markers on a scatter plot
 * @param props.marker The marker template on which to add the tooltip adapter
 * @param props.series The Series parent of the marker
 * @param props.tooltipFormatter A callback function passed down by the consumer to format the tooltip as they want
 */
export declare function initializeScatterPlotTooltip(props: {
    marker: Sprite;
    series: LineSeries;
    tooltipFormatter?: ScatterPlotLabelFormatCallback;
}): void;
/**
 * Updates/initializes the tooltip for a Sprite marker in Scatter Plot.
 * @param props
 */
export declare function updateScatterPlotTooltip(props: ScatterPlotTooltipProps): void;
