import { ISimpleFillSymbol, ISimpleLineSymbol, ISimpleMarkerSymbol } from "@esri/arcgis-rest-types";
import { ConfigFieldsStyleProps } from "./interfaces";
import { UpdateSymbolProps } from "../../../chart-library-elements/line-fill-marker/interfaces";
/**
 * Returns a marker or fill symbol based on the styling information coming from the inline data (config fields)
 * @param props
 */
export declare function getConfigFieldsStyle<T extends ISimpleMarkerSymbol | ISimpleFillSymbol | ISimpleLineSymbol>(props: ConfigFieldsStyleProps<T>): T;
/**
 * Completes a series symbol (fill, line or marker) with information coming from the config fields.
 * @param props
 */
export declare function getElementSymbolFromConfigFields<T extends ISimpleFillSymbol | ISimpleLineSymbol | ISimpleMarkerSymbol>(props: UpdateSymbolProps<T>): T;
