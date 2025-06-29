import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [profile, setProfile] = useState(undefined);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const phone_number = localStorage.getItem('health-tech-phone-number') || undefined
    const name = localStorage.getItem('health-tech-full-name') || undefined
    if (name && profile) {
      setProfile({
        phone_number,
        name
      })
    }
  }, [])

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       const res = await axios.get('/profile', {
  //         headers: { Authorization: `Bearer ${token}` }
  //       });
  //       setProfile(res.data);
  //     } catch (err) {
  //       setProfile(null);
  //     }
  //   };
  //   fetchProfile();
  // }, [token]);

  return (
    <div className="flex items-center justify-center px-4">
  <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-bold text-black-700 mb-6 text-center">User Profile</h2>

    {profile ? (
      <div className="space-y-4 text-gray-800">
        <div>
          <p className="text-sm text-gray-500">Name</p>
          <p className="text-lg font-semibold">{profile.name}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Phone Number</p>
          <p className="text-lg font-semibold">{profile.phone_number}</p>
        </div>
      </div>
    ) : (
      <p className="text-center text-red-600 font-medium">
        <h2>Login is required to access this page. Redirecting to login page</h2>
        {
          setTimeout(() => {
            navigate('/login')
          }, 1500)
        }
      </p>
    )}
  </div>
</div>

  );
}

export default Profile;
