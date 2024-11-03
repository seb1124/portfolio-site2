import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import ProjectPage from './pages/ProjectPage';

function App() {

  return (
    <>
    <Router basename="/portfolio-site2">
          <Navbar/>
          <Routes>
            <Route path="/" element ={<HomePage/>} />
            <Route path="/about" element ={<AboutPage/>} />
            <Route path="/projects" element ={<ProjectPage/>} />
          </Routes>
      </Router>
    </>
  )
}

export default App
