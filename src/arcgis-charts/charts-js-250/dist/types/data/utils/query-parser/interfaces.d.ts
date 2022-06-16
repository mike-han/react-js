import { WebChartQuery } from "@arcgis/charts-spec";
import { IStatisticDefinition } from "@esri/arcgis-rest-types";
export interface UniqueQuery {
    uniqueQuery: WebChartQuery;
    mapToStatField: Map<string, string>;
}
export interface StatFieldNameProps {
    whereValue?: string;
    outStatistics?: IStatisticDefinition;
    y?: string;
}
export interface GroupByFieldProps {
    uniqueQuery: WebChartQuery;
    splitByField: string;
    x: string;
}
