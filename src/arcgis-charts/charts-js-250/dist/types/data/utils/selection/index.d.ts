import { PieChart, XYChart } from "@amcharts/amcharts4/charts";
import { QueryObject, SelectionData } from "@arcgis/charts-shared-utils";
import { WebChartDataSources, WebChart, WebChartDataItem, WebChartTypes, WebChartBin } from "@arcgis/charts-spec";
/**
 * Builds a where clause following the pattern `<OID field> in (<list_of_OIDs>)`
 * @param fieldOID
 * @param listOIDs
 */
export declare function joinOIDs(fieldOID: string, listOIDs?: number[]): string | undefined;
/**
 * Returns the selection data items to be applied, based on the selection options (options.selectionItems, options.selectionOIDs,
 * options.selectionFilter), the type of charts, whether it is aggregated.
 * It will eventually perform queries to fetch the data matching the provided criteria.
 * @param props
 */
export declare function getSelectionDataItems(props: {
    chart: XYChart | PieChart;
    chartData?: WebChartDataItem[] | WebChartBin[];
    dataSource: WebChartDataSources;
    series: WebChart["series"];
    queryObject: QueryObject;
    dataWasUpdated?: boolean;
    selectionData?: SelectionData;
    xAxisValueFormatType?: WebChartTypes;
    setTimeBinningInfoWhenNotProvided?: boolean;
}): Promise<WebChartDataItem[] | undefined>;
/**
 * Fetches OIDs based on a where clause gathering information from multiples elements (markers, bars...)
 * TODO: add a threshold to limit the number of data items to bring back
 * @param props
 * @returns a list of OIDs matching the provided the where clause
 */
export declare function fetchOIDsFromWhereClause(props: {
    whereList: string[];
    queryObject: QueryObject;
    queryFilter?: string;
}): Promise<number[]>;
