import React from 'react';
import './styles/Profile.css';
import { useSelector } from 'react-redux';

export default function Profile() {
  let profileRocketData = useSelector((state) => state.rockets);

  profileRocketData = profileRocketData.filter((rocket) => (rocket.reserved));

  return (
    <div className="main-wrapper profile-wrapper">
      <div className="my-missions-wrapper"><h2>My Missions</h2></div>
      <div className="my-rockets-wrapper">
        <h2>My Rockets</h2>
        <div className="reserved-rockets-container">
          {
              profileRocketData.map((rocket) => (<p key={rocket.id}>{rocket.rocket_name}</p>))
        }
        </div>
      </div>
    </div>
  );
}
