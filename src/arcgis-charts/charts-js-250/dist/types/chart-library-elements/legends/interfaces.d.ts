import { IRoundedRectangleAdapters } from "@amcharts/amcharts4/core";
import { WebChartSeries, WebChartLegend, WebChartTypes } from "@arcgis/charts-spec";
import { QueryType } from "../../../../arcgis-charts-shared-utils/dist/types";
import { LegendElements } from "../../interfaces";
export interface UpdateLegendProps {
    legendElements: LegendElements;
    firstSeries: WebChartSeries;
    webChartLegend?: WebChartLegend;
    seriesType?: WebChartTypes;
    queryType?: QueryType;
}
export interface OrderLegendItemsProps {
    legendElements: LegendElements;
    firstSeries: WebChartSeries;
}
export declare type CornerRadiusProperty = Extract<keyof IRoundedRectangleAdapters, "cornerRadiusBottomLeft" | "cornerRadiusBottomRight" | "cornerRadiusTopLeft" | "cornerRadiusTopRight">;
