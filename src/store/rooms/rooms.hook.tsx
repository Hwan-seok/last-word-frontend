import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../rootStore';
import { useCallback } from 'react';
import { GetRoomListAction } from './rooms.action';

const useRooms = () => {
  const dispatch = useDispatch();

  const roomsState = useSelector((state: StoreState) => state.RoomsReducer);

  const getRoomList = useCallback(() => dispatch(GetRoomListAction.request()), [
    dispatch,
  ]);

  return { roomsState, getRoomList };
};

export default useRooms;
