import { createChart as _createChart } from './arcgis-charts/arcgis-charts-js'
import config from './config'


const chartRoot = document.getElementById('root')

const createButton = document.getElementById('render')
createButton.addEventListener('click', createChart)

const updateButton = document.getElementById('update')
updateButton.addEventListener('click', updateChart)

let chart = null
function createChart() {
  console.log('createChart-start')
  _createChart({
    chartConfig: config,
    chartContainer: chartRoot,
    options: { dataUpdated: true }
  }).then((res) => {
    console.log('createChart-done')
    chart = res
  })
}

function updateChart() {
  console.log('updateChart-start')
  chart.update({
    newChartConfig: config,
    updateOptions: { dataUpdated: true }
  }).then((res) => {
    console.log('updateChart-done')
  })
}
