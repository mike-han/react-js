import { LineSeries, XYChart } from "@amcharts/amcharts4/charts";
import { ISimpleLineSymbol, ISimpleMarkerSymbol, Color as esriColor } from "@esri/arcgis-rest-types";
import { WebChartLineChartSeries } from "@arcgis/charts-spec";
import { RendererInfo } from "../../../../../arcgis-charts-shared-utils/dist/types";
import { InitializeSeriesProps, UpdateSeriesProps, UpdateSeriesStyleProps } from "../interfaces";
export interface InitializeLineSeriesProps extends InitializeSeriesProps {
    seriesConfig: WebChartLineChartSeries;
    chart: XYChart;
    numberOfChartSeries: number;
    ignoreSmoothRenderingLimit?: boolean;
}
export interface UpdateLineSeriesProps extends UpdateSeriesProps {
    seriesConfig: WebChartLineChartSeries;
    series: LineSeries;
    rendererInfo: RendererInfo;
    mapRendererColorToSeries?: Map<string, esriColor>;
}
export interface UpdateLineSeriesStyleProps<T extends ISimpleLineSymbol | ISimpleMarkerSymbol> extends UpdateSeriesStyleProps<T> {
    series: LineSeries;
}
