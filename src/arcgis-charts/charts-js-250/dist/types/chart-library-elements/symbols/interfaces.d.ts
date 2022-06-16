import { Label, Color, DropShadowFilter, Pattern, Sprite } from "@amcharts/amcharts4/core";
import { LineSeries } from "@amcharts/amcharts4/charts";
export interface MappedLineSymbol {
    strokeWidth: LineSeries["strokeWidth"];
    strokeDasharray: LineSeries["strokeDasharray"];
    strokeLinecap: LineSeries["strokeLinecap"];
    stroke: Color;
    strokeOpacity: LineSeries["strokeOpacity"];
}
export interface MappedFillSymbol {
    pattern?: Pattern;
    fill: Color;
    outline: MappedLineSymbol;
}
export interface MappedMarkerSymbol {
    fill: Color;
    path: Sprite["path"];
    outline: MappedLineSymbol;
    xOffset: Sprite["dx"];
    yOffset: Sprite["dy"];
    angle: Sprite["rotation"];
}
export interface MappedTextSymbol {
    fill: Color;
    fontFamily: Label["fontFamily"];
    fontSize: number;
    fontWeight: Label["fontWeight"];
    text: Label["text"];
    align: Label["align"];
    valign: Label["valign"];
    verticalCenter: Label["verticalCenter"];
    horizontalCenter: Label["horizontalCenter"];
    textDecoration: Label["textDecoration"];
    angle: Label["rotation"];
    xOffset: Label["dx"];
    yOffset: Label["dy"];
    backgroundFill: Color;
    borderWidth: Label["background"]["strokeWidth"];
    borderFill: Color;
    haloSize: DropShadowFilter["blur"];
    haloColor: Color;
    rtl: Label["rtl"];
    wrap: Label["wrap"];
    maxWidth: Label["maxWidth"];
}
