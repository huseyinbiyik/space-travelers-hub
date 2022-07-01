import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../Redux/configureStore';
import Rockets from '../components/Rockets';
import Rocket from '../components/Rocket';
import rocketsReducer, { showRockets, addRocketReservation, cancelRocketReservation } from '../redux/rockets/rockets';
import rocketTestData from './testData';

describe('Rocket', () => {
  it('should render rocket component', () => {
    const rocket = render(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    );
    expect(rocket).toMatchSnapshot();
  });

  it('should render rockets component', () => {
    const rockets = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(rockets).toMatchSnapshot();
  });

  it('Should update the state with API data', () => {
    expect(rocketsReducer(rocketTestData, showRockets(rocketTestData)))

      .toEqual(rocketTestData);
  });

  it('Should update the state with correct id to reserved: true', () => {
    const rocketId = '1';
    expect(rocketsReducer(rocketTestData, addRocketReservation(rocketId)))
      .toEqual(rocketTestData.map((d) => (d.id === rocketId ? { ...d, reserved: true } : d)));
  });

  it('Should update the state with correct id to reserved: false', () => {
    const rocketId = '5';
    expect(rocketsReducer(rocketTestData, cancelRocketReservation(rocketId)))
      .toEqual(rocketTestData.map((d) => (d.id === rocketId ? { ...d, reserved: false } : d)));
  });
});
