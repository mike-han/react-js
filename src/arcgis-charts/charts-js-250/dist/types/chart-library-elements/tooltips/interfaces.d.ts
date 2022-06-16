import { ColumnSeries, LineSeries } from "@amcharts/amcharts4/charts";
import { IField } from "@esri/arcgis-rest-types";
import { BarAndLineTooltipFormatCallback } from "../../interfaces";
export interface BarAndLineChartTooltipProps {
    series: ColumnSeries | LineSeries;
    fieldList?: IField[];
    inlineDisplayLabelField?: string;
    commonStrings: any;
    setTimeBinningInfoWhenNotProvided?: boolean;
    seriesIndex: number;
    tooltipFormatter?: BarAndLineTooltipFormatCallback;
}
