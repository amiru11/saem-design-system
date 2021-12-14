import React from 'react';
import { render } from 'react-dom';

import { spacing } from '@saem-ds/foundation';
import { Button, Color } from '@saem-ds/react';

import '@saem-ds/scss/lib/Button.css';
import '@saem-ds/scss/lib/Utilities.css';

const rootElement: Element | null = document.querySelector('#root');

render(
  <React.StrictMode>
    <div>
      <Button label={'test'} />
      <Color hexCode="#000000" width={spacing.lg} height={spacing.xxl} />
    </div>
  </React.StrictMode>,
  rootElement,
);
