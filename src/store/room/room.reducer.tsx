import RoomDetailAction from './room.action';
import {
  GET_ROOM_PARTICIPATED_USERS_SUCCESS,
  SEND_MESSAGE_REQUEST,
} from './room.constants';
import { ParticipatedUser, Word } from './room.dto';

export interface RoomDetailReducerState {
  users: Array<ParticipatedUser>;
  gameOverCount: number;
  isGameStarted: boolean;
  wordList: Array<Word>;
}

const initialState = {
  users: [],
  gameOverCount: 10,
  isGameStarted: false,
  wordList: [],
};

export const RoomDetailReducer = (
  state: RoomDetailReducerState = initialState,
  action: RoomDetailAction,
): RoomDetailReducerState => {
  switch (action.type) {
    case GET_ROOM_PARTICIPATED_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
      };

    case SEND_MESSAGE_REQUEST:
      return {
        ...state,
        wordList: [...state.wordList, action.payload],
      };
    default:
      return state;
  }
};
