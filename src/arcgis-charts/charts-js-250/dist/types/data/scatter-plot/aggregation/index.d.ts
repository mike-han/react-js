import { IExtent } from "@esri/arcgis-rest-types";
import { QueryObject, AbortControllerKeyType } from "@arcgis/charts-shared-utils";
import Graphic from "esri/Graphic";
export declare function fetchRawScatterPlotAggregatedData(props: {
    x: string;
    y: string;
    statsMap?: Map<string, number>;
    featureLayer: __esri.FeatureLayer;
    queryObject: QueryObject;
    customFilter: string;
    extent?: IExtent;
    abortKey?: AbortControllerKeyType;
}): Promise<Graphic[]>;
