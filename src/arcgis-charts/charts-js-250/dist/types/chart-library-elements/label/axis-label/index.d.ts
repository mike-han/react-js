import { WebChartAxis, WebChartLabelBehavior, WebChartText } from "@arcgis/charts-spec";
import { Axis, AxisRenderer } from "@amcharts/amcharts4/charts";
/**
 * Updates the axis min grid distance. It represents the minimum distance in pixels between the grid elements
 * and its labels.
 * Used to control density of the grid/labels on the axis.element.
 * Works differently according to the axis labels behavior.
 * @param props
 */
export declare function updateAxisMinGridDistance(props: {
    axis: Axis<AxisRenderer>;
    labelsConfig: WebChartText;
    horizontalAxisLabelsBehavior?: WebChartLabelBehavior;
}): void;
/**
 * Updates the axis labels
 * @param axis
 * @param axisConfig
 */
export declare function updateAxisLabel(props: {
    axis: Axis<AxisRenderer>;
    axisConfig: WebChartAxis;
    horizontalAxisLabelsBehavior?: WebChartLabelBehavior;
    verticalAxisLabelsBehavior?: WebChartLabelBehavior;
    axisLabelsBehaviorChanged?: [boolean, boolean];
}): void;
