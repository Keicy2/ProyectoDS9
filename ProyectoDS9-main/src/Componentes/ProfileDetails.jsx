import React, { useState } from 'react';
import ProfileCard from './profileCard';
import ProfileForm from './ProfileForm';
import './css.css';

const ProfileDetails = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    bio: 'Software Developer',
    avatar: 'https://via.placeholder.com/150'
  });

  const handleSave = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <div className="profile-details">
      <ProfileCard user={user} />
      <ProfileForm user={user} onSave={handleSave} />
    </div>
  );
};

export default ProfileDetails;
