import { XYChart } from "@amcharts/amcharts4/charts";
import { TimeIntervalInfo, WebChart, WebChartAxis, WebChartTypes } from "@arcgis/charts-spec";
export interface UpdateBarAndLineChartProps {
    chart: XYChart;
    chartConfig: WebChart;
    rotationChanged?: boolean;
    axisLabelsBehaviorChanged?: [boolean, boolean];
    isRotated?: boolean;
    timeIntervalInfo?: TimeIntervalInfo;
}
export interface InitializeBarAndLineChartAxesProps {
    chart: XYChart;
    chartType: WebChartTypes;
    axesTypes: [WebChartAxis["valueFormat"], WebChartAxis["valueFormat"]];
    isRotated?: boolean;
}
