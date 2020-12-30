import styled, { css } from 'styled-components';

interface LiProps {
  exames?: boolean;
  complementar?: boolean;
  ppra?: boolean;
  pcmso?: boolean;
}

export const Container = styled.li<LiProps>``;
