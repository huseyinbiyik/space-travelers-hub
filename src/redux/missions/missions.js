const missonsApiUrl = "https://api.spacexdata.com/v3/missions";

const SHOW_MISSIONS = "space-travelers-hub/missions/missions";

export const showMissions = (data) => ({
  type: SHOW_MISSIONS,
  data,
});

const filterMissions = (data) => {
  const missions = data.map((mission) => ({
    id: mission.id,
    mission_name: mission.mission_name,
    description: mission.description,
    img: mission.flickr_images[0],
  }));
  return showMissions(missions);
};

export const fetchMissions = () => (dispatch) => {
  fetch(`${missionsApiUrl}`)
    .then((response) => response.json())
    .then((json) => dispatch(filterMissions(json)));
};

export default function missionsReducer(state = [], action) {
  switch (action.type) {
    case SHOW_MISSIONS:
      return action.data;
    default:
      return state;
  }
}