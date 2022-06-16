import { WebChartDataItemValue, WebChartDataItem, WebChartQuery, WebChartGaugeSeries, WebChartPieChartSeries, WebChartBarChartSeries, WebChartLineChartSeries, WebChartConfigFields, WebChartDataSources, WebChartDataTypes, WebChartTypes } from "@arcgis/charts-spec";
import { DataWarningKeywords, QueryObject, QueryType, AbortControllerKeyType } from "@arcgis/charts-shared-utils";
import { IStatisticDefinition } from "@esri/arcgis-rest-types";
export interface SummarizeDataProps {
    data: [WebChartDataItemValue, WebChartDataItem[]][];
    statType: IStatisticDefinition["statisticType"];
    onStatisticField: string;
    seriesX: string;
    seriesY?: string;
    propertyFields?: WebChartConfigFields;
}
export interface GroupAndSummarizeProps {
    query: WebChartQuery;
    data: WebChartDataItem[];
    statType: IStatisticDefinition["statisticType"];
    series: WebChartGaugeSeries | WebChartPieChartSeries | WebChartLineChartSeries | WebChartBarChartSeries;
    propertyFields?: WebChartConfigFields;
}
export interface ProcessUniqueQueryProps {
    queryObject?: QueryObject;
    uniqueQuery: WebChartQuery;
    dataSource: WebChartDataSources;
    series: WebChartBarChartSeries[] | WebChartLineChartSeries[] | WebChartPieChartSeries[];
    queryType: QueryType;
    mapToStatField: Map<string, string>;
    filter?: string;
    abortKey?: AbortControllerKeyType;
    xAxisValueFormatType?: WebChartTypes;
    elementCount?: number;
    isTimeBinningSeries: boolean;
}
export interface DataInfo {
    valid: boolean;
    invalidType?: DataWarningKeywords;
    count?: number;
    data?: WebChartDataTypes;
}
