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
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Profile</h2>
      {profile ? (
        <div>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
        </div>
      ) : (
        <p className="text-red-600">Unable to load profile.</p>
      )}
    </div>
  );
}

export default Profile;
