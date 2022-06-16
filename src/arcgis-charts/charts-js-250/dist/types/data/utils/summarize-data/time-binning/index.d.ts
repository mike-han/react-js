import { QueryObject } from "@arcgis/charts-shared-utils";
import { WebChartDataItem, WebChartLineChartSeries, WebChartTimeIntervalUnits, WebChartSeriesType, TimeIntervalInfo } from "@arcgis/charts-spec";
import { DateRange, TimeBinningStatistics } from "./interfaces";
/**
 * Given `getNumberOfBinsWithinDataRange()` returns a diff in days for weeks, months and years, we need
 * to divide the result to get a better approximation of the element count.
 * TODO: we need to find a better way to do that by using the `moment` diff function
 * @param initialDayCount The initial number of elements in days
 * @param timeIntervalUnits The unit used to bin the temporal data
 * @returns
 */
export declare function adjustElementCount(initialDayCount: number, timeIntervalUnits?: WebChartTimeIntervalUnits): number;
export declare function getNumberOfBinsWithinDataRange(props: {
    dateMinTimestamp: number;
    dateMaxTimestamp: number;
    timeIntervalInfo: TimeIntervalInfo;
}): {
    numberOfFinalBinsWithinDataRange: number;
    numberOfSingleBinsWithinDataRange: number;
};
export declare function getTimeBinningStatistics(props: {
    queryObject: QueryObject;
    x: string;
    filter?: string;
}): Promise<TimeBinningStatistics>;
export declare function processTimeBinningData(props: {
    queryObject: QueryObject;
    filter?: string;
    data: WebChartDataItem[];
    x: string;
    seriesConfig: WebChartLineChartSeries[];
    dateRange: DateRange;
    timeIntervalInfo: TimeIntervalInfo;
}): Promise<WebChartDataItem[]>;
/**
 * Calculates the best interval (unit and size) based on the provided data range.
 * This algorithm comes from ArcGIS Pro and was adapter from C++ to ts. See function `GetDefaultTimeInterval`
 * in Pro (actually here: https://devtopia.esri.com/ArcGISPro/ArcGISPro/blob/ddf7cbe19ec80228179e905c9f85e84710f54ab7/MapX/CartoX/MappingCore/ChartUtils.cpp#L1621)
 * @param props
 */
export declare function getBestInterval(timeBinningStats: TimeBinningStatistics): TimeIntervalInfo;
/**
 * Indicates if calculating the time interval unit and size is necessary for the series.
 * It is necessary if the series is a line series, doesn't provide the interval unit and size
 * while the boolean `setTimeBinningInfoWhenNotProvided` is true.
 * @param props
 */
export declare function needsToCalculateTimeIntervalInfo(props: {
    series: WebChartSeriesType;
    isTimeBinningSeries: boolean;
    setTimeBinningInfoWhenNotProvided?: boolean;
}): boolean;
/**
 * Converts a date from the SQL SQL-92 format 'YYYY-MM-DD HH:mm:ss' to a
 * JS Date
 * @param sqlDate
 * @returns
 */
export declare function convertSQLDateToJSDate(sqlDate: string): number;
