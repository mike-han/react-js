import { XYChart, Axis, AxisRenderer, ColumnSeries, LineSeries } from "@amcharts/amcharts4/charts";
import { List } from "@amcharts/amcharts4/core";
import { WebChartAxis, TimeIntervalInfo, WebChartTypes, WebChartLabelBehavior } from "@arcgis/charts-spec";
/**
 * Resets the chart's axes zoom level to display the chart in full extent.
 * @param chart
 */
export declare function resetZoomToFullExtent(chart: XYChart): void;
/**
 * Initialize the correct type of axes.
 * - Need to initialize a new instance of NumberFormatter because otherwise all axes inherits the format from the chart object instead.
 * - Also assigns vanilla formatting (#) so that the NumberFormatter of the axis.
 * - This way, in `textOutput` adapter, we will get unformatted which is easier to manipulate.
 * @param props
 */
export declare function initializeAxis(props: {
    axes: List<Axis<AxisRenderer>>;
    valueFormat: WebChartAxis["valueFormat"];
    isNonAggregatedChart?: boolean;
}): void;
/**
 * Initializes the axes for an XYChart
 * @param props
 */
export declare function initializeXYChartAxes(props: {
    chart: XYChart;
    axesTypes: [WebChartAxis["valueFormat"], WebChartAxis["valueFormat"]];
    isRotated?: boolean;
}): void;
export declare function updateAxisMinMax(props: {
    axis: Axis<AxisRenderer>;
    minimumFromConfig?: number | null;
    maximumFromConfig?: number | null;
    isLogarithmic?: boolean;
    bufferFromConfig?: boolean;
    seriesType?: WebChartTypes;
}): void;
/**
 * When a series is shown or hidden (from the legend for instance), or when its data is updated, we want the value
 * axis bounds to be updated accordingly to the visible series only. When `strictMinMax` is set to `true`, amCharts
 * will by default force the bounds to the highest value from the data set, whether the corresponding series are
 * shown or hidden (keeping a consistent extent no matter the hidden series).
 * This function forces the axis to set its bounds based on the visible series only and their stack type.
 * See issue https://devtopia.esri.com/WebGIS/arcgis-charts/issues/3308
 * See AmCharts ticket: https://amcharts.zendesk.com/hc/en-us/requests/61143
 * @param series The amCharts series on which to add listeners
 */
export declare function adjustValueAxisBoundsOnSeriesEvents(series: ColumnSeries | LineSeries): void;
export declare function updateAxis(props: {
    axis: Axis<AxisRenderer>;
    axisConfig: WebChartAxis;
    isNonAggregatedChart?: boolean;
    timeIntervalInfo?: TimeIntervalInfo;
    seriesType?: WebChartTypes;
    horizontalAxisLabelsBehavior?: WebChartLabelBehavior;
    verticalAxisLabelsBehavior?: WebChartLabelBehavior;
    axisLabelsBehaviorChanged?: [boolean, boolean];
}): void;
export declare function updateXYChartAxes(props: {
    chart: XYChart;
    axes: [WebChartAxis, WebChartAxis];
    rotationChanged?: boolean;
    axisLabelsBehaviorChanged?: [boolean, boolean];
    isRotated?: boolean;
    timeIntervalInfo?: TimeIntervalInfo;
}): void;
