import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../rootStore';
import { useCallback } from 'react';
import { GetRoomListAction, GetRoomsCountAction } from './rooms.action';
import { RoomsReducerState } from './rooms.reducer';

const useRooms = () => {
  const dispatch = useDispatch();

  const roomsState: RoomsReducerState = useSelector(
    (state: StoreState) => state.RoomsReducer,
  );

  const getRoomList = useCallback(
    (currentPage: number, limit: number) =>
      dispatch(GetRoomListAction.request({ offset: currentPage, limit })),
    [dispatch],
  );

  const getRoomsCount = useCallback(
    () => dispatch(GetRoomsCountAction.request()),
    [dispatch],
  );

  return { roomsState, getRoomList, getRoomsCount };
};

export default useRooms;
