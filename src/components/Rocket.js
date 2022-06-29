import React from 'react';
import './styles/Rocket.css';
import { useDispatch } from 'react-redux';

export default function Rocket(props) {
  const {
    title, description, img, id, reserved,
  } = props;
  const dispatch = useDispatch();

  const reserveRocket = () => {
    dispatch(addReservation(id));
  };

  return (
    <div className="single-rocket">
      <div className="rocket-image-container">
        <img className="rocket-image" src={img} alt={title} />
      </div>
      <div className="rocket-desc-container">
        <h2 className="rocket-title">{title}</h2>
        <p className="rocket-desc">
          <span className="rocket-res-status">{reserved}</span>
          {description}
        </p>
        <button className="rocket-reserve-btn" id={id} type="submit" onClick={reserveRocket}>Reserve Rocket</button>
      </div>
    </div>
  );
}
