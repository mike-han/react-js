import { WebChartDataItem } from "@arcgis/charts-spec";
import { GroupAndSummarizeProps, DataInfo } from "./interfaces";
import { FetchDataProps } from "../../../interfaces";
import { BinnedServerData } from "./time-binning/interfaces";
/**
 * Groups and summarizes (perform descriptive statistics) on an array of `WebChartDataItem` or `Graphic`
 * @param props
 */
export declare function groupAndSummarize(props: GroupAndSummarizeProps): WebChartDataItem[];
export declare function transformRawData(props: FetchDataProps): WebChartDataItem[];
/**
 * Fetching the data for multiple types of chart.
 * @param props
 */
export declare function fetchFinishedGenericChartData(props: FetchDataProps): Promise<DataInfo>;
/**
 * Fetching the data for specifically a line chart using time binning options.
 * @param props
 */
export declare function fetchFinishedLineChartTimeBinningData(props: FetchDataProps): Promise<{
    dataInfo: DataInfo;
    binnedServerData?: BinnedServerData;
}>;
/**
 * Fetching selection data for multiple types of chart.
 * This function is a subset of `fetchFinishedGenericChartData` and was created to avoid bringing too much
 * complexity to it. They need to evolve together if the data fetching pattern changes.
 * @param props
 */
export declare function fetchFinishedGenericChartSelectionData(props: FetchDataProps): Promise<DataInfo>;
