import React from "react";
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'

const CacheLayers = {}
const createFeatureLayer = (url) => {
  if(!url) return null
  if(!CacheLayers[url]) {
    const fl = new FeatureLayer({ url })
    CacheLayers[url] = fl
    return fl
  } else {
    return CacheLayers[url]
  }
  
}

export const LayerFactory = (props) => {
  const [url, setUrl] = React.useState('https://servicesdev.arcgis.com/f126c8da131543019b05e4bfab6fc6ac/arcgis/rest/services/ChicagoCr/FeatureServer/0')

  const handleClick = () => {
    const fl = createFeatureLayer(url)
    fl && props.onCreate?.(fl)
  }

  return <div className="layer-factory">
    <input value={url} onChange={e => setUrl(e.target.value)} />
    <button className="create-btn" onClick={handleClick}>Create</button>
  </div>
}