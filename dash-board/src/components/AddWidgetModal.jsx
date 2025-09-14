import React, { useState } from 'react'
import { useWidgetStore } from '../store/widgetStore'

const AddWidgetModal = ({ closeModal }) => {
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const addWidget = useWidgetStore(state => state.addWidget)

  const handleAdd = () => {
    if (!category || !name) return
    addWidget(category, {
      id: Date.now(),
      name,
      text
    })
    closeModal()
  }

  return (
    <div style={{
      backgroundColor: '#000000aa',
      position: 'fixed',
      inset: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ background: 'white', padding: 20, borderRadius: 5, width: 300 }}>
        <h3>Add Widget</h3>
        <input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
        <input placeholder="Widget Name" value={name} onChange={e => setName(e.target.value)} />
        <textarea placeholder="Text" value={text} onChange={e => setText(e.target.value)} />
        <br />
        <button onClick={handleAdd}>Create</button>
        <button onClick={closeModal} style={{ marginLeft: 10, backgroundColor: '#ccc', color: '#000' }}>Cancel</button>
      </div>
    </div>
  )
}

export default AddWidgetModal