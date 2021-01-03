import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px;

  form {
    .upper-title {
      display: flex;
      justify-content: center;
      align-items: center;

      h2 {
        text-transform: uppercase;
        margin-bottom: 50px;
      }
    }

    .input-div {
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      align-items: center;

      .left-div {
        margin-bottom: 75px;

        .error-messages1 {
          color: #ff0000;
          font-size: 14px;

          p {
            margin: -26px 0 10px 0 !important;
            max-width: 325px;
          }
        }
      }

      .right-div {
      }
    }

    .button-div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
