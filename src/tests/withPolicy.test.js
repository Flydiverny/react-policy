import React from 'react'
import withPolicy from '../withPolicy';
// import { mount, render } from 'enzyme';

// https://github.com/styled-components/styled-components/issues/596
it('should hoist static properties when using withTheme', () => {
  class MyComponent extends React.Component {
    static myStaticProperty = true
  }
  const MyComponentWithTheme = withPolicy(MyComponent)
  expect(MyComponentWithTheme.myStaticProperty).toBe(true)
})
