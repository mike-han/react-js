import { createChart as _createChart } from './arcgis-charts/arcgis-charts-js'
import config from './config'

const chartRoot = document.getElementById('root')
const create = document.getElementById('create')

create.addEventListener('click', () => {
  createChart()
})

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