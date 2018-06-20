# Policy Based Render Control

This library is still under development and may change it's api without warning. Use at your own risk.

### Installation

```
npm install react-policy
```

### Usage

Add the `PolicyProvider` to your `App`.

```js
import React from 'react';
import { PolicyProvider } from 'react-policy';

const policies = {
	'edit.article': true,
}
<PolicyProvider policies={policies}>
  {...}
</PolicyProvider>
```


```js
import React from 'react';
import { Can } from 'react-policy';

const Article = ({}) => (
  <div>
    <span>Hello</span>
    <Can do="edit.article">
      <Link>Edit</Link>
    </Can>
  </div>
);

export default MyComponent;
```

### Hoc
```js
import React from 'react';
import { withPolicy } from 'react-policy';

const EditLink = ({}) => (
  <Link>Edit</Link>
);

export default withPolicy('can.edit', EditLink);
```