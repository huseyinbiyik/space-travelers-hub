import React from 'react';

export default function Rocket(props) {
  const {
    title, description, img, id,
  } = props;

  return (
    <div className="single-rocket">
      <div className="rocket-image-container">
        <img src={img} alt={title} />
      </div>
      <div className="rocket-desc-container">
        <h2 className="rocket-title">{title}</h2>
        <p className="rocket-desc">{description}</p>
        <button className="rocket-reserve-btn" id={id} type="submit">Reserve Rocket</button>
      </div>
    </div>
  );
}
