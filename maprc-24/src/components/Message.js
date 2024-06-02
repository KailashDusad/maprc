import React from 'react';
import './Message.css';
import { Link } from 'react-router-dom';
import profiles from './Profiles'; // Assuming profiles is an array of messages

const Message = () => {
  return (
    <div className="profile-container">
      <Link to="/" className="back-button">
        <i className="fas fa-arrow-left"></i> Back
      </Link>
      <h2 className="messages-title">Messages</h2>
      <div className="messages-list">
        {profiles.map((profile, index) => (
          <div className="message-item" key={index}>
            <img src={profile.image} alt={profile.name} className="profile-image" />
            <div className="message-content">
              <h3 className="profile-name">{profile.name}</h3>
              <p className="profile-message">{profile.description}</p>
            </div>
          </div>
        ))}
      </div>
      <input type="text" placeholder="Write your message..." className="message-input" />
    </div>
  );
};

export default Message;
