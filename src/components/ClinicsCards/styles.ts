import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  width: 80%;
  height: 120px;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;

  .card-tag {
    background: #36b6bf;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    padding: 5px;
    border-radius: 0 10px 10px 0;

    h3 {
      font-weight: bold;
      text-align: center;
      color: #fff;
    }
  }

  .card-content {
    border-radius: 0 10px 10px 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0 30px;
    .content-left {
      width: 60%;

      h1 {
        font-weight: bold;
        font-size: 25px;
        margin-bottom: 25px;
      }
      & > div {
        display: flex;
        flex-direction: row;

        p {
          margin-right: 40px;
        }
      }
    }

    .content-right {
      display: flex;
      flex-direction: row;
      align-items: center;

      .clinic-services {
        margin-right: 30px;
        ul {
          font-size: 12px;

          li + li {
            margin-top: 10px;
          }
          .colored-services {
            list-style: none;
            border-radius: 20px;
            background: #baffbf;
            padding: 3px 10px;
            text-align: center;
            text-transform: uppercase;
          }
          .noncolored-services {
            list-style: none;
            border: 1px solid black;
            border-radius: 20px;
            padding: 3px 10px;
            text-align: center;
            text-transform: uppercase;
          }
        }
      }

      .clinic-whatsapp {
        cursor: pointer;
        height: 80px;
        width: 150px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        background: #5ea7f5;
        color: #fff;

        h3 {
          font-weight: bold;
        }

        div {
          display: flex;
          flex-direction: row;
          align-items: center;

          p {
            margin-left: 5px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 415px) {
    height: 450px !important;

    .card-content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-left: 0;

      .content-left {
        width: 350px;
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h1 {
          text-align: center;
          font-size: 18px;
          max-width: 200px;
          white-space: pre-wrap;
        }

        > div {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          p {
            text-align: center;
            margin-right: 0;
            max-width: 200px;
            word-wrap: break-word;

            & + p {
              margin-top: 5px;
            }
          }
        }
      }

      .content-right {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .clinic-services {
          margin: 0 0 20px 0;
        }
      }
    }
  }

  @media only screen and (max-width: 770px) {
    height: 300px;

    .card-content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .content-left {
        width: 450px;
        margin-bottom: 30px;
      }
    }
  }
`;
