import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .upper-div {
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: #fff;
      font-weight: bold;
    }
  }

  @media only screen and (max-width: 770px) {
    .upper-div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;
