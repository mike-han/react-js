import { GaugeChart, PieChart, XYChart } from "@amcharts/amcharts4/charts";
/**
 * Initializes the scrollbar for the chart
 * @param chart
 */
export declare function initializeChartScrollbar(chart: XYChart | PieChart | GaugeChart): void;
/**
 * Updates scrollbar on the chart based on input value from scrollbar
 * @param chart
 * @param scrollbarXVisible
 * @param scrollbarYVisible
 */
export declare function updateChartScrollbar(props: {
    chart: XYChart | PieChart | GaugeChart;
    scrollbarXVisible?: boolean;
    scrollbarYVisible?: boolean;
}): void;
