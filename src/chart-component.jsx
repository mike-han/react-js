import React from 'react';
import { applyPolyfills, defineCustomElements } from '@arcgis/charts-components/dist/loader'

applyPolyfills().then(() => {
  defineCustomElements(window, { resourcesUrl: '../arcgis-charts/' })
})

const getSeriesType = (config) => {
  return config?.series?.[0]?.type
}

const useForkChartRef =(ref, chartRef) => {
  const handleRef = React.useMemo(() => {
    if (ref == null && chartRef == null) {
      return null
    }
    return element => {
      ref.current = element
      if (typeof chartRef === 'function') {
        chartRef(element)
      } else if (chartRef != null) {
        chartRef.current = element
      }
    }
  }, [ref, chartRef])

  return handleRef
}

const useRegisterEvent = (nodeRef, eventName, callback) => {
  React.useEffect(() => {
    const node = nodeRef?.current
    if (node && eventName && callback) {
      node.addEventListener(eventName, callback)
    }

    return () => {
      if (node && eventName && callback) {
        node.removeEventListener(eventName, callback)
      }
    }
  }, [eventName, nodeRef, callback])
}

const getChartComponentTag = (seriesType) => {
  if(seriesType === 'barSeries') {
    return 'arcgis-charts-bar-chart'
  }else if (seriesType === 'lineSeries') {
    return 'arcgis-charts-line-chart'
  }else if (seriesType === 'pieSeries') {
    return 'arcgis-charts-pie-chart'
  }else if (seriesType === 'scatterSeries') {
    return 'arcgis-charts-scatter-plot'
  }else if (seriesType === 'histogramSeries') {
    return 'arcgis-charts-histogram'
  } else {
    return 'div'
  }
}

export const ChartComponent = React.forwardRef((props, chartRef) => {
  const ref = React.useRef(null)
  const handleRef = useForkChartRef(ref, chartRef)

  const {
    className,
    config,
    featureLayer,

    runtimeDataFilters,
    selectionData,
    chartLimits,
    actionMode,
    noDataOptions,

    autoDisposeChart,
    enableResponsiveFeatures,
    hideLicenceWatermark,
    queueChartCreation,
    useAnimatedCharts,
    hideLoaderAnimation,

    arcgisChartsDataProcessComplete,
    arcgisChartsLegendItemVisibilityChange,
    arcgisChartsUpdateComplete,
    arcgisChartsSeriesColorChange,
    arcgisChartsAxesMinMaxChange,
    arcgisChartsDefaultActionSelect,
    arcgisChartsSelectionComplete,
    arcgisChartsActionBarToggle,
    arcgisChartsNoRenderPropChange
  } = props

  const seriesType = getSeriesType(config)
  const component = getChartComponentTag(seriesType)

  React.useEffect(() => {
    ref.current.config = config
  }, [config])

  React.useEffect(() => {
    ref.current.runtimeDataFilters = runtimeDataFilters
  }, [runtimeDataFilters])

  React.useEffect(() => {
    ref.current.featureLayer = featureLayer
  }, [
    featureLayer
  ])

  React.useEffect(() => {
    ref.current.selectionData = selectionData
    ref.current.chartLimits = chartLimits
    ref.current.actionMode = actionMode
  }, [
    selectionData,
    chartLimits,
    actionMode
  ])

  React.useEffect(() => {
    ref.current.noDataOptions = noDataOptions
  }, [noDataOptions])

  React.useEffect(() => {
    ref.current.autoDisposeChart = autoDisposeChart
    ref.current.enableResponsiveFeatures = enableResponsiveFeatures
    ref.current.hideLicenceWatermark = hideLicenceWatermark
    ref.current.queueChartCreation = queueChartCreation
    ref.current.useAnimatedCharts = useAnimatedCharts
    ref.current.hideLoaderAnimation = hideLoaderAnimation
  }, [
    autoDisposeChart,
    enableResponsiveFeatures,
    hideLicenceWatermark,
    queueChartCreation,
    useAnimatedCharts,
    hideLoaderAnimation
  ])

  useRegisterEvent(ref, 'arcgisChartsDataProcessComplete', arcgisChartsDataProcessComplete)
  useRegisterEvent(ref, 'arcgisChartsLegendItemVisibilityChange', arcgisChartsLegendItemVisibilityChange)
  useRegisterEvent(ref, 'arcgisChartsUpdateComplete', arcgisChartsUpdateComplete)
  useRegisterEvent(ref, 'arcgisChartsSeriesColorChange', arcgisChartsSeriesColorChange)
  useRegisterEvent(ref, 'arcgisChartsDefaultActionSelect', arcgisChartsDefaultActionSelect)
  useRegisterEvent(ref, 'arcgisChartsSelectionComplete', arcgisChartsSelectionComplete)
  useRegisterEvent(ref, 'arcgisChartsActionBarToggle', arcgisChartsActionBarToggle)
  useRegisterEvent(ref, 'arcgisChartsNoRenderPropChange', arcgisChartsNoRenderPropChange)

  return (
    React.createElement(component, { ref: handleRef, className })
  )
})
