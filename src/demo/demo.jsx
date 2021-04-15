import React from "react"
import { useRefValue } from '../chart/utils'
import { ChartComponent } from '../chart/chart-component'
import updateDataFailedConfig from './update-data-failed'
const chartConfig = updateDataFailedConfig.chartConfig
const chartSeries = updateDataFailedConfig.series
const chartData = updateDataFailedConfig.data

const ChartDemo = () => {
  const [numericField, setNumberField] = React.useState('POP2000__sum')
  const [config, setConfig] = React.useState(chartConfig)
  const [selectedDataItems, setSelectedDataItems] = React.useState()
  const refValues = useRefValue(config)

  React.useEffect(() => {
    const config = refValues.current
    const data = chartData[numericField]
    const dataSource = {
      ...config.dataSource,
      data
    }
    const series = numericField && numericField !== 'null' ? [chartSeries[numericField]] : []
    setConfig({
      ...config,
      dataSource,
      series
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numericField])

  React.useEffect(() => {
    setSelectedDataItems([])
  }, [config])

  return <div style={{ height: 400 }}>
    <select value={numericField} onChange={e => setNumberField(e.target.value)}>
      <option value="null">null</option>
      <option value="POP2000__sum">POP2000__sum</option>
      <option value="POP2007__sum">POP2007__sum</option>
    </select>
    <ChartComponent
      config={config}
      selectedDataItems={selectedDataItems}
    />
  </div>

}

export default ChartDemo
