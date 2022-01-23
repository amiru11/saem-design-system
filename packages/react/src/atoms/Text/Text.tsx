import React from 'react';
import { fontsize } from '@saem-ds/foundation';

interface ITextProps {
  size?: keyof typeof fontsize;
  children?: JSX.Element | JSX.Element[];
}

function Text({ size, children }: ITextProps): JSX.Element {
  const className = `sde-text-${size}`;
  return <p className={className}>{children}</p>;
}

export default Text;
