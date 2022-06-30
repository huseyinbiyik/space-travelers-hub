import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import store from './../redux/configureStore.js';

describe('Header ui and snapshot test', () => {
  it('should render Header component', () => {
    const header = render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    );
    expect(header).toMatchSnapshot();
  });

  test('it should check if there is any element called Rockets on the header', () => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('Rockets')).toBeInTheDocument();
  });
});
