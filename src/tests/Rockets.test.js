import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../Redux/configureStore';
import Rockets from '../components/Rockets'
import Rocket from '../components/Rocket'
import showRockets from '../redux/rockets/rockets'

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

})