import { Series, Axis, AxisRenderer, SerialChart, Legend, XYCursor } from "@amcharts/amcharts4/charts";
import { Sprite, Label } from "@amcharts/amcharts4/core";
import { ChartDummyData, SeriesDummyData, AxisDummyData, MarkerDummyData, LabelDummyData, LegendDummyData, CursorDummyData } from "./interfaces";
/**
 * Updates a property from a chart dummy data.
 * The chart dummyData is created if undefined.
 * Only the modified properties are replaced.
 * @param component
 * @param dummyData
 */
export declare function updateChartDummyData(component: SerialChart, dummyData: ChartDummyData): void;
/**
 * Returns a property value from a chart dummy data, or undefined is missing.
 * @param component
 * @param dummyDataProp
 */
export declare function getValueFromChartDummyData<T>(component: SerialChart, dummyDataProp: keyof ChartDummyData): T;
/**
 * Makes undefined a specific property from a chart dummy data.
 * @param component
 * @param dummyDataProp
 */
export declare function removeFromChartDummyData(component: SerialChart, dummyDataProp: keyof ChartDummyData): void;
/**
 * Updates a property from a series dummy data.
 * The series dummyData is created if undefined.
 * Only the modified properties are replaced.
 * @param series
 * @param dummyData
 */
export declare function updateSeriesDummyData(series: Series, dummyData: SeriesDummyData): void;
/**
 * Returns a property value from a series dummy data, or undefined is missing.
 * @param series
 * @param dummyDataProp
 */
export declare function getValueFromSeriesDummyData<T>(series: Series | Sprite, dummyDataProp: keyof SeriesDummyData): T;
/**
 * Updates a property from an axis dummy data.
 * The axis dummyData is created if undefined.
 * Only the modified properties are replaced.
 * @param axis
 * @param dummyData
 */
export declare function updateAxisDummyData(axis: Axis<AxisRenderer>, dummyData: AxisDummyData): void;
/**
 * Returns a property value from an axis dummy data, or undefined is missing.
 * @param axis
 * @param dummyDataProp
 */
export declare function getValueFromAxisDummyData<T>(axis: Axis<AxisRenderer>, dummyDataProp: keyof AxisDummyData): T;
/**
 * Returns a property value from a marker dummy data, or undefined is missing.
 * @param marker
 * @param dummyData
 */
export declare function updateMarkerDummyData(marker: Sprite, dummyData: MarkerDummyData): void;
/**
 * Updates a property from a marker dummy data.
 * The marker dummyData is created if undefined.
 * Only the modified properties are replaced.
 * @param marker
 * @param dummyDataProp
 */
export declare function getValueFromMarkerDummyData<T>(marker: Sprite, dummyDataProp: keyof MarkerDummyData): T;
/**
 * Returns a property value from a label dummy data, or undefined is missing.
 * @param label
 * @param dummyData
 */
export declare function updateLabelDummyData(label: Label, dummyData: LabelDummyData): void;
/**
 * Updates a property from a label dummy data.
 * The label dummyData is created if undefined.
 * Only the modified properties are replaced.
 * @param label
 * @param dummyDataProp
 */
export declare function getValueFromLabelDummyData<T>(label: Sprite, dummyDataProp: keyof LabelDummyData): T;
/**
 * Returns a property value from a legend's dummy data, or undefined if missing.
 * @param legend
 * @param dummyDataProp
 */
export declare function getValueFromLegendDummyData<T>(legend: Legend, dummyDataProp: keyof LegendDummyData): T;
/**
 * Updates a property value in a legend's dummy data
 * @param legend
 * @param dummyData
 */
export declare function updateLegendDummyData(legend: Legend, dummyData: LegendDummyData): void;
/**
 * Returns a property value from a legend's dummy data, or undefined if missing.
 * @param cursor
 * @param dummyDataProp
 */
export declare function getValueFromCursorDummyData<T>(cursor: XYCursor, dummyDataProp: keyof CursorDummyData): T;
/**
 * Updates a property value in a legend's dummy data
 * @param cursor
 * @param dummyData
 */
export declare function updateCursorDummyData(cursor: XYCursor, dummyData: CursorDummyData): void;
