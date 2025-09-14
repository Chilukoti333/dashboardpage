import { create } from 'zustand'

export const useWidgetStore = create((set) => ({
  categories: {
    'CSPM Executive Dashboard': [
      { id: 1, name: 'Cloud Accounts', text: 'Connected: 25' },
      { id: 2, name: 'Risk Assessment', text: 'Risk Summary' }
    ],
    'CWPP Dashboard': [],
    'Registry Scan': []
  },

  addWidget: (category, widget) =>
    set(state => {
      const newCat = { ...state.categories }
      if (!newCat[category]) newCat[category] = []
      newCat[category].push(widget)
      return { categories: newCat }
    }),

  removeWidget: (category, widgetId) =>
    set(state => {
      const updated = { ...state.categories }
      updated[category] = updated[category].filter(w => w.id !== widgetId)
      return { categories: updated }
    })
}))
