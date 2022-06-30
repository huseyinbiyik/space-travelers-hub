import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../redux/missions/missions';
import styles from './styles/Missions.css';

const Missions = () => {
  const missions = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    if ((missions || []).length === 0) {
      dispatch(fetchMissions());
    }
  }, []);

  const toggleReservation = (mission) => {
    if (mission.reserved) {
      dispatch(leaveMission(mission.id));
    }
    dispatch(joinMission(mission.id));
  };

  const tableHeaders = ['Mission', 'Description', 'Status', 'Action'];

  return (
    <section className="main-wrapper">
      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {missions
            && missions.map((mission) => (
              <tr key={mission.id}>
                <td className={styles.missions_name}>{mission.mission_name}</td>
                <td>{mission.description}</td>
                <td
                  className={`${styles.missions_status} ${
                    mission.reserved ? styles.missions_set_active : ''
                  }`}
                >
                  <p>{mission.reserved ? 'Active Member' : 'Not a Member'}</p>
                </td>
                <td
                  className={`${styles.missions_actions} ${
                    mission.reserved ? styles.missions_actions_active : ''
                  }`}
                >
                  <button
                    key={mission.id}
                    onClick={() => toggleReservation(mission)}
                    type="button"
                  >
                    {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
