import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HelloWorldList from './HelloWorldList';
import AddGreeter from './AddGreeter';
import HelloWorld from './HelloWorld';

describe(HelloWorldList, () => {
  const component = shallow(
    <HelloWorldList />
  );

  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <HelloWorldList />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains an AddGreeter subcomponent', () => {
    expect(component.find(AddGreeter)).toHaveLength(1);
  });

  it('contains at least one HelloWorld subcomponent', () => {
    expect(component.find(HelloWorld).length).toBeGreaterThan(0);
  });
});
