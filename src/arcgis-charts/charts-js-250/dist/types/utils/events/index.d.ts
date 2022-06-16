import { WebChartDataTypes, CalculatedMinMaxBoundsPayload, LegendItemVisibility } from "@arcgis/charts-spec";
import { ValidationStatus, DataWarningObject, SelectionData, SeriesSymbolsMap } from "@arcgis/charts-shared-utils";
/**
 * Sending an event carrying the chart processed data at any data update.
 * Contains the statistics for Histogram and Scatter Plot
 * @param data
 * @param htmlContainer
 */
export declare function notifyDataProcessed(data?: WebChartDataTypes, htmlContainer?: HTMLElement): void;
/**
 * Sending an event indicating a legend item visibility has changed
 * @param data
 * @param htmlContainer
 */
export declare function notifyLegendItemVisibilityChanged(data: LegendItemVisibility, htmlContainer?: HTMLElement): void;
/**
 * Sending an event indicating that the chart is updated with the new config
 * @param data
 * @param htmlContainer
 */
export declare function notifyChartUpdated(data: ValidationStatus, htmlContainer?: HTMLElement): void;
/**
 * Sending an event indicating all the chart's series (non-overlays) are [`ready`](https://www.amcharts.com/docs/v4/reference/series/#ready_event)
 * @param htmlContainer
 */
export declare function notifyRenderingCompleted(htmlContainer?: HTMLElement): void;
/**
 * Sending selectionEvent on range select
 * @param data
 * @param htmlContainer
 */
export declare function notifySelectionCompleted(data: SelectionData, htmlContainer?: HTMLElement): void;
/**
 * Sending an event to notify too many elements have been selected on the chart
 * @param htmlContainer
 */
export declare function notifyTooManySelectedElements(htmlContainer?: HTMLElement): void;
export declare function notifySeriesColorsChange(data?: SeriesSymbolsMap, htmlContainer?: HTMLElement): void;
/**
 * Sending an event containing the chart' axes min and max
 * @param data
 * @param htmlContainer
 */
export declare function notifyAxesMinMaxChange(data?: CalculatedMinMaxBoundsPayload[], htmlContainer?: HTMLElement): void;
/**
 * Sending an event containing info on how the data is bad
 * @param data
 * @param htmlContainer
 */
export declare function notifyBadDataRaise(data?: DataWarningObject, htmlContainer?: HTMLElement): void;
