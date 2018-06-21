import React from 'react';
import PropTypes from 'prop-types';
import { Provider, Consumer } from './PolicyContext';

const PolicyExtender = ({ children, policies }) => (
  <Consumer>
    {canDo => (
      <Provider
        value={policy => {
          const extended = policies[policy];
          const consumed = canDo(policy);
          const hasExtended = typeof extended !== 'undefined';
          const hasConsumed = typeof consumed !== 'undefined';

          if (hasConsumed && hasExtended) {
            return consumed && extended;
          }

          if (hasExtended) {
            return extended;
          }

          return consumed;
        }}
      >
        {children}
      </Provider>
    )}
  </Consumer>
);

PolicyExtender.propTypes = {
  children: PropTypes.node.isRequired,
  policies: PropTypes.shape({}).isRequired,
};

export default PolicyProvider;
