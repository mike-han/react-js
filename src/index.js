import { createChart } from './arcgis-charts/arcgis-charts-js'
import chartConfig from './chart-config'

const dataSource = {
  type: 'inline',
  data: [
    {
      "uniquedesignation": null,
      "objectid__count": 9,
      "objectid": 0
    },
    {
      "uniquedesignation": "MIKE",
      "objectid__count": 1,
      "objectid": 1
    },
    {
      "uniquedesignation": "PAULA",
      "objectid__count": 1,
      "objectid": 2
    },
    {
      "uniquedesignation": "SLAM",
      "objectid__count": 1,
      "objectid": 3
    }
  ],
  processed: true,
}

const chartRoot = document.getElementById('root')
const renderButton = document.getElementById('render')

renderButton.addEventListener('click', renderChart)

function renderChart() {
  let chart = null
  let config = { ...chartConfig, dataSource }
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
