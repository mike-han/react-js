import { createChart } from './arcgis-charts/arcgis-charts-js'
import config1 from './configs/config1'
import config2 from './configs/config2'
import config3 from './configs/config3'


const chartRoot = document.getElementById('root')

const renderButton = document.getElementById('render')
renderButton.addEventListener('click', renderChart)

const updateButton = document.getElementById('update')
updateButton.addEventListener('click', updateChart)

let chart = null
function renderChart() {
  let config = config1
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
  let config = config2
  console.log('updateChart-start')
  chart.update({
    newChartConfig: config,
    updateOptions: { dataUpdated: true }
  }).then((res) => {
    console.log('updateChart-done')
    updateChart2()
  })
}

function updateChart2() {
  let config = config3
  console.log('updateChart2-start')
  chart.update({
    newChartConfig: config,
    updateOptions: { dataUpdated: true }
  }).then((res) => {
    console.log('updateChart2-done')
  })
}
