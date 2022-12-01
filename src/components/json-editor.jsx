import React from 'react';
import styled from "@emotion/styled";
import { JsonEditor as Editor } from 'jsoneditor-react'
import 'jsoneditor-react/es/editor.min.css'

const defaultProps = {
  tag: 'div',
  mode: 'code',
  allowedModes: ['tree', 'code'],
  history: false,
  search: true,
  navigationBar: false,
  statusBar: false,
  sortObjectKeys: false,
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  > div {
    height: 100%;
    width: 100%;
  }
`

export const JsonEditor = React.forwardRef((props, ref) => {
  const { value, disabled, onChange, onUpdate } = props
  
  return (<Root className='json-editor'>
    <Editor ref={ref} value={value} onChange={onChange} {...defaultProps} />
    <button className='btn' disabled={disabled} onClick={onUpdate}>Update</button>
  </Root>)
})