import { NumberFormatter, DateFormatter } from "@amcharts/amcharts4/core";
import { ILocale } from "@amcharts/amcharts4/.internal/core/utils/Language";
import { WebChartTypes } from "@arcgis/charts-spec";
export declare function fetchChartLocaleStrings(locale?: string): Promise<ILocale>;
export declare function getFormatter(type: typeof WebChartTypes.NumberAxisFormat | typeof WebChartTypes.DateAxisFormat, chartLocale: ILocale, intlLocales?: string): NumberFormatter | DateFormatter | undefined;
