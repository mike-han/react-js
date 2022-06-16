import { ColumnSeries, LineSeries } from "@amcharts/amcharts4/charts";
import { Label, NumberFormatter } from "@amcharts/amcharts4/core";
import { ITextSymbol } from "@esri/arcgis-rest-types";
import { WebChartStackedKinds, WebChartText, NumberFormatOptions, DateTimeFormatOptions, CategoryFormatOptions, WebChartTypes } from "@arcgis/charts-spec";
import { BarAndLineDataLabelFormatCallback, HistogramLabelFormatCallback, ScatterPlotLabelFormatCallback } from "../../../interfaces";
export interface DefaultDataLabelFormatterProps {
    numberFormatter: NumberFormatter;
    dataLabelsConfigContent: ITextSymbol;
    stackedType?: WebChartStackedKinds;
}
export interface DataLabelUpdateProps {
    series: ColumnSeries | LineSeries;
    seriesType: WebChartTypes;
    dataLabel?: Label;
    labelDefaults?: Partial<Label>;
    isRotated?: boolean;
    stackedType?: WebChartStackedKinds;
    dataLabelsConfig?: WebChartText;
    yAxisValueFormat?: NumberFormatOptions | DateTimeFormatOptions | CategoryFormatOptions;
    defaultDataLabelFormatter?: (props: DefaultDataLabelFormatterProps) => HistogramLabelFormatCallback | ScatterPlotLabelFormatCallback | BarAndLineDataLabelFormatCallback;
    customDataLabelFormatter?: HistogramLabelFormatCallback | ScatterPlotLabelFormatCallback | BarAndLineDataLabelFormatCallback;
}
