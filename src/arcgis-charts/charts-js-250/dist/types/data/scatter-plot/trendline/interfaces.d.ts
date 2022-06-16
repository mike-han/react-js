import { QueryObject } from "@arcgis/charts-shared-utils";
import { WebChartDataItem, WebChartDataSources } from "@arcgis/charts-spec";
export interface TrendlineDataProps {
    data?: WebChartDataItem[];
    statsMap: Map<string, number>;
    queryObject: QueryObject;
    dataSource: WebChartDataSources;
    x: string;
    y: string;
    filter?: string;
}
export declare const QueryAnalyticForTrendline: {
    dataFormat: string;
    outputFormat: string;
    typeKey: string;
    typeValue: string;
    fieldValue: string;
    slopePropertyList: string[];
    interceptPropertyList: string[];
    r2PropertyList: string[];
};
