import React from 'react';
import ReactDOM from 'react-dom';
import { applyPolyfills, defineCustomElements } from '@arcgis/charts-components/dist/loader'
import './style.css';
import config from './config.json'
import data from './data.json'

applyPolyfills().then(() => {
  defineCustomElements(window, { resourcesUrl: '../arcgis-charts/' })
})

const inlineData1 = data.inlineData1
const inlineData2 = data.inlineData2


const Root = () => {
  const ref = React.useRef(null)

  React.useEffect(() => {
    // ref.current.queueChartCreation = true
    ref.current.config = {...config}
    ref.current.inlineData = {...inlineData2}
  }, [])

  const handleClick1 = () => {
    ref.current.config = {...config}
    ref.current.inlineData = {...inlineData1}
  }

  const handleClick2 = () => {
    ref.current.config = {...config}
    ref.current.inlineData = {...inlineData2}
  }

  return <div style={{ height: 400}}>
    <arcgis-charts-bar-chart ref={ref} />
    <button onClick={handleClick1}>Show 2015</button>
    <button onClick={handleClick2}>Hide 2015</button>
  </div>
}

ReactDOM.render(<Root />, document.getElementById('root'));