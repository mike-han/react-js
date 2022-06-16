import { QueryObject, AbortControllerKeyType } from "@arcgis/charts-shared-utils";
import { WebChartDataItem, WebChartDataSources, WebChartBarChartSeries, WebChartPieChartSeries, WebChartLineChartSeries } from "@arcgis/charts-spec";
export interface CompleteDataWithMissingCategoriesProps {
    seriesData: WebChartDataItem[];
    webChartSeries: WebChartBarChartSeries[] | WebChartLineChartSeries[] | WebChartPieChartSeries[];
    categoryOrDateCount: number | undefined;
    dataSource: WebChartDataSources;
    queryObject?: QueryObject;
    filter?: string;
    abortKey?: AbortControllerKeyType;
}
