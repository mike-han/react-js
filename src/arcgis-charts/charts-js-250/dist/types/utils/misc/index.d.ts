import { WebChart, WebChartSeries, WebChartBarChartSeries, WebChartLineChartSeries } from "@arcgis/charts-spec";
import { AbortControllerKeyType } from "@arcgis/charts-shared-utils";
import { XYSeries, LineSeries, XYChart, PieChart, GaugeChart, GaugeChartDataItem } from "@amcharts/amcharts4/charts";
import { List, Sprite, Color as AmChartsColor, Optional, Pattern, LinearGradient, RadialGradient } from "@amcharts/amcharts4/core";
import { Color } from "@esri/arcgis-rest-types";
import { DataUpdateNeededDetails } from "./interfaces";
import { ChartOptions } from "../../interfaces";
/**
 * Toggles the visibility of an element via `.show()`/`.hide()` and `visible` property.
 * The [reason](https://amcharts.zendesk.com/hc/en-us/requests/52191) for using `.show()`/`.hide()` approach.
 * Observing some misbehavior if just `.show()`/`.hide()` is used, so using `visible` along with.
 * @param element
 * @param visible
 */
export declare function showElement(element: Sprite, visible?: boolean): void;
/**
 * Indicates whether a series is rotated
 * @param series
 */
export declare function whetherRotated(series: WebChartSeries): boolean;
/**
 * Returns the field to be used by the x-axis. Gets the information within the given series.
 * @param series
 */
export declare function getXAxisField(series: WebChartSeries): string;
/**
 * Returns true if the rotated property changed since the previous update.
 * @param oldSeries
 * @param newSeries
 */
export declare function hasRotationChanged(oldSeries: WebChart["series"], newSeries: WebChart["series"]): boolean;
/**
 * Returns for each axis a boolean indicating if the labels behavior property changed since the previous update.
 * The first index contains the result for the horizontal axis (whether it's the x or y axis) and the second index
 * the result for the vertical axis.
 * @param props.oldConfig The config from the previous update
 * @param props.newConfig The config from the current update
 * @param props.dataUpdateNeeded Indicates whether an update is needed
 * @param props.rotationChanged Indicates whether a change of rotation is needed
 */
export declare function hasAxisLabelsBehaviorChanged(props: {
    oldConfig: WebChart;
    newConfig: WebChart;
    dataUpdateNeeded: boolean;
    rotationChanged: boolean;
}): [boolean, boolean];
/**
 * Function saying if a data update is needed. We compare different properties from the former config and the new one
 * in order to decide if the update is needed.
 * @param props
 */
export declare function isDataUpdateNeeded(props: {
    forceDataUpdate?: boolean;
    oldConfig: WebChart;
    newConfig: WebChart;
    options?: ChartOptions;
    chart: XYChart | PieChart | GaugeChart;
}): {
    dataUpdateNeeded: boolean;
    updateNeededDetails: DataUpdateNeededDetails;
};
/**
 * Function used on line charts using time binning.
 * Indicates whether resetting the previously fetched binned data is necessary.
 * It is necessary when the time interval unit or any common data property changes.
 * @param dataUpdateNeededDetails
 */
export declare function isBinnedServerDataResetNeeded(dataUpdateNeededDetails: DataUpdateNeededDetails): boolean;
/**
 * After comparing two arrays containing the same number of series, returns the potential changes
 * in the series order among their array.
 * Ex: if oldSeries contains [0, 1 ,2] and newSeries [1, 0, 2], the function returns [[0,1]]
 * @param oldSeries
 * @param newSeries
 */
export declare function getPositionChanges<T extends WebChartBarChartSeries[] | WebChartLineChartSeries[]>(oldSeries: T, newSeries: T): number[][];
/**
 * Function swapping the series following the position changes array.
 * Ignores individually the swap request if the indexes are invalid.
 * @param series
 * @param positionChanges
 */
export declare function swapSeries(series: List<XYSeries>, positionChanges: number[][]): void;
/**
 * Converts an amCharts color to a JSAPI color array.
 * The function will only consider a Color, not a Pattern | LinearGradient | RadialGradient
 * @param fill
 * @param fillOpacity
 */
export declare function amChartsColorToEsriColor(fill?: Optional<AmChartsColor | Pattern | LinearGradient | RadialGradient>, fillOpacity?: number): Color | undefined;
/**
 * Converts esriColor to AmCharts color
 * The function will consider a Color as an input
 * @param input
 */
export declare function esriColorToAmChartsColor(input?: Color | Readonly<Color>): AmChartsColor;
/**
 * Finds the scatter plot `Bullet` marker from a `LineSeries`
 * @param series
 */
export declare function findBulletMarker(series: LineSeries): Sprite | undefined;
/**
 * Compares two colors (array of 4 numbers) and indicates if they are equal
 * @param color1
 * @param color2
 */
export declare function areColorsEqual(color1?: Color, color2?: Color): boolean;
/**
 * Returns a unique ID associated to a chart
 * @param chart
 */
export declare function getChartUniqueInternalID(chart: XYChart | PieChart | GaugeChartDataItem): AbortControllerKeyType;
/**
 * If found, returns the `displayLabel` config field.
 * The display label is a special field to be potentially used on the x-axis label, the x-axis tooltip and the series tooltip.
 * @param config
 * @returns
 */
export declare function getDisplayLabelFromConfigFields(config: WebChart): string | undefined;
/**
 * Indicates whether an amCharts element is still available (non null, non undefined, non disposed)
 * @param element
 */
export declare function isElementValid(element: Sprite): boolean;
/**
 * Indicates whether an element is visible.
 * @param element
 */
export declare function isElementVisible(element: Sprite): boolean;
/**
 * Determines if a Sprite (data point) is outside of the chart container.
 * Following AmCharts tutorial: https://www.amcharts.com/docs/v4/concepts/bullets/#Hiding_unmasked_bullets
 * @param element The target element (data point) to check for.
 * @param chart The chart of which container is used to check against.
 */
export declare function isElementOutsideOfPlotContainer(element: Sprite, chart: XYChart): boolean;
