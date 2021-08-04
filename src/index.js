import { createChart } from './arcgis-charts/arcgis-charts-js'
import chartConfig from './chart-config'

const dataSource = {
  type: 'inline',
  data: [
    {
      SUB_REGION: 'East North Central',
      POP2000__sum: 45155037,
      objectid: 0,
    },
    {
      SUB_REGION: 'East South Central',
      POP2000__sum: 17022810,
      objectid: 1,
    },
    {
      SUB_REGION: 'Middle Atlantic',
      POP2000__sum: 39671861,
      objectid: 2,
    },
    {
      SUB_REGION: 'Mountain',
      POP2000__sum: 18172295,
      objectid: 3,
    },
    {
      SUB_REGION: 'New England',
      POP2000__sum: 13922517,
      objectid: 4,
    },
    {
      SUB_REGION: 'Pacific',
      POP2000__sum: 45025637,
      objectid: 5,
    },
    {
      SUB_REGION: 'South Atlantic',
      POP2000__sum: 51769160,
      objectid: 6,
    },
    {
      SUB_REGION: 'West North Central',
      POP2000__sum: 19237739,
      objectid: 7,
    },
    {
      SUB_REGION: 'West South Central',
      POP2000__sum: 31444850,
      objectid: 8,
    },
  ],
  processed: true,
}

const chartRoot = document.getElementById('root')
const renderButton = document.getElementById('render')

renderButton.addEventListener('click', renderChart)

function renderChart() {
  let chart = null
  let config = { ...chartConfig }
  console.log('createChart-start')
  createChart({
    chartConfig: config,
    chartContainer: chartRoot,
  }).then((res) => {
    console.log('createChart-done')
    chart = res
  })
  setTimeout(() => {
    console.log('updateChart-start')
    config = { ...chartConfig, dataSource }
    chart.update({
        newChartConfig: config
      })
      .then(() => {
        console.log('updateChart-done')
      })
  }, 590)
}
