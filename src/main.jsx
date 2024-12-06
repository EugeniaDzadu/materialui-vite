import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPortal from './pages/LoginPortal'
import FaceBook from './pages/FaceBook'

createRoot(document.getElementById('root')).render(
  // <TextField variant='outlined' label='Username' ></TextField>
  <FaceBook />
)
