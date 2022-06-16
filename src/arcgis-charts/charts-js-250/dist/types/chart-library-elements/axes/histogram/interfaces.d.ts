import { XYChart } from "@amcharts/amcharts4/charts";
import { WebChartAxis, WebChartBin } from "@arcgis/charts-spec";
export interface UpdateHistogramAxesProps {
    chart: XYChart;
    axes: [WebChartAxis, WebChartAxis];
    histogramBins: WebChartBin[];
    isRotated?: boolean;
}
export interface InitializeHistogramAxesProps {
    chart: XYChart;
    axesTypes: [WebChartAxis["valueFormat"], WebChartAxis["valueFormat"]];
    isRotated?: boolean;
}
