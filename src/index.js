// import { createChart as _createChart } from './arcgis-charts/charts-js-250' //v1.0.0-beta.250
import { createChart as _createChart } from '@arcgis/charts-js' //v1.0.0-beta.280
import config from './config'
const inputData = config.dataSource.data

const chartRoot = document.getElementById('root')
const create = document.getElementById('create')
const selection = document.getElementById('select')


create.addEventListener('click', () => {
  createChart()
})

let chart = null
function createChart() {
  _createChart({
    chartConfig: config,
    chartContainer: chartRoot,
    options: { dataUpdated: true }
  }).then((res) => {
    chart = res
  })
}

let index = 0
selection.addEventListener('click', () => {
  if(!chart) return
  const selectionItems = getSelectionItems(index)
  const selectionData = { selectionItems }
  chart.update({
    newChartConfig: config,
    updateOptions: { selectionData }
  })
  index ++
  if(index >= inputData.length) {
    index = 0
  }
})

function getSelectionItems(index) {
  const item = inputData[index]
  const FID_count = item.FID_count
  const Year = item.Year
  return [{FID_count, Year}]
}