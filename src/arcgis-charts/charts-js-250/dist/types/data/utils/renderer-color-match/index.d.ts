import { WebChartConfigFields, WebChartBarChartSeries, WebChartHistogramSeries, WebChartLineChartSeries, WebChartPieChartSeries, WebChartScatterPlotSeries } from "@arcgis/charts-spec";
import { QueryType, RendererInfo } from "@arcgis/charts-shared-utils";
import { Color as esriColor } from "@esri/arcgis-rest-types";
import FeatureLayer from "esri/layers/FeatureLayer";
import Graphic from "esri/Graphic";
import { Sprite } from "@amcharts/amcharts4/core";
import { ComputedConfigFieldKeysProps, RendererSeriesStyleProps, RendererUniqueValueStyleProps } from "./interfaces";
/**
 * Returns the property names carrying the styling information among the series data.
 * The `y` value helps recognizing a series from another, and is added as a suffix to the
 * `keys' name.
 * @param props
 */
export declare function getComputedConfigFieldKeys(props: ComputedConfigFieldKeysProps): WebChartConfigFields;
/**
 * Reads the renderer information from the Feature Layer and completes the series styling accordingly.
 * @param series
 * @param featureLayer
 */
export declare function getColorMapFromRenderer(props: {
    series: WebChartBarChartSeries | WebChartLineChartSeries | WebChartHistogramSeries | WebChartPieChartSeries;
    featureLayer?: FeatureLayer;
    queryType?: QueryType;
    mapRendererColorToSeries: Map<string, esriColor>;
}): void;
/**
 * Returns a color symbol based on the styling information coming from a simple renderer
 * @param props
 */
export declare function getRendererSeriesColor(props: RendererSeriesStyleProps): esriColor | undefined;
/**
 * Returns a color based on the styling information coming from a unique value renderer
 * @param props
 */
export declare function getRendererUniqueValueColor(props: RendererUniqueValueStyleProps): esriColor | undefined;
/**
 * Returns the displayed symbol color from a Graphic, or undefined if nothing's found.
 * The opacity is overridden to apply the default opacity.
 * The `symbolUtils` param is needed to avoid calling loadJSAPIModules for every feature.
 * @param graphic
 * @param symbolUtils
 */
export declare function getDisplayedSymbolColor(graphic: Graphic, symbolUtils: __esri.symbolUtils): Promise<esriColor | undefined>;
/**
 * Matches the information from an element (bar, marker, segment...) with renderer information, and returns
 * the color to apply if there's a match.
 * @param props
 * @returns the color from the renderer to be applied to the element, or undefined if there's no match
 */
export declare function getElementSymbolFromColorMatch(props: {
    element: Sprite;
    seriesConfig: WebChartBarChartSeries | WebChartLineChartSeries | WebChartScatterPlotSeries | WebChartHistogramSeries | WebChartPieChartSeries;
    rendererInfo?: RendererInfo;
    mapRendererColorToSeries?: Map<string, esriColor>;
    rendererElementColor?: esriColor;
    queryType?: QueryType;
}): esriColor | undefined;
