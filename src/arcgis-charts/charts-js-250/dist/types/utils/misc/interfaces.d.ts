export interface DataUpdateNeededDetails {
    common: {
        queryChanged: boolean;
        xOrYChanged: boolean;
        numberOfSeriesChanged: boolean;
        filterChanged: boolean;
        filterBySelectionChanged: boolean;
        dataForFilterBySelectionChanged: boolean;
    };
    lineChart: {
        timeBinningChanged: boolean;
        timeIntervalUnitChanged: boolean;
        newTimeBinningWillBeCalculated: boolean;
    };
    histogram: {
        dataPropsChanged: boolean;
    };
}
