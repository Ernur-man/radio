import './App.less'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
      </Routes>
    </>
  )
}

export default App
