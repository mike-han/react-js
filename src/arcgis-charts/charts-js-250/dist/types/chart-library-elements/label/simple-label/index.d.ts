import { Label, Container } from "@amcharts/amcharts4/core";
import { WebChartText } from "@arcgis/charts-spec";
export declare function applyLabelDefaults(label: Label, defaults?: Partial<Label>): void;
export declare function initializeLabel(defaults?: Partial<Label>, parent?: Container): Label;
/**
 *
 * @param label
 * @param text
 * @param defaults
 */
export declare function updateLabel(label: Label, labelConfig?: WebChartText, defaults?: Partial<Label>): void;
