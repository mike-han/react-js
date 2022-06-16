import { QueryObject, AbortControllerKeyType } from "@arcgis/charts-shared-utils";
import { WebChartDataTransformations, WebChartHistogramSeries, WebChartDataItem, WebChartDataSources } from "@arcgis/charts-spec";
import Graphic from "esri/Graphic";
export interface ValueExpressionProps {
    field: string;
    transformation: WebChartDataTransformations;
}
export interface TransformHistogramDataProps {
    series: WebChartHistogramSeries;
    rawData?: WebChartDataItem[] | Graphic[];
    queryObject?: QueryObject;
    filter?: string;
    dataSource: WebChartDataSources;
    countIncludingNulls: number;
    countExcludingNulls: number;
    abortKey?: AbortControllerKeyType;
}
export interface DataTransformationProps {
    field: string;
    data: WebChartDataItem[] | Graphic[];
    transformation: WebChartDataTransformations;
    isInlineData: boolean;
}
