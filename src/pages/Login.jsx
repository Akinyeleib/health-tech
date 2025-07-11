import { useEffect, useState } from 'react';
import axiosReq from '../../interceptor';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const keys = ['health-tech-token', 'health-tech-full-name', 'health-tech-phone-number']
    keys.forEach(key => localStorage.removeItem(key))
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosReq.post('/login', form);
      localStorage.setItem('health-tech-token', res.data.token);
      localStorage.setItem('health-tech-full-name', res.data.full_name);
      localStorage.setItem('health-tech-phone-number', res.data.phone_number);
      setMessage('Login successful');setTimeout(() => {
        navigate('/home')
      }, 1500)
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
  <div className="flex items-center justify-center px-4">
  <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-bold text-center text-black-700 mb-6">Login</h2>

    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
        <input
          type="text"
          name="phone_number"
          placeholder="Enter your Phone Number"
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
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-md transition-colors"
      >
        Login
      </button>
    </form>

    {message && (
      <p className="mt-4 text-center text-red-600 text-sm font-medium">{message}</p>
    )}
  </div>
</div>

  );
}

export default Login;
