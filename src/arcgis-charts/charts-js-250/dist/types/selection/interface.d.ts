import { Sprite } from "@amcharts/amcharts4/core";
import { WebChartDataTransformations, WebChartTypes, WebChartDataItem } from "@arcgis/charts-spec";
import { QueryObject, QueryType, AbortControllerKeyType } from "@arcgis/charts-shared-utils";
export declare const States: {
    readonly CustomActive: "custom-active";
    readonly CustomInactive: "custom-inactive";
    readonly Default: "default";
    readonly Active: "active";
};
interface SelectionProps {
    xAxisField: string;
    yAxisField?: string;
    splitBy?: string;
    queryFilter?: string;
    dataTransformationType?: WebChartDataTransformations;
    chartType?: WebChartTypes;
}
export interface ElementSelectionProps extends SelectionProps {
    queryObject?: QueryObject;
    element: Sprite;
    uniqueFeature?: boolean;
}
export interface BuildSelectionFilterProps extends SelectionProps {
    dataContext: WebChartDataItem;
    abortKey?: AbortControllerKeyType;
    isDateAxis: boolean;
    isXAxisFieldDouble: boolean;
    queryType?: QueryType;
}
export {};
