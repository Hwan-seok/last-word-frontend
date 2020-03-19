import styled from '@emotion/styled';
import theme from '../../../layout/theme';

export const StyledGameRoom = styled.div`
  display: flex;
  flex-flow: column;
  width: 1180px;
  margin: 0 auto;
  min-height: 70vh;

  [class^='column-'] {
    margin: 4px;
    padding: 1vw;
    border: 1px ${theme.color.border} solid;
    box-sizing: border-box;
  }

  .column-left {
    width: 60%;
  }
  .column-right {
    width: 33%;
  }

  .row-container {
    display: flex;
  }

  .top {
    flex: 7;
  }
  .middle {
    flex: 1;
  }

  .bottom {
    flex: 1;
  }
`;
