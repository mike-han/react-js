import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { createChart } from '@arcgis/charts-js'
import config from './config.json'

const Root = () => {

  React.useEffect(() => {
    const container1 = document.getElementById('container1')
    createChart({
      chartConfig: config,
      chartContainer: container1,
      options: { dataUpdated: true }
    })
    setTimeout(() => {
      const container2 = document.getElementById('container2')
      createChart({
        chartConfig: config,
        chartContainer: container2,
        options: { dataUpdated: true }
      })
      const container3 = document.getElementById('container3')
      createChart({
        chartConfig: config,
        chartContainer: container3,
        options: { dataUpdated: true }
      })
    }, 1000)

  }, [])


  return <div className='root'>
    <div className="chart-container" id="container1"></div>
    <div className="chart-container" id="container2"></div>
    <div className="chart-container" id="container3"></div>
  </div>
}

ReactDOM.render(<Root />, document.getElementById('root'));