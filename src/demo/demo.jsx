import React from "react"
import { createChart } from '../arcgis-charts/arcgis-charts-js'
import { validateWebChart } from '../arcgis-charts/arcgis-charts-shared-utils'
import chartConfig from './chart-config'

const dummyValidateWebChart = (config) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ valid: !!config })
    }, 50)
  })
}

const ChartDemo = () => {
  const [config, setConfig] = React.useState(chartConfig)
  const [options, setOptions] = React.useState()
  const elRef = React.useRef(null)
  const chartRef = React.useRef(null)

  React.useEffect(() => {
    dummyValidateWebChart({ input: config, queryObject: null }).then(state => {
      if (!state.valid) {
        if (chartRef.current) {
          chartRef.current.dispose()
          chartRef.current = null
        }
        return
      }

      if (!chartRef.current) {
        console.log('createChart-start')
        createChart({
          chartConfig: config,
          options,
          chartContainer: elRef.current
        }).then((res) => {
          console.log('createChart-done')
          chartRef.current = res
        })
      } else {
        console.log('updateChart-start')
        chartRef.current.update({
          newChartConfig: config,
          updateOptions: options
        }).then(() => {
          console.log('updateChart-done')
        })
      }
    });

  }, [config, options])

  React.useEffect(() => {
    setOptions({ selectedDataItems: [] })
  }, [config])

  const handleClearChart = () => {
    if (chartRef.current) {
      chartRef.current.dispose()
      chartRef.current = null
    }
  }

  const handleReRenderChart = () => {
    setConfig({ ...chartConfig })
  }

  return <div style={{ height: 500 }}>
    <div
      style={{ width: '100%', height: '400px' }}
      ref={elRef}
    />
    <div>
      <button onClick={handleClearChart}>Clear</button>
      <button onClick={handleReRenderChart}>Rerender</button>
    </div>
  </div>

}

export default ChartDemo
