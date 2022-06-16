import { WebChartConfigFields, WebChartDataItem } from "@arcgis/charts-spec";
import { ISimpleFillSymbol, ISimpleLineSymbol, ISimpleMarkerSymbol } from "@esri/arcgis-rest-types";
interface CommonStylingProps {
    dataKeys: WebChartConfigFields;
    dataItem: WebChartDataItem;
}
export interface OutlineStylingProps extends CommonStylingProps {
    outline: ISimpleLineSymbol;
}
export interface SymbolStylingProps<T extends ISimpleMarkerSymbol | ISimpleFillSymbol | ISimpleLineSymbol> extends CommonStylingProps {
    currentSymbol: T;
    seriesIndex?: number;
}
export interface ConfigFieldsStyleProps<T extends ISimpleMarkerSymbol | ISimpleFillSymbol | ISimpleLineSymbol> {
    currentSymbol: T;
    seriesIndex?: number;
    dataItem?: WebChartDataItem;
    configFields?: WebChartConfigFields;
    y?: string;
}
export {};
