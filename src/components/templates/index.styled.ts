import styled from '@emotion/styled';
import theme from '../../layout/theme';

const borderColor = theme.color.border;

export const StyledBody = styled.div`
  width: 1080px;
  margin: 8px auto;
  border: 1px solid ${borderColor};
  .body-wrapper {
    width: 100%;
    box-sizing: border-box;
    padding: 3vw;

    .gif-container {
      margin: 3vh 0;
      display: flex;
      justify-content: space-around;
      .gif-item {
        img {
          width: 360px;
          height: 360px;
        }
      }
    }

    .login-button {
      margin: 0 auto;
      padding: 1vh;
      width: 50%;
      font-size: 2rem;
      border-radius: 10px;
      border: 1px solid ${borderColor};
      background-color: yellow;
    }
  }
`;
