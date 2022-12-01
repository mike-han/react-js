import React from "react"
import { JsonEditor } from './components'
import styled from "@emotion/styled"
import { useForkRef } from './utils'
import defaultConfigs from './config/default.json'

const Root = styled.div`
  height: 100%;
  width: 100%;
  .header {
    width: 100%;
    height: 45px;
    display: flex;
    > button {
      min-width: 80px;
    }
  }
  .body {
    height: calc(100% - 45px);
  }
`

export const ConfigEditor = (props) => {
  const { defaultValue, disabled, editorRef, onChange } = props

  const ref = React.useRef(null)
  const handleRef = useForkRef(ref, editorRef)

  const handleChange = () => {
    const config = ref.current.jsonEditor.get()
    onChange?.(config)
  }

  return <Root className="config-editor">
    <div className='header'>
      {
        Object.entries(defaultConfigs).map(([type, config]) => {
          return <button key={type} className='ml-2' onClick={() => ref.current.jsonEditor.set(config)}>{type}</button>
        })
      }
    </div>
    <div className="body">
      <JsonEditor ref={handleRef} disabled={disabled} value={defaultValue} onUpdate={handleChange} />
    </div>
  </Root>
}