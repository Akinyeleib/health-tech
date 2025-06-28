import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CancerTool from './pages/cancer-tool';
import MeetTheTeam from './team-members';
import Register from './pages/Register';
import Login from './pages/Login';
import Predictions from './pages/Predictions';
import PredictionDetail from './pages/PredictionDetail';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="p-4 flex justify-between bg-white-100">
        <Link to="/" className="text-blue-600 font-semibold">CancerTool</Link>
        <div className="flex gap-4">
          <Link to="/team" className="text-blue-600 font-semibold">MeetTheTeam</Link>
          <Link to="/register" className="text-blue-600 font-semibold">Register</Link>
          <Link to="/login" className="text-blue-600 font-semibold">Login</Link>
          <Link to="/profile" className="text-blue-600 font-semibold">Profile</Link>
          <Link to="/predictions" className="text-blue-600 font-semibold">My Predictions</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<CancerTool />} />
        <Route path="/team" element={<MeetTheTeam />} />
        <Route path="/cancer-tool" element={<CancerTool />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/predictions" element={<Predictions />} />
        <Route path="/predictions/:id" element={<PredictionDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
