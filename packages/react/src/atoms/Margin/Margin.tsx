import React from 'react';
import { spacing } from '@saem-ds/foundation';

interface IMarginProps {
  space?: keyof typeof spacing;
  children?: JSX.Element | JSX.Element[];
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
}

function getClassName(
  space: keyof typeof spacing,
  left?: boolean,
  right?: boolean,
  top?: boolean,
  bottom?: boolean,
): string {
  let className = `sds-margin-${space}`;

  if (left) {
    className = `${className} sds-margin-left-${space}`;
  }
  if (right) {
    className = `${className} sds-margin-right-${space}`;
  }
  if (top) {
    className = `${className} sds-margin-top-${space}`;
  }
  if (bottom) {
    className = `${className} sds-margin-bottom-${space}`;
  }

  return className;
}

function Margin({ space = spacing.md, left, right, top, bottom, children }: IMarginProps): JSX.Element {
  const className = getClassName(space, left, right, top, bottom);

  return <div className={className}>{children}</div>;
}

export default Margin;
