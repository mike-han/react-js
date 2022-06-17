// import { createChart as createChart } from './arcgis-charts/charts-js-250' //v1.0.0-beta.250
import { createChart as createChart } from '@arcgis/charts-js' //v1.0.0-beta.280
import config from './config'
const inputData = config.dataSource.data

const chartRoot = document.getElementById('root')
const createBtn = document.getElementById('create')
const selecAllBtn = document.getElementById('select-all')
const selecNullBtn = document.getElementById('select-null')
const selecByIndexBtn = document.getElementById('select-by-index')
const clearSelection = document.getElementById('clear-selection')
const consolePanel = document.getElementById('console')

let chart = null

createBtn.addEventListener('click', () => makeChart())
selecNullBtn.addEventListener('click', () => updateChartSelectionItems([]))
selecAllBtn.addEventListener('click', () => updateChartSelectionItems(inputData))
clearSelection.addEventListener('click', () => chart && chart.clearSelection())

let index = 0
selecByIndexBtn.addEventListener('click', () => {
  const selectionItems = [inputData[index]]
  index ++
  if(index >= inputData.length) {
    index = 0
  }
  updateChartSelectionItems(selectionItems)
})

chartRoot.addEventListener('arcgisChartsJSSelectionComplete', (e) => {
  const selectionSource = e.detail.selectionSource
  consolePanel.textContent = selectionSource + ""
})


function makeChart() {
  consolePanel.textContent = ""
  createChart({
    chartConfig: config,
    chartContainer: chartRoot,
    options: { dataUpdated: true }
  }).then((res) => chart = res)
}

function updateChartSelectionItems(selectionItems){
  if(!chart) return
  const selectionData = { selectionItems }
  chart.update({
    newChartConfig: config,
    updateOptions: { selectionData }
  })
}
