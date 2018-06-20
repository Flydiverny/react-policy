import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from './PolicyContext';

const PolicyProvider = ({ children, policies }) => (
  <Provider value={policies}>
    {children}
  </Provider>
);

PolicyProvider.propTypes = {
  children: PropTypes.node.isRequired,
  policies: PropTypes.shape({}).isRequired,
}

export default PolicyProvider;
