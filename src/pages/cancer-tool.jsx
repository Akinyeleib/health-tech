import React, { useState } from 'react';
import './cancer-tool.css';
import axiosReq from '../../interceptor';

const CancerTool = () => {
  const [painSeverity, setPainSeverity] = useState(0);
  const [result, setResult] = useState(null);
  const age_limit = {
    default: 21,
    minimim: 32,
    maximum: 100
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await axiosReq.post('/',
        new URLSearchParams(data).toString(),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
      );

      if (response.status != 200) throw new Error('Network response not ok');
      const resultData = response.data
      setResult(resultData);
    } catch (error) {
      alert('Error processing prediction. Please try again.');
      console.error(error);
    }
  };

return (
  <div className="min-h-screen ">
    <div className="max-w-5xl mx-auto bg-white p-8 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-black-700 mb-4 text-center">
        Cancer Risk & Emergency Detection Tool
      </h1>
      <p className="text-gray-600 text-center mb-2">
        Enter your symptoms to assess cancer risk and detect potential emergencies.
      </p>
      <p className="text-sm text-yellow-600 italic text-center mb-6">
        This tool uses simulated data and is for informational purposes only. Consult a doctor for professional diagnosis.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Demographic Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block text-sm font-medium text-gray-700">
              Age ({age_limit.minimim} - {age_limit.maximum})
              <input
                type="number"
                name="age"
                min={ age_limit.minimim }
                max={ age_limit.maximum }
                defaultValue={ age_limit.default }
                required
                className="mt-1 w-full border px-3 py-2 rounded focus:ring-2 focus:ring-orange-500"
              />
            </label>
            <label className="block text-sm font-medium text-gray-700">
              Sex
              <select
                name="sex"
                required
                className="mt-1 w-full border px-3 py-2 rounded focus:ring-2 focus:ring-orange-500"
              >
                <option value="0">Female</option>
                <option value="1">Male</option>
              </select>
            </label>
            <label className="block text-sm font-medium text-gray-700">
              Family History of Cancer
              <select
                name="family_history"
                required
                className="mt-1 w-full border px-3 py-2 rounded focus:ring-2 focus:ring-orange-500"
              >
                <option value="0">No</option>
                <option value="1">Yes</option>
              </select>
            </label>
          </div>
        </div>

        {/* Symptoms */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Symptoms</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           {[
            'fatigue', 'weight_loss', 'pain', 'fever',
            'night_sweats', 'bleeding', 'lumps', 'cough', 'bowel_bladder_changes'
          ].map((field) => (
              <label
                key={field}
                className="block text-sm font-medium text-gray-700 capitalize"
              >
                {field.replace(/_/g, ' ')}
                <select
                  name={field}
                  required
                  className="mt-1 w-full border px-3 py-2 rounded focus:ring-2 focus:ring-orange-500"
                >
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </select>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Severity Indicators</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block text-sm font-medium text-gray-700">
              Pain Severity (0–10)
              <input
                type="range"
                name="pain_severity"
                min="0"
                max="10"
                value={painSeverity}
                onChange={(e) => setPainSeverity(e.target.value)}
                required
                className="w-full mt-2"
              />
              <span className="text-xs text-gray-500">Value: {painSeverity}</span>
            </label>

            <label className="block text-sm font-medium text-gray-700">
              Weight Loss Amount (kg)
              <input
                type="number"
                name="weight_loss_amount"
                min="0"
                step="0.1"
                defaultValue={0}
                required
                className="mt-1 w-full border px-3 py-2 rounded focus:ring-2 focus:ring-orange-500"
              />
            </label>

            <label className="block text-sm font-medium text-gray-700">
              Bleeding Severity
              <select
                name="bleeding_severity"
                required
                className="mt-1 w-full border px-3 py-2 rounded focus:ring-2 focus:ring-orange-500"
              >
                <option value="0">None</option>
                <option value="1">Mild</option>
                <option value="2">Moderate</option>
                <option value="3">Severe</option>
              </select>
            </label>

            <label className="block text-sm font-medium text-gray-700">
              Vital Sign Abnormalities
              <select
                name="vital_sign_abnormalities"
                required
                className="mt-1 w-full border px-3 py-2 rounded focus:ring-2 focus:ring-orange-500"
              >
                <option value="0">No</option>
                <option value="1">Yes</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                If unsure, check pulse or oxygen levels if possible.
              </p>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-md transition"
        >
          Check Symptoms
        </button>
      </form>

      {result && (
        <div
          id="result"
          className={`mt-6 p-4 rounded-md text-white font-medium ${
            result.emergency_status.includes('EMERGENCY')
              ? 'bg-red-600'
              : 'bg-green-600'
          }`}
        >
          <p><strong>Cancer Risk:</strong> {result.cancer_risk}</p>
          <p><strong>Emergency Status:</strong> {result.emergency_status}</p>
        </div>
      )}

      <footer className="mt-10 text-center text-sm text-gray-500">
        <p>Developed by GIZ Data Science Training Team Health Tech</p>
        <p>
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noreferrer"
            className="text-orange-600 hover:underline"
          >
            View Project on GitHub
          </a>
        </p>
      </footer>
    </div>
  </div>
);

};

export default CancerTool;
