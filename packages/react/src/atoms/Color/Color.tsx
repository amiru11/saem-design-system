import React from 'react';

import { spacing } from '@saem-ds/foundation';

import type { HTMLAttributes } from 'react';

interface IColorProps extends HTMLAttributes<HTMLDivElement> {
  hexCode: string;
  width?: keyof typeof spacing;
  height?: keyof typeof spacing;
  children?: JSX.Element;
}

function Color({ hexCode, width = spacing.sm, height = spacing.sm, children }: IColorProps): JSX.Element {
  const classNames = `sde-width-${width} sde-height-${height}`;
  return (
    <div className={classNames} style={{ backgroundColor: hexCode }}>
      {children}
    </div>
  );
}

export default Color;
