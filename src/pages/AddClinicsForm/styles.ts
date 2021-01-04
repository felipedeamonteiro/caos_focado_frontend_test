import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  padding: 50px;

  a {
    text-decoration: none;

    button.arrow {
      margin-top: 3px;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      border: none;
      background: none;
      transition: color 0.2s;
      h3 {
        margin-left: 5px;
      }

      &:hover {
        color: ${shade(0.2, '#de0039')};
      }
    }
  }

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

  @media only screen and (max-width: 415px) {
    .left-div {
      input {
        width: 300px;
      }
    }

    .right-div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .email-input,
      .whatsapp-input {
        width: 300px;
      }
    }
  }

  @media only screen and (max-width: 770px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a {
      margin-bottom: 20px;
    }

    form {
      .input-div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .left-div {
          margin-bottom: 0;
        }
      }
    }
  }
`;
