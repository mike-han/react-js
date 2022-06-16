import { ISimpleFillSymbol, ISimpleLineSymbol, ISimpleMarkerSymbol, Color as esriColor } from "@esri/arcgis-rest-types";
import { WebChart, WebChartAxis, WebChartDataSources } from "@arcgis/charts-spec";
import { QueryObject, SelectionTheme, SeriesSymbolsMap } from "@arcgis/charts-shared-utils";
import { AxisPair } from "../axes/utils/axis-renderer/interfaces";
import { LoaderHandle } from "../loading-indicator/interfaces";
import { ChartOptions } from "../../interfaces";
import { UpdateSymbolProps } from "../line-fill-marker/interfaces";
export interface InitializeSeriesProps {
    axisPair: AxisPair;
    hideLoaderHandle: LoaderHandle["hideLoader"];
    selectionTheme?: SelectionTheme;
    tooltipFormatter?: ChartOptions["tooltipFormatter"];
}
export interface UpdateSeriesProps {
    numberOfSeries: number;
    seriesIndex: number;
    dataSource: WebChartDataSources;
    newSeries: WebChart["series"];
    queryObject?: QueryObject;
    axes: [WebChartAxis, WebChartAxis];
    rotationChanged?: boolean;
    options?: ChartOptions;
    dataWasUpdated?: boolean;
    inlineDisplayLabelField?: string;
    seriesSymbolMapForEvent: SeriesSymbolsMap;
    commonStrings: any;
    mapRendererColorToSeries?: Map<string, esriColor>;
}
export interface UpdateSeriesStyleProps<T extends ISimpleFillSymbol | ISimpleMarkerSymbol | ISimpleLineSymbol> {
    numberOfSeries: number;
    iSeries: number;
    symbolProps: Omit<UpdateSymbolProps<T>, "element" | "dataIndex">;
    seriesSymbolMapForEvent: SeriesSymbolsMap;
}
