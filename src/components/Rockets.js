import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';

export default function Rockets() {
  const data = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchRockets());
    }
  }, []);
  return (
    <div>
      rockets
    </div>
  );
}
