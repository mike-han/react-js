import { WebChartAxis, WebChartScatterPlotSeries } from "@arcgis/charts-spec";
import { LineSeries } from "@amcharts/amcharts4/charts";
import { IField } from "@esri/arcgis-rest-types";
import { ScatterPlotLabelFormatCallback } from "../../../interfaces";
export interface ScatterPlotTooltipProps {
    axes: [WebChartAxis, WebChartAxis];
    seriesConfig: WebChartScatterPlotSeries;
    lineSeries: LineSeries;
    fieldList?: IField[];
    tooltipFormatter?: ScatterPlotLabelFormatCallback;
}
