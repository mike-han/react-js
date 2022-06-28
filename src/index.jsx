import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { createChart } from '@arcgis/charts-js'
import column from './config/column/config.json'
import columnData from './config/column/data.json'
import pie from './config/pie/pie.json'
import pieData from './config/pie/pie-data.json'
import pieGrouping from './config/pie/pie-grouping.json'
import pieGroupingData from './config/pie/pie-grouping-data.json'
import scatter from './config/scatter/config.json'
import scatterData from './config/scatter/data.json'


const getChartOptions = (type, dataItems) => {
  let options = null
  if (type === 'barSeries') {
    options = {
      inlineData: {
        inputData: {
          dataItems
        },
        processed: true
      },
      dataUpdated: true
    }
  } else if (type === 'scatterSeries') {
    options = {
      inlineData: {
        inputData: {
          data: dataItems
        },
        processed: false
      },
      dataUpdated: true
    }
  } else if (type === 'pieSeries') {
    options = {
      inlineData: {
        inputData: dataItems,
        processed: true
      },
      dataUpdated: true
    }
  }
  return options
}

const makeChart = (type, config, dataItems, container) => {
  let options = getChartOptions(type, [])
  createChart({
    chartConfig: config,
    chartContainer: container,
    options: options
  }).then((chart) => {
    options = getChartOptions(type, dataItems)
    chart.update({
      newChartConfig: config,
      updateOptions: options
    })
  })
}


const makeScatterChart = (type, config, dataItems, container) => {
  let options = getChartOptions(type, [])
  createChart({
    chartConfig: config,
    chartContainer: container,
    options: options
  }).then((chart) => {
    options = getChartOptions(type, [])
    chart.update({
      newChartConfig: config,
      updateOptions: { ...options, dataUpdated: false }
    }).then(() => {
      setTimeout(() => {
        options = getChartOptions(type, dataItems)
        chart.update({
          newChartConfig: config,
          updateOptions: options
        })
      }, 0)
    })
  })
}

const Root = () => {
  const [renderView2, setRenderView2] = React.useState(false)
  React.useEffect(() => {
    const root1 = document.getElementById('chart1')
    const root2 = document.getElementById('chart2')
    makeChart('pieSeries', pie, pieData, root1)
    makeChart('pieSeries', pieGrouping, pieGroupingData, root2)
  }, [])

  React.useEffect(() => {
    if (!renderView2) return
    const root3 = document.getElementById('chart3')
    const root4 = document.getElementById('chart4')
    const root5 = document.getElementById('chart5')
    const root6 = document.getElementById('chart6')
    const root7 = document.getElementById('chart7')

    makeChart('barSeries', column, columnData, root3)
    makeChart('barSeries', column, columnData, root4)
    makeChart('barSeries', column, columnData, root5)


    makeChart('pieSeries', pie, pieData, root6)

    makeScatterChart('scatterSeries', scatter, scatterData, root7)
  }, [renderView2])

  return <div className='root'>
    <div className="view1-container" style={{ display: renderView2 ? 'none' : 'flex' }}>
      <div className="view view1">
        <div className="chart-container" id="chart1"></div>
        <div className="chart-container" id="chart2"></div>
      </div>
    </div>
    <div className="view2-container">
      {renderView2 && <div className="view view2">
        <div className="chart-container" id="chart3"></div>
        <div className="chart-container" id="chart4"></div>
        <div className="chart-container" id="chart5"></div>
        <div className="chart-container" id="chart6"></div>
        <div className="chart-container" id="chart7"></div>
      </div>}
    </div>
    <button onClick={() => setRenderView2(true)}>Render view 2</button>
  </div>
}

ReactDOM.render(<Root />, document.getElementById('root'));