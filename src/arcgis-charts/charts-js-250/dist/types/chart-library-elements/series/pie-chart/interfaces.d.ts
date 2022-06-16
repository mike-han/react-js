import { PieChart, PieSeries } from "@amcharts/amcharts4/charts";
import { QueryObject } from "@arcgis/charts-shared-utils";
import { WebChart, WebChartDataSources, WebChartPieChartSeries } from "@arcgis/charts-spec";
import { ChartOptions, PieChartLabelFormatCallback } from "../../../interfaces";
export interface UpdatePieChartProps {
    chart: PieChart;
    seriesConfig: WebChartPieChartSeries;
    pieSeries: PieSeries;
    dataSource: WebChartDataSources;
    newSeries: WebChart["series"];
    queryObject: QueryObject;
    dataWasUpdated?: boolean;
    sliceGrouperWasUpdated?: boolean;
    options?: ChartOptions;
    tooltipFormatter?: PieChartLabelFormatCallback;
    dataLabelFormatter?: PieChartLabelFormatCallback;
}
