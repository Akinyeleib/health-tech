import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PredictionDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await axios.get(`/requests/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setDetail(res.data);
      } catch (err) {
        setDetail(null);
      }
    };
    fetchDetail();
  }, [id, token]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Prediction Details</h2>
      {detail ? (
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          {JSON.stringify(detail, null, 2)}
        </pre>
      ) : (
        <p className="text-red-600">Unable to load prediction detail.</p>
      )}
    </div>
  );
}

export default PredictionDetail;
