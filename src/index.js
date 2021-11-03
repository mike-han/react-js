import { createChart } from './arcgis-charts/arcgis-charts-js'
import barConfig from './bar-config'
import pieConfig from './pie-config'

const dataSource1 = {
  type: 'inline',
  data: [
    {
      FID_count: 28,
      Year: '2,010',
      objectid: 0
    },
    {
      FID_count: 31,
      Year: '2,011',
      objectid: 1
    },
    {
      FID_count: 27,
      Year: '2,012',
      objectid: 2
    },
    {
      FID_count: 20,
      Year: '2,013',
      objectid: 3
    },
    {
      FID_count: 19,
      Year: '2,014',
      objectid: 4
    },
    {
      FID_count: 9,
      Year: '2,015',
      objectid: 5
    }
  ],
  processed: true
}

const dataSource2 = {
  type: 'inline',
  data: [
    {
      "OBJECTID_sum": 892,
      "ST": "AK",
      "objectid": 0
    },
    {
      "OBJECTID_sum": 35468,
      "ST": "AL",
      "objectid": 1
    },
    {
      "OBJECTID_sum": 81344,
      "ST": "AR",
      "objectid": 2
    },
    {
      "OBJECTID_sum": 62157,
      "ST": "AZ",
      "objectid": 3
    },
    {
      "OBJECTID_sum": 519199,
      "ST": "CA",
      "objectid": 4
    }
  ],
  processed: true,
}

const chartRoot = document.getElementById('root')

const renderButton = document.getElementById('render')
renderButton.addEventListener('click', renderChart)

const updateButton = document.getElementById('update')

updateButton.addEventListener('click', updateChart)

let chart = null
function renderChart() {
  let config = { ...pieConfig, dataSource: dataSource1 }
  console.log('createChart-start')
  createChart({
    chartConfig: config,
    chartContainer: chartRoot,
    options: { dataUpdated: true }
  }).then((res) => {
    console.log('createChart-done')
    chart = res
  })
}

function updateChart() {
  let config = { ...pieConfig, dataSource: dataSource2 }
  console.log('updateChart-start')
  chart.update({
    newChartConfig: config,
    updateOptions: { dataUpdated: false }
  }).then((res) => {
    console.log('updateChart-done')
  })
}
