import { NumberFormatOptions, DateTimeFormatOptions, WebChartAxis, CategoryFormatOptions } from "@arcgis/charts-spec";
import { DateAxis, ValueAxis, CategoryAxis, AxisRenderer, Axis, XYChart, PieChart } from "@amcharts/amcharts4/charts";
import { ILocale } from "@amcharts/amcharts4/.internal/core/utils/Language";
/**
 * Return dateFormat or numberFormat for the `WebChartAxis`
 * @param valueFormat NumberFormatOptions | DateTimeFormatOptions
 */
export declare function mapValueFormat<T extends NumberFormatOptions | DateTimeFormatOptions>(valueFormat: T): T["intlOptions"];
/**
 * Formats a number or date
 * @param value
 * @param valueFormat
 */
export declare function format(value: number | Date, valueFormat: NumberFormatOptions | DateTimeFormatOptions, locale: ILocale): string;
/**
 * Return true if the input `WebChartAxis` is a **Value axis** (represents only **numerical** data)
 * @param valueFormat Esri's REST representation of Web Chart Axis Value Format property
 */
export declare function isNumberValueFormat(valueFormat?: WebChartAxis["valueFormat"]): boolean;
/**
 * Return true if the input `WebChartAxis` is a **Value axis** (represents only **numerical** data)
 * and the format uses a `percent` style.
 * @param valueFormat Esri's REST representation of Web Chart Axis Value Format property
 */
export declare function isPercentNumberValueFormat(valueFormat: WebChartAxis["valueFormat"]): boolean;
/**
 * Return true if the input `WebChartAxis` is a **Category axis** (represents only string or **categorical** data)
 * @param valueFormat Esri's REST representation of Web Chart Axis Value Format property
 */
export declare function isCategoryValueFormat(valueFormat?: WebChartAxis["valueFormat"]): boolean;
/**
 * Return true if the input `WebChartAxis` is a **Date axis** (represents only temporal or **date-time** data)
 * @param valueFormat Esri's REST representation of Web Chart Axis Value Format property
 */
export declare function isDateValueFormat(valueFormat?: WebChartAxis["valueFormat"]): boolean;
/**
 * Returns true if the input chart is a XYChart and uses a date axis
 * @param chart The instance of chart to be tested
 */
export declare function isDateXAxis(chart: XYChart | PieChart): boolean;
/**
 * Assign data-time format to Date Axis
 * At v1 spec allows only one valueFormat for DateAxis,
 * setting this for different date/time granularity. There
 * are cases when different granularity would benefit from
 * different dateFormats (after v1).
 * @param axis is an instance of DateAxis
 * @param formatOptions contains INTL.DateTimeFormat options info for formatting date-time
 */
export declare function assignDateFormat(axis: DateAxis, formatOptions: DateTimeFormatOptions): void;
/**
 * Assign a number formatter to a ValueAxis.
 * Adapter is needed because `axis.numberFormatter.numberFormat = intlOptions;` cannot be used.
 * [amCharts Ticket](https://amcharts.zendesk.com/hc/en-us/requests/54565)
 * @param axis
 * @param formatOptions
 * @param overridePercentMultiplication
 */
export declare function assignNumberFormat(axis: ValueAxis, formatOptions: NumberFormatOptions, overridePercentMultiplication?: boolean): void;
/**
 * This function handles the string truncation on category axes.
 * In the implementation, a `low adapter priority` of `0` is set because we want
 * to perform string shortening **before** string styling. Refer:
 * https://www.amcharts.com/docs/v4/concepts/adapters/#Adapter_parameters
 * @param props
 */
export declare function assignCategoryFormat(props: {
    axis: CategoryAxis;
    formatOptions: CategoryFormatOptions | DateTimeFormatOptions;
    isNonAggregatedChart?: boolean;
}): void;
/**
 * Checks whether the WebChartAxis valueFormat is in sync with the amCharts Axis' instance type
 * @param axis
 * @param valueFormat
 */
export declare function isValueFormatTypeChanged<T extends AxisRenderer>(axis: Axis<T>, valueFormat: WebChartAxis["valueFormat"]): boolean;
