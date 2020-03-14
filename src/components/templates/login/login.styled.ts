import styled from '@emotion/styled';
import theme from '../../../layout/theme';

export const StyledLoginPage = styled.div`
  width: 1080px;
  margin: 8px auto;
  border: 1px solid ${theme.color.border};
  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    .flex-item {
    }
  }
`;

export const StyledSocialLoginMolecules = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    cursor: pointer;
    width: 482px;
    height: 92px;
    margin: 30px;
  }

  .login-button-bottom {
    margin-bottom: 150px;
  }

  .login-button-top {
    margin-top: 100px;
  }
`;
