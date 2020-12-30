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
          li {
            list-style: none;
            border-radius: 20px;
            background: #baffbf;
            padding: 3px 10px;
            text-align: center;
          }
        }
      }

      .clinic-whatsapp {
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
`;
