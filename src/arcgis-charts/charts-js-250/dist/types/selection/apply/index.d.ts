import { XYChart, PieChart } from "@amcharts/amcharts4/charts";
import { ElementSelectionProps } from "../interface";
/**
 * Applies a selection to the chart, based on a list of Sprite elements and additional information
 * TODO: unit tests
 * @param props
 */
export declare function applySelection(props: {
    chart: XYChart | PieChart;
    listSelectedElements: ElementSelectionProps[];
}): Promise<void>;
