import styled from '@emotion/styled';
import theme from '../../../layout/theme';

export const StyledGameRoomListPage = styled.div`
  width: ${theme.bodyWidth};
  margin: 8px auto;
  border: 1px ${theme.color.border} solid;
  list-style-type: none;
  min-height: 70vh;
  display: flex;
  flex-direction: column;

  hr {
    width: 90%;
  }

  .room-number {
    flex: 1 1;
  }
  .room-name {
    flex: 4 4;
  }
  .room-capacity {
    flex: 1 1;
  }
  .room-mode {
    flex: 2 2;
  }
  .room-status {
    flex: 2 2;
  }

  .room-list-header {
    margin: 10% 5% 0 5%;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: skyblue;
    opacity: 0.5;

    [class^='room'] {
      text-align: center;
    }
  }

  .room-list-body {
    margin: 0 5%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .room-list-body-line {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      transition: background-color 0.5s;

      :hover {
        background-color: skyblue;
      }

      [class^='room'] {
        text-align: center;
      }
    }
  }

  .pagination {
    margin-top: auto;
    list-style-type: none;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-content: center;

    .page,
    .pagination-before,
    .pagination-after {
      cursor: pointer;
      padding: 5px;
      border: 1px solid skyblue;
      margin: 3px;
    }

    [class^='pagination'] {
    }

    .page {
      transition: background-color 0.3s;
      a:hover:not(.active) {
        background-color: #aaffbb;
      }
    }
  }
`;
