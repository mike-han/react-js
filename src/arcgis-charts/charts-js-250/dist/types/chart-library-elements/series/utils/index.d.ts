import { IXYSeriesDataFields, Axis, AxisRenderer, Series, ColumnSeries, LineSeries, XYChart, ILineSeriesDataFields } from "@amcharts/amcharts4/charts";
import { Sprite } from "@amcharts/amcharts4/core";
import { Color as esriColor } from "@esri/arcgis-rest-types";
import { ChartTypes, QueryObject, QueryType, RendererInfo } from "@arcgis/charts-shared-utils";
import { TimeIntervalInfo, WebChartAxis, WebChartBarChartSeries, WebChartDataSources, WebChartLineChartSeries, WebChart } from "@arcgis/charts-spec";
import { ILocale } from "@amcharts/amcharts4/.internal/core/utils/Language";
import { PieChartLabelFormatCallback } from "../../../interfaces";
declare type DataFieldName = Extract<keyof IXYSeriesDataFields | ILineSeriesDataFields, "dateY" | "dateX" | "categoryY" | "categoryX" | "valueY" | "valueX">;
/**
 * Returns the datafield name to be used by the series to assign
 * the x value
 * @param axis
 * @param isRotated
 */
export declare function getXAxisDataFieldName(axis: Axis<AxisRenderer>, isRotated?: boolean): DataFieldName;
/**
 * Updates a series name and stores it in its dummy data
 * @param series
 * @param seriesName
 */
export declare function updateSeriesName(series: Series, seriesName: string): void;
/**
 *
 * @param props
 * @returns
 */
export declare function getColorMatchInfo(props: {
    chartConfig: WebChart;
    dataSource: WebChartDataSources;
    numberOfSeries: number;
    queryObject: QueryObject;
    queryType: QueryType;
}): Promise<{
    rendererInfo: RendererInfo;
    mapRendererColorToSeries: Map<string, esriColor>;
}>;
/**
 *
 * @param props
 */
export declare function updateBarAndLineChartSeriesDummyData(props: {
    series: ColumnSeries | LineSeries;
    xAxisValueFormat: WebChartAxis["valueFormat"];
    yAxisValueFormat: WebChartAxis["valueFormat"];
    timeIntervalInfo?: TimeIntervalInfo;
}): void;
/**
 * Function initializing the chart markers
 * @param props.chart An instance of XYChart
 * @param props.lineSeries The LineSeries to be initialized
 * @param props.applyPropertiesToClones Indicates whether changes to the marker of the line series will be automatically applied to its clones.
 */
export declare function initializeMarker(props: {
    chart: XYChart;
    lineSeries: LineSeries;
    applyPropertiesToClones?: boolean;
}): Sprite;
/**
 * Updates the series properties according to the stacked type in the series config.
 * @param props
 */
export declare function updateSeriesStackedType(props: {
    series: ColumnSeries | LineSeries;
    seriesConfig: WebChartBarChartSeries | WebChartLineChartSeries;
    rotationChanged?: boolean;
    isRotated: boolean;
}): void;
/**
 * Generic callback used by the pie chart for its:
 *   - data labels
 *   - tooltips
 *   - legend markers
 * When dataTooltipVisible is present and set to false, then an empty string will be returned; otherwise:
 *    If formats a slice's value and percentage according to the format options from the config, or uses
 *    a default formatter.
 *    The values are displayed as:
 *      - if only value is requested: 'value'
 *      - if only percentage is requested: 'percentage%'
 *      - if value and percentage are requested: 'percentage% (value)'
 * @param props
 */
export declare function generatePieChartFormatCallback(props: {
    locale: ILocale;
    valueIntlOptions?: Intl.NumberFormatOptions;
    percentageIntlOptions?: Intl.NumberFormatOptions;
    displayNumericValue?: boolean;
    displayPercentage?: boolean;
    valuePrefix?: string;
    valueSuffix?: string;
    percentagePrefix?: string;
    percentageSuffix?: string;
}): PieChartLabelFormatCallback;
/**
 * Handles markers outside of chart's plotting area for line and scatter-plot.
 * @param props.chart The chart containing the series.
 * @param props.numberOfChartSeries The total number of series in the chart. If not provide, default one series is used.
 * @param props.series The series containing the marker.
 * @param props.seriesType The type of series (such as line or scatter-plot).
 * @param props.marker The marker template of which its clones are to hide or show.
 * @param props.ignoreSmoothRenderingLimit Indicate whether to disable the default setting that utilizes debounce function for performance reason.
 */
export declare function handlePointsOutOfPlottingArea(props: {
    chart: XYChart;
    numberOfChartSeries?: number;
    series: LineSeries;
    seriesType: ChartTypes;
    marker: Sprite;
    ignoreSmoothRenderingLimit?: boolean;
}): void;
/**
 * Assigns the appropriate label opacity to a chart's legend when there is a chart update
 * @param series The chart series of which legend labels are to be set.
 */
export declare function handleLegendLabelsOpacity(series: Series): void;
export {};
