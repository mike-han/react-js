import { UpdateLegendProps } from "../interfaces";
import { OverEvent } from "../../../interfaces";
/**
 * Handles how the legend markers labels are rendered on a pie chart.
 * The value and percentage (if displayed) are formatted according to the config instruction or a default number formatter.
 * @param props
 */
export declare function updatePieChartLegendMarkersLabel(props: UpdateLegendProps): void;
export declare function legendOverHandler(event: OverEvent): void;
