import { LineSeries, ValueAxis, XYChart } from "@amcharts/amcharts4/charts";
import { ISimpleLineSymbol } from "@esri/arcgis-rest-types";
import { QueryObject } from "@arcgis/charts-shared-utils";
import { WebChartDataItem, WebChart, WebChartScatterPlotSeries, WebChartDataSources, WebChartAxis, WebChartScatterPlotDataItem, NumberFormatOptions } from "@arcgis/charts-spec";
import { ChartOptions, ScatterPlotLabelFormatCallback } from "../../../interfaces";
import { LoaderHandle } from "../../loading-indicator/interfaces";
import { InitializeSeriesProps } from "../interfaces";
interface TwoDimSeriesProps {
    xAxis?: ValueAxis;
    yAxis?: ValueAxis;
    lineSymbol?: ISimpleLineSymbol;
    visible?: boolean;
}
export interface TrendLineProps extends TwoDimSeriesProps {
    x: string;
    y: string;
    name: string;
    hideLoaderHandle: LoaderHandle["hideLoader"];
}
export interface ScatterPlotSeriesDefaults {
    strokeOpacity: LineSeries["strokeOpacity"];
    regressionPrecision: number;
    r2: number;
    trendLinePoints: [WebChartDataItem, WebChartDataItem];
}
export interface UpdateScatterPlotProps {
    seriesConfig: WebChartScatterPlotSeries;
    dataSource: WebChartDataSources;
    newSeries: WebChart["series"];
    chartSeries: LineSeries[];
    axes: [WebChartAxis, WebChartAxis];
    chartData?: WebChartScatterPlotDataItem;
    options?: ChartOptions;
    queryObject: QueryObject;
    dataWasUpdated?: boolean;
    commonStrings: any;
    tooltipFormatter?: ScatterPlotLabelFormatCallback;
    dataLabelFormatter?: ScatterPlotLabelFormatCallback;
}
export interface InitializeScatterPlotProps extends InitializeSeriesProps {
    chart: XYChart;
    seriesConfig: WebChartScatterPlotSeries;
    ignoreSmoothRenderingLimit?: boolean;
    options?: ChartOptions;
}
export interface UpdateTrendLineProps {
    trendLine: LineSeries;
    seriesConfig: WebChartScatterPlotSeries;
    valueFormat: NumberFormatOptions;
    chartData?: WebChartScatterPlotDataItem;
    defaultR2Value: string;
}
export {};
