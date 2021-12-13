import React from 'react';
import { render } from 'react-dom';

import { Button } from '@saem-ds/react';

import '@saem-ds/scss/lib/Button.css';

const rootElement: Element | null = document.querySelector('#root');

render(
  <React.StrictMode>
    <div>
      <Button label={'test'} />
    </div>
  </React.StrictMode>,
  rootElement,
);
