import React from 'react';
import ReactDOM from 'react-dom';
import './styles/root.scss';
import defaultConfigs from './config/default.json'
import { JsonEditor, ChartComponent, LayerFactory } from './components';
import { ConfigEditor } from './config-editor';

const defaultRuntimeFilters = { where: '1=1' }
// const defaultRuntimeFilters = { timeExtent: [1579564800000, 1582243200000] }

const Root = () => {
  const editorRef = React.useRef(null)
  const [layer, setLayer] = React.useState()
  const [dataSource, setDataSource] = React.useState()
  const [webMapWebChart, setWebMapWebChart] = React.useState()
  const [rawRuntimeFilters, setRawRuntimeFilters] = React.useState(defaultRuntimeFilters)
  const [runtimeFilters, setRuntimeFilters] = React.useState(rawRuntimeFilters)

  const dataSourceReady = !!layer || !!dataSource?.featureLayer

  return <div className='root'>
    <div className='left-part'>
      <ConfigEditor disabled={!dataSourceReady} defaultValue={defaultConfigs.bar} onChange={setWebMapWebChart} />
      <LayerFactory onCreateLayer={setLayer} onCreateDataSource={setDataSource} />
    </div>
    <div className='middle-part'>
      <JsonEditor disabled={!dataSourceReady} value={rawRuntimeFilters} onChange={setRawRuntimeFilters} onUpdate={() => setRuntimeFilters(rawRuntimeFilters)} />
    </div>
    <div className='right-part'>
      {(layer || dataSource) && webMapWebChart && <ChartComponent dataSource={dataSource} webMapWebChart={webMapWebChart} featureLayer={layer} runtimeDataFilters={runtimeFilters} />}
    </div>
  </div>
}

ReactDOM.render(<Root />, document.getElementById('root'));