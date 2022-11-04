import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { createChart } from '@arcgis/charts-js'
import config from './config.json'

const Root = () => {
  const containerRef = React.useRef(null)

  const handleClick = () => {
    createChart({
      chartConfig: config,
      chartContainer: containerRef.current,
      options: { dataUpdated: true }
    })
  }


  return <div className='root'>
    <div className="chart-container" ref={containerRef}></div>
    <button className='cte-btn' onClick={handleClick}>Create chart</button>
  </div>
}

ReactDOM.render(<Root />, document.getElementById('root'));