const missionsApiUrl = 'https://api.spacexdata.com/v3/missions';

const SHOW_MISSIONS = 'space-travelers-hub/missions/SHOW_MISSIONS';
const JOIN_MISSIONS = 'space-travelers-hub/missions/JOIN_MISSIONS';

export const showMissions = (data) => ({
  type: SHOW_MISSIONS,
  data,
});
export const joinMission = (mission_id) => ({
  type: JOIN_MISSIONS,
  mission_id,
});

const filterMissions = (data) => {
  const missions = data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));
  return showMissions(missions);
};

export const fetchMissions = () => (dispatch) => {
  fetch(`${missionsApiUrl}`)
    .then((response) => response.json())
    .then((json) => dispatch(filterMissions(json)));
};

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case SHOW_MISSIONS:
      return action.data;
    case JOIN_MISSIONS:
      return state.map((mission) => {
        if (mission.mission_id !== action.mission_id) return mission;
        return { ...mission, reserved: true };
      });
    default:
      return state;
  }
};

export default missionsReducer;
