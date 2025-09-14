import React, { useState } from 'react'
import Dashboard from './components/Dashboard'
import AddWidgetModal from './components/AddWidgetModal'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>CNAPP Dashboard</h1>
      <button onClick={() => setModalOpen(true)}>+ Add Widget</button>
      <Dashboard />
      {modalOpen && <AddWidgetModal closeModal={() => setModalOpen(false)} />}
    </div>
  )
}

export default App