import { Label, ListTemplate } from "@amcharts/amcharts4/core";
import { SerialChart } from "@amcharts/amcharts4/charts";
import { UpdateLegendProps } from "./interfaces";
import { LegendElements } from "../../interfaces";
/**
 * Enforces the legend labels opacity according to their corresponding series visibility;
 * If series visibility is not provided, it will be defaulted to true.
 *
 * If `sliceCategory` is defined, it will ignore check to seriesId
 * @param props.labels List of labels that are used to match with it's corresponding series to set the opacity
 * @param props.seriesId Passing the seriesId first if label opacity is to be applied to (Bar chart, Histogram, Scatter Plot, Line chart or Combo chart)
 * @param props.sliceCategory Slice category value of any slice of the Pie Chart
 */
export declare function reapplyLabelOpacity(props: {
    labels: ListTemplate<Label>;
    seriesId?: string;
    sliceCategory?: string;
}): void;
/**
 * Initializes the legend with default values and assign it to the chart.
 * Set adapters on some properties.
 * @param chart The chart on which to attach the legend
 */
export declare function initializeLegend(chart: SerialChart): LegendElements;
/**
 * Updates the legend
 * @param props
 */
export declare function updateLegend(props: UpdateLegendProps): void;
