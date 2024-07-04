import React, { useState } from 'react';

const ProfileForm = ({ user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [avatar, setAvatar] = useState(user.avatar);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, bio, avatar });
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Bio:</label>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
      </div>
      <div>
        <label>Avatar URL:</label>
        <input type="text" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default ProfileForm;
