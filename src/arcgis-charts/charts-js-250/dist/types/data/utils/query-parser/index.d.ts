import { WebChartQuery, WebChartBarChartSeries, WebChartPieChartSeries, WebChartLineChartSeries, WebChartDataItem, TimeIntervalInfo } from "@arcgis/charts-spec";
import { IExtent } from "@esri/arcgis-rest-types";
import { QueryType, QueryObject } from "@arcgis/charts-shared-utils";
import { UniqueQuery } from "./interfaces";
/**
 * Computes the extent to be used by the query. We prioritize the feature layer view extent
 * over the series config extent.
 * @param queryObject The feature layer or feature layer view
 * @param configExtent The extent defined at the series config level
 */
export declare function getQueryExtent(queryObject: QueryObject, configExtent?: IExtent): Promise<IExtent | undefined>;
/**
 * Modifies the input `WebChartQuery` by assigning a default value for its `outStatisticFieldName`.
 *
 * When the statisticType is `RESTStatisticType.DiscretePercentile` or `RESTStatisticType.ContinuousPercentile,
 * if the query is for a time binning series, this function will delete the `statisticParameters` object and
 * resets the `statisticType` to Count regardless; otherwise it adds the statisticParameters and/or assigns
 * a default value to the `outStatistics` properties of the query if `statisticParameters` is not present.
 *
 * Notes: outStatistics should only be modified through this function
 * @param props
 */
export declare function modifyOutStatistics(props: {
    uniqueQuery: WebChartQuery;
    y?: string;
    queryObject?: QueryObject;
    queryType?: QueryType;
    isTimeBinningSeries: boolean;
}): Promise<void>;
/**
 * Function building a unique query based on the chart series config.
 * @param queryType
 * @param series
 */
export declare function buildUniqueQuery(props: {
    queryType: QueryType;
    series: WebChartBarChartSeries[] | WebChartLineChartSeries[] | WebChartPieChartSeries[];
    queryObject?: QueryObject;
    isTimeBinningSeries: boolean;
    timeIntervalInfo?: TimeIntervalInfo;
}): Promise<UniqueQuery>;
/**
 * Indicates whether an object contains the result of a calculated expression coming from a
 * query (similar to "EXPR_1").
 * @param dataItem the object to look into
 * @returns An object containing a boolean indicating the expression's presence, and the expression key that matched
 */
export declare function isQueryCalculatedExprInItem(dataItem: WebChartDataItem): {
    isInItem: boolean;
    expr?: string;
};
