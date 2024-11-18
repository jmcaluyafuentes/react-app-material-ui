import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const materialTheme = createTheme({
  palette: {
    secondary: {
      main: '#fefefe'
    }
  }
})

function App() {

  return (
    <ThemeProvider theme={materialTheme}>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/Create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
