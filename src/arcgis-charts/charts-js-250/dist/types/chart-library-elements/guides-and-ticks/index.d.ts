import { Axis, AxisRenderer, AxisDataItem } from "@amcharts/amcharts4/charts";
import { WebChartGuide } from "@arcgis/charts-spec";
import { AxisDataItemType, UpdateTicksProps } from "./interfaces";
/**
 * Returns an array of axis ticks or axis guides.
 * @param axis The axis we want the ticks from
 * @param dataItemType Whether to return the guides or the ticks
 */
export declare function getTickOrGuideList(axis: Axis<AxisRenderer>, dataItemType: AxisDataItemType): AxisDataItem[];
export declare function updateGuidesArray<T extends Axis<AxisRenderer>>(axis: T, guides?: WebChartGuide[]): void;
export declare function updateTicksArray(props: UpdateTicksProps): void;
