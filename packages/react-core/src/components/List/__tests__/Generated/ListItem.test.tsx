/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { ListItem } from '../../ListItem';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ListItem should match snapshot (auto-generated)', () => {
  const view = shallow(<ListItem children={<>ReactNode</>} />);
  expect(view).toMatchSnapshot();
});
