import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home/Home';
import Contact from './screens/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={null} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
