import { ISimpleLineSymbol, ISimpleFillSymbol, ISimpleMarkerSymbol, ITextSymbol } from "@esri/arcgis-rest-types";
import { Label } from "@amcharts/amcharts4/core";
import { MappedLineSymbol, MappedMarkerSymbol, MappedTextSymbol, MappedFillSymbol } from "./interfaces";
/**
 * Maps Esri's symbol (SimpleLineSymbol, SimpleFillSymbol, SimpleMarkerSymbol) with color ramp options to an object informing the charting library **how to draw the symbol**
 *
 * @param symbol
 * @param defaultToColorFromRamp
 * @param colorRampIndex
 * @returns
 */
export declare function mapSymbol<T extends ISimpleFillSymbol | ISimpleLineSymbol | ISimpleMarkerSymbol>(props: {
    symbol: T;
    defaultToColorFromRamp?: boolean;
    colorRampIndex?: number;
}): MappedFillSymbol | MappedLineSymbol | MappedMarkerSymbol | undefined;
/**
 * Maps Esri's [ITextSymbol](https://esri.github.io/arcgis-rest-js/api/types/ITextSymbol/) to an object informing the charting library **how to format text**
 * Properties that will not be mapped are:
 * - `style`: because there is no info on what it expresses. Font style is expressed via `ITextSymbol.font.style` instead.
 * @param input
 */
export declare function mapTextSymbol(input: ITextSymbol, defaults?: Partial<Label>): MappedTextSymbol;
