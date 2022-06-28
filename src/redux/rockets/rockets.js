const apiUrl = 'https://api.spacexdata.com/v3/rockets';

const SHOW_ROCKETS = 'space-travelers-hub/rockets/rockets';

export const showRockets = (data) => ({
  type: SHOW_ROCKETS,
  data,
});

const filterData = (data) => {
  const rockets = data.map((rocket) => (
    {
      id: rocket.id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      img: rocket.flickr_images[0],
    }
  ));
  return showRockets(rockets);
};

export const fetchRockets = () => (
  (dispatch) => {
    fetch(`${apiUrl}`)
      .then((response) => response.json())
      .then((json) => dispatch(filterData(json)));
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
