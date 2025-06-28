import React, { useState } from 'react';
import './cancer-tool.css';
import axiosReq from '../../interceptor';

const CancerTool = () => {
  const [painSeverity, setPainSeverity] = useState(0);
  const [result, setResult] = useState(null);

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
    <div className="container">
      <h1>Cancer Risk and Emergency Detection Tool</h1>
      <p>Enter your symptoms to assess cancer risk and check for emergency conditions.</p>
      <p className="disclaimer">
        This tool uses simulated data and is for informational purposes only. Consult a doctor for professional diagnosis.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="section">
          <h3>Demographic Information</h3>
          <label>Age (18–100):
            <input type="number" name="age" min="18" max="100" defaultValue={20} required />
          </label>
          <label>Sex:
            <select name="sex" required>
              <option value="0">Female</option>
              <option value="1">Male</option>
            </select>
          </label>
          <label>Family History of Cancer:
            <select name="family_history" required>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </label>
        </div>

        <div className="section">
          <h3>Symptoms</h3>
          {[
            'fatigue', 'weight_loss', 'pain', 'fever',
            'night_sweats', 'bleeding', 'lumps', 'cough', 'bowel_bladder_changes'
          ].map(field => (
            <label key={field}>
              {field.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}:
              <select name={field} required>
                <option value="0">No</option>
                <option value="1">Yes</option>
              </select>
            </label>
          ))}
        </div>

        <div className="section">
          <h3>Severity Indicators</h3>
          <label>
            Pain Severity (0–10):
            <input
              type="range"
              name="pain_severity"
              min="0"
              max="10"
              value={painSeverity}
              onChange={(e) => setPainSeverity(e.target.value)}
              required
            />
            <span className="slider-value">{painSeverity}</span>
          </label>

          <label>
            Weight Loss Amount (kg):
            <input type="number" name="weight_loss_amount" min="0" step="0.1" defaultValue={0} required />
          </label>

          <label>
            Bleeding Severity:
            <select name="bleeding_severity" required>
              <option value="0">None</option>
              <option value="1">Mild</option>
              <option value="2">Moderate</option>
              <option value="3">Severe</option>
            </select>
          </label>

          <label>
            Vital Sign Abnormalities:
            <select name="vital_sign_abnormalities" required>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </label>
          <p style={{ fontSize: '0.8em', color: '#7f8c8d' }}>
            Note: If unsure, check pulse or oxygen levels if possible.
          </p>
        </div>

        <button type="submit">Check Symptoms</button>
      </form>

      {result && (
        <div
          id="result"
          className={result.emergency_status.includes('EMERGENCY') ? 'emergency' : 'non-emergency'}
        >
          <p><strong>Cancer Risk:</strong> {result.cancer_risk}</p>
          <p><strong>Emergency Status:</strong> {result.emergency_status}</p>
        </div>
      )}

      <footer>
        <p>Developed by GIZ Data Science Training Team Health Tech</p>
        <p><a href="https://github.com/your-repo" target="_blank" rel="noreferrer">View Project on GitHub</a></p>
      </footer>
    </div>
  );
};

export default CancerTool;
