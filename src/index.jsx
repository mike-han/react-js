import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import defaultConfig from './default-config.json'
import { JsonEditor } from './json-editor';
import { ChartComponent } from './chart-component'
import { LayerFactory } from './layer-factory'


const Root = () => {
  const [layer, setLayer] = React.useState()
  const [json, setJson] = React.useState(defaultConfig)
  const [config, setConfig] = React.useState(json)

  const handleUpdate = () => {
    setConfig(json)
  }


  return <div className='root'>
    <div className='body'>
      <div className='left-part'>
        <JsonEditor value={json} onChange={setJson} />
      </div>
      <div className='right-part'>
        {layer && config && <ChartComponent config={config} featureLayer={layer} />}
      </div>
    </div>
    <div className='footer'>
      <div className='left-part'>
        <LayerFactory onCreate={setLayer} />
        <button disabled={!layer} onClick={handleUpdate}>Update</button>
      </div>

    </div>
  </div>
}

ReactDOM.render(<Root />, document.getElementById('root'));