import './css/App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './pages/start.js'
import Login from './pages/login.js';
import Signup from './pages/signup.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Start/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;
