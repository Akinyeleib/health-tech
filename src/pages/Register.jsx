import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosReq from '../../interceptor';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true)
    try {
      const res = await axiosReq.post('/register', form);
      setMessage(res.data.message);
      setTimeout(() => {
        navigate('/login')
      }, 1500)
    } catch (err) {
      setMessage(err?.response?.data?.message || 'Registration failed');
      setDisabled(false)
    }
  };

  return (
    <div className="flex items-center justify-center px-4">
  <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-bold text-center text-black-700 mb-6">Register</h2>

    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-gray-700 font-medium mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
        <input
          type="text"
          name="phone_number"
          placeholder="Enter your Nigerian Phone Number"
          value={form.phone_number}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <button
        type="submit"
        disabled={disabled}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-md transition-colors"
      >
        Register
      </button>
    </form>

    {message && (
      <p className="mt-4 text-center text-red-600 text-sm font-medium">{message}</p>
    )}
  </div>
</div>

  );
}

export default Register;
