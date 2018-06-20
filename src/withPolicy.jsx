import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import Can from './Can';

const withPolicy = policy => WrappedComponent => {
  // eslint-disable-next-line react/prop-types
  const WithPolicy = ({forwardedRef, ...props}) => (
    <Can do={policy}>
      <WrappedComponent ref={forwardedRef} {...props} />
    </Can>
  );

  const forwardRef = (props, ref) => <WithPolicy {...props} forwardedRef={ref} />

  const name = WrappedComponent.displayName || WrappedComponent.name;
  forwardRef.displayName = `withPolicy(${name})`;

  hoistNonReactStatics(WithPolicy, WrappedComponent);

  return React.forwardRef(forwardRef);
};

export default withPolicy;
