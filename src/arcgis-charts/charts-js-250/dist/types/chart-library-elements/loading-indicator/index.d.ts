import { SerialChart, Series } from "@amcharts/amcharts4/charts";
import { ListTemplate } from "@amcharts/amcharts4/core";
import { LoaderHandle } from "./interfaces";
export declare function initializeLoader(chart: SerialChart): LoaderHandle;
/**
 * Checks whether all the non-overlay series are `"ready"`
 * @param series
 */
export declare function whetherSeriesReady(series: ListTemplate<Series>): boolean;
/**
 * Attaches a hide-loader handle to the input series's `"ready"` event
 * @param series
 * @param hideLoaderHandle
 */
export declare function attachLoaderHandle(seriesInstance: Series, hideLoaderHandle: LoaderHandle["hideLoader"]): void;
