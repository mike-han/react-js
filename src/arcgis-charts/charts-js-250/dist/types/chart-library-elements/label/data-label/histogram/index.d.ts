import { Label } from "@amcharts/amcharts4/core";
import { ColumnSeries } from "@amcharts/amcharts4/charts";
import { DataLabelUpdateProps } from "../interfaces";
/**
 * Creates the data labels on a histogram series
 * @param series The series on which to initialize the data label
 */
export declare function initializeHistogramDataLabel(series: ColumnSeries): Label;
/**
 * Updates a series data labels, based on styling information and axis value format
 * @param props Set of properties necessary to update the data label
 */
export declare function updateHistogramDataLabel(props: DataLabelUpdateProps): void;
