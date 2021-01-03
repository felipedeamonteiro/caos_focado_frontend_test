import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    margin-bottom: 10px;
  }

  .check-div {
    margin: 10px 0 14px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    label {
      font-size: 14px;
    }
  }
`;
