import { ColumnSeries, GaugeChart, LineSeries, PieChart, Series, XYChart } from "@amcharts/amcharts4/charts";
import { Sprite } from "@amcharts/amcharts4/core";
import { BarAndLineTooltipFormatCallback } from "../../../interfaces";
import { SeriesDummyData } from "../../../utils/dummy-data/interfaces";
import { BarAndLineChartTooltipProps } from "../interfaces";
/**
 * Returns a colon string with "strong direction" based on the locale's `rtl` value. This is useful
 * for breaking an RTL string at the colon predictably.
 * See https://www.w3.org/International/articles/inline-bidi-markup/uba-basics for details.
 */
export declare function getDirectionallyStrongColon(): string;
/**
 * Returns the primary text if not empty, the default text otherwise
 * @param defaultText
 * @param primaryText
 */
export declare function getTooltipHeadingText(defaultText: string, primaryText?: string): string;
/**
 * Formats and returns a value based on the formatter stored in the series dummy data property.
 * If no formatter is found, the stringified value is returned.
 * @param props
 */
export declare function formatTooltipValue(props: {
    series: Series;
    callbackName: keyof SeriesDummyData;
    value: number | Date;
}): string;
/**
 * Creates a new tooltip if undefined
 * Sets max width for for lengthy tooltip content
 * @param element
 */
export declare function initializeChartToolTip(element: XYChart | PieChart | GaugeChart): void;
/**
 * Initializes the tooltip associated to the bars or markers on a bar chart or line chart
 * @param props.element The element on which to add the tooltip adapter
 * @param props.series The Series parent of the element
 * @param props.tooltipFormatter A callback function passed down by the consumer to format the tooltip as they want
 */
export declare function initializeBarAndLineCharTooltip(props: {
    element: Sprite;
    series: ColumnSeries | LineSeries;
    tooltipFormatter?: BarAndLineTooltipFormatCallback;
}): void;
/**
 * Update bar and line chart tooltip with latest information provided through an update
 * @param props
 */
export declare function updateBarAndLineChartTooltip(props: BarAndLineChartTooltipProps): void;
