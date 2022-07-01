import React from 'react';
import './styles/Profile.css';
import { useSelector } from 'react-redux';

export default function Profile() {
  let profileRocketData = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.mission);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  profileRocketData = profileRocketData.filter((rocket) => (rocket.reserved));

  return (
    <div className="main-wrapper profile-wrapper">
      <div className="my-missions-wrapper">
        <h2>My Missions</h2>
        <div className="reserved-missions-container">
          {reservedMissions.map((mission) => (
            <p className="reserved-mission" key={mission.id}>
              {mission.mission_name}
            </p>
          ))}
        </div>
      </div>

      <div className="my-rockets-wrapper">
        <h2>My Rockets</h2>
        <div className="reserved-rockets-container">
          {profileRocketData.map((rocket) => (
            <p className="reserved-rocket" key={rocket.id}>
              {rocket.rocket_name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
