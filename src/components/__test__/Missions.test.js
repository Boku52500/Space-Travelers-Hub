/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from '../missions/Missions';
import store from '../../redux/store';

describe('Testing mission component', () => {});
it('should render correctly Mission component', () => {
  const tree = render(
    <Provider store={store}>
      <Missions />
    </Provider>,

  );
  expect(tree).toMatchSnapshot();
});
