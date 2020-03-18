import { StyledGameRoomListPage } from './gameRoomList.styled';
import React, { useEffect } from 'react';
import useRooms from '../../../store/rooms/rooms.hook';
import Link from 'next/link';

const GameRoomListTemplate: React.FC = () => {
  const { roomsState, getRoomList } = useRooms();

  useEffect(() => {
    getRoomList(roomsState.currentPage, roomsState.limit);
  }, [getRoomList, roomsState.currentPage, roomsState.limit]);
  return (
    <>
      <StyledGameRoomListPage>
        <div className="room-list-header">
          <div className="room-number">#</div>
          <div className="room-name">방 이름</div>
          <div className="room-capacity">인원</div>
          <div className="room-mode">모드</div>
          <div className="room-status">상태</div>
        </div>
        <hr></hr>
        <div className="room-list-body">
          {roomsState.roomList.map(room => {
            return (
              <Link
                key={room.roomNumber}
                href="/room/[roomId]"
                as={`/room/${room.roomNumber}`}
              >
                <li className="room-list-body-line" key={room.roomNumber}>
                  <div className="room-number">{room.roomNumber}</div>
                  <div className="room-name">{room.roomName}</div>
                  <div className="room-capacity">
                    {room.participatedUserCount}/{room.maxUserCount}
                  </div>
                  <div className="room-mode">{room.gameMode}</div>
                  <div className="room-status">{room.roomStatus}</div>
                </li>
              </Link>
            );
          })}
        </div>
        <div className="pagination">
          <li className="pagination-before">{'< 이전 페이지'}</li>
          <li className="page">1</li>
          <li className="page">2</li>
          <li className="page">3</li>
          <li className="pagination-after">{'다음 페이지 >'}</li>
        </div>
      </StyledGameRoomListPage>
    </>
  );
};

export default GameRoomListTemplate;
