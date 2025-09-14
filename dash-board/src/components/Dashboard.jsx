import React from 'react'
import { useWidgetStore } from '../store/widgetStore'
import Widget from './Widget'

const Dashboard = () => {
  const categories = useWidgetStore(state => state.categories)

  return (
    <div>
      {Object.entries(categories).map(([categoryName, widgets]) => (
        <div key={categoryName}>
          <h2>{categoryName}</h2>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {widgets.map(widget => (
              <Widget key={widget.id} {...widget} category={categoryName} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Dashboard