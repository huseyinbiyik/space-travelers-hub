const apiUrl = 'https://api.spacexdata.com/v3/rockets';

const SHOW_ROCKETS = 'space-travelers-hub/rockets/SHOW_ROCKETS';
const ADD_ROCKET_RESERVATION = 'space-travelers-hub/rockets/ADD_ROCKET_RESERVATION';

export const showRockets = (data) => ({
  type: SHOW_ROCKETS,
  data,
});

export const addRocketReservation = (id) => ({
  type: ADD_ROCKET_RESERVATION,
  id,
});

const filterData = (data) => {
  const rockets = data.map((rocket) => (
    {
      id: rocket.id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      img: rocket.flickr_images[0],
      reserved: false,
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

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case SHOW_ROCKETS:
      return action.data;
    case ADD_ROCKET_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
    default:
      return state;
  }
};

export default rocketsReducer;
