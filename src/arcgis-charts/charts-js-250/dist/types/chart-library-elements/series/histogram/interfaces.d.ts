import { LineSeries, ColumnSeries } from "@amcharts/amcharts4/charts";
import { QueryObject } from "@arcgis/charts-shared-utils";
import { WebChart, NumberFormatOptions, WebChartHistogramDataItem, WebChartOverlay, WebChartHistogramSeries, WebChartAxis, WebChartDataSources } from "@arcgis/charts-spec";
import { ChartOptions, HistogramLabelFormatCallback } from "../../../interfaces";
import { AxisType } from "../../axes/utils/axis-renderer/interfaces";
import { LoaderHandle } from "../../loading-indicator/interfaces";
import { InitializeSeriesProps } from "../interfaces";
export interface TwoDimPoint {
    x: number;
    y: number;
}
export interface Straight2DLineData {
    data: [TwoDimPoint, TwoDimPoint];
}
export declare const HistogramResultKeys: {
    readonly Count: "count";
    readonly Start: "minValue";
    readonly End: "maxValue";
};
export declare const OverlayTerms: {
    readonly Mean: "Mean";
    readonly Median: "Median";
    readonly StdDev: "Standard Deviation";
    readonly Normal: "Normal Distribution";
    readonly Trendline: "Trendline";
};
export declare type OverlayTerms = typeof OverlayTerms[keyof typeof OverlayTerms];
export interface HistogramSeriesDefaults {
    normalDistribNumberOfPoints: number;
}
export interface InitStatisticSeriesProps {
    xAxis: AxisType;
    yAxis: AxisType;
    type: OverlayTerms;
    hideLoaderHandle: LoaderHandle["hideLoader"];
}
export interface UpdateStatisticSeriesProps {
    lineSeries: LineSeries;
    valueFormat: NumberFormatOptions;
    overlay: WebChartOverlay;
    chartData?: WebChartHistogramDataItem;
    commonStrings: any;
}
export interface UpdateNormalDistributionLineSeriesProps {
    lineSeries: LineSeries;
    overlay: WebChartOverlay;
    seriesData?: WebChartHistogramDataItem;
    numberOfPoints?: number;
}
export interface UpdateHistogramSeriesProps {
    seriesConfig: WebChartHistogramSeries;
    chartSeries: (LineSeries | ColumnSeries)[];
    axes: [WebChartAxis, WebChartAxis];
    dataSource: WebChartDataSources;
    chartData?: WebChartHistogramDataItem;
    newSeries: WebChart["series"];
    options?: ChartOptions;
    dataWasUpdated?: boolean;
    queryObject: QueryObject;
    commonStrings: any;
    tooltipFormatter?: HistogramLabelFormatCallback;
    dataLabelFormatter?: HistogramLabelFormatCallback;
}
export interface InitializeHistogramSeriesProps extends InitializeSeriesProps {
    seriesConfig: WebChartHistogramSeries;
    commonStrings: any;
    options?: ChartOptions;
}
