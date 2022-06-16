import { WebChartDataItem } from "@arcgis/charts-spec";
export interface SortWebChartDataItemsProps {
    arrayToSort: WebChartDataItem[];
    orderByFields: string[];
    forceAscendingOrder?: boolean;
    multiSeriesYField?: string;
    isNonAggregated?: boolean;
    isXAxis?: boolean;
}
