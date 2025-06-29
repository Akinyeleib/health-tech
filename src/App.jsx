import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import CancerTool from './pages/cancer-tool';
import MeetTheTeam from './team-members';
import Register from './pages/Register';
import Login from './pages/Login';
import Predictions from './pages/Predictions';
import PredictionDetail from './pages/PredictionDetail';
import Profile from './pages/Profile';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="max-w-5xl mx-auto px-4">
        <header className="py-4 bg-gray-100 shadow-md rounded-lg px-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-black-700">
              CancerTool
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link to="/team" className="text-black-700 font-semibold hover:underline">
                Team
              </Link>
              <Link to="/register" className="text-black-700 font-semibold hover:underline">
                Register
              </Link>
              <Link to="/login" className="text-black-700 font-semibold hover:underline">
                Login
              </Link>
              <Link to="/logout" className="text-black-700 font-semibold hover:underline">
                Logout
              </Link>
              <Link to="/profile" className="text-black-700 font-semibold hover:underline">
                Profile
              </Link>
              <Link to="/predictions" className="text-black-700 font-semibold hover:underline">
                Predictions
              </Link>
            </nav>
            <button
              className="md:hidden text-black-700"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {menuOpen && (
            <nav className="mt-4 flex flex-col gap-3 md:hidden">
              <Link to="/team" onClick={() => setMenuOpen(false)} className="text-black-700 font-semibold hover:underline">
                Team
              </Link>
              <Link to="/register" onClick={() => setMenuOpen(false)} className="text-black-700 font-semibold hover:underline">
                Register
              </Link>
              <Link to="/login" onClick={() => setMenuOpen(false)} className="text-black-700 font-semibold hover:underline">
                Login
              </Link>
              <Link to="/loout" onClick={() => setMenuOpen(false)} className="text-black-700 font-semibold hover:underline">
                Logout
              </Link>
              <Link to="/profile" onClick={() => setMenuOpen(false)} className="text-black-700 font-semibold hover:underline">
                Profile
              </Link>
              <Link to="/predictions" onClick={() => setMenuOpen(false)} className="text-black-700 font-semibold hover:underline">
                Predictions
              </Link>
            </nav>
          )}
        </header>
        <div className="mt-6">
          <Routes>
            <Route path="/" element={<CancerTool />} />
            <Route path="/team" element={<MeetTheTeam />} />
            <Route path="/cancer-tool" element={<CancerTool />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/predictions" element={<Predictions />} />
            <Route path="/predictions/:id" element={<PredictionDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
