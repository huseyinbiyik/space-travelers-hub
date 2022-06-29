import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
import Rocket from './Rocket';
import './styles/Rockets.css';

export default function Rockets() {
  const rocketData = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rocketData.length === 0) {
      dispatch(fetchRockets());
    }
  }, []);
  const rocketElements = rocketData.map((rocket) => (
    <Rocket
      key={rocket.id}
      id={rocket.id}
      img={rocket.img}
      description={rocket.description}
      title={rocket.rocket_name}
    />
  ));
  return (
    <div className="main-wrapper rocket-wrapper">
      {rocketElements}
    </div>
  );
}
