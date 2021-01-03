import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  pressed?: boolean;
}

export const Container = styled.button<ButtonProps>`
  width: 350px;
  height: 40px;
  padding: 10px;
  border: none;
  font-weight: 500;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  background: linear-gradient(to bottom, #5ea7f5 15%, #96009b);
  margin-bottom: 25px;

  &:hover {
    background: ${shade(0.2, '#de0039')};
  }

  ${props =>
    props.pressed &&
    css`
      background: #c53030;
      font-weight: bold;

      &:hover {
        background: linear-gradient(to bottom, #5ea7f5 15%, #96009b);
      }
    `}
`;
