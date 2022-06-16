import { WebChartDataItem } from "@arcgis/charts-spec";
import { TrendlineDataProps } from "./interfaces";
/**
 * Calculates the trendline information.
 * - If the layer supports computing the trendline information on the server using query analytic capability, a query analytic is executed to get the slope, intercept and r2. Based on those we calculate the trendline points
 * - In inline raw mode or when the layer does not support computing the trendline information on the server, we call a linear function on the chart data to calculate the trendline points and r2
 * @param props
 */
export declare function getFinalTrendlineData(props: TrendlineDataProps): Promise<{
    r2: number;
    trendLinePoints: [WebChartDataItem, WebChartDataItem];
}>;
