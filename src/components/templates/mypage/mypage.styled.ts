import theme from '~/src/layout/theme';
import styled from '@emotion/styled';

export const StyledMyPage = styled.div`
  width: ${theme.bodyWidth};
  margin: 8px auto;
  border: 1px ${theme.color.border} solid;
  [class^='button'] {
    :hover {
      transform: scale(1.1, 1.1);
    }
  }
  .user-info {
    display: flex;
    flex-direction: row;

    padding: 10vh 20vh;
    .profile-image-wrapper {
      position: relative;
      .profile-image {
        display: block;
        border-radius: 50%;
        :hover {
          opacity: 0.3;
          cursor: pointer;
        }
      }
      .profile-image-replace {
        position: absolute;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        font-size: 2rem;
        white-space: nowrap;
        font-weight: 700;
      }
    }

    .profile-detail {
      font-size: 3rem;
      margin-left: auto;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      display: flex;
    }
    .button-logout {
      border-radius: 10%;
      font-size: 3rem;
      background-color: skyblue;
      cursor: pointer;
    }
  }
`;

export const StyledUserDetailDuplicateButtons = styled.div``;
