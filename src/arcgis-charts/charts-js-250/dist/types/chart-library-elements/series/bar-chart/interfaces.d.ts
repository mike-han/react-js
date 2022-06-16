import { ColumnSeries } from "@amcharts/amcharts4/charts";
import { ISimpleFillSymbol } from "@esri/arcgis-rest-types";
import { WebChartBarChartSeries } from "@arcgis/charts-spec";
import { RendererInfo } from "@arcgis/charts-shared-utils";
import { UpdateSeriesProps, UpdateSeriesStyleProps, InitializeSeriesProps } from "../interfaces";
export interface InitializeBarSeriesProps extends InitializeSeriesProps {
    seriesConfig: WebChartBarChartSeries;
}
export interface UpdateBarSeriesProps extends UpdateSeriesProps {
    seriesConfig: WebChartBarChartSeries;
    series: ColumnSeries;
    rendererInfo?: RendererInfo;
}
export interface UpdateBarSeriesStyleProps extends UpdateSeriesStyleProps<ISimpleFillSymbol> {
    series: ColumnSeries;
}
export interface BarSeriesLastUpdateInfo {
    numberOfColumnsUpdated: number;
    updateProps: UpdateBarSeriesProps;
}
