import { PieSeries } from "@amcharts/amcharts4/charts";
import { WebChartPieChartSeries } from "@arcgis/charts-spec";
import { UpdatePieChartProps } from "../interfaces";
/**
 * Indicates whether the data context is associated to a group slice.
 * The core of the function is dependant of the sliceGrouper plugin implementation
 * and might need to be adapter if it evolves.
 * @param dataContext The data context from a slice or label
 */
export declare function isElementFromGroupSlice(dataContext?: Object): boolean;
/**
 * Indicates whether an update is necessary on the slice grouper.
 * It happens if the threshold or group name is to be updated.
 * The updates related to data changes are handled at a higher level.
 * @param pieSeries The pie series containing the slices to group
 * @param seriesConfig The config containing the information about how to perform the grouping
 * @returns A value indicating whether the slice grouper needs to be updated
 */
export declare function isSliceGrouperUpdateNeeded(pieSeries: PieSeries, seriesConfig: WebChartPieChartSeries): boolean;
/**
 * Update the pie series slice grouper. Deletes beforehand the existing grouper.
 * @param props
 * @param styleAndSelectionCallback
 */
export declare function updateSliceGrouping(props: UpdatePieChartProps, styleAndSelectionCallback: (props: UpdatePieChartProps) => Promise<void>): void;
