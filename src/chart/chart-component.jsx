import React from 'react'
import { createChart as _createChart } from '../arcgis-charts/arcgis-charts-js'
import { validateWebChart } from '../arcgis-charts/arcgis-charts-shared-utils'
import { useForkRef, useRefValue } from './utils'

const DefaultGlobalOptions = {
  queueChartCreation: true,
  hideLicenceWatermark: true,
  enableResponsiveFeatures: false,
  useAnimatedCharts: false,
  autoDisposeChart: false
}

export const ChartComponent = React.memo((props) => {
  const {
    config: propConfig,
    options: propOptions,
    globalOptions = DefaultGlobalOptions,
    data,
    selectedDataItems,
    ...others
  } = props

  const elRef = React.useRef(null)
  const chartRef = React.useRef(null)

  /**
   * When the data changes, put it into the `dataSource` of config
   */
  const config = React.useMemo(() => {
    let config = propConfig
    if (propConfig?.dataSource?.type === 'inline' && data) {
      const dataSource = {
        ...propConfig.dataSource,
        data
      }

      config = {
        ...propConfig,
        dataSource
      }
    }
    return config
  }, [propConfig, data])

  /**
 * Put the `selectedDataItems` into options
 */
  const options = React.useMemo(() => {
    let options = propOptions
    if (selectedDataItems) {
      options = options || {}
      options = {
        ...options,
        selectedDataItems
      }
    }
    return options
  }, [propOptions, selectedDataItems])


  useChart(chartRef, elRef, config, options, globalOptions)

  return (
    <div
      style={{ width: '100%', height: '100%' }}
      {...others}
      ref={elRef}
    />
  )
})

export const useChart = (
  ref,
  containerRef,
  config,
  options,
  globalOptions
) => {
  const chartRef = React.useRef(null)
  const handleRef = useForkRef(ref, chartRef)
  //Is there a pending configuration waiting to be updated
  const pending = React.useRef(false)
  //Whether the chart is being created or updated
  const processing = React.useRef()

  const refValues = useRefValue({ config, options, globalOptions })

  React.useEffect(() => {
    if (containerRef.current == null) {
      chartRef.current?.dispose()
      return
    }

    validateWebChart({ input: config, queryObject: null }).then(state => {
      if (!state.valid) {
        console.error(state.schemaErrors)
        chartRef.current?.dispose()
        containerRef.current.innerHTML = ''
        return
      }
      // If the chart is being created or updated, save the latest
      // chart props to pendingChartPropsRef and skip this update
      if (processing.current) {
        pending.current = true
        return
      }

      if (chartRef.current != null) {
        updateChart()
      } else {
        createChart()
      }
    })

    const createChart = () => {
      const { config, options, globalOptions } = refValues.current

      processing.current = _createChart({
        chartContainer: containerRef.current,
        chartConfig: config,
        options: options,
        globalOptions: globalOptions
      })

      processing.current.then(instance => {
        handleRef(instance)
        // After performing the create(update), mark processing as false
        processing.current = undefined
        // After performing the create(update), If there is pending chart props,
        // call updateChart with pending chart props and clear pendingChartPropsRef
        if (pending.current) {
          pending.current = false
          updateChart()
        }
      }, () => {
        handleRef(null)
        processing.current = undefined
        pending.current = false
      })
    }

    const updateChart = () => {
      const { config, options, globalOptions } = refValues.current

      processing.current = chartRef.current.update({
        newChartConfig: config,
        updateOptions: options,
        updateGlobalOptions: globalOptions
      })

      processing.current.then(() => {
        // After performing the create(update), mark processing as false
        processing.current = undefined
        // After performing the create(update), If there is pending chart props,
        // call updateChart with pending chart props and clear pendingChartPropsRef
        if (pending.current) {
          pending.current = false
          updateChart()
        }
      }, () => {
        processing.current = undefined
        pending.current = false
      })
    }

  }, [config, options, globalOptions, containerRef, handleRef, refValues])

  React.useEffect(() => {
    return () => {
      if (chartRef.current != null) {
        // eslint-disable-next-line
        chartRef.current.dispose()
      }
    }
    // eslint-disable-next-line
  }, [])
}