import React from 'react';
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
export const JsonEditor = (props) => {
  const { value, onChange } = props
  return (<Editor className='json-editor' value={value} onChange={onChange} {...defaultProps} />)
}