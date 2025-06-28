import { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [profile, setProfile] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProfile(res.data);
      } catch (err) {
        setProfile(null);
      }
    };
    fetchProfile();
  }, [token]);

  return (
    // <div className="p-4">
    //   <h2 className="text-xl font-bold mb-4">User Profile</h2>
    //   {profile ? (
    //     <div>
    //       <p><strong>Name:</strong> {profile.name}</p>
    //       <p><strong>Email:</strong> {profile.email}</p>
    //     </div>
    //   ) : (
    //     <p className="text-red-600">Unable to load profile.</p>
    //   )}
    // </div>

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
          <p className="text-sm text-gray-500">Email</p>
          <p className="text-lg font-semibold">{profile.email}</p>
        </div>
      </div>
    ) : (
      <p className="text-center text-red-600 font-medium">
        Unable to load profile.
      </p>
    )}
  </div>
</div>

  );
}

export default Profile;
