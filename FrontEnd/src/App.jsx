import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Auth from './pages/Auth'
import './App.css'
import Lobby from './pages/Lobby';
import QuizzDashboard from './pages/QuizzDashboard'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/lobby" element={<Lobby/>} />
          <Route path="lobby/quizz-dashboard" element={<QuizzDashboard/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;