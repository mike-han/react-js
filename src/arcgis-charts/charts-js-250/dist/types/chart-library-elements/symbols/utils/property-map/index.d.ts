import { ITextSymbol, Color, ISimpleLineSymbol, ISimpleMarkerSymbol, SimpleFillSymbolStyle } from "@esri/arcgis-rest-types";
import { Color as AmChartsColor, Label, Pattern } from "@amcharts/amcharts4/core";
import { AxisLabel, LineSeries } from "@amcharts/amcharts4/charts";
import SimpleLineSymbol from "esri/symbols/SimpleLineSymbol";
/**
 * Sets pattern color for bar chart based on a specific pattern type
 * @param fill
 * @param style
 * TODO: esriSFSCross, esriSFSDiagonalCross patterns not handled
 */
export declare function mapFillSymbolStyle(fill: AmChartsColor, style?: SimpleFillSymbolStyle): Pattern | undefined;
/**
 * Getting visualization library compliant color object
 * In REST API, `a` or `alpha` belongs to [0, 255] so
 * scaling it down to [0, 1.0] for the charting library's
 * color constructor.
 * @param color
 */
export declare function mapColor(color?: Readonly<Color> | null): AmChartsColor;
/**
 * Converts the input angle to -359 to 359 range
 * @param angle
 * @param defaultAngle
 */
export declare function mapAngle(angle?: number, defaultAngle?: number): number;
/**
 * Map Esri's SimpleLineSymbolStyle to a string value representing the stroke-line-cap property.
 * This function maps both jsapi line symbol and rest api line symbols.
 * @param lineStyle The line symbol style to map
 * @param forceSquareLineCap Indicate whether to use 'square' for stroke-line-cap property. Default value is false; meaning 'round' will be used.
 */
export declare function mapLineSymbolStyle(lineStyle?: ISimpleLineSymbol["style"] | SimpleLineSymbol["style"], forceSquareLineCap?: boolean): LineSeries["strokeLinecap"];
/**
 * Generates SVG path for marker style and size
 * The SVG paths are adopted from [JSAPI 3.x](https://devtopia.esri.com/WebGIS/arcgis-js-api/blob/master/esri/symbols/SimpleMarkerSymbol.js#L133)
 * @param style
 * @param size
 */
export declare function mapPath(style: ISimpleMarkerSymbol["style"], size?: number): string;
export declare function mapHAlignmentToLocation(horizontalAlignment: ITextSymbol["horizontalAlignment"]): AxisLabel["location"];
export declare function mapHAlignmentToAlign(alignment: ITextSymbol["horizontalAlignment"], defaults?: Label["align"]): Label["align"];
export declare function mapHAlignmentToHCenter(alignment: ITextSymbol["horizontalAlignment"], defaults?: Label["horizontalCenter"]): Label["horizontalCenter"];
export declare function mapVAlignmentToVAlign(alignment: ITextSymbol["verticalAlignment"], defaults?: Label["verticalCenter"]): Label["valign"];
export declare function mapVAlignmentToVCenter(alignment: ITextSymbol["verticalAlignment"], defaults?: Label["verticalCenter"]): Label["verticalCenter"];
/**
 * Attaches inline css styling to a string.
 * The output format depends on the props.type:
 *   - if "html": <p style="...">text</p>"
 *   - if "amCharts" (default type): [...]text[/]"
 * @param props.textSymbol The symbol containing the font, kerning and text
 * @param props.placeholderString A string used over the textSymbol.text if provided
 * @param props.format Describes the expected output format
 * @returns
 */
export declare function attachInlineCSS(props: {
    textSymbol?: ITextSymbol;
    placeholderString?: string;
    format?: "amCharts" | "html";
}): string;
/**
 * Converts line style to stoke dash array. The function can convert the rest or jsapi line style symbols to amCharts line symbols.
 * @param inputLineStyle input style that can define the line styles
 * @param inputWidth width of the line.
 */
export declare function mapLineStyleToDashArray(inputLineStyle: SimpleLineSymbol["style"] | ISimpleLineSymbol["style"], inputWidth: SimpleLineSymbol["width"]): LineSeries["strokeDasharray"];
