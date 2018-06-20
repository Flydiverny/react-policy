import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './PolicyContext';

const Can = ({ do: policy, children }) => (
  <Consumer>
    {policies => {
      const can = policies[policy];

      if (typeof can === 'undefined') {
        throw new Error(`Unknown policy: '${policy}'`);
      }

      return can ? children : null
    }}
  </Consumer>
);

Can.propTypes = {
  do: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Can;
