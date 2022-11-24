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
  const [url, setUrl] = React.useState()

  const handleClick = () => {
    const fl = createFeatureLayer(url)
    fl && onCreate?.(fl)
  }

  return <div className="layer-factory">
    <input value={url} onChange={setUrl} />
    <button onClick={handleClick}>Create Layer</button>
  </div>
}