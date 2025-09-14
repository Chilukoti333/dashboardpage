import React from 'react'
import { useWidgetStore } from '../store/widgetStore'

const Widget = ({ id, name, text, category }) => {
  const removeWidget = useWidgetStore(state => state.removeWidget)

  return (
    <div style={{
      border: '1px solid gray',
      padding: 10,
      borderRadius: 5,
      width: 200,
      backgroundColor: 'white'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <strong>{name}</strong>
        <button onClick={() => removeWidget(category, id)}>❌</button>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Widget