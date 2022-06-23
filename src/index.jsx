import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { createChart } from '@arcgis/charts-js'
import column from './config/column.json'
import pie from './config/pie.json'
import scatter from './config/scatter.json'


const Root = () => {
  const [renderView2, setRenderView2] = React.useState(false)
  React.useEffect(() => {
    const root1 = document.getElementById('chart1')
    createChart({
      chartConfig: column,
      chartContainer: root1,
      options: { dataUpdated: true }
    })
  }, [])

  React.useEffect(() => {
    if(!renderView2) return
    const root2 = document.getElementById('chart2')
    const root3 = document.getElementById('chart3')
    const root4 = document.getElementById('chart4')
    const root5 = document.getElementById('chart5')
    const root6 = document.getElementById('chart6')

    createChart({
      chartConfig: column,
      chartContainer: root2,
      options: { dataUpdated: true }
    })
    createChart({
      chartConfig: column,
      chartContainer: root3,
      options: { dataUpdated: true }
    })
    createChart({
      chartConfig: column,
      chartContainer: root4,
      options: { dataUpdated: true }
    })

    createChart({
      chartConfig: pie,
      chartContainer: root5,
      options: { dataUpdated: true }
    })

    createChart({
      chartConfig: scatter,
      chartContainer: root6,
      options: { dataUpdated: true }
    })

  }, [renderView2])

  return <div className='root'>
    <div className="view1-container" style={{display: renderView2 ? 'none' : 'flex'}}>
      <div className="view view1">
        <div className="chart-container" id="chart1"></div>
      </div>
    </div>
    <div className="view2-container">
      {renderView2 && <div className="view view2">
        <div className="chart-container" id="chart2"></div>
        <div className="chart-container" id="chart3"></div>
        <div className="chart-container" id="chart4"></div>
        <div className="chart-container" id="chart5"></div>
        <div className="chart-container" id="chart6"></div>
      </div>}
    </div>
    <button onClick={() => setRenderView2(true)}>Render view 2</button>
  </div>
}

ReactDOM.render(<Root />, document.getElementById('root'));