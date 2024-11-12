import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Notes from './pages/Notes'
import Create from './pages/Create'

function App() {

  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/Notes" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
