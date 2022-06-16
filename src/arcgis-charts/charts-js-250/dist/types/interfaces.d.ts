import { XYChart, GaugeChart, PieChart, Legend, Axis, AxisRenderer, PieSeries } from "@amcharts/amcharts4/charts";
import FeatureLayer from "esri/layers/FeatureLayer";
import MapView from "esri/views/MapView";
import SceneView from "esri/views/SceneView";
import { WebChartTypes, WebChart, WebChartDataSources, WebChartDataItem, WebChartBarChartSeries, WebChartPieChartSeries, WebChartHistogramSeries, WebChartScatterPlotSeries, WebMapWebChart, WebGaugeChart, WebChartLineChartSeries, WebChartDataTypes, TimeIntervalInfo } from "@arcgis/charts-spec";
import { QueryObject, ChartElementLimit, AbortControllerKeyType, SelectionData, ActionModes, InlineData, SelectionTheme } from "@arcgis/charts-shared-utils";
import { IExtent } from "@esri/arcgis-rest-types";
import { Container, Label, MouseTouchEvent, Sprite, SpriteMouseTouchEvent, SpritePointEvent } from "@amcharts/amcharts4/core";
import { SpritePointerTypeEvent } from "@amcharts/amcharts4/.internal/core/SpriteEvents";
import { PointerTypeEvent, PointerEvent } from "@amcharts/amcharts4/.internal/core/interaction/InteractionObjectEvents";
import { HeaderElements, FooterElements } from "./chart-library-elements/header-and-footer/interfaces";
import { LoaderHandle } from "./chart-library-elements/loading-indicator/interfaces";
import { BinnedServerData } from "./data/utils/summarize-data/time-binning/interfaces";
export declare const EventTypes: {
    readonly Ready: "ready";
    readonly Hidden: "hidden";
    readonly Shown: "shown";
    readonly Hit: "hit";
    readonly DoubleHit: "doublehit";
    readonly Up: "up";
    readonly SelectEnded: "selectended";
    readonly Over: "over";
    readonly Out: "out";
    readonly SizeChanged: "sizechanged";
    readonly StartEndChanged: "startendchanged";
    readonly VisibilityChanged: "visibilitychanged";
    readonly PositionChanged: "positionchanged";
    readonly Validated: "validated";
    readonly DataValidated: "datavalidated";
    readonly DataItemsValidated: "dataitemsvalidated";
    readonly Inited: "inited";
    readonly Opened: "opened";
    readonly Closed: "closed";
    readonly ExtremesChanged: "extremeschanged";
    readonly RangeChanged: "rangechanged";
    readonly DataRangeChanged: "datarangechanged";
};
export declare type EventTypes = typeof EventTypes[keyof typeof EventTypes];
export declare type HitEvent = {
    type: "hit" | "doublehit";
    target: Sprite;
} & SpritePointerTypeEvent & SpritePointEvent & SpriteMouseTouchEvent;
export declare type UpEvent = {
    type: "up";
    target: XYChart;
} & PointerTypeEvent & PointerEvent & MouseTouchEvent;
export declare type OverEvent = {
    type: "over";
    target: Container;
} & PointerTypeEvent & MouseTouchEvent & PointerEvent;
export declare type DataRangeChangedEvent = {
    type: "datarangechanged";
    target: Axis<AxisRenderer>;
};
export declare type AxisSizeChangedEvent = {
    type: "sizechanged";
    target: Axis<AxisRenderer>;
};
export declare type AxisValidatedEvent = {
    type: "validated";
    target: Axis<AxisRenderer>;
};
export declare type AxisDataItemsValidatedEvent = {
    type: "dataitemsvalidated";
    target: Axis<AxisRenderer>;
};
export declare type PieSeriesValidatedEvent = {
    type: "validated";
    target: PieSeries;
};
export interface LegendElements {
    legend: Legend;
    legendTitle: Label;
}
export interface ChartElements {
    headerElements: HeaderElements;
    footerElements: FooterElements;
    legendElements: LegendElements;
    loaderHandle: LoaderHandle;
}
export interface ChartResult {
    chart: XYChart | GaugeChart | PieChart;
    chartElements?: ChartElements;
}
export interface NotifyOptions {
    closable?: boolean;
}
export interface CreateChartProps {
    chartContainer?: HTMLElement;
    chartConfig?: WebChart | WebGaugeChart;
    queryObject?: QueryObject;
    options?: ChartOptions;
    globalOptions?: GlobalOptions;
    inputData?: WebChartDataItem[];
}
export interface UpdateChartProps {
    newChartConfig?: WebChart | WebMapWebChart | WebGaugeChart;
    updateOptions?: ChartOptions;
    updateGlobalOptions?: GlobalOptions;
}
export interface ChartInstance {
    update: (updateProps: UpdateChartProps) => Promise<void>;
    dispose: () => void;
    notify: (message?: string, heading?: string, options?: NotifyOptions) => void;
    resetZoom: () => void;
    clearSelection: () => void;
    switchSelection: () => Promise<void>;
    setActionMode: (actionMode?: ActionModes) => void;
}
export interface UpdateAxesProps {
    chart: XYChart | PieChart | GaugeChart;
    chartConfig: WebChart;
    rotationChanged?: boolean;
    axisLabelsBehaviorChanged?: [boolean, boolean];
    chartType?: WebChartTypes;
    isRotated?: boolean;
    data?: WebChartDataTypes;
    timeIntervalInfo?: TimeIntervalInfo;
}
/**
 * Describes the signature of the callback function used to customize the pie chart data labels and tooltips
 */
