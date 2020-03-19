import RoomDetailAction from './room.action';
import { GET_ROOM_PARTICIPATED_USERS_SUCCESS } from './room.constants';
import { ParticipatedUser } from './room.dto';

export interface RoomDetailReducerState {
  users: Array<ParticipatedUser>;
  gameOverCount: number;
  isGameStarted: boolean;
}

const initialState = {
  users: [],
  gameOverCount: 10,
  isGameStarted: false,
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

    default:
      return state;
  }
};
