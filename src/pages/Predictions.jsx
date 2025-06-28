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
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Predictions</h2>
      {predictions.length > 0 ? (
        <ul className="space-y-2">
          {predictions.map(pred => (
            <li key={pred.id} className="border p-2">
              <Link to={`/predictions/${pred.id}`} className="text-blue-600">
                {pred.cancer_risk} - {pred.emergency_status}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No predictions found.</p>
      )}
    </div>
  );
}

export default Predictions;
