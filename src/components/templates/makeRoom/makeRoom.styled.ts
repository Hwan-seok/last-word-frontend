import styled from '@emotion/styled';
import theme from '../../../layout/theme';

export const StyledMakeRoom = styled.div`
  width: ${theme.bodyWidth};
  margin: 8px auto;
  border: 1px ${theme.color.border} solid;

  .body-wrapper {
    padding: 10vw;
  }
  form {
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: flex-start;
  }

  .form-input {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  #form-submit {
    padding: auto;
  }
  label,
  input,
  select {
    font-size: inherit;
  }

  label {
    margin-right: 1vw;
  }
`;
