import { WebChartConfigFields, WebChartTypes, WebChartBarChartSeries, WebChartHistogramSeries, WebChartLineChartSeries, WebChartPieChartSeries } from "@arcgis/charts-spec";
import { Color as esriColor } from "@esri/arcgis-rest-types";
import { Sprite } from "@amcharts/amcharts4/core";
import UniqueValueRenderer from "esri/renderers/UniqueValueRenderer";
import SimpleRenderer from "esri/renderers/SimpleRenderer";
import { QueryType } from "@arcgis/charts-shared-utils";
export declare const InternalConfigFields: {
    readonly fillColor: "_esriFillColor";
    readonly fillOpacity: "_esriFillOpacity";
    readonly fillStyle: "_esriFillStyle";
    readonly lineColor: "_esriLineColor";
    readonly lineOpacity: "_esriLineOpacity";
    readonly lineWidth: "_esriLineWidth";
    readonly lineStyle: "_esriLineStyle";
    readonly outlineColor: "_esriOutline";
    readonly outlineWidth: "_esriOutlineWidth";
    readonly outlineOpacity: "_esriOutlineOpacity";
    readonly outlineStyle: "_esriOutlineStyle";
    readonly markerSize: "_esriMarkerSize";
};
export interface ComputedConfigFieldKeysProps {
    y?: string;
    keys?: WebChartConfigFields;
}
export interface RendererSeriesStyleProps {
    seriesId: string;
    mapRendererColorToSeries: Map<string, esriColor>;
}
export interface RendererUniqueValueStyleProps {
    element: Sprite;
    mapRendererColorToSeries: Map<string, esriColor>;
    rendererField: string;
}
interface StylingInfoFromRendererProps {
    series: WebChartBarChartSeries | WebChartLineChartSeries | WebChartHistogramSeries | WebChartPieChartSeries;
    seriesType?: WebChartTypes;
    mapRendererColorToSeries: Map<string, esriColor>;
}
export interface StylingInfoFromUniqueValueRendererProps extends StylingInfoFromRendererProps {
    flRenderer: UniqueValueRenderer;
    queryType?: QueryType;
}
export interface StylingInfoFromSimpleRendererProps extends StylingInfoFromRendererProps {
    flRenderer: SimpleRenderer;
}
export {};
