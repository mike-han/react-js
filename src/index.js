import { createChart as createChart1 } from './arcgis-charts/v1.0.0-beta.193/arcgis-charts-js'
import { createChart as createChart2 } from './arcgis-charts/v1.0.0-beta.208/arcgis-charts-js'
import config1 from './configs/config1'
import config2 from './configs/config2'

const root1 = document.getElementById('root1')
const render1 = document.getElementById('render1')
render1.addEventListener('click', () => {
  renderChart1()
  setTimeout(() => {
    updateChart1()
  }, 1000)
})


let chart1 = null
function renderChart1() {
  let config = config1
  createChart1({
    chartConfig: config,
    chartContainer: root1,
    options: { dataUpdated: true }
  }).then((res) => {
    chart1 = res
  })
}

function updateChart1() {
  let config = config2
  chart1.update({
    newChartConfig: config,
    updateOptions: { dataUpdated: true }
  })
}


const root2 = document.getElementById('root2')
const render2 = document.getElementById('render2')
render2.addEventListener('click', () => {
  renderChart2()
  setTimeout(() => {
    updateChart2()
  }, 1000)
})

let chart2 = null
function renderChart2() {
  let config = config1
  createChart2({
    chartConfig: config,
    chartContainer: root2,
    options: { dataUpdated: true }
  }).then((res) => {
    chart2 = res
  })
}

function updateChart2() {
  let config = config2
  chart2.update({
    newChartConfig: config,
    updateOptions: { dataUpdated: true }
  })
}
