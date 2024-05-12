import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar' 
import Video from './components/Video'
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
          <Route path="/video/:videoId" element={<Video/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
