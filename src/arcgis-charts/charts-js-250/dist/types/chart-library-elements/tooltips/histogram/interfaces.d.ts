import { ColumnSeries } from "@amcharts/amcharts4/charts";
import { IField } from "@esri/arcgis-rest-types";
import { WebChartAxis, WebChartHistogramSeries } from "@arcgis/charts-spec";
import { HistogramLabelFormatCallback } from "../../../interfaces";
export interface HistogramTooltipProps {
    series: ColumnSeries;
    axes: [WebChartAxis, WebChartAxis];
    seriesConfig: WebChartHistogramSeries;
    fieldList?: IField[];
    tooltipFormatter?: HistogramLabelFormatCallback;
}
