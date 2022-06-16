import { PieSeries } from "@amcharts/amcharts4/charts";
import { WebChartPieChartSeries } from "@arcgis/charts-spec";
import { SelectionTheme } from "@arcgis/charts-shared-utils";
import { LoaderHandle } from "../../loading-indicator/interfaces";
import { UpdatePieChartProps } from "./interfaces";
import { PieChartLabelFormatCallback } from "../../../interfaces";
export declare function initializePieChartSeries(props: {
    seriesConfig: WebChartPieChartSeries;
    hideLoaderHandle: LoaderHandle["hideLoader"];
    selectionTheme?: SelectionTheme;
    tooltipFormatter?: PieChartLabelFormatCallback;
}): PieSeries;
/**
 * Function updating chart series and assign its data
 * @param props
 */
export declare function updatePieChartSeries(props: UpdatePieChartProps): Promise<void>;
