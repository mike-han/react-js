import { Label, Container, Sprite, LinePattern, RectPattern } from "@amcharts/amcharts4/core";
import { Legend } from "@amcharts/amcharts4/charts";
import { Color, ISimpleFillSymbol } from "@esri/arcgis-rest-types";
import { WebChartSortOrderKinds, WebChartLineSmoothedKinds, WebChartStackedKinds, WebChartCursorCrosshair } from "@arcgis/charts-spec";
import { ActionModes, SelectionTheme } from "@arcgis/charts-shared-utils";
import { ScatterPlotSeriesDefaults } from "../chart-library-elements/series/scatter-plot/interfaces";
import { HistogramSeriesDefaults } from "../chart-library-elements/series/histogram/interfaces";
import { GaugeNeedleDefaults } from "../chart-library-elements/axes/gauge/interfaces";
export interface PieChartDefaults {
    innerRadius: number;
    min: number;
    max: number;
    displayNumericValueOnLegend?: boolean;
    displayNumericValueOnDataLabel?: boolean;
    displayNumericValueOnTooltip?: boolean;
    displayPercentageOnLegend?: boolean;
    displayPercentageOnDataLabel?: boolean;
    displayPercentageOnTooltip?: boolean;
    sliceGrouping: {
        percentageThreshold: number;
        groupName: string;
        groupSliceSymbol: ISimpleFillSymbol;
    };
}
export interface GaugeDefaults {
    innerRadius: number;
    startAngle: number;
    endAngle: number;
}
interface LineSeriesDefaults {
    strokeWidth: number;
    lineSmoothed: boolean;
    lineSmoothedKind: WebChartLineSmoothedKinds;
    showArea: boolean;
    areaOpacity: number;
    markerVisible: boolean;
    rotated: boolean;
    stackedType: WebChartStackedKinds;
    stackNegativeValuesToBaseline: boolean;
    marker: {
        markerSize: number;
        markerStrokeWidth: number;
    };
}
export interface ChartDefaults {
    title: Readonly<Partial<Label>>;
    subtitle: Readonly<Partial<Label>>;
    legend: Readonly<Partial<Legend>>;
    footer: Readonly<Partial<Label>>;
    axisLabel: Readonly<Partial<Label>>;
    axisTickLength: number;
    rotatedAxisLabel: Readonly<Partial<Label>>;
    xAxisTitleLabel: Readonly<Partial<Label>>;
    yAxisTitleLabel: Readonly<Partial<Label>>;
    titleLabel: Readonly<Partial<Label>>;
    horizontalSurfaceGuideLabels: Readonly<Partial<Label>>;
    horizontalLineGuideLabels: Readonly<Partial<Label>>;
    verticalSurfaceGuideLabels: Readonly<Partial<Label>>;
    verticalLineGuideLabels: Readonly<Partial<Label>>;
    guideAbove: boolean;
    dataLabelInitialize: Readonly<Partial<Label>>;
    datalabel: Readonly<Partial<Label>>;
    dataLabelRotated: Readonly<Partial<Label>>;
    dataLabelStackedNonRotated: Readonly<Partial<Label>>;
    dataLabelStackedRotated: Readonly<Partial<Label>>;
    datalabelNegative: Readonly<Partial<Label>>;
    pieChartDataLabelMaxWidth: number;
    scatterPlotSeries: Readonly<ScatterPlotSeriesDefaults>;
    histogramSeries: Readonly<HistogramSeriesDefaults>;
    lineSeries: Readonly<LineSeriesDefaults>;
    pieChart: Readonly<PieChartDefaults>;
    yAxisLabelMaxWidth: number;
    axisLabelPadding: number;
    categoryAxisLabelPadding: number;
    histogramAxisLabelPadding: number;
    histogramBinCount: number;
    seriesSort: Readonly<WebChartSortOrderKinds>;
    color: Readonly<Color>;
    dataTooltipVisible?: boolean;
    cursorCrosshair: Readonly<Required<Omit<WebChartCursorCrosshair, "type">>>;
    buffer: boolean;
    elementLimitForSmoothRendering: number;
    headerContainer: Readonly<Partial<Container>>;
    footerContainer: Readonly<Partial<Container>>;
    chartAndLegendContainer: Readonly<Partial<Container>>;
    chartContainer: Readonly<Partial<Container>>;
    chartContainerPaddingTopWhenRotated: number;
    paddingMinSize: number;
    marginMinSize: number;
    chartPaddingMinSize: number;
    chartPaddingRightWhenLegendNotOnRight: number;
    defaultStatParameterValue: number;
    /**
     * Legend
     */
    legendProperties: {
        legendLabels: Readonly<Partial<Label>>;
        legendLabelReducedOpacity: number;
        legendMarkersSize: number;
        rectangleMarkerRadius: number;
        roundedMarkerRadius: number;
        legendPaddingRightWithScrollbarVisible: number;
        legendTitle: Readonly<Partial<Label>>;
    };
    /**
     * Gauge
     */
    gaugeTicksLength: number;
    gaugeInnerLabel: Readonly<Partial<Label>>;
    gaugeNeedle: Readonly<Partial<GaugeNeedleDefaults>>;
    gauge: Readonly<GaugeDefaults>;
    tooltipWidth: number;
    axisLabelOveredOpacity: number;
    generalFontSize: number;
    chartEllipsis: string;
    backgroundColor: Readonly<Color>;
    /**
     * number between 0 - 1.
     */
    opacity: number;
    lineWidth: number;
    /**
     * Time taken by the loader (in ms) spinner to make a 360 deg rotation
     */
    loaderRotationSpeed: number;
    /**
     * Time interval (in ms) between each loader animation call
     */
    loaderIntervalTimeout: number;
    loaderBackground: Readonly<Color>;
    loaderLabelFontSize: number;
    selectionTheme: SelectionTheme;
    columnTooltipPosition: Sprite["tooltipPosition"];
    markerTooltipPosition: Sprite["tooltipPosition"];
    patternLineProperties: Readonly<Partial<LinePattern>>;
    patternRectProperties: Readonly<Partial<RectPattern>>;
    dateBinningRange: string;
    dateBinModel: string;
    /**
     * Query defaults
     */
    originalCategoryValue: string;
    originalDateValue: string;
    dateFormatUTC: Intl.DateTimeFormatOptions;
    queryCalculatedExpr: string[];
    queryMaxFloatPrecision: number;
    /**
     * Internal property name used to store the style for the "Other" values for a
     * unique value renderer. Will removed after implementing #1659.
     */
    uniqueValueRendererOtherValue: string;
    scatterPlotAggregationFields: {
        [key: string]: string;
    };
    actionMode: ActionModes;
    debounceTime: number;
    chartDefaultPaddingRight: number;
}
/**
 * A nested dictionary which contains default values for cases when a property is undefined.
 * `as const` is not used because we loose intellisense while assigning properties and values.
 * Instead, `ReadOnly<>` is used to prevent property reassignment.
 */
export declare const ChartDefaults: Readonly<ChartDefaults>;
export {};
