import React from 'react';
import './styles/Rocket.css';
import { useDispatch } from 'react-redux';
import { addRocketReservation, cancelRocketReservation } from '../redux/rockets/rockets';

export default function Rocket(props) {
  const {
    title, description, img, id, reserved,
  } = props;
  const dispatch = useDispatch();

  const reserveRocket = () => {
    dispatch(addRocketReservation(id));
  };

  const cancelRocket = () => {
    dispatch(cancelRocketReservation(id));
  };

  return (
    <div className="single-rocket">
      <div className="rocket-image-container">
        <img className="rocket-image" src={img} alt={title} />
      </div>
      <div className="rocket-desc-container">
        <h2 className="rocket-title">{title}</h2>
        <p className="rocket-desc">
          <small className={reserved ? 'rocket-res-status' : ''}>{reserved ? 'Reserved' : ''}</small>
          {description}
        </p>
        <button className="rocket-reserve-btn" id={id} type="submit" onClick={reserveRocket}>Reserve Rocket</button>
        {/* I will delete this button below on the future task, it is there for test */}
        <button className="rocket-reserve-btn" id={id} type="submit" onClick={cancelRocket}>Cancel Rocket</button>
      </div>
    </div>
  );
}
