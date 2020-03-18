import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../rootStore';
import { useCallback } from 'react';
import { GetRoomListAction } from './rooms.action';
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

  return { roomsState, getRoomList };
};

export default useRooms;
