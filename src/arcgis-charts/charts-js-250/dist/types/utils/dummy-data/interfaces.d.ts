/// <reference types="lodash" />
import { IDisposer } from "@amcharts/amcharts4/core";
import { QueryObject, ActionModes } from "@arcgis/charts-shared-utils";
import { TimeIntervalInfo, WebChart, WebChartDataSources, WebChartTypes, WebChartDataItem, WebChartStackedKinds } from "@arcgis/charts-spec";
import { DebouncedFunc } from "lodash-es";
import { BarSeriesLastUpdateInfo } from "../../chart-library-elements/series/bar-chart/interfaces";
import { OverlayTerms } from "../../chart-library-elements/series/histogram/interfaces";
import { MappedTextSymbol } from "../../chart-library-elements/symbols/interfaces";
import { BinnedServerData } from "../../data/utils/summarize-data/time-binning/interfaces";
import { AxisSizeChangedEvent, AxisValidatedEvent, BarAndLineTooltipFormatCallback, HistogramLabelFormatCallback, DataRangeChangedEvent, PieChartLabelFormatCallback, PieSeriesValidatedEvent, ScatterPlotLabelFormatCallback, BarAndLineDataLabelFormatCallback } from "../../interfaces";
export interface ChartDummyData {
    config?: WebChart;
    isRotated?: boolean;
    dataSource?: WebChartDataSources;
    queryObject?: QueryObject;
    elementCount?: number;
    initialized?: boolean;
    filterBySelection?: boolean;
    currentSelectionDataItems?: WebChartDataItem[];
    currentSelectionOIDs?: number[];
    isNonAggregatedChart?: boolean;
    chartWasCreatedWhileHidden?: boolean;
    chartWasUpdatedWhileHidden?: boolean;
    pendingSelectionQueries?: boolean;
    actionMode?: ActionModes;
    binnedServerData?: BinnedServerData;
    timeIntervalInfo?: TimeIntervalInfo;
    gaugeData?: number;
}
export interface SeriesDummyData {
    isOverlay?: boolean;
    type?: OverlayTerms | WebChartTypes;
    upper?: boolean;
    stddev?: number;
    stackedType?: WebChartStackedKinds;
    name?: string;
    isSelectionApplied?: boolean;
    barSeriesLastUpdate?: BarSeriesLastUpdateInfo;
    dateFormatCallback?: (date: Date) => string;
    tooltipValueYNumberFormatCallback?: (value: number) => string;
    tooltipValueXNumberFormatCallback?: (value: number) => string;
    barAndLineTooltipFormatter?: BarAndLineTooltipFormatCallback;
    barSeriesDataLabelFormatter?: BarAndLineDataLabelFormatCallback;
    lineSeriesDataLabelFormatter?: BarAndLineDataLabelFormatCallback;
    scatterPlotTooltipFormatter?: ScatterPlotLabelFormatCallback;
    scatterPlotDataLabelFormatter?: ScatterPlotLabelFormatCallback;
    histogramTooltipFormatter?: HistogramLabelFormatCallback;
    histogramDataLabelFormatter?: HistogramLabelFormatCallback;
    pieChartDataLabelFormatter?: PieChartLabelFormatCallback;
    pieChartTooltipFormatter?: PieChartLabelFormatCallback;
    pieChartSliceGrouperCallback?: (this: unknown, event: PieSeriesValidatedEvent) => Promise<void>;
}
export interface AxisDummyData {
    numberFormatCallback?: (value: string | number) => string;
    truncationCallback?: (value: string) => string;
    fontStyleCallback?: (value: string) => string;
    labelsSymbol?: MappedTextSymbol;
    debouncedAxisLabelRotationCallback?: DebouncedFunc<(event: AxisValidatedEvent) => void>;
    debouncedAxisLabelWrapCallback?: DebouncedFunc<(event: DataRangeChangedEvent) => void>;
    debouncedAxisLabelStaggerCallback?: DebouncedFunc<(event: DataRangeChangedEvent) => void>;
    debouncedSizechangedForMinGridDistanceCallBack?: DebouncedFunc<(event: AxisSizeChangedEvent) => void>;
}
export interface MarkerDummyData {
    isBulletMarker?: boolean;
}
export interface LabelDummyData {
    isDataLabel?: boolean;
    isGaugeAxisInnerLabel?: boolean;
    isGuide?: boolean;
}
export interface LegendDummyData {
    pieChartLegendFormatCallback?: PieChartLabelFormatCallback;
}
export interface CursorDummyData {
    selectEndedCallbackDisposer?: IDisposer;
}
