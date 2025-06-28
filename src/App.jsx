import './App.css'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CancerTool from './cancer-tool';
import MeetTheTeam from './team-members';

function App() {
  return (
    <Router>
      <div className="p-4 flex justify-between bg-gray-100">
        <Link to="/" className="text-blue-600 font-semibold">CancerTool</Link>
        <Link to="/team" className="text-blue-600 font-semibold">MeetTheTeam</Link>
      </div>
      <Routes>
      <Route path="/" element={<CancerTool />} />
        <Route path="/team" element={<MeetTheTeam />} />
        <Route path="/cancer-tool" element={<CancerTool />} />
      </Routes>
    </Router>
  );
}

export default App
