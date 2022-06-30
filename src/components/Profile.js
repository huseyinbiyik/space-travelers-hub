import React from 'react';
import './styles/Profile.css';
import { useSelector } from 'react-redux';

export default function Profile() {
  const profileRocketData = useSelector((state) => state.rockets);
  console.log(profileRocketData);
  return (
    <div className="main-wrapper profile-wrapper">
      <div className="my-missions-wrapper"><h2>My Missions</h2></div>
      <div className="my-rockets-wrapper"><h2>My Rockets</h2></div>
    </div>
  );
}
