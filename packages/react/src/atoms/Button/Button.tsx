import React from 'react';

import type { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

function Button({ label }: IButtonProps): JSX.Element {
  return <button className="sds-button__container">{label}</button>;
}

export default Button;
