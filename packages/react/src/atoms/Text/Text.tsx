import React from 'react';
import { fontsize } from '@saem-ds/foundation';

interface ITextProps {
  size?: keyof typeof fontsize;
  children?: JSX.Element | JSX.Element[];
}

function Text({ size = fontsize.sm, children }: ITextProps): JSX.Element {
  const className = `sds-text-${size}`;
  return <p className={className}>{children}</p>;
}

export default Text;
