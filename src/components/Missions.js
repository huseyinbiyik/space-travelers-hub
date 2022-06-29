import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';

export default function Missions() {
  const data = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchMissions());
    }
  }, []);
  return <div>missions</div>;
}
