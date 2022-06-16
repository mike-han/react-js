import { Axis, AxisRenderer } from "@amcharts/amcharts4/charts";
/**
 * Add an event on the axis label for category/date axis to select the elements for the category/date clicked.
 * @param axis
 */
export declare function addSelectOnAxisLabelHit(axis: Axis<AxisRenderer>): void;
export declare function toggleDisableClickOnAxisLabel(axis: Axis<AxisRenderer>, disable: boolean): void;
