import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar' 
import Video from './components/Video'
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
      <Navbar handleSearchSubmit={handleSearchSubmit} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
          <Route path="/video/:videoId" component={<Video/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
