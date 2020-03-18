import styled from '@emotion/styled';
import theme from '../../layout/theme';

const borderColor = theme.color.border;

export const StyledBody = styled.div`
  width: ${theme.bodyWidth};
  margin: 8px auto;
  border: 1px solid ${borderColor};
  .body-wrapper {
    width: 100%;
    box-sizing: border-box;
    padding: 3vw;

    .gif-container {
      margin: 5vh 0;
      display: flex;
      justify-content: space-around;
      .gif-item {
        img {
          width: 360px;
          height: 360px;
        }
      }
    }

    transition: background-color 0.3s;
    .login-button {
      margin: 0 auto;
      text-align: center;
      padding: 20px;
      width: 60%;
      font-size: 2rem;
      display: block;
      border-radius: 10px;
      border: 1px solid ${borderColor};
      background-color: #4da1fe;
      :hover {
        background-color: skyblue;
      }
    }
  }
`;
