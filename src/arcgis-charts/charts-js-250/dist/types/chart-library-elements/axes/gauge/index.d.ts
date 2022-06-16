import { GaugeChart } from "@amcharts/amcharts4/charts";
import { WebChart, WebChartAxis, WebChartDataItem } from "@arcgis/charts-spec";
/**
 * For gauge chart `isRotated` is always `undefined`.
 * @param chart
 * @param valueFormat
 */
export declare function initializeGaugeAxis(chart: GaugeChart, valueFormat: WebChartAxis["valueFormat"]): void;
/**
 * Updates a gauge axis based on the configuration.
 * The data is used to update the needle position and inner label value.
 * @param props
 */
export declare function updateGaugeAxis(props: {
    chart: GaugeChart;
    axesConfig: WebChart["axes"];
    data?: WebChartDataItem[];
    x?: string;
}): void;
