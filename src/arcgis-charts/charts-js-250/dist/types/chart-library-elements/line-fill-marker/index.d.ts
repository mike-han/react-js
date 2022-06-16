import { SelectionThemeProperties } from "@arcgis/charts-shared-utils";
import { ISpriteAdapters, ISpriteProperties, SpriteState } from "@amcharts/amcharts4/core";
import { ISimpleFillSymbol, ISimpleLineSymbol, ISimpleMarkerSymbol } from "@esri/arcgis-rest-types";
import { IColumnProperties, IColumnAdapters } from "@amcharts/amcharts4/charts";
import { MarkerElementsProps, LineElementsProps, FillElementsProps, UpdateSymbolProps } from "./interfaces";
import { MappedFillSymbol, MappedLineSymbol, MappedMarkerSymbol } from "../symbols/interfaces";
/**
 * Updates the [styling](https://esri.github.io/arcgis-rest-js/api/types/ISimpleMarkerSymbol/) of marker elements.
 * @param props
 */
export declare function updateMarkerElements(props: MarkerElementsProps): MappedMarkerSymbol | undefined;
/**
 * Updates the [styling](https://esri.github.io/arcgis-rest-js/api/types/ISimpleLineSymbol/) of line elements.
 * @param props
 */
export declare function updateLineElements(props: LineElementsProps): MappedLineSymbol | undefined;
/**
 * Updates the [styling](https://esri.github.io/arcgis-rest-js/api/types/ISimpleFillSymbol/) of fill elements.
 * @param props
 */
export declare function updateFillElements(props: FillElementsProps): MappedFillSymbol | undefined;
/**
 * Computes a symbol based on the information from the config and updated with either the renderer color or
 * the config fields information when color match is on.
 * Then applies that symbol to provided element (bar, marker, segment...)
 * @param props
 * @returns the symbol applied to the element
 */
export declare function updateSymbolElementStyle<T extends ISimpleFillSymbol | ISimpleLineSymbol | ISimpleMarkerSymbol, U extends MappedFillSymbol | MappedLineSymbol | MappedMarkerSymbol>(props: UpdateSymbolProps<T>): {
    symbolWithColorInfo: T;
    stylingInfo: U | undefined;
};
/**
 * Applies styling properties related to the selection state of a chart.
 * @param state The state to apply the styling to
 * @param theme The object containing the styling information
 */
export declare function applySelectionTheme(state: SpriteState<IColumnProperties, IColumnAdapters> | SpriteState<ISpriteProperties, ISpriteAdapters>, theme?: SelectionThemeProperties): void;
