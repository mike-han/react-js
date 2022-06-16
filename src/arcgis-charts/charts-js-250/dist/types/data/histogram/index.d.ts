import { QueryObject } from "@arcgis/charts-shared-utils";
import { DataInfo } from "../utils/summarize-data/interfaces";
import { FetchDataProps } from "../../interfaces";
/**
 *
 * @param min Work around to reduce the decimal part by 1.
 * @returns number
 */
export declare function processMin(min: number): number;
/**
 * Fetches the histogram data and proceed to the statistic calculations.
 * Returns information indicating whether the operation was a success and the data if so.
 * @param props
 */
export declare function fetchFinishedHistogramData(props: FetchDataProps): Promise<DataInfo>;
/**
 * Fetches selection data for histogram.
 * It fetches a list of values from the x field, with a selection filter (`OID IN (...)`)
 * @param props
 */
export declare function fetchHistogramSelectionData(props: {
    queryObject: QueryObject;
    filter?: string;
    x: string;
}): Promise<DataInfo>;
