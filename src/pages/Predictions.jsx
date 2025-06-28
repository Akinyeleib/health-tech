import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Predictions() {
  const [predictions, setPredictions] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        const res = await axios.get('/requests', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setPredictions(res.data);
      } catch (err) {
        setPredictions([]);
      }
    };
    fetchPredictions();
  }, [token]);

  return (
  <div className="min-h-screen bg-gray-50 px-4 py-8">
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-black-700 mb-6">My Predictions</h2>

      {predictions.length > 0 ? (
        <ul className="space-y-4">
          {predictions.map((pred) => (
            <li
              key={pred.id}
              className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow"
            >
              <Link
                to={`/predictions/${pred.id}`}
                className="block text-lg text-gray-800 hover:text-orange-900 font-medium"
              >
                {pred.cancer_risk} - {pred.emergency_status}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-center">No predictions found.</p>
      )}
    </div>
  </div>
);

}

export default Predictions;
