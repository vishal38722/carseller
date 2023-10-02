import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <div className="App">
      <Router>
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route exact path='/' element={<Home searchQuery={searchQuery}/>} />
          <Route exact path='/about' element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
