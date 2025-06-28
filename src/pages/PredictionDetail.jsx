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
    // <div className="p-4 max-w-5xl ">
    //   <h2 className="text-xl font-bold mb-4">Prediction Details</h2>
    //   {detail ? (
    //     <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    //       {JSON.stringify(detail, null, 2)}
    //     </pre>
    //   ) : (
    //     <p className="text-red-600">Unable to load prediction detail.</p>
    //   )}
    // </div>
    <div className="min-h-screen bg-gray-50 px-4 py-8">
  <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-bold text-black-700 mb-6">Prediction Details</h2>

    {detail ? (
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto border border-gray-200 text-gray-800">
        {JSON.stringify(detail, null, 2)}
      </pre>
    ) : (
      <p className="text-center text-red-600 font-medium">
        Unable to load prediction detail.
      </p>
    )}
  </div>
</div>

  );
}

export default PredictionDetail;
