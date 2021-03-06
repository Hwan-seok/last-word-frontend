import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../rootStore';
import { useCallback } from 'react';
import {
  GetRoomListAction,
  GetRoomsCountAction,
  CreateRoomAction,
} from './roomList.action';
import { RoomsReducerState } from './roomList.reducer';

const useRooms = () => {
  const dispatch = useDispatch();

  const roomsState: RoomsReducerState = useSelector(
    (state: StoreState) => state.RoomsReducer,
  );
  console.log(roomsState);
  const getRoomList = useCallback(
    (currentPage: number, limit: number) =>
      dispatch(GetRoomListAction.request({ offset: currentPage, limit })),
    [dispatch],
  );

  const getRoomsCount = useCallback(
    () => dispatch(GetRoomsCountAction.request()),
    [dispatch],
  );

  const createRoom = useCallback(
    payload => dispatch(CreateRoomAction.request(payload)),
    [dispatch],
  );

  return { roomsState, getRoomList, getRoomsCount, createRoom };
};

export default useRooms;
