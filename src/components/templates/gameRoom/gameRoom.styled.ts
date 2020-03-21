import styled from '@emotion/styled';
import theme from '../../../layout/theme';

export const StyledGameRoom = styled.div`
  display: flex;
  flex-flow: column;
  width: 1180px;
  margin: 0 auto;
  min-height: 70vh;

  .top [class^='column-'] {
    border: 1px ${theme.color.border} solid;
    box-sizing: border-box;
  }

  .column-left {
    width: 60%;
    margin-right: 8px;
  }

  .column-right {
    width: 38%;
  }

  .row-container {
    display: flex;
  }

  .words {
    .word-container {
      display: flex;
      flex-direction: row;
      align-items: flex-end;

      .word-content {
        font-size: 2rem;
      }

      :not(.word-content) {
      }
      > * {
        margin: 10px;
      }
    }
  }

  .users {
    padding: 3vh;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .profile-containter {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1vh;
    img {
      width: 10%;
      border-radius: 50%;
      flex: 1 1;
    }
    .profile-name {
      text-align: center;
      flex: 2 2;
    }
    .profile-level {
      text-align: center;
      flex: 1 1;
    }
    .profile-is-ready {
      text-align: center;
      flex: 1 1;
    }
  }
  form {
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-self: center;
    height: 100%;
    input:focus {
      flex: 12;
    }
    input,
    button {
      padding: 10px;
      font-size: 2rem;
      transition: flex 0.5s linear;
    }

    button {
      cursor: pointer;
      flex: 2;
      border: 1px skyblue solid;
      border-radius: 10%;
      background-color: skyblue;
    }

    button.invalidate {
      background-color: red;
    }

    input {
      flex: 8;
      margin-right: 10px;
      padding-left: 20px;
    }
  }
  .top {
    margin-top: 8px;
    flex: 9 9 60vh;
    height: 60vh;
  }
  .middle {
    margin-top: 8px;
    flex: 1 1 8vh;
  }

  .ready {
    border: 1px ${theme.color.border} solid;
    border-radius: 5%;
    font-size: 2rem;
    cursor: pointer;
    :hover {
      background-color: skyblue;
    }
    p {
      vertical-align: center;
      text-align: center;
    }
  }

  .bottom {
    flex: 1 1 5vh;
    color: red;
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .error {
      margin-right: auto;
    }
    .count {
      margin-right: 20%;
    }
  }
`;
