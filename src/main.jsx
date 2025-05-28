import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import MenuMain from './components/MenuMain'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MenuMain />
  </StrictMode>
)