export declare type PieChartLabelFormatCallback = (category: string, value?: number, percent?: number) => string;
/**
 * Describes the signature of the callback function used to customize the histogram tooltips
 */
export declare type HistogramLabelFormatCallback = (count: number, binMinValue: number, binMaxValue: number) => string;
/**
 * Describes the signature of the callback function used to customize the scatter plot tooltips
 */
export declare type ScatterPlotLabelFormatCallback = (x: number, y: number) => string;
export interface BarAndLineTooltipFormatCallbackProps {
    seriesName: string;
    statValue?: number;
    percentValue?: number;
    inlineDisplayLabelValue?: string | number | Date;
    xValue?: string | number | Date;
    dateBinningRange?: [number, number];
}
/**
 * Describes the signature of the callback function used to customize the bar and line chart plot tooltips
 */
export declare type BarAndLineTooltipFormatCallback = (props: BarAndLineTooltipFormatCallbackProps) => string;
/**
 * Describes the signature of the callback function used to customize the bar and line chart plot data labels
 */
export declare type BarAndLineDataLabelFormatCallback = (statValue: number, percent?: number) => string;
/**
 * JSON representation of the chart options for the update or initialization.
 */
export interface ChartOptions {
    /**
     * A property representing the selection to apply on the chart.
     * The properties are considered in the following order:
     * - selectionData.selectionOIDs: an array of Object Ids (for Feature Layer) representing a selection to apply to the chart.
     * - selectionData.selectionItems: an array of data items representing a selection to apply to the chart.
     */
    selectionData?: SelectionData;
    /**
     * Used to provide a customized theme for the selected and non selected elements.
     * If no style is provided for the selected elements, a default selection is applied.
     * If no style is provided for the non selected elements, the chart's style is applied.
     */
    selectionTheme?: SelectionTheme;
    /**
     * used to perform client-side queries
     */
    view?: MapView | SceneView;
    /**
     * used to perform queries or client-side queries (if the view is provided)
     */
    featureLayer?: FeatureLayer;
    /**
     * enable filter by selection
     */
    filterBySelection?: boolean;
    /**
     * used to disable all interactions on the chart (legend hit, selection, zoom...)
     */
    disableInteractions?: boolean;
    /**
     * Re initialize chart object if the chart object is disposed.
     * Honoured only during the update call.
     * default is true;
     */
    autoRecreateChart?: boolean;
    /**
     * optional create message to be displayed in the chart container.
     */
    createMessage?: string;
    /**
     * used to customize the chart's limits, especially the maximum number of elements (bars, markers...) to be displayed
     */
    chartLimits?: Partial<ChartElementLimit>;
    /**
     * Set the chart's mode (zoom, selection, none)
     * - zoom: allows to zoom on the chart. All selection is disabled
     * - mono-selection: the selection is enabled but only one element can be selected. Zoom is disabled
     * - multi-selection: the selection is enabled and allows selecting multiple elements. Zoom is disabled
     * - multi-selection-with-ctrl-key: the selection is enabled and allows selecting multiple elements when the ctrl/cmd key is pressed. Zoom is disabled
     * - none: the zoom and selection features are disabled
     */
    actionMode?: ActionModes;
    /**
     * Used to identify whether to create whole chart which is in inline processed or inline raw mode
     * If the option is true, the chart gets a full refresh.
     */
    dataUpdated?: boolean;
    /**
     * Used to build/update inline data source of the chart
     */
    inlineData?: InlineData<WebChartDataTypes>;
    /**
     * Can be used when creating or updating a chart compatible with time binning. If this option is `true`, the series properties
     * `timeIntervalUnits` and `timeIntervalSize` become optional and will be automatically set to values that fit the data set.
     * @default false
     */
    setTimeBinningInfoWhenNotProvided?: boolean;
    /**
     * Can be used to disable the default setting that uses debounce functions to handle the visibility of markers
     * (for scatter-plot and line charts) that are outside of plotting area when min/max bound changes and/or
     * when zoom action is performed (via chart cursor or scrollbar), to increase performance.
     *
     * This property will be set when the chart is created and cannot be updated after that.
     *
     * It's recommended that this property should only be set to true for small datasets.
     * @default false
     */
    ignoreSmoothRenderingLimit?: boolean;
    /**
     * Used to customize the way the tooltips are rendered. The callback function can return an HTML string and the tags will
     * be interpreted properly.
     */
    tooltipFormatter?: PieChartLabelFormatCallback | HistogramLabelFormatCallback | ScatterPlotLabelFormatCallback | BarAndLineTooltipFormatCallback;
    dataLabelFormatter?: PieChartLabelFormatCallback | HistogramLabelFormatCallback | ScatterPlotLabelFormatCallback | BarAndLineDataLabelFormatCallback;
}
/**
 * Detailed options to customize chart experience
 */
export interface GlobalOptions {
    queueChartCreation?: boolean;
    useAnimatedCharts?: boolean;
    hideLicenceWatermark?: boolean;
    enableResponsiveFeatures?: boolean;
    autoDisposeChart?: boolean;
}
export interface FetchDataProps {
    dataSource: WebChartDataSources;
    series: WebChartBarChartSeries[] | WebChartLineChartSeries[] | WebChartPieChartSeries[] | WebChartHistogramSeries | WebChartScatterPlotSeries;
    filter?: string;
    extent?: IExtent;
    filteredData?: WebChartDataItem[];
    queryObject?: QueryObject;
    abortKey?: AbortControllerKeyType;
    xAxisValueFormatType?: WebChartTypes;
    setTimeBinningInfoWhenNotProvided?: boolean;
    binnedServerData?: BinnedServerData;
}
