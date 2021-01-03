import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pressed?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, pressed, ...rest }) => (
  <Container type="button" pressed={pressed} {...rest}>
    {children}
  </Container>
);

export default Button;
