import { WebChart, WebGaugeChart } from "@arcgis/charts-spec";
import { ValidationStatus, DataWarningKeywords, QueryObject } from "@arcgis/charts-shared-utils";
import { XYChart, PieChart, GaugeChart } from "@amcharts/amcharts4/charts";
export declare function resetModal(chart: XYChart | PieChart | GaugeChart): void;
/**
 * Validates the `WebChart` config and displays the `Errors` and `Warnings` them in the chart popup.
 * Both `Errors` and `Warnings` are non-dismissible.
 * @param chart
 * @param chartConfig
 * @param queryObject
 */
export declare function isValidConfig(props: {
    chart: XYChart | PieChart | GaugeChart;
    chartConfig?: WebChart | WebGaugeChart;
    queryObject?: QueryObject;
    createMessage?: string;
}): Promise<ValidationStatus>;
/**
 * Setting a message for the chart to display when it fails to create the chart due to bad data.
 * @param chart
 * @param invalidType
 * @param elementCount
 * @param seriesCount
 */
export declare function raiseInvalidDataWarning(props: {
    chart: XYChart | PieChart;
    invalidType?: DataWarningKeywords;
    elementCount?: number;
    seriesCount?: number;
}): Promise<void>;
