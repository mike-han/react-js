import { XYChart, PieChart, ColumnSeries, LineSeries, PieSeries } from "@amcharts/amcharts4/charts";
import { QueryObject, SelectionTheme } from "@arcgis/charts-shared-utils";
import { WebChartTypes, WebChartDataSources, WebChart } from "@arcgis/charts-spec";
import { Sprite, IRectangle } from "@amcharts/amcharts4/core";
import { ChartOptions, HitEvent, UpEvent } from "../../interfaces";
/**
 * Finds if an element (bar, marker...) is within a selection range.
 * @param element
 * @param cursorSelectionRectangle
 */
export declare function isElementIncludedInSelection(element: Sprite, cursorSelectionRectangle?: IRectangle): boolean;
/**
 * This function sets the theme applied to the elements (bars, slices...) when they are selected.
 * @param props
 */
export declare function setSelectionTheme(props: {
    element: Sprite;
    useNativeState?: boolean;
    customSelectionTheme?: SelectionTheme;
}): void;
/**
 * Set the state on the chart element.
 * @param props.element The element of which state is to be toggled.
 * @param props.selected Indicate whether the element is the target of, or part of, a group selection via a hit or range selection event.
 * @param props.multiSelect Indicate whether multiple selection mode is currently on. Default value is true if not provided.
 * @param props.isDateOrCategoryAxis Indicate whether the current x-axis is a date or category axis.  Default value is false if not provided.
 * @param props.useNativeState Indicate whether native active state should be used.  Default value is false if not provided.
 * @param props.backToDefaultState Indicate whether default inactive state should be used. Default value is false if not provided.
 */
export declare function toggleStateForElement(props: {
    element: Sprite;
    selected: boolean;
    multiSelect?: boolean;
    isDateOrCategoryAxis?: boolean;
    useNativeState?: boolean;
    backToDefaultState?: boolean;
}): boolean;
/**
 * Indicates whether the multi-selection is requested, either because the user is pressing the Ctrl/Cmd key when performing a selection,
 * or because the multi-selection-with-ctrl-key option has been selected.
 * @param ev The click event
 */
export declare function isMultiSelectionOn(ev: HitEvent | UpEvent): boolean;
/**
 * Function used after a "hit" is done on a chart. The resulting action (selection) should be considered only if the click
 * didn't happen on the following elements:
 * - zoom minus button (XY charts)
 * - legend (all charts)
 * - axis labels (that have their own selection event handler) (XYCharts)
 * @param chart
 */
export declare function isHitOnSelectableArea(chart: XYChart | PieChart): boolean;
/**
 * Apply a selection on the chart. Delays the execution if the series are not ready.
 * @param props
 */
export declare function applySelectionOnSeries(props: {
    seriesType: WebChartTypes;
    series: ColumnSeries | LineSeries | PieSeries;
    dataSource: WebChartDataSources;
    newSeries: WebChart["series"];
    queryObject: QueryObject;
    elementsToApplySelectionTo: Sprite[];
    options?: ChartOptions;
    dataWasUpdated?: boolean;
    rotationChanged?: boolean;
    sliceGrouperWasUpdated?: boolean;
    xAxisField: string;
    yAxisField?: string;
}): Promise<void>;
