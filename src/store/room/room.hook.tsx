import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { GetRoomDto } from './room.dto';
import { StoreState } from '../rootStore';
import { RoomDetailReducerState } from './room.reducer';
import {
  GetRoomParticipatedUsersAction,
  SendMessageAction,
} from './room.action';

const useRoomDetail = () => {
  const dispatch = useDispatch();

  const getRoomState: RoomDetailReducerState = useSelector(
    (state: StoreState) => state.RoomDetailReducer,
  );

  const getRoomParticipatedUsers = useCallback(
    (getRoomDto: GetRoomDto) =>
      dispatch(GetRoomParticipatedUsersAction.request(getRoomDto)),
    [dispatch],
  );

  const sendMessage = useCallback(
    payload => dispatch(SendMessageAction.request(payload)),
    [dispatch],
  );

  return { getRoomState, getRoomParticipatedUsers, sendMessage };
};

export default useRoomDetail;
