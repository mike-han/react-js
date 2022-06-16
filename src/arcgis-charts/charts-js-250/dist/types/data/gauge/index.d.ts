import { WebChartGaugeSeries, WebChartDataSources, WebChartDataItem } from "@arcgis/charts-spec";
import { QueryObject, AbortControllerKeyType } from "@arcgis/charts-shared-utils";
/**
 * Fetches the gauge data and returns it.
 * @param props
 */
export declare function fetchFinishedGaugeData(props: {
    queryObject?: QueryObject;
    dataSource: WebChartDataSources;
    series: WebChartGaugeSeries;
    abortKey?: AbortControllerKeyType;
}): Promise<WebChartDataItem[]>;
