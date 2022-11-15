import React from 'react';
import ReactDOM from 'react-dom';
import { applyPolyfills, defineCustomElements } from '@arcgis/charts-components/dist/loader'
import './style.css';
import config1 from './config1/config1.json'
import data1 from './config1/data1.json'
import config2 from './config2/config2.json'
import data2 from './config2/data2.json'
import config3 from './config3/config3.json'
import data3 from './config3/data3.json'
import config4 from './config4/config4.json'
import data4 from './config4/data4.json'


applyPolyfills().then(() => {
  defineCustomElements(window, { resourcesUrl: '../arcgis-charts/' })
})

const Root = () => {
  const ref = React.useRef(null)

  React.useEffect(() => {
    ref.current.config = config1
    setTimeout(() => { ref.current.inlineData = { inputData: data1, processed: true } })
  }, []) 

  const handleClick1 = () => {
    ref.current.config = config2
    setTimeout(() => { ref.current.inlineData = { inputData: data2, processed: true } })
  }
  const handleClick2 = () => {
    ref.current.config = config3
    setTimeout(() => { ref.current.inlineData = { inputData: data3, processed: true } })
  }
  const handleClick3 = () => {
    ref.current.config = config4
    setTimeout(() => { ref.current.inlineData = { inputData: data4, processed: true } })
  }


  return <div className='root'>
    <arcgis-charts-pie-chart ref={ref} />
    <button onClick={handleClick1}>Configure colors based on grouping fields</button>
    <button onClick={handleClick2}>Modified the color of a slice</button>
    <button onClick={handleClick3}>Back to single color mode</button>
  </div>
}

ReactDOM.render(<Root />, document.getElementById('root'));