import React from 'react';
import { useNavigate } from 'react-router';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div>
        Profile pages
        <br />
        <br />
        <button onClick={() => navigate('/measurement')}>Start Measurement</button>
    </div>
  );
};

export default Profile;