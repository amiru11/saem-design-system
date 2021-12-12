import React from 'react';

import type { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

function Button({ label }: IButtonProps): JSX.Element {
  return <button>{label}</button>;
}

export default Button;
