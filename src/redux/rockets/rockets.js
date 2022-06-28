const apiUrl = 'https://api.spacexdata.com/v3/rockets';

const SHOW_ROCKETS = 'space-travelers-hub/rockets/rockets';

export const showMissions = (data) => ({
  type: SHOW_ROCKETS,
  data,
});

export const fetchRockets = () => (
  (dispatch) => {
    fetch(`${apiUrl}`)
      .then((response) => response.json())
      .then((json) => dispatch(showMissions(json)));
  }
);

export default function rocketsReducer(state = [], action) {
  switch (action.type) {
    case SHOW_ROCKETS:
      return action.data;
    default:
      return state;
  }
}
