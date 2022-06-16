import { Color as esriColor, ISimpleMarkerSymbol, ISimpleFillSymbol, ISimpleLineSymbol } from "@esri/arcgis-rest-types";
import { Sprite } from "@amcharts/amcharts4/core";
import { WebChartConfigFields, WebChartBarChartSeries, WebChartScatterPlotSeries, WebChartHistogramSeries, WebChartDataSources, WebChartLineChartSeries, WebChartPieChartSeries } from "@arcgis/charts-spec";
import { QueryType, RendererInfo } from "@arcgis/charts-shared-utils";
interface ElementsProps {
    element: Sprite;
    visible?: boolean;
    propertyFields?: WebChartConfigFields;
    defaultToColorFromRamp?: boolean;
    colorRampIndex?: number;
}
export interface MarkerElementsProps extends ElementsProps {
    element: Sprite;
    markerSymbol?: ISimpleMarkerSymbol;
}
export interface FillElementsProps extends ElementsProps {
    fillSymbol?: ISimpleFillSymbol;
}
export interface LineElementsProps extends ElementsProps {
    lineSymbol?: ISimpleLineSymbol;
}
export interface UpdateSymbolProps<T extends ISimpleFillSymbol | ISimpleLineSymbol | ISimpleMarkerSymbol> {
    element: Sprite;
    seriesConfig: WebChartBarChartSeries | WebChartLineChartSeries | WebChartScatterPlotSeries | WebChartHistogramSeries | WebChartPieChartSeries;
    seriesSymbol: T;
    dataIndex: number;
    seriesIndex?: number;
    dataSource: WebChartDataSources;
    rendererInfo?: RendererInfo;
    mapRendererColorToSeries?: Map<string, esriColor>;
    rendererElementColor?: esriColor;
    y?: string;
    queryType?: QueryType;
}
export {};
