import React from "react";
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import styled from "@emotion/styled";

const CacheLayers = {}
const createFeatureLayer = (url) => {
  if (!url) return null
  if (!CacheLayers[url]) {
    const fl = new FeatureLayer({ url })
    CacheLayers[url] = fl
    return fl
  } else {
    return CacheLayers[url]
  }
}

const createFeatureLayerDataSource = (url) => {
  return {
    type: 'featureLayer',
    featureLayer: {
      layerType: 'ArcGISFeatureLayer',
      id: "",
      url
    }
  }
}

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > input {
    width: 90%;
  }
  .create-btn {
    margin-left: 10px;
  }
`

export const LayerFactory = (props) => {
  const { onCreateDataSource, onCreateLayer } = props
  const [url, setUrl] = React.useState('https://services9.arcgis.com/pJENMVYPQqZZe20v/arcgis/rest/services/Ontario_Daily_Case_Progression/FeatureServer/0')

  const handleLayerCreated = () => {
    const fl = createFeatureLayer(url)
    fl && onCreateLayer?.(fl)
  }

  const handleDataSourceCreated = () => {
    const ds = createFeatureLayerDataSource(url)
    onCreateDataSource?.(ds)
  }

  return <Root className="layer-factory">
    <input value={url} onChange={e => setUrl(e.target.value)} />
    <button className="create-btn" disabled={!url} onClick={handleLayerCreated}>Create API layer</button>
    <button className="create-btn" disabled={!url} onClick={handleDataSourceCreated}>Create FL data source</button>
  </Root>
}